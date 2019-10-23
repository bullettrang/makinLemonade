
import styled from "styled-components";
import LineItem from './styles/LineItem';

const CartImage = styled.img`
  max-width: 50px;
`;

const CartItem = ({lineItem,removeLineItemInCart,updateQuantityInCart})=>{

    const decrementItem = (id,qty)=>{
        const newcount =  qty-1;
        updateQuantityInCart(id,newcount);
    }

    const incrementItem = (id,qty)=>{
        const newcount =  qty+1;
        updateQuantityInCart(id,newcount);
    }
    return(
        <LineItem key={lineItem.id}>
          {lineItem.variant.image && (
            <CartImage src={lineItem.variant.image.src} alt={lineItem.title} />
          )}
          <button
            className="line--delete"
            onClick={() => removeLineItemInCart(lineItem.id)}
          >
            X
          </button>
          <div className="lineItem--title">
            {lineItem.variant.title} {lineItem.title}
          </div>
          <div className="lineItem--qty">QTY</div>
          <div className="lineItem--qty--controls">
            <button onClick={()=>decrementItem(lineItem.id,lineItem.quantity)}>-</button>
            <span>{lineItem.quantity} </span>
            <button onClick={()=>incrementItem(lineItem.id,lineItem.quantity)}>+</button>
          </div>
          <div className="lineItem--total">
            ${(lineItem.quantity * lineItem.variant.price).toFixed(2)}
          </div>
        </LineItem>
    )
}

export default CartItem;