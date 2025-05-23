
import dotenv from "dotenv"
import {connectDB} from "./db/server.js";

dotenv.config({
  path : "./env"
})
connectDB();

// ;(async ()=> {
//   try {
//    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
//    app.on("error" , (error)=>{
//      console.log("Our App not able to talk to DataBase", error);
//      throw error;
//    })
//    app.listen(process.env.PORT , ()=>{
//      console.log("Your App is Listening on Port" , `${PORT}`);
     
//    })
//   } catch (error) {
//      console.log('Error!!' , error);
//      throw error;
//   }
// })()