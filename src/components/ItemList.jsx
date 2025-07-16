import Item from "./Item";

export default function ItemList({ food, isloading }) {
  return (
    <div className="mt-4 container">
      {isloading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="row g-4">
          {food.extendedIngredients?.map((item) => (
            <div className="col-12 col-sm-6 col-md-4" key={item.id}>
              <Item item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
