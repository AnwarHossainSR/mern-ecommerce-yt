import FlashCard from '../../components/App/flashDeals/FlashCard';
import Data from '../../constants/Data';

const Products = () => {
  return (
    <section className="flash">
      <div className="container">
        <div className="heading f_flex">
          <i className="fa-brands fa-slack" />
          <h1> All Products</h1>
        </div>
        <div className="d_flex">
          <FlashCard productItems={Data?.productItems} />
        </div>
      </div>
    </section>
  );
};

export default Products;

// Path: client/src/pages/Products/index.jsx
// Compare this snippet from client/src/components/App/flashDeals/FlashCard.jsx:
// import Rating from '@mui/material/Rating';
