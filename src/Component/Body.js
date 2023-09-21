import useCategoryMenu from "../hooks/useCategoryMenu";
import useOffersMenu from "../hooks/useOffersMenu"
import Slider from "./Slider";
import { useSelector } from "react-redux"



const Body = () => {
  useOffersMenu();
  useCategoryMenu();

  const {bestOffers,categoryMenu} = useSelector((store) => store.data) 
  return (
    <div className="flex-grow-1">
      <div className="h-[100%]">
        <div className="">
          <main className="flex w-[100%] h-[100%] flex-col bg-[rgb(255,255,255)]">           
              <Slider data={bestOffers} width="425px"/>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Body