import { useEffect, useState } from "react";
import "./App.css";

const ProductCard = ({ image, title }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-img"></img>
      <span>{title}</span>
    </div>
  );
};

const PAGE_SIZE = 6;
function App() {
  const [products, setProduct] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const fetchdata = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const json = await data.json();
    setProduct(json.products);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const handlePageChange = (n) => {
    setCurrentPage(n);
  };
  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const goToPreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  return !products.length ? (
    <h1>No product found</h1>
  ) : (
    <div className="App">
      <h1>paginantion</h1>
      <div className="pagination-container">
        <button disabled={currentPage === 0} onClick={() => goToPreviousPage()}>
          ◀️
        </button>
        {[...Array(noOfPages).keys()].map((n) => (
          <button
            className={"page-number " + (n === currentPage ? "active" : "")}
            key={n}
            onClick={() => handlePageChange(n)}
          >
            {n}
          </button>
        ))}
        <button
          disabled={currentPage === noOfPages - 1}
          onClick={() => goToNextPage()}
        >
          ▶️
        </button>
      </div>
      <div className="product-container">
        {products.slice(start, end).map((p) => (
          <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
        ))}
      </div>
    </div>
  );
}

export default App;
