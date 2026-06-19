const password = document.getElementById("password");
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        toggle.innerHTML=`<i class="ri-eye-off-line"></i>`;
    } else {
        password.type = "password";
        toggle.innerHTML=`<i class="ri-eye-line"></i>`;
    }
});