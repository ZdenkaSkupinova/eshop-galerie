import { render } from '@czechitas/render';
import '../global.css';
import { Product } from '../components/product/product';
import { ProductPage } from '../components/productpage/productpage';

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const response = await fetch(`http://localhost:4000/api/obrazy/${id}`)
const json = await response.json()
const obrazy = json.data

const foto = (obrazy.foto);
const localhost = "http://localhost:4000";
const fullUrl = localhost + foto;

const {nazev, rozmer, technika, popis, cena} = obrazy

document.querySelector('#root').innerHTML = render(
  <>
  <ProductPage />
  <Product fullUrl = {fullUrl}
          nazev = {nazev}
          rozmer = {rozmer}
          technika = {technika}
          popis = {popis}
          cena = {cena}
    />
  </>
);