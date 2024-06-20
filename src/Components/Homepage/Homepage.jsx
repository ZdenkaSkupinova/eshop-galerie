import "./homepage.css"

const response = await fetch("http://localhost:4000/api/obrazy")
const json = await response.json()
const obrazy = json.data

console.log(obrazy)

const uvodUrl = "http://localhost:4000/assets/images/atelier.jpg"

const bio = "Malý útulný ateliér na vás dýchne příjemnou atmosférou. Usměvavá paní majitelka vás ráda provede po svém ateliéru. Prohlédněte si obrazy, a dejte si kávu venku na zahrádce."
const novinky = "Nové obrazy k prodeji" 


export const HomePage = () => {
  return (
    <div className="domovska_stranka">
       <h1>Malá výstavní a prodejní galerie U Zdeňky</h1>
       <img className="atelier_foto" src={uvodUrl} alt="ateliér" />
       <div className="atelier_bio">{bio}</div>
       <h3 className="atelier_novinky">{novinky}</h3>
       {
      obrazy.map((item) => (
        <div className="obraz_nazev" key={item.id}><a href={`detail.html?id=${item.id}`}>{item.nazev}</a></div>       
     ))
    }
    </div>
  );
};