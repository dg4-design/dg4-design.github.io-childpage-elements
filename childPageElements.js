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
  `,
});
linkWrapper.appendChild(parentPageLink);

const repoName = location.pathname.split("/")[1];
const repoLink = createLink({
  href: `https://github.com/dg4-design/${repoName}`,
  text: "GitHub repository",
  styles: `
    background-color: #24292e;
    color: #fff;
  `,
  target: "_blank",
  rel: "noopener noreferrer",
});
linkWrapper.appendChild(repoLink);
