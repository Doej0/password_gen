//variable for the input id
let password=document.getElementById('password');

//strong passwords contain all of the following in no particular order:
// At least one digit
//At least one lowercase character
//At least one uppercase character
//At least one special character
//at least 8 characters in length but no more than 32

//using regex, we can enforce all of the above constraints in any order.
function generate() {


let chars = '^(?:(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))|(?:(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]))|(?:(?=.*[0-9])(?=.*[a-z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\])))'

let pwdLength = 10;
let pwd = '';

//using Math.floor(), Math.Random() and a for loop, we can generate random passwords

for(let i= 0; i <= pwdLength; i++) {
    let ranNum = Math.floor(Math.random() *chars.length);
    pwd += chars.substring(ranNum, ranNum + 1);
}
document.getElementById('password').value = pwd;

};

// copy generated password
function copy() {
    let copyText = document.getElementById('password');
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("Password copied!");
};