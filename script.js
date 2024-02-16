const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");

checkBtn.addEventListener("click", ()=>{
  if(textInput.value === ""){
    alert("Please input a value");
  } else {
    alert(textInput);
  }
})