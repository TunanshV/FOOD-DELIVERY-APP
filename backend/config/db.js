import mongoose from "mongoose";
import dns from "dns";
// const dns = import("dns"); 
dns.setServers(["1.1.1.1", "8.8.8.8"]);

export const connectDB=  async()=>{
    await mongoose.connect('mongodb+srv://tunanshvatsa_db_user:5nmFnwguH87UNJvM@cluster0.qlzukc0.mongodb.net/tomato').then(()=>console.log("DB Connected"));
}