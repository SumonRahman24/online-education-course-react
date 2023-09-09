import "./Main.css";

const Main = (props) => {
  const { course_name, img, instructor, price, quality } = props.data;
  return (
    <>
      <div className="card w-72 bg-base-100 shadow-xl">
        <figure className="px-5 pt-10 ">
          <img src={img} alt="Shoes" className="rounded-xl h-48" />
        </figure>
        <div className="card-body min-h-56">
          <h2 className="card-title text-2xl font-bold">{course_name}</h2>
          <p className="text-gray-400">
            <span className="text-green-600 font-bold text-lg">Insturctor</span>
            : {instructor}
          </p>
          <p className="text-gray-400">
            <span className="text-green-600 font-bold text-lg">Price</span>:
            {price}
          </p>
          <p className="font-extrabold text-gray-400">{quality}</p>
          <div className="text-end ">
            <button
              onClick={() => props.handleBtn(props.data)}
              className="btn btn-success  btn-md capitalize"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
