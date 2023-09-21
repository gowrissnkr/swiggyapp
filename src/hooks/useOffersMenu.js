import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addbestOffersData } from "../features/dataSlice"
import { API } from "../utils/constant"

const useOffersMenu = () => {

    const dispatch = useDispatch()

    const fetchData = async () => {
        const response = await fetch(API)
        const data = await response.json()
        dispatch(addbestOffersData(data.data.cards[0]))
    }

    useEffect(() => {
        fetchData()
    }, [])
}

export default useOffersMenu;