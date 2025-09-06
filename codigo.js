
const texto = "Hola, soy Cristian Acosta 👋 Jóvenes Creativos ";
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


const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu ul");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
}


const form = document.getElementById("formulario-contacto");
if (form) {
  const inputs = form.querySelectorAll("input, textarea");

  inputs.forEach(input => {
    input.addEventListener("input", () => {
      if (input.checkValidity()) {
        input.style.borderColor = "green";
      } else {
        input.style.borderColor = "red";
      }
    });
  });

  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Formulario enviado correctamente ✅");
    form.reset();
    inputs.forEach(input => input.style.borderColor = "#ccc");
  });
}