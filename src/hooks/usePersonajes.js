import { useEffect, useState } from 'react'
import fetchPersonajes from '../services/fetchPersonajes'

const usePersonajes = () => {

    const [image, setImage] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
		const getImage = async () => {
			const data = await fetchPersonajes();
			setImage(data);
            setLoading(false);
		};
		getImage();
	}, []);


    return {
        image: image,
        loading: loading,
    };
};

export default usePersonajes