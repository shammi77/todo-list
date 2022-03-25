
// Create a "close" button and append it to each list itemlet

const myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    let button = document.createElement("button");
    let text = document.createTextNode("\u00D7");
    button.className = "close";
    button.appendChild(text);
    myNodelist[i].appendChild(button);
};
// Click on a close button to hide the current list item

let close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        const div = this.parentElement;
        div.style.display = "none";
    }
};
// Create a new list item when clicking on the "Add" button

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    document.getElementById("myInput").value = "";
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    // error handling
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    var button = document.createElement("button");
    var text = document.createTextNode("\u00D7");
    button.className = "close";
    button.appendChild(text);
    li.appendChild(button);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}