
const FavoritesPanel = ({ favoritos, quitarFavorito }) => {
	return (
		<div className='favoritos'>
			<h3>Favoritos ({favoritos.length})</h3>

			<ul>
				{favoritos.map((personaje) => (
					<li key={personaje.id}>
						<img src={personaje.url} alt={personaje.title} />
						<span>{personaje.title}</span>
						<button onClick={()=> quitarFavorito(personaje.id)}>
							Quitar
						</button>
					</li>
				))}
			</ul>
		</div> 
	);
};
export default FavoritesPanel

