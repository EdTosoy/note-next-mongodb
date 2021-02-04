import mongoose from "mongoose";

const { connection } = mongoose;

async function dbConnect() {
  if (connection.readyState >= 1) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  console.log(db.connections[0].readyState);
}

export default dbConnect;
