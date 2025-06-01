import mongoose from "mongoose";
export const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://aryaveerk123:kmFs1Il9x1GAA2su@backend-pi.5edpy.mongodb.net/food-del").then(()=>{
        console.log("DB Connected")
    })
}
