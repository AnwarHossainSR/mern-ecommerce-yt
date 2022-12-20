import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';

const FlashCard = ({ productItems, addToCart }) => {
  const navigate = useNavigate();
  return (
    <>
      {productItems.map((productItem) => {
        return (
          <div className="product_container " key={productItem.id}>
            <div
              className="product mtop"
              onClick={() => navigate(`products/id`)}
            >
              <div className="img">
                {productItem.discount > 0 && (
                  <span className="discount">{productItem.discount}% Off</span>
                )}
                <img src={productItem.cover} alt="" />
              </div>
              <div className="product-details">
                <h3>{productItem.name}</h3>
                <Rating
                  name="half-rating"
                  defaultValue={productItem.rating}
                  precision={0.5}
                />
                <div className="price">
                  <h4>${productItem.price}.00 </h4>
                  <button onClick={() => addToCart(productItem)}>
                    <i className="fa fa-plus" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FlashCard;
