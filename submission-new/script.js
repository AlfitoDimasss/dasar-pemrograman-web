// Smooth Scroll
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  });
}

// Collapse Navbar
const hamburger = document.querySelector(".hamburger-button");
hamburger.addEventListener('click', function () {
  const links = document.querySelector('.nav-link');
  const display = links.style.display;
  if (display == '' || display == 'none') {
    links.style.display = 'block';
  } else {
    links.style.display = 'none';
  }
});


