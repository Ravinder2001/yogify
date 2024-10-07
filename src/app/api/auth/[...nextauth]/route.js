import ENVConfig from "../../../../utils/config";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB, pool } from "../../../../utils/database";

export const authoptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials;

        try {
          // Connect to the database
          await connectToDB();

          // Query to find the user
          const query = "SELECT * FROM users WHERE username = $1";
          const values = [username];
          const res = await pool.query(query, values);

          const user = res.rows[0]; // Assuming you want the first matching user

          // If user does not exist
          if (!user) {
            console.log("User not found");
            return null;
          }

          // Check if the password matches (You should hash and verify passwords in production)
          if (user.password === password) {
            return user;
          } else {
            console.log("Invalid password");
            return null;
          }
        } catch (err) {
          console.error("Error during authorization:", err);
          return null; // Optionally return null on error
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: ENVConfig.nextAuthSecret,
  pages: {
    signIn: "/admin",
  },
};

const handler = NextAuth(authoptions);
export { handler as GET, handler as POST };
