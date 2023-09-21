import { CDN_URL } from "../utils/constant"

const ImageSlider = ({ data,width }) => {
    const { imageId } = data
    console.log(width)
    return (
                <div className="pl-[16px]">
                    <div>                       
                            <div className={`w-[${width}] block h-[252px]`}>
                                <img className="object-cover" src={CDN_URL + imageId} width="100%" alt="GET 50% OFF ON FIRST ORDER" />
                            </div>
                        <div>
                        </div>
                    </div>
                </div>
    )
}

export default ImageSlider