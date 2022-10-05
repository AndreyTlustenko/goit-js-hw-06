
const textInputRef = document.querySelector("#name-input");
console.log(textInputRef)
const outputRef = document.querySelector("#name-output");
console.log(outputRef)
textInputRef.addEventListener("input", (event) => {
    outputRef.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "")  {
    outputRef.textContent = "Anonymous";}
});    
   
  
