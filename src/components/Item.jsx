import '../components/Item.css'

export default function Item({ item }) {
    return (
        <div>
            <div className="itemContainer" key={item.id || item.name}>
                        <div className="imageContainer">
                            <img
                            className='image'
                            src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
                            alt={item.name}
                            />
                        </div>

                        <div className="nameContainer">
                            <div className="name">{item.name}</div>
                            <div className="amount">{item.amount} {item.unit}</div>
                        </div>
            </div>
        </div>
    )
}