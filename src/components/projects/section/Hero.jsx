import img from "../../../Portfolio Vector Images/Project.svg";
export default function Hero() {
  return (
    <div className="flex flex-row">
      <div className="w-1/2 pl-20">
        <img src={img} alt="" className=" ml-10" />
      </div>
      <div className="w-1/2 pt-20">
        <h1 className="text-center text-5xl font-medium py-8 ">Projects</h1>
        <p className="w-11/12 text-2xl text-center">
          Explore a collection of my diverse projects showcasing a fusion of
          frontend development, academic mini-projects, personal initiatives,
          and robust full-stack endeavors.
        </p>
      </div>
    </div>
  );
}
