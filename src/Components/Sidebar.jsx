import { Link } from 'react-router-dom';
import { FaHome, FaGithub, FaLinkedin, FaReact, FaJava, FaJsSquare, FaAws } from 'react-icons/fa';
import { BiMoon, BiMailSend } from 'react-icons/bi';
import { IoIosColorPalette } from 'react-icons/io';

export default function Sidebar({ colour, setColour }) {
    const colourChange = (e) => {
        setColour(e.target.id)
    }

    return (
        <div className="top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg justify-between">
            <div>
                <SideBarIcon icon={<FaHome size="28" />} text={"Home"} colour={colour} />
                <SideBarIcon icon={<FaLinkedin size="28" />} text={"LinkedIn"} link={"https://www.linkedin.com/in/jack-dowdeswell-9a06a0113/"} colour={colour} />
                <SideBarIcon icon={<FaGithub size="28" />} text={"Github"} link={"https://github.com/JackDowdeswell?tab=repositories"} colour={colour} />
                <SideBarIcon icon={<BiMailSend size="28" />} text={"Contact Me"} colour={colour} />
            </div>
            <div>

            </div>
            <div className="bg-gray-500 bottom-3.5 m-5 ml-20 mx-auto rounded-3xl">
                <ul className="text-3xl mx-2 my-4 cursor-pointer flex">
                    <li id="text-green-500 hover:bg-green-600 hover:text-white" className="hover:bg-gray-600 rounded-3xl p-1" onClick={colourChange}>🟢</li>
                    <li id="text-red-500 hover:bg-red-600 hover:text-white" className="hover:bg-gray-600 rounded-full p-1" onClick={colourChange}>🔴</li>
                    <li id="text-orange-500 hover:bg-orange-600 hover:text-white" className="hover:bg-gray-600 rounded-full p-1" onClick={colourChange}>🟠</li>
                    <li id="text-yellow-400 hover:bg-yellow-600 hover:text-white" className="hover:bg-gray-600 rounded-full p-1" onClick={colourChange}>🟡</li>
                    <li id="text-blue-500 hover:bg-blue-600 hover:text-white" className="hover:bg-gray-600 rounded-full p-1" onClick={colourChange}>🔵</li>
                    <li id="text-purple-500 hover:bg-purple-600 hover:text-white" className="hover:bg-gray-600 rounded-full p-1" onClick={colourChange}>🟣</li>
                    <li id="hover:text-black" className="hover:bg-gray-600 rounded-full p-1" onClick={colourChange}>⚪</li>
                </ul>
                <SideBarIcon icon={<IoIosColorPalette size="28" />} text={"Colour selection"} colour={colour} />
            </div>
        </div>
    )
}


const SideBarIcon = ({ icon, text = 'tooltip 💡', link, colour }) => {
    return (
        <a href={link}>
            <div className={"sidebar-icon group " + colour}>
                {icon}

                <span className="sidebar-tooltip group-hover:scale-100">
                    {text}
                </span>
            </div>
        </a>
    )
}
