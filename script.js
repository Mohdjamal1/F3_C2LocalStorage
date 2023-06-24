//DOM inputs
const username = document.getElementById('name');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const cnfPass = document.getElementById('cnfPass');
const errorMsg = document.getElementById('error-msg');
const signUpLink = document.getElementById('signLink');
const profileLink = document.getElementById('profileLink');
//when click on Signup button
console.log(profileLink);
function signupBtn(event){
    event.preventDefault();
    
    if(username.value === "" || email.value === "" || pass.value === "" || cnfPass.value === "" || pass.value !== cnfPass.value){ 
        errorMsg.innerText = "";
        errorMsg.style="";
        errorMsg.innerText = 'Error : All the fields are mandatory';
        errorMsg.style.color="red";
        console.log(username.value);
        return;
    }
    errorMsg.innerText = 'Successfully Signed Up!';
    errorMsg.style.color = 'green';
    signupFn();
    username.value ="";
    email.value = "";
    pass.value="";
    cnfPass.value = "";
    
};

//signup function store data ino local storage
function signupFn(){
    let Tokens = generateToken();
    let userobj = {
        name : username.value,
        email : email.value,
        password: pass.value,
        token : Tokens,
    }
    localStorage.setItem('data',JSON.stringify(userobj));
    checkData();
}

//Generate Random Tokens
function generateToken() {
    const ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
    let res = '';
    let length = ch.length;
    for (let i = 1; i <= 16; i++) {
        res += ch.charAt(Math.floor(Math.random()*length));
    }
     return res;   
}

//when profile is clicked

    function profile(e){
    e.preventDefault();
    console.log("profile link clicked");
    checkData();
};

//getting data from local Storage and redirect to profile page
function checkData(){
    let data = JSON.parse(localStorage.getItem('data'));
    if(data !== null){
        console.log(data);
        setTimeout(() => {
            window.location.href = 'profile.html';
        }, 1000);        
    }
}

//when user clicked on logout button
function logOut(){
    localStorage.clear();
    document.getElementById('profileUser').innerText='';
    document.getElementById('profileEmail').innerText='';
    document.getElementById('profilePass').innerText='';
    window.location.href = 'index.html';
}
