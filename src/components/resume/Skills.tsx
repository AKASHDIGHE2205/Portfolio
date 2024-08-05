import { motion } from "framer-motion";

const Skills = () => {

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: .5 } }} className="w-full flex gap-20">
      <div className="w-1/2">
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">Features</p>
          <h2 className="text-4xl font-bold">Languages Known</h2>
        </div>

        <div className="mt-14 w-full">
          <div>
            <p className="text-sm uppercase font-medium">English</p>
            <motion.span initial={{ x: "-100 %", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-2">
              <span className="w-5/6 h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">80%</span>
              </span>
            </motion.span>
          </div>
        </div>
        <div className="mt-14 w-full">
          <div>
            <p className="text-sm uppercase font-medium">Hindi</p>
            <motion.span initial={{ x: "-100 %", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-2">
              <span className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">100%</span>
              </span>
            </motion.span>
          </div>
        </div>
        <div className="mt-14 w-full">
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">marathi</p>
            <motion.span initial={{ x: "-100 %", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-2">
              <span className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">100%</span>
              </span>
            </motion.span>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">Features</p>
          <h2 className="text-4xl font-bold">Development Skills</h2>
        </div> 
        <div className="mt-14 w-full">
          <div>
            <p className="text-sm uppercase font-medium">Test</p>
            <motion.span initial={{ x: "-100 %", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-2">
              <span className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">100%</span>
              </span>
            </motion.span>
          </div>
        </div>
        <div className="mt-14 w-full">
          <div>
            <p className="text-sm uppercase font-medium">Test</p>
            <motion.span initial={{ x: "-100 %", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-2">
              <span className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">100%</span>
              </span>
            </motion.span>
          </div>
        </div>
        <div className="mt-14 w-full">
          <div>
            <p className="text-sm uppercase font-medium">Test</p>
            <motion.span initial={{ x: "-100 %", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-2">
              <span className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">100%</span>
              </span>
            </motion.span>
          </div>
        </div>
        <div className="mt-14 w-full">
          <div>
            <p className="text-sm uppercase font-medium">Test</p>
            <motion.span initial={{ x: "-100 %", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="w-full h-2 bg-black bg-opacity-40 inline-flex rounded-md mt-2">
              <span className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">100%</span>
              </span>
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Skills;
