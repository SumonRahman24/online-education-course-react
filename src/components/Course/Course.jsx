import "./Course.css";
import data from "../../data.json";
import { useState } from "react";
import Main from "../Main/Main";
import Cart from "../Cart/Cart";

const Course = () => {
  const [datas] = useState(data);
  const [count, setCount] = useState([]);

  const handleBtn = (data) => {
    const newCount = [...count, data];
    setCount(newCount);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center lg:justify-items-stretch">
      <div className="grid col-span-3">
        <div className="grid  gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {datas.map((data, index) => (
            <Main handleBtn={handleBtn} key={index} data={data}></Main>
          ))}
        </div>
      </div>
      <div className="grid col-span-1 bg-gray-400 ">
        <Cart count={count} />
      </div>
    </div>
  );
};

export default Course;
