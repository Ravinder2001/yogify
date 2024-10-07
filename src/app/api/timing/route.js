import { getServerSession } from "next-auth";
import { connectToDB, pool } from "../../../utils/database";
import { authoptions } from "../auth/[...nextauth]/route";
import ENVConfig from "../../../utils/config";

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
    const { morning_from_time, morning_to_time, afternoon_from_time, afternoon_to_time, evening_from_time, evening_to_time } = body;

    // Connect to the database
    await connectToDB();

    // Define the query to update the single row
    const updateQuery = `
      UPDATE yoga_timings 
      SET 
        morning_from_time = $1, morning_to_time = $2, 
        afternoon_from_time = $3, afternoon_to_time = $4, 
        evening_from_time = $5, evening_to_time = $6
      WHERE id = $7;
    `;

    // Execute the query
    await pool.query(updateQuery, [
      morning_from_time,
      morning_to_time,
      afternoon_from_time,
      afternoon_to_time,
      evening_from_time,
      evening_to_time,
      ID,
    ]);

    // Send success response
    const responseMessage = "Yoga timings updated successfully";
    return new Response(JSON.stringify({ message: responseMessage }), { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return new Response(JSON.stringify({ error: errorMessage }), { status: 400 });
  }
};

export const GET = async () => {
  try {
    // Get the user session
    const userSession = await getServerSession(authoptions);
    if (!userSession) {
      return new Response("Unauthorized", { status: 401 });
    }

    // Connect to the database
    await connectToDB();

    // Fetch the yoga timings data from the database
    const query = `
      SELECT 
        morning_from_time, morning_to_time, 
        afternoon_from_time, afternoon_to_time, 
        evening_from_time, evening_to_time 
      FROM yoga_timings 
      WHERE id = $1;
    `;
    const result = await pool.query(query, [ID]);

    // If no data is found, return an error
    if (result.rows.length === 0) {
      return new Response("No timings found", { status: 404 });
    }

    // Extract data
    const yogaTimings = result.rows[0];

    // Return the timings data as a JSON response
    return new Response(JSON.stringify({ data: yogaTimings }), { status: 200 });
  } catch (err) {
    return new Response(err.message, { status: 400 });
  }
};
