import productos from "../../db/productos";
import "../../sass/main.scss";

const contenedorProductosTienda = document.getElementById(
  "container-productos-tienda"
);

const start = () => {
  console.warn("se cargo todo el HTML");

  let html = "";

  productos.forEach((prod) => {
    console.log(prod);

    //html =html + '' === html +=''

    html += ` <div class="card-tienda">
    <article class="card-tienda__article">
        <div class="card-tienda__image-container">
            <img class="card-tienda__image" src="../../../${prod.foto}" alt="${prod.nombre}">
        </div>
        <div class="card-tienda__content">
            <h2 class="card-tienda__heading"><a href="">${prod.nombre}</a></h2>
        <div class="card-tienda__description">
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
  contenedorProductosTienda.innerHTML = html;
};
window.addEventListener("DOMContentLoaded", start);
