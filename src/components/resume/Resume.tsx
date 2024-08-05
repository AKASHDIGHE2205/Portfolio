import { useState } from "react";
import Title from "../Layouts/Title"
import Achievements from "./Achievements";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);

  const handleEducation = () => {
    setEducationData(true);
    setAchievementData(false);
    setExperienceData(false);
    setSkillData(false);
  };

  const handleSkill = () => {
    setEducationData(false);
    setAchievementData(false);
    setExperienceData(false);
    setSkillData(true);
  };

  const handleAchievement = () => {
    setEducationData(false);
    setAchievementData(true);
    setExperienceData(false);
    setSkillData(false);
  };

  const handleExperience = () => {
    setEducationData(false);
    setAchievementData(false);
    setExperienceData(true);
    setSkillData(false);
  };


  const liCss = `w-full h-20 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px] rounded-none`;

  return (
    <section id='resume' className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="1+ OF YEAR EXPERIENCE" desc="MY RESUME" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-4 ">
          <li onClick={handleEducation} className={`${educationData ? "border-designColor rounded-lg" : "border-transparent"} ${liCss}`}>Educations</li>
          <li onClick={handleSkill} className={`${skillData ? "border-designColor rounded-lg" : "border-transparent"} ${liCss}`}>Professional Skills</li>
          <li onClick={handleExperience} className={`${experienceData ? "border-designColor rounded-lg" : "border-transparent"} ${liCss}`}>Experience</li>
          <li onClick={handleAchievement} className={`${achievementData ? "border-designColor rounded-lg" : "border-transparent"} ${liCss}`}>Achievements</li>
        </ul>
      </div>
      <div className="w-full flex gap-20">
        {educationData && <Education />}
        {skillData && <Skills />}
        {achievementData && <Achievements />}
        {experienceData && <Experience />}
      </div>
    </section>
  )
}

export default Resume
