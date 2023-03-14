import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getCast } from "services/servicesApi";
import { BASE_IMG_URL } from "views/MovieDetails/MovieDetails";

export default function Cast() {
    const [cast, setCast] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        getCast(id).then(setCast)
    }, [id]);
    return (
        <div>
            <h2>Cast</h2>
            <ul>
                {cast.map(({cast_id,name,profile_path,}) => 
                    <li key={cast_id}>
                        <p>{name}</p>
                        <img src={BASE_IMG_URL + profile_path} alt={name} />
                    </li>
                )}
            </ul>
        </div>
        )
}