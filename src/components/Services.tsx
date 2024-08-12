import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import img1 from "../assets/services img/image (1).png";
// import img2 from "../assets/services img/image (2).png";
// import img3 from "../assets/services img/photoshop.png";
import {
  faCamera,
  faCameraRetro,
  faEdit,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    img: <FontAwesomeIcon icon={faCamera} className=" text-3xl" />,
    title: "Wildlife Photography",
    desc: " Experience the thrill of capturing wildlife in its natural habitat with our expert photography services.",
  },
  {
    img: <FontAwesomeIcon icon={faCameraRetro} className=" text-3xl" />,
    title: "Nature Photography",
    desc: " Capture the breathtaking beauty of natural landscapes with our expert photography services.",
  },
  {
    img: <FontAwesomeIcon icon={faVideoCamera} className=" text-3xl" />,
    title: "Videography",
    desc: " Bring your stories to life with our professional videography services, capturing stunning visuals and dynamic scenes.",
  },
  {
    img: <FontAwesomeIcon icon={faEdit} className=" text-3xl" />,
    title: "Photo Editing and Retouching",
    desc: "Enhance your photos with our professional editing and retouching services, ensuring every detail is perfect.",
  },
];

const Services = () => {
  return (
    <>
      <section className=" h-[90vh] flex flex-row items-center justify-between gap-5 px-5 bg-gray-200">
        <div className=" w-[50%] flex flex-col gap-2">
          <h2 className="font-extrabold text-5xl uppercase">
            Capturing the Wild,
            <br />
            One Frame at a Time
          </h2>
          <p className=" text-gray-800">
            With a deep passion for wildlife and nature, I am committed to
            delivering exceptional photography and videography services that
            capture the true essence of the natural world. Whether you are
            looking to document a memorable adventure or create captivating
            content, my services are tailored to meet your needs and exceed your
            expectations.
          </p>
          <button className=" bg-gray-950 w-28 text-white px-3 py-2 rounded-lg hover:bg-gray-900 transition">
            Contact us
          </button>
        </div>
        <div className=" grid grid-cols-2 gap-4 w-[50%]">
          {services.map((service) => (
            <div className=" flex flex-col px-4 py-4 shadow-lg w-[300px] gap-2 bg-white rounded-xl hover:scale-110 hover:bg-gray-950 hover:text-white transition-all cursor-pointer">
              <div className="">{service.img}</div>
              <h2 className=" text-xl font-semibold">{service.title}</h2>
              <p className=" text-gray-800">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
