import { getServerSession } from "next-auth";
import { connectToDB, pool } from "../../../utils/database";
import { authoptions } from "../auth/[...nextauth]/route";
import ENVConfig from "../../../utils/config";
import { transporter, mailOptions } from "../../../utils/nodemailer";

let ID = ENVConfig.rowID;

export const POST = async (request) => {
  try {
    // Get the user session
    const userSession = await getServerSession(authoptions);
    if (!userSession) {
      return new Response("Unauthorized", { status: 401 });
    }

    // Parse request body
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Connect to the database
    await connectToDB();

    // Define the query to update the single row
    const updateQuery = `
      INSERT INTO leads (name, email, phone, message) VALUES ($1, $2, $3, $4);
    `;

    // Execute the query
    await pool.query(updateQuery, [name, email, phone, message]);

    await transporter.sendMail({
      ...mailOptions,
      subject: "New Yoga Inquiry Lead",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });

    // Send success response
    const responseMessage = "Your Query has been submitted successfully!";
    return new Response(JSON.stringify({ message: responseMessage }), { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return new Response(JSON.stringify({ error: errorMessage }), { status: 400 });
  }
};
