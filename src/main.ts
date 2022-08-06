import './style.css'

// const formCrud = document.querySelector<>
let tabla = [
  {
    nombre: "Real Madrid",
    puntos: 33
  },
  {
    nombre: "Barcelona",
    puntos: 32
  },
  {
    nombre: "Villareal",
    puntos: 30
  },
  {
    nombre: "UD Las Palmas",
    puntos: 28
  }
];

const cargarEventos =()=>{
  const mostrarTabla = document.querySelector<HTMLButtonElement>('#mostrar-tabla');
  if(!mostrarTabla) throw new Error('Mostrar tabla');
  const nuevoEquipo = document.querySelector<HTMLFormElement>('#nuevo-equipo');
  if(!nuevoEquipo) throw new Error('Nuevo equipo');

  mostrarTabla.addEventListener('click', MostrarTabla,false);
  nuevoEquipo.addEventListener('submit', NuevoEquipo, false);
}

const MostrarTabla = () => {
  const equiposTabla =document.querySelector<HTMLTableElement>('#equipos-tabla');
  if(!equiposTabla) throw new Error('Not found');

  let templateHTML = "";
  tabla.forEach(e => {
      templateHTML += 
      `
      <tr>
        <td>${e.nombre}</td>
        <td>${e.puntos}</td>
      </tr>
      `
  });
  equiposTabla.innerHTML = templateHTML;
};

const NuevoEquipo = (e:any) => {
  e.preventDefault();
  const nombreIntroducido = document.querySelector<HTMLFormElement>('#equipo');
  if(!nombreIntroducido) throw new Error('Nuevo equipo');
  const puntosIndroducido = document.querySelector<HTMLFormElement>('#puntos');
  if(!puntosIndroducido) throw new Error('Puntos icao');

  const nombreValue = nombreIntroducido.value;
  const puntosValue = puntosIndroducido.value;

  let nuevoEquipo = {nombre: nombreValue, puntos: puntosValue}
  tabla.push(nuevoEquipo)
};

cargarEventos();
