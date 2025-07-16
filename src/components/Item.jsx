export default function Item({ item }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column align-items-center text-center">
        <img
          src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
          alt={item.name}
          className="img-fluid mb-3"
          style={{ width: "60px", height: "60px", objectFit: "contain" }}
        />
        <h6 className="fw-semibold">{item.name}</h6>
        <span className="badge bg-warning-subtle text-warning mt-2">
          {item.amount} {item.unit}
        </span>
      </div>
    </div>
  );
}
