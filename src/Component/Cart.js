import BillDetails from "./BillDetails"

const Cart = () => {
    return (
        <section className="mx-[6%]">
            <h1 className="text-[40px] font-[300] tracking-[-2px]">Checkout</h1>
            <div className="flex flex-wrap">
                <div className="w-[52%] mt-[10px]">
                    <div>
                        <div className="flex w-[50%] rounded-[4px] p-[15px] cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
                        <img className="w-[80px] h-[100px] rounded-[4px]" src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg" />
                        <div className="pl-[15px]">
                            <h3>Men Black MAMGP T7 Sweat Sporty Jacket</h3>
                            <p className="text-[16px] mt-[8px]">x1</p>
                            <p className="text-[16px] mt-[8px]">₹7999</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="w-[45%]">
                    <div className="w-[450px] ml-[50px] rounded-[4px] p-[15px] cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
                        <h2 className="tracking-[2px] font-bold">Bill Details</h2>
                        <p className="mt-[20px] text-[16px] tracking-[2px] flex justify-between items-center text-[200]"><span>Total Amount:</span> <span id="total-amount" className="font-bold text-[20px] text-end">₹7999</span>
                        </p>
                        <p className="mt-[20px] text-[16px] tracking-[2px] flex justify-between items-center text-[200]"><span>Total Amount:</span> <span id="total-amount" className="font-bold text-[20px] text-end">₹7999</span>
                        </p>
                        <p className="mt-[20px] text-[16px] tracking-[2px] flex justify-between items-center text-[200]"><span>Total Amount:</span> <span id="total-amount" className="font-bold text-[20px] text-end">₹7999</span>
                        </p>
                        <p className="mt-[20px] text-[16px] tracking-[2px] flex justify-between items-center text-[200]"><span>Total Amount:</span> <span id="total-amount" className="font-bold text-[20px] text-end">₹7999</span>
                        </p>
                        <a href="/orderconfirm">
                            <button className="text-[16px] mt-[50px] font-[300] text-[#fff] p-[10px_20px] tracking-[2px] border-none rounded-[4px] cursor-pointer shadow-[0_2px_10px_rgba(0, 0, 0, 0.5)] bg-[#f77218]">Place Order</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart

{/* <div className="flex justify-center">
<div className="overflow-hidden flex flex-col h-[100%]">
    <button className="cursor-pointer py-[20px] bg-[#fff] flex min-h-[90px]">
        <span className="w-[50px] h-[50px] relative">
            <img className="border-none" imageurl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/emlehbuwgsmryxhwzhvq" height="50" width="50" imageid="" alt="img renderer" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/emlehbuwgsmryxhwzhvq" />
        </span>
        <span className="ml-[14px] flex-1 relative overflow-hidden min-h-[50px]
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:bg-[@282c3f] after:w-[40px] after:h-[2px]">
            <div className="text-[17px] text-[#282c3f] font-[500] text-ellipsis overflow-hidden whitespace-nowrap">Lavonne</div>
            <div className="text-[13px] text-[#686b78]">St. Marks Road</div>
        </span>

    </button>
    <div className="flex">
        <div className="flex overflow-hidden relative">
            <div className="absolute top-[-10px] w-[100%] shadow-[0_2px_4px_0_rgba(40_44_63_.1)] h-[10px] hidden">
            </div>
            <div className="flex flex-1 relative flex-col overflow-y-auto overflow-x-hidden">
                <div className="py-[0] relative">
                    <div className="relative p-[10px_0] flex items-center">
                        <div className="flex-1 flex items-start">
                            <div className="flex-1 text-[14px] font-[400] mr-[14px]">Butter Croissant</div>
                        </div>

                        <div className="w-[120px]">
                            <div className="float-right flex items-center">
                                <div className="inline-block h-[30px] w-[83px] border-[1px] border-solid border-[#d4d5d9] text-[#60b246] text-[.9rem] font-[600] leading-[30px] relative text-center bg-[#fff]">
                                    <div className="absolute right-0 top-0 w-[33.33%] inline-block opacity-[1] cursor-pointer text-[150%] font-[600]">+</div>
                                    <div class="absolute right-0 top-0 w-[33.33%] inline-block opacity-[1] cursor-pointer text-[1.5rem] font-[600] before:inline-block before:h-[2px] before:-[10px] before:bg-[#bebfc5] before:relative before:top-[-6px] before:content-[''] "></div>
                                    <div class="absolute left-[33.33%] top-0 w-[33.33%] inline-block opacity-[1] cursor-pointer">2</div>
                                </div>
                                <div class="_1mx0r">
                                    <span class="_2W2U4">210</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-[17px] pb-[21px] border-b-[2px] border-solid border-[#282c3f]">
                    <div className="font-[500] text-[13px] mb-[10px] text-[#282c3f]">Bill Details</div>
                    <BillDetails leftText={"Item Total"} rightText={210}/>
                    <BillDetails leftText={"Delivery Fee | 0.6 kms"} rightText={32}/>
                    <div className="_1Accg"></div>
                    <BillDetails leftText={"GST and Restaurant Charges"} rightText={21}/>
                </div>
            </div>

        </div>
    </div>
</div>
</div> */}