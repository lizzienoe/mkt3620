const navigation = `
  <nav class="primary-nav">
    <a href="./#about">About Me</a>
    <a href="./#school">School Life</a>
    <a href="./#experience">Work Experience</a>
    <a href="./products.html">Products</a>
  </nav>
`;

const navContainer = document.getElementById("navigation");

if (navContainer) {
  navContainer.innerHTML = navigation;
}
