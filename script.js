const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

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
  console.log(`${arrayOrigin.join("")} === ${arrayOrigin.reverse().join("")}`);
  if(arrayOrigin.join("") === arrayOrigin.reverse().join("")){
    result.textContent = "c'est un palindrome";
    console.log("cest un palindrome");
  }
}