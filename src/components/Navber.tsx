import { faCamera, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navber = () => {
  return (
    <>
      <header className=" py-3 px-5 flex justify-between items-center bg-white sticky top-0 z-10 shadow-md">
        <div>
          <h1 className=" text-3xl font-extrabold ">
            <FontAwesomeIcon icon={faCamera} /> WILD WISHPERS
          </h1>
        </div>
        <nav>
          <ul className=" flex justify-center gap-5">
            <li className=" uppercase text-xl cursor-pointer">
              <a href="">Home</a>
            </li>
            <li className=" uppercase text-xl cursor-pointer">
              <a href="">Gallery</a>
            </li>
            <li className=" uppercase text-xl cursor-pointer">
              <a href="">About us</a>
            </li>
            <li className=" uppercase text-xl cursor-pointer">
              <a href="">Blog</a>
            </li>
          </ul>
        </nav>
        <div className=" border border-gray-300 rounded-3xl px-3 py-2 text-gray-500 flex gap-2 items-center justify-center">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="search"
            name=""
            placeholder="Search Photo"
            id=""
            className=" outline-none bg-transparent"
          />
        </div>
      </header>
    </>
  );
};

export default Navber;
