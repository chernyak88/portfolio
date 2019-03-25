const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

const scrollBtn = document.querySelector(".hero__bottom-link");
const reqBlock = document.querySelector("section.about");

scrollBtn.addEventListener("click", e => {
e.preventDefault();

reqBlock.scrollIntoView({ block: "center", behavior: "smooth" });
});
