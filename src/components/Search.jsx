import { useEffect, useState } from "react"
import '../components/Search.css'

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "6cea1231a0554bdaa362d298ab200cda"

export default function Search({foodData, setFoodData}) {
    const [query, setQuery] = useState("Pizza")

    useEffect(() => {
         async function fetchFood(){
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            const data = await res.json()
            setFoodData(data.results)
        }
        fetchFood()
    },[query])

    return (
        <div className="searchContainer">
            <input
            className="input" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            type="text" />
        </div>
    )
}