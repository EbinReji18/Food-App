export default function Container({ children }) {
    return (
      <div className="d-flex flex-wrap w-100 justify-content-center">
        {children}
      </div>
    );
  }
  