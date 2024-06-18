import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";
import { likeProduce } from "../../store/produce";

function ProduceDetails({ produce }) {
  const cartItem = {};
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(produce.id))
  }

  const handleLikeProduce = () => dispatch(likeProduce(produce.id))

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={() => handleLikeProduce()}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          onClick={() => handleAddToCart()}
          className={"plus-button" + (cartItem ? " selected" : "")}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
