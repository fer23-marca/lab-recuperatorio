import {useState} from 'react'
import PersonajeList from './components/PersonajeList'
import FavoritesPanel from './components/FavoritesPanel'

const MultiversoApp = () => {

	const [favoritos, setFavoritos] = useState([]);

	const agregarFavoritos = (id) => favoritos.some((f) => f.id === id);

	const toggleFavorito = (personaje) => {
    	if (agregarFavoritos(personaje.id)) {
      		setFavoritos(favoritos.filter((f) => f.id !== personaje.id));
    	} else {
      		setFavoritos([...favoritos, personaje]);
    	}
  	};
	const quitarFavorito = (id) => {
    	setFavoritos(favoritos.filter((f) => f.id !== id));
  	};

    return (
    	<div>
        <h1>Rick and Morty Universo</h1>
				<div className='layout'>
					<PersonajeList 
						agregarFavoritos={agregarFavoritos}
						toggleFavorito={toggleFavorito}
					/>
					<FavoritesPanel 
						favoritos={favoritos}
						quitarFavorito={quitarFavorito}
					/>
				</div>
    	</div>
    );
};
export default MultiversoApp






