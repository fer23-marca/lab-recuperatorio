const PersonajeCard = ( {personaje, favorito, toggleFavorito} ) => {
    return (
			<div className={favorito ? "card fav" : "card"}>
				<img src={personaje.url} alt={personaje.title} />
				<h4>{personaje.title}</h4>
				<p className={`estado estado-${status.toLowerCase()}`}>
					{personaje.status} - {personaje.specie}
				</p>
				<button onClick={() => toggleFavorito(personaje)}>
					{favorito ? "★ Quitar de favoritos" : "☆ Agregar a favoritos"}
				</button>
			</div>
    )
}

export default PersonajeCard