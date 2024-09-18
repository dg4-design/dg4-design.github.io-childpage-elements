const body = document.querySelector("body");

const repoName = location.pathname.split("/")[2];
const message = document.createElement("a");
message.href = `https://github.com/dg4-design/${repoName}`;
message.textContent = "GitHub repository";
message.style = `
  position: fixed;
  bottom: 32px;
  right: 32px;
  padding: 10px;
  background-color: #24292e;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-family: sans-serif;
`;

body.appendChild(message);
