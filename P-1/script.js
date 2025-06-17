
let users = [];
let user = {};

const validateUser = () => {
    let email = document.querySelector("#loginEmail").value;
    let pass = document.querySelector("#loginPassword").value;
    const found = users.find(value => value.email === email && value.pass === pass);
    if(found){
        showHome();
    }
    else{
        document.getElementById("errTxt").innerHTML = "Access Denied";
    }
}

const displayUser = () => {
    if(users.length === 0){
        return `<p>No user Found</p>`;
    }
    let html = "";
    users.forEach(user => {
        html += `<p>User Name: ${user.name} <br> User Email: ${user.email}`;
    });
    return html;
}


const loginForm = () => {
    const str = ` <div display = 'flex'>
        <h3> Login Form </h3>
        <p id = "errTxt"></p>
        <p>Email: <input type="email" id="loginEmail" /></p>
        <p>Password: <input type="password" id="loginPassword" /></p>
        <p> <button onclick = 'validateUser()'> Submit </button> </p>
        <p> <button onclick = 'registerForm()'> Create Account </button> </p>

        <div id = "display">
            <h4> List of users: </h4>
            ${displayUser()}
         </div>
    `;
    root.innerHTML = str + "</div>";
}

const saveUser = () => {
    let name = document.querySelector("#registerName").value;
    let email = document.querySelector("#registerEmail").value;
    let pass = document.querySelector("#registerPassword").value;
    // user.name = name;
    // user.email = email;
    // user.pass = pass;
    users.push({
        name,
        email,
        pass
    });

    loginForm();
}

const registerForm = () => {
    const str = `   <div>
        <h3> Registration Form </h3>         
        <p>Name: <input type="text" id="registerName"/></p>
        <p>Email: <input type="email" id="registerEmail" /></p>
        <p>Password: <input type="password" id="registerPassword" /></p>
        <p> <button onclick = "saveUser()"> Submit </button> </p>
        <p> <button onclick = "loginForm()"> Already a member? Click here to login... </button> </p>
    `;
    root.innerHTML = str + "</div>";
}


const showHome = () => {
    const str = `<div>
    <h3>Welcome</h3>
    <p><button onclick='loginForm()'>Logout</button></p>
    `
    root.innerHTML = str + "</div>";
}




