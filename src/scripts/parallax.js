const parallax = document.querySelector('.parallax');
const layers = parallax.children;

const layersToExclude = [0, 4, 6];

function moveLayersDependsOnScroll(wScroll) {

  Array.from(layers).forEach((layer, layerIndex) => {
    const strafe = `${wScroll / (-layerIndex * 40)}%`;
    if (layersToExclude.includes(layerIndex) === false) {
      layer.style.transform = `translateY(${strafe})`;
    }

  });

}

const windowWidth = document.body.clientWidth;

if (windowWidth > 768) {
  window.addEventListener("scroll", e => {
    const wScroll = window.pageYOffset;
    moveLayersDependsOnScroll(wScroll);
  });
}

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
