import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Newslater = () => {
  return (
    <>
      <section className=" px-5 py-10">
        <div className="bg-gray-950 gap-2 text-white flex flex-col rounded-lg items-center justify-center py-10">
          <h2 className=" uppercase text-3xl font-bold">
            Subscribe our newslatter
          </h2>
          <div className=" flex bg-white rounded-lg py-2 px-3 pl-4 text-lg gap-1 text-gray-500 items-center justify-center">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="email"
              placeholder="Enter email"
              id=""
              className=" outline-none border-none w-[400px]"
            />
            <button
              type="submit"
              className=" uppercase bg-gray-950 rounded-lg px-3 py-[5px] text-white"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newslater;
