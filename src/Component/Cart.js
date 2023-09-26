import { useSelector } from "react-redux"
import BillDetails from "./BillDetails"
import { CDN_URL } from "../utils/constant"
import { useRef } from "react"

const Cart = () => {
    const cartItems = useSelector((store) => store.data.cartItem)
    console.log(cartItems)
    const total = useRef(null)
    console.log(total)
    const item = cartItems.reduce((acc, card) => ((acc + card?.card?.info?.price / 100) * card?.quantity), 0)
    const baseDelivery = 31;
    const platFormFees = 2;
    const GST = ((item + baseDelivery + platFormFees) * 5 / 100)
    console.log(GST)
    console.log(item)
    return (
        <section className="mx-[6%]">
            <h1 className="text-[40px] font-[300] tracking-[-2px]">Checkout</h1>
            <div className="flex flex-wrap">
                <div className="w-[52%] mt-[10px]" >
                    {cartItems.map((cartItem) => (
                        <div key={cartItem.card.info.id} className="mt-[10px]">
                            <div className="flex w-[50%] rounded-[4px] p-[15px] cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
                                <img className="w-[100px] rounded-[4px]" src={CDN_URL + cartItem?.card?.info?.imageId} />
                                <div className="pl-[15px]">
                                    <h3>{cartItem?.card?.info?.name}</h3>
                                    <p className="text-[16px] mt-[8px]">{cartItem.card.quantity}</p>
                                    <p ref={total} className="text-[16px] mt-[8px]">₹ {(cartItem.card.info.price / 100) * cartItem.quantity}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-[45%] mt-[10px]">
                    <div className="w-[450px] ml-[50px] rounded-[4px] p-[15px] cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
                        <h2 className="tracking-[2px] font-bold">Bill Details</h2>
                        <BillDetails leftText={"Item Total"} rightText={item} />
                        <BillDetails leftText={"Delivery Fee"} rightText={baseDelivery} />
                        <div className="border-b-[1px] border-solid border-[#e9e9eb] mt-[17px] mb-[15px]"></div>
                        <BillDetails leftText={"Platform Fee"} rightText={platFormFees} />
                        <BillDetails leftText={"GST and Restaurant Charges"} rightText={GST.toFixed(2)} />
                        <div className="border-b-[4px] border-solid border-[#000] mt-[17px] mb-[15px]"></div>
                        <div className="w-[100%] bg-[#fff] h-[60px] min-h-[60px] flex items-center font-[600] text-[#282c3f] px-[10px] z-[1]">
                            <div>TO PAY</div>
                            <div className="flex-1 text-right">₹{(item + baseDelivery + platFormFees + GST).toFixed()}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart;
