import img from "../../../Portfolio Vector Images/Project.svg";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 lg:pl-20">
        <img src={img} alt="" className="w-full lg:w-auto mx-auto lg:ml-0" />
      </div>
      <div className="w-full lg:w-1/2 pt-0 lg:pt-28">
        <h1 className="text-center lg:text-center text-5xl font-medium py-8">
          Projects
        </h1>
        <p className="w-11/12 lg:w-full text-2xl text-center pb-10 lg:text-left">
          Explore a collection of my diverse projects showcasing a fusion of
          frontend development, academic mini-projects, personal initiatives,
          and robust full-stack endeavors.
        </p>
      </div>
    </div>
  );
}
