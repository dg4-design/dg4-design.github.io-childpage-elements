const body = document.querySelector("body");

const linkWrapper = document.createElement("div");
linkWrapper.style = `
  position: fixed;
  bottom: 16px;
  right: 16px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;
body.appendChild(linkWrapper);

const hostName = location.hostname;
const parentPageLink = document.createElement("a");
parentPageLink.href = `https://${hostName}`;
parentPageLink.textContent = "アプリ一覧へ";
parentPageLink.style = `
  padding: 8px;
  background-color: #ffffff;
  color: #24292e;
  box-sizing: border-box;
  border: 2px solid #24292e;
  border-radius: 4px;
  text-decoration: none;
  font-size: 12px;
  font-family: sans-serif;
`;
linkWrapper.appendChild(parentPageLink);

const repoName = location.pathname.split("/")[1];
const repoLink = document.createElement("a");
repoLink.href = `https://github.com/dg4-design/${repoName}`;
repoLink.textContent = "GitHub repository";
repoLink.target = "_blank";
repoLink.rel = "noopener noreferrer";
repoLink.style = `
  padding: 8px;
  background-color: #24292e;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  font-size: 12px;
  font-family: sans-serif;
`;
linkWrapper.appendChild(repoLink);
