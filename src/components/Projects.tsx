import img1 from "../assets/Photos/bee.jpg";
import img2 from "../assets/Photos/bee2.jpg";
import img3 from "../assets/Photos/birds.jpg";
import img4 from "../assets/Photos/hill.jpg";
import img5 from "../assets/Photos/parrot.jpg";
import img6 from "../assets/Photos/screen.jpg";
import img7 from "../assets/Photos/wild2.jpg";

const gallery = [
  {
    img: img1,
    title: "Bee Photography",
  },
  {
    img: img2,
    title: "Bee with flower Photography",
  },
  {
    img: img3,
    title: "White Sharos bird Photography",
  },
  {
    img: img4,
    title: "Green nature Photography",
  },
  {
    img: img5,
    title: "Parrots Photography",
  },
  {
    img: img6,
    title: "Beautiful Land nature Photography",
  },
  {
    img: img7,
    title: "Water nature Photography",
  },
];

const Projects = () => {
  return (
    <>
      <section className=" flex flex-col px-5 py-10 gap-10 min-h-[90vh] w-full items-center justify-center">
        <h2 className=" text-3xl font-bold uppercase bg-gray-950 text-white w-full text-center py-3 rounded-lg">
          My Latest Work
        </h2>
        <div className=" grid grid-cols-4 gap-10">
          {gallery.map((item) => (
            <div className="flex flex-col hover:bg-gray-950 hover:text-white transition hover:scale-110 rounded-lg overflow-hidden shadow-md items-center justify-between h-[270px]">
              <img src={item.img} alt="" className=" w-[350px]" />
              <div className=" px-3 py-2">
                <h3 className=" text-lg font-bold text-center">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
