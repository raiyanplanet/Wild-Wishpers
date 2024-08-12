import bg from "../assets/images/neom-StbFt6TU1xs-unsplash.jpg";

const Hero = () => {
  return (
    <>
      <section className=" h-[90vh] w-full flex items-center justify-start overflow-hidden">
        <img src={bg} alt="" className=" bg-cover" />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className=" absolute px-12 flex flex-col gap-5">
          <h1 className=" text-5xl text-gray-950 font-bold gap-2 flex flex-col uppercase">
            Capturing the
            <span className=" text-6xl text-white">Beauty of the Wild</span>
          </h1>
          <button className=" hover:bg-gray-900 w-32 transition bg-gray-950 px-3 py-2 text-white rounded-md">
            View Gallery
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
