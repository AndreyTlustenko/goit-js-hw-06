const docForm = document.querySelector(".login-form")

docForm.addEventListener("submit", (event) =>{
    event.preventDefault();
    const {elements: {email, password}} = event.currentTarget;

if (email.value === "" || password.value === "") {
    alert("все поля должны быть заполнены")
} else {
    console.log({"email": email.value, "password": password.value })
}docForm.reset();


});

// 