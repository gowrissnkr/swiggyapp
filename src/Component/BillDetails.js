const BillDetails = ({leftText,rightText}) => {
    return (
        <div>
            <div className="text-[13px] text-[#686b78] flex items-center">
                <div className="flex-1">
                    <span>{leftText}</span>
                </div>
                <div className="text-right self-start">
                    <span className=""><span>
                    </span>
                        <span className="">₹{rightText}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BillDetails