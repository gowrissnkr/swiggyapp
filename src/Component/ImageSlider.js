import { CDN_URL } from "../utils/constant"

const ImageSlider = ({ data }) => {
    const { imageId } = data
    return (
                <div className="pl-[16px]">
                    <div>                       
                            <div className={`block h-[252px] w-[425px]`}>
                                <img className="object-cover" src={CDN_URL + imageId} width="100%" alt="GET 50% OFF ON FIRST ORDER" />
                            </div>
                        <div>
                        </div>
                    </div>
                </div>
    )
}

export default ImageSlider