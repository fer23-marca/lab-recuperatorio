
export const fetchPersonajes = async () => {
		const url = `https://rickandmortyapi.com/api/character`;

		const respuesta = await fetch(url);

		const data = await respuesta.json();

		const imageNew = data.results.map((image) => {
			return {
				id: image.id,
				title: image.name,
				status: image.status,
				specie: image.species,
				url: image.image,
			};
		});
		return imageNew;
	}
export default fetchPersonajes