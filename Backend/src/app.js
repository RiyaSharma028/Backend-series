import expess from 'express';

const app = expess();




// Routes
import userroute from "./routes/user.route.js"

app.use("api/v1/users" , userroute)
export default app;