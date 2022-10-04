
const textInputRef = document.querySelector("#name-input");
console.log(textInputRef)
const outputRef = document.querySelector("#name-output");
console.log(outputRef)
textInputRef.addEventListener("input", (event) => {
   
    const inputValue = event.target.value;
    outputRef.textContent = `${inputValue}`;
   
});

