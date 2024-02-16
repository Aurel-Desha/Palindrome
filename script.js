const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");

checkBtn.addEventListener("click", ()=>{
  if(textInput.value === ""){
    alert("Please input a value");
  } else {
    alert(textInput.value);
    verifyPalindrome(textInput);
  }
})

const verifyPalindrome = (text)=>{
  let arrayOrigin = [];
  let arrayPalindrome = [];
  arrayOrigin = text.value.split(" ").join("").split("");
  console.log(arrayOrigin);
  console.log(arrayOrigin.reverse());
}