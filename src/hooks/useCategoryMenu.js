import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addCategoryMenuData } from "../features/dataSlice"
import { API } from "../utils/constant"

const useCategoryMenu = () => {

    const dispatch = useDispatch()

    const fetchData = async () => {
        const response = await fetch(API)
        const data = await response.json()
        dispatch(addCategoryMenuData(data.data.cards[1]))
    }

    useEffect(() => {
        fetchData()
    }, [])
}

export default useCategoryMenu;