import mongoose from "mongoose";

const MongoURL = process.env.MONGODB;

let isConnected = false;
export async function connectDB() {
  if (!isConnected) {
    try {
     mongoose.connect(MongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(db=>{
        console.log('Connected Database');
        isConnected = true;
      })
    } catch (err) {
      console.log(err);
    }
  } 
}
