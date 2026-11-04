import PersonajeCard from './PersonajeCard';
import usePersonajes from '../hooks/usePersonajes.js';	

const PersonajeList = ({agregarFavoritos, toggleFavorito}) => {
	const { image, loading } = usePersonajes();

	if (loading) {
    return <p>Cargando personajes...</p>;
  	}
  	return (
		<div className='grid'>
			{image.map((personaje) => {
				return <PersonajeCard 
					key={personaje.id} 
					personaje={personaje} 
					favorito={agregarFavoritos(personaje.id)}
					toggleFavorito={toggleFavorito}
				/>;
			})}
		</div>
  );
};

export default PersonajeList;