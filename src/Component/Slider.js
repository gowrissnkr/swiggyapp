import ArrowButtons from "./ArrowButtons";
import ImageSlider from "./ImageSlider";


const Slider = ({ data }) => {
    const [card] = data
    return (
        <div className="dpQwAI">
            <div>
                <div className="relative mt-[16px]">
                   <ArrowButtons />
                    <div className="bg-[rgb(255,255,255)] p-[16px] overflow-hidden">
                        <div className="bg-[rgb(255,255,255)] mb-[16px] flex justify-between items-baseline overflow-hidden">
                            <div className="">
                                <h2 className="m-0 text-[24px] font-[800] leading-[28px] space-[-0.4px] overflow-hidden w-[100%]">{card?.card?.card?.header?.title ? card?.card?.card?.header?.title : "Best offers for you"}</h2>
                                <div className="text-[16px] font-[200] leading-[19px] space-[-0.3px] text-[rgba(2,6,12,0.92)] overflow-hidden w-[100%]">
                                </div>
                            </div>
                        </div>
                        <div className="mx-[-16px] relative overflow-hidden">
                            <div className="pt-[0px] flex overflow-x-scroll overflow-y-hidden scroll">
                                {card?.card?.card?.gridElements?.infoWithStyle?.info.map((data) => (
                                    <ImageSlider data={data} key={data.id}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider