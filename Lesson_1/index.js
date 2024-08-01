
import User from "./User.js";
import dotenv from "dotenv";
dotenv.config();
const user = new User("Helen", 35);
console.log(user.toString(), process.env.TEMPERATURE);
while (true) {}

