import React, { useState } from "react";
import './signup-login.css';

const SignUp_Login = () => {
    const emailPattern = /\S+@\S+\.\S+/;

    const [signData, setSignData] = useState(
        {
            name: '',
            email: '',
            pword: '',
            cpword: ''
        }
    )

    const [logData, setLogData] = useState(
        {
            name: '',
            pword: '',
            cpword: ''
        }
    )

    const handleSignSubmit = e => {
        e.preventDefault()
        const signName = document.getElementById('username').value;
        const signEmail = document.getElementById('email').value;
        const signPword = document.getElementById('password').value;
        const signCpword = document.getElementById('confirm-password').value;
        if (signName === '') {
            alert("Username is required");
        }
        else {
            alert(`Namaste ${signName} ji`);
        }
        if (signEmail === '') {
            alert("Email is required");
        }
        else if (!emailPattern.test(signEmail)) {
            alert(`${signEmail} is not a valid email format`);
        }
        else {
            alert(`Email acquired: ${signEmail}`);
        }
        if (signPword === '') {
            alert("Password required");
        }
        else if (signPword.length < 6) {
            alert(`password needs to be atleast 6 characters long`);
        }
        else {
            alert(`${signPword} badhiya hai guru`);
        }
        if (signPword === signCpword) {
            alert("Password ekdum pakka hai tumra");
        }
        else {
            alert("Arre re re password match na ho raha bhaiya");
        }
    }

    const handleLogSubmit = e => {
        e.preventDefault()
        const logName = document.getElementById('username').value;
        const logPword = document.getElementById('password1').value;
        const logCpword = document.getElementById('confirm-password1').value;
        if (logName === '') {
            alert("Bhaiyaji naam ka hai tumra?");
        }
        else {
            alert(`Namaste ${logName} ji`);
        }
        if (logPword === '') {
            alert("Password ke bina hi account banana hai wah wah");
        }
        else if (logPword.length < 6) {
            alert(`${logPword} bara hi kamzor password hai`);
        }
        else {
            alert(`${logPword} badhiya hai guru`);
        }
        if (logPword === logCpword) {
            alert("Password ekdum pakka hai tumra");
        }
        else {
            alert("Arre re re password match na ho raha bhaiya");
        }
    }

    return (
        <div className="signup_login">
            <div className="signup"  id="SignUp">
                <form onSubmit={handleSignSubmit}>
                    <h1 id="heading">Sign up</h1>
                    <div className="content1">
                        <label for="username"> Name: </label><br/>
                        <input type="text" placeholder="User1234" value={signData.name} class="input" id="username" onChange={e => setSignData({name:e.target.value,email:signData.email,pword:signData.pword,cpword:signData.cpword})}/><br/>
                        <label for="email"> Email: </label><br/>
                        <input type="email" placeholder="abc@example.com" value={signData.email} class="input" id="email" onChange={e => setSignData({name:signData.name,email:e.target.value,pword:signData.pword,cpword:signData.cpword})}/><br/>
                        <label for="password"> Password: </label><br/>
                        <input type="password" placeholder="Pass1234" value={signData.pword} class="input" id="password" onChange={e => setSignData({name:signData.name,email:signData.email,pword:e.target.value,cpword:signData.cpword})}/><br/>
                        <label for="confirm-password"> Confirm Password: </label><br/>
                        <input type="password" placeholder="Pass1234" value={signData.cpword} id="confirm-password" onChange={e => setSignData({name:signData.name,email:signData.email,pword:signData.pword,cpword:e.target.value})}/>
                    </div>
                    <div>
                        <input type="submit" value="Sign Up" class="input" id="submit"/>
                    </div>
                </form>
            </div>
            <div className="login" id="Login">
                <form onSubmit={handleLogSubmit}>
                    <h1 id="heading1">Login</h1>
                    <div className="content1">
                        <label for="username1"> Name: </label><br/>
                        <input type="text" placeholder="User1234" value={logData.name} class="input" id="username1" onChange={e => setLogData({name:e.target.value,pword:logData.pword,cpword:logData.cpword})}/><br/>
                        <label for="password1"> Password: </label><br/>
                        <input type="password" placeholder="Pass1234" value={logData.pword} class="input" id="password1" onChange={e => setLogData({name:logData.name,pword:e.target.value,cpword:logData.cpword})}/><br/>
                        <label for="confirm-password1"> Confirm Password: </label><br/>
                        <input type="password" placeholder="Pass1234" value={logData.cpword} id="confirm-password1" onChange={e => setLogData({name:logData.name,pword:logData.pword,cpword:e.target.value})}/>
                    </div>
                    <div >
                        <input type="submit" value="Login" class="input" id="submit1"/>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default SignUp_Login;    