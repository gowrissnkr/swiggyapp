import { Link } from "react-router-dom"

const NavLink = ({ data }) => {

    const { fill, height, name, path, svgviewBox, width } = data

    return (
        <li className="mr-[60px] text-[#3d4152] text-[16px] font-[500]"><div className="relative"><div>
            <div className="relative h-[80px] cursor-pointer">
                <Link className="flex items-center pl-[28px] h-[100%]">
                    <span className="absolute top-[50%] left-0 translate-y-[-50%] leading-0">
                        <svg className="fill-[#fff] stroke-[2px] stroke-[#282c3f]" viewBox={svgviewBox} height={height} width={width} fill={fill}>
                            <path d={path}></path>
                        </svg>
                        {name === "Cart" ? <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[14px] font-[600]">0</span> : ""}
                    </span>
                    <span>
                        {name}
                    </span>
                </Link>
            </div>
        </div>
        </div>
        </li>
    )
}

export default NavLink