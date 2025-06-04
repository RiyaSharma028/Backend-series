import mongoose from "mongoose";
import {DB_Name} from "../constant.js"

const connectiondB = async () => {
    try {
        const data = await mongoose.connect(`${process.env.connectionstring}/${DB_Name}`);
        console.log("Mongoose is connected to mongoDB");
        // console.log(data);
    } catch (error) {
        console.log("Mongoose is unabl to connect to mongoDB", error);
        process.exit(1)
    }
}

process.on("SIGINT", async () => {
  await mongoose.connection.close(); // Close DB connection
  console.log("📴 MongoDB connection closed due to app termination");
  process.exit(0); // Exit app safely
});

export default connectiondB;