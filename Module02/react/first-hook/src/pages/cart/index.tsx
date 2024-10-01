import {useCart} from "../../context/cartContext"
import {ProductsProps} from "../../utils/interface"
import {useNavigate} from "react-router-dom"
function Cart() {

  const { cart, removeFromCart} = useCart () ;
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total: number, item:ProductsProps)=> {
    return total + (item.price * (item.quantity || 1))
  }, 0)

  return (
    <div className="p-10 bg-slate-100 h-screen w-screen">
      <h2 className="text-black font-bold my-10">Your cart</h2>
      {cart.length === 0? (
        <h3 className="p-10 bg-slate700 h-screen w-screen text-black">
          your cart is empty
        </h3>
      ) : (
        cart.map ((item:ProductsProps) => (
          <div key={item.id} className="flex justify-between items-center border-b-2 py-2 text-black">
          <div>
            <h4>{item.title}</h4>
            <p>quantity : {item.quantity}</p>
            <p>price : {item.price}</p>
            <span>{item.price} x {item.quantity} = {item.price * (item.quantity || 1 )}</span>
          </div>

          <button 
          onClick={() => removeFromCart(item.id)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            remove
          </button>


    </div>
    
        ))
 )}
 <div>
  <p className="font-bold mt-5 text-black">Total {totalPrice}</p>
  <button onClick={()=>navigate("/products")}
  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 m-1" >
           Balik
          </button>
 </div>
 </div>
  );
}

export default Cart;
