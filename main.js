import './style.css';
import { PRODUCTS } from './data';

// ______ HEADER _________
document.querySelector('#header').innerHTML = `
<div id="general-header">
  <div class="logo">
    <a href="#"><img src="/icons/logo.svg" alt="Canvas Photography logo" width="40px" height="40px"></a>
  </div>

  <nav class="navbar">
    <div class="menu-container">
      <label class="navbar-toggle" id="navbar-toggle" for="chkToggle">
        <img class="menu-movil" src="/icons/menu.svg" alt="menu-movil" width="30px" height="30px">
      </label>

      <input type="checkbox" id="chkToggle" />
      <ul class="main-nav" id="menu">
        <li><a href="#" class="nav-links">INICIO</a></li>
        <li><div class="separator"></div></li>
        <li><a href="#" class="nav-links">CURSOS</a></li>
        <li><div class="separator"></div></li>
        <li><a href="#" class="nav-links">TIENDA</a></li>
        <li><div class="separator"></div></li>
        <li><a href="#" class="nav-links">CONTACTA</a></li>
        <li><div class="separator"></div></li>
        <li><a href="#" class="nav-links">Log In</a></li>
      </ul>
    </div>
  </nav>

</div>
`;

// __________ SECTION 1. Products & Filter _____________
document.querySelector('#aaa').innerHTML = `
  <div id="products-container">
    <div id="filter">
      <div class="filter-1"></div>
      <div class="filter-2">
        <div>
          <h5>Busca tu cámara</h5>
          <input id="searchInput" type="text" placeholder="Cámara...">
          <div class="searchBtnCamera"><button id="button-search-camera">Buscar</button></div>
        </div>
        <div>
          <h5>Filtro por marca</h5>
          <label for="brand-list"></label>
          <select name="brand-list" id="brand-list">
            <option value="All">Todas las marcas</option>
            <option value="Canon">Canon</option>
            <option value="Nikon">Nikon</option>
            <option value="Panasonic">Panasonic</option>
            <option value="Leica">Leica</option>
            <option value="Fujifilm">Fujifilm</option>
            <option value="Pentax">Pentax</option>
          </select>
        </div>
        <div>
          <h5>Busca por precio</h5>
          <input id="input-price" type="number" placeholder="Precio...">
          <button id="button-price">Buscar</button>
        </div>
        <button id="button-clean">Limpiar filtros</button>
      </div>
    </div>
    <div id="products-content">
      <div class="title">
        <h1>CÁMARAS FOTOGRÁFICAS</h1>
        <h2>Todos los modelos a los mejores precios</h2>
        <div class="separator-img">
          <img src="/icons/separator-grey.svg" alt="separator" width="100px" height="6px">
        </div>
      </div>
    </div>
    <div id="products"></div>
  </div>
`;

// __________ SECTION 2. Offers _____________
document.querySelector('#second-hand').innerHTML = `
  <div id="second-hand-container">
    <div class="offers">
      <h3>OFERTAS</h3>
      <p class="text-offers"><span class="text-offers-bold">¿Buscas los mejores productos a los mejores precios?</span>. Tenemos un amplio catálogo de ofertas y de productos de segunda mano en perfecto estado.</p>
      <a href="#"><button class="button-offers" role="button">SABER MÁS</button></a>
    </div>
  </div>
`;

// __________ FOOTER _____________
document.querySelector('#footer').innerHTML = `
  <div class="footer-intro">
    <h4>SOBRE NOSOTROS</h4>
    <p>Canvas Photography  tiene una amplia difusión entre los aficionados a la fotografía y profesionales independientes de otros sectores que necesitan el apoyo fotográfico en su actividad laboral.</p>
  </div>
  <div id="footer-container">
    <div class="accordion-body">
      <div class="accordion">
        <hr>
        <div class="container">
          <div class="label">CONTACTO</div>
          <div class="content">
            <ul>
              <li>Avenida Mayor. 24</li>
              <li>40150, Almería</li>
              <li><strong>T:</strong> +34 960 123 456</li>
              <li><strong>E:</strong> correo@canvas_photography.es</li>
            </ul>
          </div>
        </div>
        <hr>
        <div class="container">
          <div class="label">HORARIO</div>
          <div class="content">
            <ul>
              <li><strong>Lunes a Viernes:</strong></li>
              <li>de 09.00 a 13.30 y de 16.30 a 20.00 hrs</li>
              <li><strong>Sábados:</strong></li>
              <li>de 10.00 a 13.30 hrs</li>
            </ul>
          </div>
        </div>
        <hr>
        <div class="container">
          <div class="label">INFO</div>
          <div class="content">
            <ul>
              <li><a href="#">Sobre Nosotros</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Financiación Cetelem</a></li>
              <li><a href="#">Financiación CrediYA</a></li>
            </ul>
          </div>
        </div>
        <hr>
        <div class="container">
          <div class="label">CATEGORÍAS</div>
          <div class="content">
            <ul>
              <li><a href="#">Cámaras fotográficas</a></li>
              <li><a href="#">Objetivos</a></li>
              <li><a href="#">Videocámaras</a></li>
              <li><a href="#">Flashes</a></li>
              <li><a href="#">Accesorios</a></li>
            </ul>
          </div>
        </div>
        <hr>
        <div class="container">
          <div class="label">AYUDA</div>
          <div class="content">
            <ul>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">Aviso legal</a></li>
              <li><a href="#">Condiciones de venta</a></li>
              <li><a href="#">Preguntas frecuentes</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div class="desktop-footer">
      <div class="desktop-container-simple">
        <div class="desk-label">SOBRE NOSOTROS</div>
        <p>Canvas Photography  tiene una amplia difusión entre los aficionados a la fotografía y profesionales independientes de otros sectores que necesitan el apoyo fotográfico en su actividad laboral.</p>
      </div>
      <div class="desktop-container-simple">
        <div class="desk-label">CONTACTO</div>
        <div class="desk-content">
          <ul>
            <li>Avenida Mayor. 24</li>
            <li>40150, Almería</li>
            <li><strong>T:</strong> +34 960 123 456</li>
            <li><strong>E:</strong> correo@canvas_photography.es</li>
          </ul>
        </div>
        <br>
        <div class="desk-content">
          <ul>
            <li><strong>Lunes a Viernes:</strong></li>
            <li>de 09.00 a 13.30 y de 16.30 a 20.00 hrs</li>
            <li><strong>Sábados:</strong></li>
            <li>de 10.00 a 13.30 hrs</li>
          </ul>
        </div>
      </div>
      <div class="desktop-container">
        <div class="desk-label">INFO</div>
        <div class="desk-content">
          <ul>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Financiación Cetelem</a></li>
            <li><a href="#">Financiación CrediYA</a></li>
          </ul>
        </div>
      </div>
      <div class="desktop-container">
        <div class="desk-label">CATEGORÍAS</div>
        <div class="desk-content">
          <ul>
            <li><a href="#">Camaras fotográficas</a></li>
            <li><a href="#">Objetivos</a></li>
            <li><a href="#">Videocámaras</a></li>
            <li><a href="#">Flashes</a></li>
            <li><a href="#">Accesorios</a></li>
          </ul>
        </div>
      </div>
      <div class="desktop-container">
        <div class="desk-label">AYUDA</div>
        <div class="desk-content">
          <ul>
            <li><a href="#">Política de privacidad</a></li>
            <li><a href="#">Aviso legal</a></li>
            <li><a href="#">Condiciones de venta</a></li>
            <li><a href="#">Preguntas frecuentes</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
`;

// ------------ Setup stars -------------------//

const setupStars = (score) => {
  // Si un producto no tiene ninguna votación saldrá el siguiente mensaje:
  if (!score) {
    return `<p class="no-rating">Producto sin evaluar</p>`;
  }

  let startContainer = [];

  // Recorro el array desde la posición 1 y pinto 1 estrella por cada número entero que tenga el valor "score" de PRODUCTS:
  for (let i = 1; i < score; i++) {
    startContainer.push(
      `<span class="star"><img src="/icons/star.svg" alt="star" width="20px" height="20px"></span>`
    );
  }

  // Recorro el array y pinto una estrella extra (de color gris) hasta completar 5 estrellas:
  for (let i = 1; i <= 5 - Math.floor(score); i++) {
    startContainer.push(
      `<span class="empty star"><img src="/icons/empty-star.svg" alt="star" width="20px" height="20px"></span>`
    );
  }

  // Con "join" consigo eliminar las comas que aparecen entre las estrellas:
  return startContainer.join('');
};

// -------------- Print Products --------------//

const printProducts = (list) => {
  const productsContainer = document.querySelector('#products');
  productsContainer.innerHTML = '';

  list.forEach((item) => {
    const article = document.createElement('article');
    article.className = 'card';

    article.innerHTML = `
      <a href="#"><img src=${item.image} 
      alt="${item.name}"
      height="230px" width="auto"></a>
      <div class="text-seller">Fabricante: <p class="${item.seller.toLowerCase()}">${
      item.seller
    }</p></div>
      <p class="product-desc"><a href="#">${item.name}</a></p>
      <div class="score-container">
        <div class="stars-container">
          ${setupStars(item.score)}
        </div>  
      Reviews: ${item.reviews}
      </div> 
      <p class="product-price">${item.price} €</p>
    `;

    productsContainer.appendChild(article);
  });
};

// ------------- Accordion -------------------//
const accordion = document.querySelectorAll('.container');

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
  });
}

printProducts(PRODUCTS);

// ------------- FILTER: Search Products -------------------//

const searchBtnCamera = document.querySelector('#button-search-camera');

const filterProducts = (list, value) => {
  const filteredProducts = list.filter((item) => {
    return item.name.trim().toLowerCase().includes(value.trim().toLowerCase());
  });
  printProducts(filteredProducts);
};

// Al botón le añado el addEventListener y recupero el input, después recupero el valor del mismo y este valor es el que le introduzco a la función filterProducts:
searchBtnCamera.addEventListener('click', () => {
  const searchInput = document.querySelector('#searchInput');
  const valueInput = searchInput.value;

  filterProducts(PRODUCTS, valueInput);
});

//____Así se busca por cámara de fotos pero sin usar el botón, simplemente escribiendo en el input:
// searchInput.addEventListener('input', (event) => {
//   const searchEvent = event.target.value;
//   filterProducts(PRODUCTS, searchEvent);
// });

//  ------------- FILTER: Products Select -------------------//
const selectList = document.querySelector('#brand-list');

const filterCameras = (cameras, select) => {
  if (select === 'All') {
    printProducts(PRODUCTS);
    return;
  }

  const filteredCameras = cameras.filter((camera) => camera.seller === select);

  printProducts(filteredCameras);
};

selectList.addEventListener('change', (ev) =>
  filterCameras(PRODUCTS, ev.target.value)
);

// ! ------------- FILTER: Price -------------------//
const filterCamerasByPrice = (cameras, maxPrice) => {
  const filteredCameras = cameras.filter((camera) => camera.price <= maxPrice);

  // Con esto cambio el valor del select a "All" cuando pulso el botón de búsqueda por precio:
  selectList.value = selectList.options[0].value;

  printProducts(filteredCameras);
};

const filterByPriceBtn = document.querySelector('#button-price');

// Al hacer click en el botón del precio recupero el input del precio y asigno su valor a la constante maxPrice:
filterByPriceBtn.addEventListener('click', () => {
  const inputPriceFilter = document.querySelector('#input-price');
  const maxPrice = inputPriceFilter.value;

  filterCamerasByPrice(PRODUCTS, maxPrice);
});

// ------------- FILTER: Button Clean -------------------//
const buttonClean = document.querySelector('#button-clean');
const inputPriceFilter = document.querySelector('#input-price');

buttonClean.addEventListener('click', () => {
  // Con esto reseteo los valores de todos los inputs y del select a sus valores por defecto al hacer clic en el botón de limpiar filtros:
  searchInput.value = searchInput.value = '';
  selectList.value = selectList.options[0].value;
  inputPriceFilter.value = inputPriceFilter.value = '';

  printProducts(PRODUCTS);
});
