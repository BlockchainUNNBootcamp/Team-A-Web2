const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
      bar.addEventListener('click', () => {
        nav.classList.add('active');
      })
}

if (close) {
      close.addEventListener('click', () => {
        nav.classList.remove('active');
      })
}












    function changeText(id) {
    id.innerHTML = ['Wellness and Self-Care'];
    }
    function refreshText(id) {
    id.innerHTML = "Women's Bags";
    }


    function changeTexts(id) {
    id.innerHTML = ['Clean Products'];
    }
    function refreshTexts(id) {
    id.innerHTML = "Guarantee on your products";
    }


    function changeTextss(id) {
    id.innerHTML = ['Kiddies Swoosh'];
    }
    function refreshTextss(id) {
    id.innerHTML = "Love, Kiddies";
    }



