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
  arrayOrigin = cleanInputString(text.value).split(" ").join("").split("");
  console.log(`${arrayOrigin.join("")} === ${arrayOrigin.reverse().join("")}`);
  if(arrayOrigin.join("").toLowerCase() === arrayOrigin.reverse().join("").toLowerCase()){
    result.innerHTML = `<span style ="font-weight:900">${text.value}</span> is a palindrome.`;
    console.log("cest un palindrome");
  } else {
    result.innerHTML = `<span style ="font-weight:900">${text.value}</span> is not a palindrome`
  }
}

function cleanInputString(str) {
  const regex = /[\|_+-\s/]/g;
  return str.replace(regex, '');
}