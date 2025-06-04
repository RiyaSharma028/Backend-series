import mongoose  from "mongoose";
import app from "./app.js"; // Import your Express app
// import {DB_Name} from "./constant.js"
// import dotenv from "dotenv";
// dotenv.config(); // Load environment variables

import connectiondB from "./db/server.js";
import dotenv from "dotenv";
dotenv.config();

connectiondB()
.then(()=>{
    app.listen(process.env.port, () => {
        console.log("Server is running on port 3000" , `${process.env.port}`);
    });
    app.on("error", (err) => {
  console.error("❌ Server error occurred:", err);
  process.exit(1); // Optional: exit if it's a fatal error
});
})
.catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Exit the process if connection fails
});






// This is the main entry file (index.js).
// MongoDB connection is now handled in a separate file (e.g., db/server.js).
// This keeps the main file clean and modular.
// Import and call the connection function here when needed.

/*async function conectionDB(){
    try {
         const data = await  mongoose.connect(`${process.env.connectionstring}/${DB_Name}`);
        console.log("Mongoose is connected to mongoDB");  
        console.log(data);
        
    } catch (error) {
        console.log("Mongoose is unable to connect to mongoDB", error);
        throw error; 
    }
}

conectionDB();*/