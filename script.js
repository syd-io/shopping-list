var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var div = document.createElement("div");
  var delButton = document.createElement("button");

  delButton.innerHTML = "Delete";
  delButton.onclick = delListItem;

  li.onclick = markComplete;

  div.classList.add("wrapper");

  ul.appendChild(div);
  div.append(li, delButton);
  li.appendChild(document.createTextNode(input.value));

  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.key === "Enter") {
    createListElement();
  }
}

function delListItem(event) {
  event.target.parentNode.remove();
}

function markComplete(event) {
  event.target.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
