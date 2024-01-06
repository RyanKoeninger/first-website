const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/greenCircle.png"){
        myImage.setAttribute("src", "images/redCircle.png");
    }
    else {
        myImage.setAttribute("src", "images/greenCircle.png");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName){
        setUserName();
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `eat my ass, ${myName}`;
    }

  }

if (!localStorage.getItem("name")){
    setUserName();
}
else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `eat my ass, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}