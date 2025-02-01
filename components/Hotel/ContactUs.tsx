import { BsQuestionCircle } from "react-icons/bs"
import { FaQuestionCircle } from "react-icons/fa"

export default function ContactUs() {
  return (
    <div className="flex bg-white items-center justify-center py-16 mt-10 text-xl p-5 wrapper rounded-xl flex-col">
        <FaQuestionCircle className="text-2xl stroke-1"/>
        <p className="font-semibold mb-6 mt-7">Haven't found what you are looking for yet?
        </p>
        <button className="px-5 py-4 rounded shadow-md bg-blue-500 text-white font-semibold text-sm">Contact Us Now</button>
    </div>
  )
}
