import { Link } from "react-router-dom";
import LOGO from "../assets/images/f.png"
import NavLink from "./NavLink";
import { headerData } from "../utils/constant";


const Header = () => {  
    return (
        <header className="shadow-[0_15px_40px_-20px_rgba(40,40,63,0.15)] fixed top-0 left-0 right-0 h-[80px] bg-[#fff] z-[1000] px-[20px]">
            <div className="">
                <div className="max-w-[1200px] min-w-[1200px] relative mx-auto bg-[#fff] flex items-center">
                    <Link to="/" className="block mr-[16px]">
                        <img src={LOGO} alt="LOGO" className=" w-[80px]" />
                    </Link>
                    <div className="flex items-center ml-[30px] max-w-[300px] cursor-pointer mb-[-1px] pr-[10px]">
                        <span className="relative text-[#3d4152] left-0 font-[700] line">
                            <span className="block min-w-[30px] text-ellipsis overflow-hidden whitespace-nowrap">Other</span></span>
                        <span className="block pl-[5px] ml-[5px] text-[#686b78] text-ellipsis overflow-hidden whitespace-nowrap">Bengaluru, Karnataka, India</span>
                        <span className="absolute right-[-12px] top-[50%] translate-y-[-50%] text-[.9rem] text-[#fc8019] font-[700] icon-downArrow"></span>
                    </div>
                    <ul className="flex-1 flex flex-row-reverse h-[100%] items-center min-w-0">
                        {headerData.map((data) => 
                            (<NavLink data={data} key={data.id} />)
                        )}
                    </ul>

                </div>
            </div>
        </header>
    )
}

export default Header