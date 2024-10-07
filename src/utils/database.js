import { Pool } from "pg";
import ENVConfig from "./config";

let isConnected = false; // track the connection
let pool = null;

const connectToDB = async () => {
  if (isConnected) {
    console.log("PostgreSQL is already connected");
    return;
  }

  try {
    pool = new Pool({
      connectionString: ENVConfig.postgresURL, // Use the PostgreSQL URL from the config
      ssl: ENVConfig.postgresSSL || false, // Set SSL if needed
    });

    // Test the connection
    const client = await pool.connect();
    console.log("PostgreSQL connected");

    // Release the client back to the pool
    client.release();

    isConnected = true;
  } catch (error) {
    console.error("Failed to connect to PostgreSQL:", error);
    throw new Error(error);
  }
};

export { connectToDB, pool };
