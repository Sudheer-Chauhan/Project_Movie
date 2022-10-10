import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import Cards from "../card/card"

const ReleaseDate = () => {

    const [releasedate, setReleaseDate] = useState([])
    const {date} = useParams()


    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [date])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${date}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setReleaseDate(data.results))
    }

    return (
        <div className="filter">
            <select>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
            </select>
            <div className="list__cards">
                {
                    releasedate.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
            </div>
    )

}

export default ReleaseDate