let fatherElem = document.querySelector(".container");
let divElem = document.createElement("div");
divElem.className = "editable_div";
divElem.setAttribute(
  "style",
  "width:200px;height:200px;border:2px solid black; padding:20px; margin:auto;"
);
fatherElem.appendChild(divElem);
let txtContent = document.createTextNode('Hello please click to edit this.');
divElem.appendChild(txtContent);
divElem.addEventListener("click", (e) => {
  let length = divElem.getElementsByTagName("input").length;
  if (length == 0) {
    divElem.innerHTML = `<textarea class='text'>${divElem.textContent}</textarea>`;
    let input = document.getElementsByClassName('text')[0];
    input.style.width = `100%`;
    input.style.height = `100%`;
  }
});
