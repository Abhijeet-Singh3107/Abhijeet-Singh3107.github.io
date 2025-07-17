import express from "express";
import bcrypt from "bcrypt";
const app = express();

app.listen(8080, () => {
    console.log("Server started...");
})

const pwd = "pass1234";
const hashedpwd = await bcrypt.hash(pwd,10);
console.log(hashedpwd);

const check = await bcrypt.compare("pass1234","$2b$10$xnRkYbz3K9LOiEOmKT2HaerQ1bFaGFTPMrEa7aWrO2AbyeIn3lh7a");
console.log(check);