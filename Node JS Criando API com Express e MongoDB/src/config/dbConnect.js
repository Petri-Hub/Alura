import mongoose from "mongoose";


const connectDatabase = async () => {
   mongoose.connect(process.env.DB_CONNECTION_URI)

   return mongoose.connection
}

export default connectDatabase