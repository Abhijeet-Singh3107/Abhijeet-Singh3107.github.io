import dotenv from 'dotenv';
dotenv.config()
const dbuser = encodeURIComponent(process.env.DBUSER)   // to make it easy for the hosting app to read the data
const dbpass = encodeURIComponent(process.env.DBPASS)
console.log(dbuser,dbpass);