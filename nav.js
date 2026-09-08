const navHTML = `
  <nav class="primary-nav">

    <a href="index.html">
      Home
    </a>

    <a href="about.html">
      About Me
    </a>

    <a href="school.html">
      School Life
    </a>

    <a href="experience.html">
      Work Experience
    </a>

    <a href="portfolio.html">
      Portfolio
    </a>

    <a href="contact.html">
      Contact
    </a>

  </nav>

  <nav class="secondary-nav">

    <a href="about.html#education">
      Education
    </a>

    <a href="school.html#involvement">
      Involvement
    </a>

    <a href="experience.html#internships">
      Internships
    </a>

    <a href="portfolio.html#events">
      Event Work
    </a>

  </nav>
`;

document.getElementById("navigation").innerHTML = navHTML;
