import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      title: "Msc (Computer Science)",
      subTitle: "(2022 - 2024)",
      result: "3.90/4",
      des: "Completed a Master of Science degree in Computer Science, gaining advanced knowledge and expertise in areas such as artificial intelligence, machine learning, data analytics, and software engineering, preparing for specialized roles in the tech industry and academia."
    }, {
      title: "BSc (Computer Science)",
      subTitle: " (2019 - 2024)",
      result: "3.90/4",
      des: "Completed a Bachelor of Science degree in Computer Science, acquiring in-depth knowledge and practical skills in programming, software development, algorithms, data structures, and other core areas of computing, preparing for a career in the technology sector."
    }, {
      title: " Higher Secondary Certificate(SSC)",
      subTitle: "S.S.J.S.Vidyalaya,Kolhewadi,Sangamner(2017 - 2019)",
      result: "3.90/4",
      des: "Completed higher secondary education with a focus on advanced subjects, laying the groundwork for further studies and professional development in various fields."
    }, {
      title: "Secondary School Certificate(SSC)",
      subTitle: "S.S.J.S.Jr.,College,Kolhewadi,Sangamner(2013 - 2017)",
      result: "3.90/4",
      des: "Completed secondary education with a strong academic record, gaining foundational knowledge in various subjects and preparing for higher education and future career opportunities."
    }
  ];
  const experience = [
    {
      title: "Frontend developer",
      subTitle: "(2022 - 2024)",
      result: "3.90/4",
      des: "Completed a Master of Science degree in Computer Science, gaining advanced ence, machine learning, data analytics, and software engineering, preparing for specialized roles in the tech industry and academia."
    },
    {
      title: "Jr.Software Developer",
      subTitle: "(2022 - 2024)",
      result: "3.90/4",
      des: "Completed a Master of Science degree in Computer Science, gaining advanced knowledge and expertise in areas such as artificial intelligence, machine learning, data analytics, and software engineering, preparing for specialized roles in the tech industry and academia."
    },
    {
      title: "Jr.Software Developer",
      subTitle: "(2022 - 2024)",
      result: "3.90/4",
      des: "Completed a Master of Science degree in Computer Science, gaining advanced knowledge and expertise in areas such as artificial intelligence, machine learning, data analytics, and software engineering, preparing for specialized roles in the tech industry and academia."
    },
    {
      title: "Jr.Software Developer",
      subTitle: "(2022 - 2024)",
      result: "3.90/4",
      des: "Completed a Master of Science degree in Computer Science, gaining advanced knowledge and expertise in areas such as artificial intelligence, machine learning, data analytics, and software engineering, preparing for specialized roles in the tech industry and academia."
    },
  ];


  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: .5 } }} className="w-full flex gap-20">
      <div>
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2024</p>
          <h2 className="text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {education.map((item: any, index: number) => (<ResumeCard key={index} title={item.title} subTitle={item.subTitle} result={item.result} desc={item.des} />))}
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2024 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {experience.map((item: any, index: number) => (<ResumeCard key={index} title={item.title} subTitle={item.subTitle} result={item.result} desc={item.des} />))}
        </div>
      </div>
    </motion.div>

  )
}

export default Education
