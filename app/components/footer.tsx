import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

type Info = {
    name: string;
    icon: React.ReactElement;
    link: string;
}

const Footer = () => {
    const conactInfo: Info[] = [
        {
            name: "Telegram",
            icon: <FaTelegramPlane />,
            link: "https://t.me/I1_Muslim"
        },
        {
            name: "Instagram",
            icon: <FaInstagram />,
            link: "https://www.instagram.com/ms0h_0/"
        },
        {
            name: "Github",
            icon: <FaGithub />,
            link: "https://github.com/muslimIrm"
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/muslim-hashim-5863a3344/"
        }

    ];

    return (
        <footer className=" absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-500">
            Made by <span className="font-bold">MUSLIM</span>
            <div className="flex items-center justify-center gap-2">
                {conactInfo.map((info, index) => (
                    <a
                        key={index}
                        href={info.link}
                        target="_blank"
                        className="flex hover:scale-110 text-lg items-center duration-300 gap-2 text-primary font-medium mt-2"
                    >
                        {info.icon}
                    </a>
                ))}
            </div>
        </footer>
    )
}


export default Footer