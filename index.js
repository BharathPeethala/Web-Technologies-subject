function validate(){
const name_re = /[a-z A-Z]{5,30}/
const password_re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/
const email_re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const phone_re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const name = document.getElementById("fname").value
const password = document.getElementById("password").value
const email = document.getElementById("email").value
const phone = document.getElementById("phone").value
if(name_re.test(name)){
    if (password_re.test(password)){
        if(email_re.test(email)){
            if(phone_re.test(phone)){
                alert("Successfully Validated 👍")
            }
            else{
                alert("Phone is Invalid 👎")
            }
        }
        else{
            alert("Email is Invalid 👎")
        }
    }
    else{
        alert("Password is Invalid 👎")
    }
}
else{
        alert("Name is Invalid 👎")
    }
}