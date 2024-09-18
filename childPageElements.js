const body = document.querySelector("body");

const repoName = location.pathname.split("/")[1];
const repoLink = document.createElement("a");
repoLink.href = `https://github.com/dg4-design/${repoName}`;
repoLink.textContent = "GitHub repository";
repoLink.target = "_blank";
repoLink.rel = "noopener noreferrer";
repoLink.style = `
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

body.appendChild(repoLink);
