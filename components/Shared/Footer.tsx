import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { IoCall } from "react-icons/io5";

export default function Footer() {
  const footerLinks = [
    [
      // First Column
      { label: "About Us", href: "/about-us" },
      { label: "Cookies Policy", href: "/cookies-policy" },
      { label: "FAQ", href: "/faq" },
      { label: "Careers And Jobs", href: "/careers-and-jobs" },
    ],
    [
      // Second Column
      { label: "Contact Us", href: "/contact-us" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Booking Tips", href: "/booking-tips" },
      { label: "How To Book", href: "/how-to-book" },
    ],
    [
      // Third Column
      { label: "Terms Of Use", href: "/terms-of-use" },
      { label: "Become A Supplier", href: "/become-a-supplier" },
      { label: "File A Claim", href: "/file-a-claim" },
    ],
  ];

  const socialMediaLinks = [
    {
      name: "Facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      link: "https://www.twitter.com",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      link: "https://www.youtube.com",
    },
  ];

  return (
    <div className=" bg-white pt-14 mt-32">
      <div className="wrapper grid-cols-1 grid px-3 gap-8 lg:grid-cols-4">
        <div className="flex justify-center lg:justify-start">
          <img
            src="https://airgoworld.net/uploads/global/logo.png"
            className="h-32"
            alt=""
          />
        </div>
        {footerLinks.map((el) => (
          <div className="flex flex-col gap-4">
            {el.map((ell) => (
              <p className="text-[15px] font-semibold">{ell.label}</p>
            ))}
          </div>
        ))}
      </div>
      <div className="border-t-2 py-8 mt-5">
      <div className="wrapper px-3 xl:px-0">
        <div className="flex items-center gap-4 lg:gap-0 justify-center text-center flex-col lg:flex-row lg:justify-between">
          <div className="flex justify-center flex-col items-center lg:items-start">
            <p className="text-sm uppercase">
              All Rights Reserved by AirgoWorld
            </p>
            <div className="flex gap-3 mt-4 uppercase text-center lg:text-start text-sm">
              <p className="font-semibold text-blue-600">Call Us</p>
              <p className="font-semibold text-blue-600">Send an Email</p>
            </div>
          </div>
          <div className="flex items-center text-xl gap-7">
            {socialMediaLinks.map((el, key) => (
              <div className="">
                <span className="cursor-pointer duration-300 ">{el.icon}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}
