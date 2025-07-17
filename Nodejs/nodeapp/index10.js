import jwt from "jsonwebtoken";

const SECRET = "sometext";

const user = {
    name:"John",
    email:"john@gmail.com",
    role:"admin",
}

const token = await jwt.sign(user,SECRET,{expiresIn:"1h"})
console.log(token);

const confirm = jwt.verify(token,SECRET);
console.log(confirm);