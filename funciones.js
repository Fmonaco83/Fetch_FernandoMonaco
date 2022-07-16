let contenedor = document.getElementById("container");
let contenedor_carrito = document.getElementById("container_carrito");
let carrito = []; 
let boton_1 = document.getElementById("boton_1");
let titulo = document.getElementById('titulo');
let n_p = document.getElementById('n_p');
let correo = document.getElementById('correo');
let direccion = document.getElementById('direccion');
let adicional = document.getElementById('adicional');
let tel = document.getElementById('tel');

cargarCarrito();
mostrarProdcuto();
mostrarCarrito();



//Carga productos guardados en el LocalStorage
function cargarCarrito() {
  if (localStorage.getItem("StorageCarrito") !== null) {
    carrito = JSON.parse(localStorage.getItem("StorageCarrito"));
    return;
  } else {
    localStorage.setItem("StorageCarrito", JSON.stringify(carrito));
    return;
  }
}

//Carga Productos
function mostrarProdcuto() {
  producto.forEach((producto) => {
    contenedor.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src=${producto.foto} class="card-img-top" alt="...">
    <div class="card-body">
      <h4 class="card-title">${producto.nombre}</h4>
      <p class="card-text">Descripcion: ${producto.descripcion}</p>
      <p class="card-text">Precio: ${producto.precio}</p>
      <button onClick="(boton_2())" onClick="usuarioCarrito(${producto.id}),(boton_2())" class="btn btn-info">Comprar</button>
    </div>
  </div>
    `; 
  });
}


//Muestra productos en el carrito
function mostrarCarrito () {
  carrito.forEach((producto) => {
    contenedor_carrito.innerHTML += `
    <div class="card" style="width: 18rem; ">
    <img src=${producto.foto} class="card-img-top" alt="...">
    <div class="card-body">
    <h4 class="card-title"> ${producto.nombre}</h4>
    <p class="card-text">Descripcion: ${producto.descripcion}</p>
    <p class="card-text">Precio: ${producto.precio}</p>
    <button onClick="(boton_3())" onClick="quitarCarrito(${producto.id})" class="btn btn-info">ELIMINAR</button>
    </div>
    </div>`; 
  });
}


//Carga nuevo producto en el Array
function usuarioCarrito(identificador) {
  let indice = identificador - 1;
  let objeto_seleccionado = {};
  objeto_seleccionado = producto[indice];
  {
	  carrito.push(objeto_seleccionado);
	  localStorage.setItem("StorageCarrito", JSON.stringify(carrito));
    location.reload()
  } 
}

//Quita Usuario del Array
function quitarCarrito(id) {
  let carrito_filtrado = carrito.filter((elemento) => elemento.id != id);
  carrito = carrito_filtrado;
  localStorage.setItem("StorageCarrito", JSON.stringify(carrito));
  console.log(carrito_filtrado);
  location.reload();
}

//sweetalert

boton_1.onclick = ()=>{
    Swal.fire({
        title: 'Compra realizada con exito',
        text: 'Haz click para continuar',
        icon: 'success',
        confirmButtonText: 'OK'
    })
    
}

//Fetch

boton_1.addEventListener('click', () => {
  const info ={
    title: 'Datos compra',
    body: 
      {
        correo_electronico : correo.value,
        nombre_apellido: n_p.value,
        direccion_entrega : direccion.value,
        info_adicional : adicional.value,
        tel : tel.value,
      },
}

fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify(info),
        headers:{
          'Content-type': 'application/json; charset=UTF-8',
        }
      })

.then((Response) => Response.json())
.then((info) => {
  console.log(info);
})
})
