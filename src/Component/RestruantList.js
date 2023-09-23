import RestruantCard from "./RestruantCard"

const RestruantList = ({ data }) => {
    const [card] = data
    return (
        <>
            <div id="container-grid-filter-sort" className="my-0 mx-[calc(10% + 52px)]">
            <hr className="border-b border-solid border-[#d3d3d3]"/>
                <div>
                    <h2 className="m-0 mt-[20px] text-[24px] font-[800] leading-[28px] space-[-0.4px] overflow-hidden w-[100%]">{card?.card?.card?.header?.title}</h2>
                    <div>
                    </div>
                </div>
            </div>
            <div className="h-[16px]"></div>
            <div className="my-0 mx-[calc(10% + 52px)]">
                <div>
                    <div className="p-0 list-none grid grid-cols-3 gap-[32px] my-[32px] mx-[16px]">
                        {card?.card?.card?.gridElements?.infoWithStyle?.restaurants.map((restraunt) => (
                            <RestruantCard  key={restraunt.info.id} restraunt = {restraunt}/>
                        ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default RestruantList


