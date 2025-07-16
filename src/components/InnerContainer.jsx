export default function InnerContainer({ children, width }) {
  return (
    <div
      className="p-2 m-2"
      style={{ flex: `0 0 ${width}` }}
    >
      {children}
    </div>
  );
}
