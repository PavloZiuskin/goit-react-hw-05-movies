import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getCast } from "services/servicesApi";
import { BASE_IMG_URL } from "views/MovieDetails/MovieDetails";
import { Castlist,CastItem,CintainetCastImg } from "./Cast.styled";
import defaultImg from '../../images/notfoundphoto.jpeg'
export default function Cast() {
    const [cast, setCast] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        getCast(id).then(setCast)
    }, [id]);
    return (
        <>
            <h2>Cast</h2>
            <Castlist>
                {cast.map(({cast_id,name,profile_path,}) => 
                    <CastItem key={cast_id}>
                        <CintainetCastImg><img src={profile_path ? BASE_IMG_URL+profile_path  : defaultImg } alt={name} /></CintainetCastImg>
                        <p>{name}</p>
                        
                    </CastItem>
                )}
            </Castlist>
        </>
        )
}