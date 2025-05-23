import mongoose from "mongoose";
import {DB_Name} from "../constant.js"

export const connectDB = async ()=>{
  try {
   const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
   console.log(`\n MongoDB connected !! DB::HOST ${connectionInstance.connection.name}`);
   console.log("DB Name: ", connectionInstance.connection.name);         // e.g., "testDB"
console.log("Host: ", connectionInstance.connection.host);            // e.g., "cluster0.mongodb.net"
console.log("Port: ", connectionInstance.connection.port);            // e.g., 27017 or null (for SRV)
console.log("User: ", connectionInstance.connection.user);            // your MongoDB Atlas user
console.log("Ready State: ", connectionInstance.connection.readyState); // 1 = connected
   // mongoose return an object
   
  } catch (error) {
     console.log("Error" , error);
     process.exit(1);
  }
}

