import { useState } from "react";
import Title from "../Layouts/Title"
import ContactLeft from "./ContactLeft"

const Contact = () => {

  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  let contactInput = ` w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300
    }`;
  let textArea = ` w-full rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 py-2 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300 resize-none`;

  const handleSend = (e: any) => {
    e.preventDefault();
    if (userName === "") {
      setErrMsg("UserName is required...!")
    } else if (phoneNumber === "") {
      setErrMsg("Phone Number is required...!")
    } else if (email) {
      setErrMsg("Email is required...!")
    } else if (subject) {
      setErrMsg("Subject is required...!")
    } else if (message) {
      setErrMsg("Message is required...!")
    } else {
      setSuccessMsg("Your MEssage send Successfully...!");
      setEmail("");
      setMessage("");
      setPhoneNumber("");
      setSubject("");
      setUserName("");
    }
  }

  return (
    <section id='contact' className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex flex-col justify-center items-center text-center">
        <Title title="CONTACT" desc="Contact With Me" />
        <div className="w-full">
          <div className="w-full h-auto flex justify-between">
            <ContactLeft />
            <div className="w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[23272b]  flex flex-col gap-8 p-8 rounded-lg shadow-shadowOne">
              <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
                {errMsg && (
                  <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                    {errMsg}
                  </p>
                )}
                {successMsg && (
                  <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                    {successMsg}
                  </p>
                )}
                <div className="w-full flex flex-col lgl:flex-row gap-10">
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                      Your name
                    </p>
                    <input
                      onChange={(e) => setUserName(e.target.value)}
                      value={userName}
                      className={`${errMsg === "Username is required!" &&
                        "outline-designColor"
                        } ${contactInput}`}
                      type="text"
                    />
                  </div>
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                      Phone Number
                    </p>
                    <input
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber}
                      className={`${errMsg === "Phone number is required!" &&
                        "outline-designColor"
                        } ${contactInput}`}
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Email
                  </p>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className={`${errMsg === "Please give your Email!" &&
                      "outline-designColor"
                      } ${contactInput}`}
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Subject
                  </p>
                  <input
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                    className={`${errMsg === "Plese give your Subject!" &&
                      "outline-designColor"
                      } ${contactInput}`}
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Message
                  </p>
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    className={`${errMsg === "Message is required!" && "outline-designColor"
                      } ${textArea}`}
                    cols={30}
                    rows={8}
                  ></textarea>
                </div>
                <div className="w-full">
                  <button
                    onClick={handleSend}
                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                  >
                    Send Message
                  </button>
                </div>
                {errMsg && (
                  <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                    {errMsg}
                  </p>
                )}
                {successMsg && (
                  <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                    {successMsg}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
