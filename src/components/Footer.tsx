import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faUnsplash,
} from "@fortawesome/free-brands-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <footer className=" flex justify-between px-5 py-10 bg-gray-200">
        <div className=" flex flex-col gap-5">
          <h2 className=" text-3xl font-extrabold uppercase">
            <FontAwesomeIcon icon={faCamera} /> Wild Wishpers
          </h2>
          <div className=" flex gap-3 text-2xl justify-center">
            <a href="">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faUnsplash} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <nav className=" flex flex-col gap-1">
          <h3 className=" text-xl uppercase font-bold">Featurd work</h3>
          <ul className=" flex flex-col gap-1">
            <li className=" uppercase text-lg cursor-pointer">
              <a href="">Home</a>
            </li>
            <li className=" uppercase text-lg cursor-pointer">
              <a href="">Gallery</a>
            </li>
            <li className=" uppercase text-lg cursor-pointer">
              <a href="">About us</a>
            </li>
            <li className=" uppercase text-lg cursor-pointer">
              <a href="">Blog</a>
            </li>
          </ul>
        </nav>
        <nav className=" flex flex-col gap-1">
          <h3 className=" text-xl uppercase font-bold">Featurd work</h3>
          <ul className=" flex flex-col gap-1">
            <li className=" uppercase text-lg cursor-pointer">
              <a href="">Nature Photography</a>
            </li>
            <li className=" uppercase text-lg cursor-pointer">
              <a href="">Wild Photography</a>
            </li>
            <li className=" uppercase text-lg cursor-pointer">
              <a href="">Videography</a>
            </li>
          </ul>
        </nav>
        <nav className=" flex flex-col gap-1">
          <h3 className=" text-xl uppercase font-bold">Featurd work</h3>
          <ul className=" flex flex-col gap-1">
            <li className=" uppercase text-lg cursor-pointer">
              <a href="">Home</a>
            </li>
            <li className=" uppercase text-lg cursor-pointer">
              <a href="">Gallery</a>
            </li>
            <li className=" uppercase text-lg cursor-pointer">
              <a href="">About us</a>
            </li>
            <li className=" uppercase text-lg cursor-pointer">
              <a href="">Blog</a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
