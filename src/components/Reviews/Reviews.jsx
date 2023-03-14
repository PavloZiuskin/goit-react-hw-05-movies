import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getReviews } from "services/servicesApi";
export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        getReviews(id).then(setReviews)
    }, [id]);
    return (
        <div>
            <h2>Reviews</h2>
            <ul>
                {reviews.map(({id,author,content}) => 
                    <li key={id}>
                        <h3>{author}</h3>
                        <p>{content}</p>
                    </li>
                )}
            </ul>
        </div>
        )
}