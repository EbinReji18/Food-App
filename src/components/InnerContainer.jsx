import '../components/InnerContainer.css';

export default function InnerContainer({ children, width }) {
  return (
    <div className="innerContainer" style={{ flex: `0 0 ${width}` }}>
      {children}
    </div>
  );
}
