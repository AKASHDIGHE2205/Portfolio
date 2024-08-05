import { AiFillAppstore } from "react-icons/ai";
import Title from "../Layouts/Title"
import Card from "./Card"
import { SiAntdesign, SiProgress } from "react-icons/si";
import { FaMobile, FaGlobe, FaBars } from "react-icons/fa";

const Features = () => {
  const featuresData = [
    {
      id: 1,
      icon: <FaBars />,
      title: "Business Stratagy",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
    },
    {
      id: 2,
      icon: <AiFillAppstore />,
      title: "App Development",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
    },
    {
      id: 3,
      icon: <SiProgress />,
      title: "SEO Optimisation",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
    },
    {
      id: 4,
      icon: <FaMobile />,
      title: "Mobile Development",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
    },
    {
      id: 5,
      icon: <SiAntdesign />,
      title: "UX Design",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
    },
    {
      id: 6,
      icon: <FaGlobe />,
      title: "Hosting Websites",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
    },
  ];
  return (
    <section id="features" className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="Features" desc="What I Do" />
      <div className="grid grid-cols-3 gap-20">
        {featuresData.map((item: any, index: number) => (
          <Card key={index} title={item.title} desc={item.des} icon={item.icon} />
        ))}
      </div>
    </section>
  )
}

export default Features
