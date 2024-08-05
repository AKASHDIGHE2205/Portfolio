import { logo } from "../../assets";
import { Link } from "react-scroll";
import { navLinksdata } from "../../constants";
const Navbar = () => {
  return (
    <div className="w-full h-24 mx-auto flex sticky
     top-0 z-50 bg-bodyColor justify-between items-center font-bodyFont border-b-[1px] border-b-gray-600">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {
            navLinksdata.map((item: any, index: number) => (
              <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300" key={index}>
                <Link
                  activeClass="active"
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {item.title}
                </Link>
              </li>
            )
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar
