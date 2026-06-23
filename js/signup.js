const form = document.getElementById("signup-form");
const btn=document.getElementById("submit");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevents page refresh
    if(document.getElementById("number").value.length !== 10){
      alert("Invalid Mobile Number");
      return false;
    }
    if (password.value.length < 8) {
        e.preventDefault();
        alert("Password must be at least 8 characters long");
        return false;
    }
    const name = `Name: ${document.getElementById("name").value}`;
    const email=  `Email: ${document.getElementById("email").value}`;
    const mobile=  `Mobile no.: ${document.getElementById("number").value}`;
    const pwd1=  `Password: ${document.getElementById("pwd1").value}`;
    console.log(name);
    console.log(email);
    console.log(mobile);
    console.log(pwd1);
    alert("Sign up Successful! Please Login");
    form.reset();
});

const password = document.getElementById("pwd1");
const confirmPassword = document.getElementById("pwd2");
const message = document.getElementById("message");

function checkPasswords() {
    if (confirmPassword.value === "") {
        message.textContent = "";
        return;
    }

    if (password.value === confirmPassword.value) {
        message.textContent="";
        btn.disabled = false;
        btn.style.cursor="pointer";
    } else {
        message.textContent = "✗ Passwords do not match";
        message.style.color = "red";
        btn.disabled = true;
        btn.style.cursor="not-allowed";
    }
}

password.addEventListener("input", checkPasswords);
confirmPassword.addEventListener("input", checkPasswords);

const toggle = document.getElementById("toggle");

toggle.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        confirmPassword.type = "text";
        toggle.innerHTML=`<i class="ri-eye-off-line"></i> <span style="font-size: 15px;">Hide Password</span>`;
    } else {
        password.type = "password";
        confirmPassword.type = "password";
        toggle.innerHTML=`<i class="ri-eye-line"></i> <span style="font-size: 15px;">Show Password</span>`;
    }
});
