// Declaring variables
const containerElem = document.querySelector(".container");
const para = document.querySelector(".textnode");
const divContent = localStorage.getItem("text");
let paraText = para.innerText;
const inputElem = document.createElement("textarea");

//  Adding to condition to variables
if (divContent != null) {
  paraText = divContent;
  para.innerText = divContent;
}
console.log(paraText);

//  Adding style to elements
para.style.textAlign = `center`;
containerElem.style.border = `2px solid coral`;
inputElem.style.width = `100%`;
inputElem.style.height = `100%`;
inputElem.style.textAlign = "center";
containerElem.style.padding = `20px`;
inputElem.id = `input`;

// Some Events listner.
containerElem.addEventListener("click", (element) => {
  let lengthCheck = containerElem.getElementsByTagName("textarea").length;
  if (lengthCheck == 0) {
    containerElem.replaceChild(inputElem, para);
    if (divContent != null) {
      inputElem.value = localStorage.getItem("text");
    } else {
      inputElem.value = paraText;
    }
  }
  if (lengthCheck == 1) {
    inputElem.addEventListener("blur", (e) => {
      let lengthCheck = containerElem.getElementsByTagName("textarea").length;
      console.log(lengthCheck);
      localStorage.setItem("text", `${inputElem.value}`);
      para.innerText = inputElem.value;
      e.target.replaceWith(para);
      lengthCheck = containerElem.getElementsByTagName("textarea").length;
      //   console.log(lengthCheck); // Why this statement is being executed multiple times.
    });
  }
});
