const imgs = [
  {
    src: "https://d1mrtjpezxphht.cloudfront.net/wp-content/uploads/2020/05/Foto-4.jpg",
    alt: "Imagen de un moto en la piedra de apaguiz",
  },
  {
    src: "https://asidehonduras.org/wp-content/uploads/2018/01/ZONA-PRODUCTORA-DE-AGUA-PIEDRA-DE-APAGUIZ.jpg",
    alt: "Imagen de la piedra de Apaguiz Danli",
  },
  {
    src: "https://d1mrtjpezxphht.cloudfront.net/wp-content/uploads/2020/05/Foto-1-1.jpg",
    alt: "Foto de la piedra de apaguiz",
  },
  {
    src: "https://d1mrtjpezxphht.cloudfront.net/wp-content/uploads/2020/05/Foto-2.jpg",
    alt: "Vista de la ciudad de Danli y la piedra de apaguiz",
  },
  {
    src: "https://www.elheraldo.hn/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=R6r7yi$c5WIiWsSqz0Cn0c$daE2N3K4ZzOUsqbU5sYtpu6wAKglYz8obxov$Ie8CWCsjLu883Ygn4B49Lvm9bPe2QeMKQdVeZmXF$9l$4uCZ8QDXhaHEp3rvzXRJFdy0KqPHLoMevcTLo3h8xh70Y6N_U_CryOsw6FTOdKL_jpQ-&CONTENTTYPE=image/jpeg",
    alt: "Fotografia tomada en la piedra de apaguiz",
  },
];
const modal = document.querySelector(".modal");
const slider = document.querySelector(".slider");
let idx = 0;

setInterval(() => {
  if (idx == imgs.length) {
    idx = 0;
  }
  slider.src = imgs[idx].src;
  slider.alt = imgs[idx].alt;
  idx++;
}, 10000);

document.addEventListener("click", ({ target }) => {
  if (target.matches(".top a")) {
    modal.style.display = "flex";
    setTimeout(() => {
      modal.style.display = "none";
    }, 2500);
  }
});
