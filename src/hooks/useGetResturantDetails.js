import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { MENU_API } from "../utils/constant"
import { addSingleRestaurantDetails } from "../features/dataSlice"


const useGetResturantDetails = (id) => {
    const dispatch = useDispatch()
    const fetchData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+ id)
        const data = await response.json()
        dispatch(addSingleRestaurantDetails(data.data.cards))
    }

    useEffect(() => {
        fetchData()
    }, [])
}

export default useGetResturantDetails;
