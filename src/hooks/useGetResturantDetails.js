import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { MENU_API } from "../utils/constant"
import { addSingleRestaurantDetails } from "../features/dataSlice"


const useGetResturantDetails = (id) => {
    const dispatch = useDispatch()
    const fetchData = async () => {
        const response = await fetch(MENU_API + id)
        const data = await response.json()
        dispatch(addSingleRestaurantDetails(data.data.cards))
    }

    useEffect(() => {
        fetchData()
    }, [])
}

export default useGetResturantDetails;
