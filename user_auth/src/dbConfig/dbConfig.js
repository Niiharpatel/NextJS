import mongoose from "mongoose";

export async function connectDb() {
  try {
    mongoose.connect(process.env.MONGO_URL);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Mongodb connected");
    });

    connection.on("error", () => {
      console.log(
        "MongoDB connection error, please make sure DB is running" + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Somthing went wrong in connecting to DB");
    console.log("connectDb  error:", error);
  }
}
