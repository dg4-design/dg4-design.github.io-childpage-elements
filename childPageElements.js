const body = document.querySelector("body");

const linkWrapper = document.createElement("div");
linkWrapper.style = `
  position: fixed;
  bottom: 16px;
  right: 16px;

  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
`;
body.appendChild(linkWrapper);

const createLink = ({ href, text, styles, ...rest }) => {
  const link = document.createElement("a");
  link.href = href;
  link.textContent = text;
  link.style = `
    padding: 8px;
    border-radius: 4px;
    text-decoration: none;
    font-size: 12px;
    font-family: sans-serif;
    ${styles}
  `;
  Object.assign(link, rest);
  return link;
};

const hostName = location.hostname;
const parentPageLink = createLink({
  href: `https://${hostName}`,
  text: "アプリ一覧へ",
  styles: `
    background-color: #ffffff;
    color: #24292e;
    box-sizing: border-box;
    border: 2px solid #24292e;
    width: fit-content;
  `,
});
linkWrapper.appendChild(parentPageLink);

const repoName = location.pathname.split("/")[1];
const repoLink = createLink({
  href: `https://github.com/dg4-design/${repoName}`,
  text: "",
  styles: `
    background-color: transparent;
    padding: 0;
  `,
  target: "_blank",
  rel: "noopener noreferrer",
});

const repoImage = document.createElement("img");
repoImage.alt = "GitHub last commit";
repoImage.src = `https://img.shields.io/github/last-commit/dg4-design/${repoName}/main?style=for-the-badge&label=Repository&color=00d4d4&logo=github`;
repoLink.appendChild(repoImage);

linkWrapper.appendChild(repoLink);
