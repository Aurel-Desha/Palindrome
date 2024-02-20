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
  console.log();
  text.value = cleanInputString(text.value);
  arrayOrigin = text.value.split(" ").join("").split("");
  console.log(`${arrayOrigin.join("")} === ${arrayOrigin.reverse().join("")}`);
  if(arrayOrigin.join("") === arrayOrigin.reverse().join("")){
    result.innerHTML = `<span style ="font-weight:700">${text.value}</span> est un palindrome`;
    console.log("cest un palindrome");
  }
}

function cleanInputString(str) {
  const regex = /[\|_+-\s/]/g;
  return str.replace(regex, '');
}