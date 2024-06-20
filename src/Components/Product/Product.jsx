import "./product.css"

const foto = "/assets/images/obr_1.jpg";
const localhost = "http://localhost:4000";

const fullUrl = localhost + foto;

export const Product = (props) => {
  const {nazev, rozmer, technika, popis, cena} = props
  return (
<div className="obraz_detail">
        <img className="obraz_foto" src={fullUrl} alt="obraz" />
          <div className = "text">
          <h2>{nazev}</h2>
            <div className="obraz_rozmery">Rozměry: {rozmer} cm</div>
            <div className="obraz_medium">Médium: {technika}</div>
            <div className="obraz_popis">{popis}</div> 
            <div className="obraz_cena">Cena: {cena} Kč</div>
            <button id="btn">Do košíku</button>
          </div> 
    </div>
  );
};

  