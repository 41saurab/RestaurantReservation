import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        dbName: "RESTAURANT",
    }).then(() => {
        console.log("Connected to db");
    }).catch((error) => {
        console.log(error);
    })
}

