import Title from "../Layouts/Title";
import ProjectCards from "./ProjectCards";
import { projectOne, projectTwo, projectThree } from "../../assets";
const Projects = () => {

  const projects = [
    {
      _id: 1,
      title: "SOCIAL MEDIA CLONE",
      des: " Lorem, ipsum dolor sit amet consectetur adipisicing elit xplicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
      src: projectOne
    }, {
      _id: 2,
      title: "SOCIAL MEDIA CLONE",
      des: " Lorem, ipsum dolor sit amet consectetur adipisicing elit xplicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
      src: projectTwo
    }, {
      _id: 3,
      title: "SOCIAL MEDIA CLONE",
      des: " Lorem, ipsum dolor sit amet consectetur adipisicing elit xplicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
      src: projectThree
    }, {
      _id: 4,
      title: "SOCIAL MEDIA CLONE",
      des: " Lorem, ipsum dolor sit amet consectetur adipisicing elit xplicabo quibusdam voluptate sapiente voluptatibus harum quidem!",
      src: projectOne
    }
  ]

  return (
    <section id='projects' className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center text-center">
        <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" desc="MY PROJECTS" />
      </div>
      <div className="grid grid-cols-3 gap-14">
        {projects.map((item: any, index: number) => (<ProjectCards key={index} title={item.title} desc={item.des} src={item.src} />))}
      </div>
    </section>
  )
}

export default Projects
