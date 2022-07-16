//Toastify

function boton_2 (){
  Toastify({
  text: "Producto agregado al carrito!",
  duration: 3000,
  gravity: 'bottom',
  position: 'left'
}).showToast();
}

function boton_3 (){
  Toastify({
  text: "Producto eliminado!",
  duration: 3000,
  gravity: 'bottom',
  position: 'left'
}).showToast();
}

  



const producto = [
    {
      id: 1,
      foto:"./IMG/sanBenito.jpg",
      nombre: "Anillo San Benito",
      descripcion: "Anillo San Benito, plata Inflada",
      precio: "$3000",
    },
    {
      id: 2,
      foto:"./IMG/pulseraRoja.jpg",
      nombre: "Pulsera Roja",
      descripcion: "Pulsera hijo Rojo con bolitas de plata 925",
      precio: "$1500",
    },
    {
      id: 3,
      foto:"./IMG/dijeSusanito.jpg",
      nombre: "Dije Susanito",
      descripcion: "Dije susanito plata 925",
      precio: "$2500",
    },
    {
      id: 4,
      foto:"./IMG/pulseraHope.jpg",
      nombre: "Pulsera Fantasia",
      descripcion: "Pulsera Fantasia Hope",
      precio: "$1200",
  
    },
    
  ];