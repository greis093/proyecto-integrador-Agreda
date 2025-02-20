import productos from "./db/productos";
import "./sass/main.scss";

const contenedorProductos = document.getElementById("container-productos");

const start = () => {
  console.warn("se cargo todo el HTML");

  let html = "";

  productos.forEach((prod) => {
    console.log(prod);

    //html =html + '' === html +=''

    html += ` <div class="card">
    <article class="card__article">
        <div class="card__image-container">
            <img class="card__image" src="${prod.foto}" alt="${prod.nombre}">
        </div>
        <div class="card__content">
            <h2 class="card__heading"><a href="">${prod.nombre}</a></h2>
        <div class="card__description">
            <span class="ProductItem__Price Price Price--highlight Text--subdued">
                 <lomoney lo-currency-pen="25900" lo-currency="PEN" class="lomoney-processed">"${prod.precio}"</lomoney></span>
            </span>
            <bdi>
              <span  class="ProductItem__Price Price Price--compareAt Text--subdued">
              <lomoney lo-currency-pen="27900" lo-currency="PEN" class="lomoney-processed">"${prod.precio_antiguo}</lomoney></span>   
            </bdi>
        </div>
        </div>
    </article>
    </div>`;
  });
  contenedorProductos.innerHTML = html;
};

const start2 = () => {
  productos.forEach((prod) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const articulo = document.createElement("article");
    articulo.classList.add("card_article");
    card.appendChild(articulo);

    const card2 = document.createElement("div");
    card2.classList.add("card__image-container");
    articulo.appendChild(card2);

    const img = document.createElement("img");
    img.classList.add("card__image");
    card2.appendChild(img);
    img.src = prod.foto;
    img.alt = prod.nombre;
    card2.appendChild(img);

    const card_content = document.createElement("div");
    card_content.classList.add("card__content");
    articulo.appendChild(card_content);

    const h2 = document.createElement("h2");
    h2.classList.add("card__heading");
    card_content.appendChild(h2);
    h2.textContent = prod.nombre;

    const card_description = document.createElement("div");
    card_description.classList.add("card__description");
    card_content.appendChild(card_description);

    const span = document.createElement("span");
    card_description.appendChild(span);

    const lomoney = document.createElement("lomoney");
    span.appendChild(lomoney);
    span.textContent = prod.precio;

    const bdi = document.createElement("bdi");
    card_description.appendChild(bdi);

    const span2 = document.createElement("span");
    bdi.appendChild(span2);

    const lomoney2 = document.createElement("lomoney");
    span2.appendChild(lomoney2);
    span2.textContent = prod.precio_antiguo;

    contenedorProductos.appendChild(card);
  });
};
window.addEventListener("DOMContentLoaded", start2);
