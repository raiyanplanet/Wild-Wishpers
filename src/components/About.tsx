import { faUnsplash } from "@fortawesome/free-brands-svg-icons";
import photographer from "../assets/Photos/Photographer.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <>
      <section className=" flex justify-between gap-10 px-5 items-center w-full h-[90vh]">
        <div className=" w-[50%] overflow-hidden h-[70vh] rounded-lg">
          <img
            src={photographer}
            alt=""
            className=" bg-cover overflow-hidden"
          />
        </div>
        <div className=" w-[50%] flex flex-col gap-5">
          <h2 className="text-3xl font-bold uppercase bg-gray-950 py-3 text-white px-3 rounded-lg">
            About me
          </h2>
          <p>
            Welcome! I'm Raiyan, a passionate animal and nature photographer
            dedicated to capturing the stunning beauty of wildlife and natural
            landscapes. Join me on a visual journey through the wonders of the
            wild.
            <br />
            <br />
            Join me on a visual journey through the wonders of the wild. Through
            my lens, I aim to inspire a deep appreciation for the natural world
            and its incredible inhabitants.
          </p>
          <a
            href="https://unsplash.com"
            className=" cursor-pointer bg-gray-950 rounded-lg w-44 py-2 text-white flex gap-2 items-center justify-center"
          >
            <FontAwesomeIcon icon={faUnsplash} />
            View on Unsplash
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
