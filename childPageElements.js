const body = document.querySelector("body");

const repoName = location.pathname.split("/")[1];
const message = document.createElement("a");
message.href = `https://github.com/dg4-design/${repoName}`;
message.textContent = "GitHub repository";
message.target = "_blank";
message.rel = "noopener noreferrer";
message.style = `
  position: fixed;
  bottom: 16px;
  right: 16px;
  padding: 8px;
  background-color: #24292e;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  font-size: 12px;
  font-family: sans-serif;
`;

body.appendChild(message);
