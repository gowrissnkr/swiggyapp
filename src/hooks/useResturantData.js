import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addRestaurantData } from "../features/dataSlice"
import { API } from "../utils/constant"

const useResturantData = () => {

    const dispatch = useDispatch()

    const fetchData = async () => {
        const response = await fetch(API)
        const data = await response.json()
        dispatch(addRestaurantData(data.data.cards[2]))
    }

    useEffect(() => {
        fetchData()
    }, [])
}

export default useResturantData;