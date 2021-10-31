var myList = document.getElementsByTagName("li");
for(let i = 0; i < myList.length; i++) {
    var mySpan = document.createElement("span");
    var closeIt = document.createTextNode("×");
    mySpan.className = "close";
    mySpan.appendChild(closeIt);
    myList[i].appendChild(mySpan);
}

var close = document.getElementsByClassName("close");
for (let i  = 0;i < close.length; i++) {
    close[i].onclick = function() {
        var myDiv = this.parentElement;
        myDiv.style.display = "none";
    }
}

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var txt = document.createTextNode(inputValue);
    li.appendChild(txt);
    if (inputValue === "") {
        alert("You can't add empty notes");
    } else {
        document.getElementById("myUl").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var mySpan = document.createElement("span");
    var closeIt = document.createTextNode("×");
    mySpan.className = "close";
    mySpan.appendChild(closeIt);
    li.appendChild(mySpan);

    for (let i  = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var myDiv = this.parentElement;
            myDiv.style.display = "none";
        }
    }

}

