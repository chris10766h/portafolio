
const texto = "Hola, soy Cristian Acosta 👋 Jovenes Creativos ";
let i = 0;

function escribir() {
  if (i < texto.length) {
    document.getElementById("escribir").textContent += texto[i];
    i++;
    setTimeout(escribir, 100);
  }
}
escribir();


function mostrarAnimaciones() {
  let secciones = document.querySelectorAll("section.animado, .tarjeta");
  secciones.forEach(sec => {
    let pos = sec.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
}


function animarCirculos() {
  let habilidades = document.querySelectorAll(".habilidad-circular");
  habilidades.forEach(hab => {
    let pos = hab.getBoundingClientRect().top;
    if (pos < window.innerHeight - 50 && !hab.classList.contains("animado")) {
      hab.classList.add("animado");

      let porcentaje = hab.getAttribute("data-porcentaje");
      let circulo = hab.querySelector("circle:last-child");
      let numero = hab.querySelector(".numero");

      let progreso = 0;
      let intervalo = setInterval(() => {
        if (progreso >= porcentaje) {
          clearInterval(intervalo);
        } else {
          progreso++;
          numero.textContent = progreso + "%";
          let offset = 314 - (314 * progreso) / 100;
          circulo.style.strokeDashoffset = offset;
        }
      }, 20);
    }
  });
}

window.addEventListener("scroll", () => {
  mostrarAnimaciones();
  animarCirculos();
});

mostrarAnimaciones();
animarCirculos();