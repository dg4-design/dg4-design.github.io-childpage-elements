console.log("childPageElements.js");

const body = document.querySelector("body");
const message = document.createElement("div");
message.textContent = "hello";
message.style.color = "red";
message.style.textAlign = "center";
message.style.marginTop = "50px";
body.appendChild(message);

console.log("childPageElements.js end");
