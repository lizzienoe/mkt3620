const navigation = `
  <nav class="primary-nav">
    <a href="/mkt3620/#about">About Me</a>
    <a href="/mkt3620/#school">School Life</a>
    <a href="/mkt3620/#experience">Work Experience</a>
    <a href="/mkt3620/products.html">Products</a>
  </nav>
`;

const navContainer = document.getElementById("navigation");

if (navContainer) {
  navContainer.innerHTML = navigation;
}
