const parallax = document.querySelector('.parallax');
const layers = parallax.children;

function moveLayersDependsOnScroll(wScroll) {

  Array.from(layers).forEach(layer => {
    const divider = layer.dataset.speed;
    const strafe = wScroll * divider / 10;

    layer.style.transform = `translateY(-${strafe}%)`;
  });
   
}

window.addEventListener('scroll', e => {
  const wScroll = window.pageYOffset;
  moveLayersDependsOnScroll(wScroll);
})

const budda = document.querySelector('.parallax__budda');
const buddaItems = budda.children;

function moveLayersDepends(wScroll) {

  Array.from(buddaItems).forEach(buddaItem => {
    const divid = buddaItem.dataset.speed;
    const straf = wScroll * divid / 10;

    buddaItem.style.transform = `translateY(-${straf}%)`;
  });
   
}

window.addEventListener('scroll', e => {
  const wScroll = window.pageYOffset;
  moveLayersDepends(wScroll);
})
