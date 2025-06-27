import Item from "./Item";

export default function ItemList({ food, isloading }) {
    return (
        <div>
            {isloading ? (
                <p>Loading...</p>
            ) : (
                food.extendedIngredients.map((item) => (
                    <Item key={item.id} item={item} />
                ))
            )}
        </div>
    );
}
