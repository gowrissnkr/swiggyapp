import useOffersMenu from "../hooks/useOffersMenu"
import { useSelector } from "react-redux"
import Slider from "./Slider"
import Restruants from "./Restruants";
import useResturantData from "../hooks/useResturantData";



const Body = () => {
  useOffersMenu();
  useResturantData();

  const {bestOffers} = useSelector((store) => store.data) 
  return (
    <div className="flex-grow-1">
      <div className="h-[100%]">
        <div className="">
          <main className="flex w-[100%] h-[100%] flex-col bg-[rgb(255,255,255)]">           
              <Slider data={bestOffers}/>             
              <Restruants />
          </main>
        </div>
      </div>
    </div>
  )
}

export default Body