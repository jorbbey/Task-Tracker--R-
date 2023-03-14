import { FaHeart } from "react-icons/fa"
const Footer = () => {
  return (
    <footer>
      <p className="text-xs flex mx-4 my-2">made with <FaHeart className="text-red-700 mx-1 animate-pulse" /> by jorbbey </p>
      <p className="text-xs mx-4 mb-6">@ <a href="jorbbey.netlify.app" className="text-xs italic underline">jorbbey</a></p>
    </footer>
  )
}

export default Footer
