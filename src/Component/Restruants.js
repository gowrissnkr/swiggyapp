import { useSelector } from "react-redux"
import RestruantList from "./RestruantList"

const Restruants = () => {
    const {restaurantData} = useSelector((store) => store.data)

    return (
        <div className="dpQwAI">
              
            <div>
            
                <div className="relative mt-[16px]">
                    <RestruantList data={restaurantData}/>
                </div>
            </div>
        </div>
    )
}

export default Restruants