
import { useTypewriter, Cursor } from 'react-simple-typewriter'; import { FaFacebookF, FaTwitter, FaLinkedinIn, FaNode, FaReact } from "react-icons/fa"
import { SiTailwindcss, SiMysql} from "react-icons/si"

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ['Frontend developer.', 'Fullstack developer.', 'Web developer.'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 10,
    delaySpeed: 2000,
  })
  return (
    <div>
      <div className="w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
          <h1 className="text-6xl font-bold text-white">
            Hi, I'am {""}
            <span className="text-designColor capitalize">Demo Demo</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
              cursorBlinking={false}
              cursorStyle="|"
              cursorColor='#ff014F'
            />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni sint maxime, voluptatum eligendi placeat quia accusamus ducimus, recusandae exercitationem fugit reiciendis id debitis consectetur asperiores architecto iure, officiis vitae. Nobis tenetur exercit  obcaecati ipsam. Blanditiis fugiat at quod a nemo aspernat
          </p>
        </div>
        <div className='flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between'>
          <div>
            <h2 className='text-base uppercase font-titleFont mb-4'>Find me in</h2>
            <div className='flex gap-4'>
              <span className='bannerIcon'>
                <FaFacebookF />
              </span>
              <span className='bannerIcon'>
                <FaTwitter />
              </span>
              <span className='bannerIcon'>
                <FaLinkedinIn />
              </span>
              {/* <span className='bannerIcon'>
                <SiInstagram />
              </span> */}
            </div>
          </div>
          <div>
            <h2 className='text-base uppercase font-titleFont mb-4'>Best Skill On</h2>
            <div className='flex gap-4'>
              <span className='bannerIcon'>
                <FaReact />
              </span>
              <span className='bannerIcon'>
                <FaNode />
              </span>
              <span className='bannerIcon'>
                <SiTailwindcss />
              </span>
              {/* <span className='bannerIcon'>
                <SiBootstrap />
              </span> */}
              <span className='bannerIcon'>
                <SiMysql />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBanner
