import React from "react";

const Cart = (props) => {
  const cart = props.count;
  const priceItem = cart.reduce(
    (prev, current) => prev + parseFloat(current.price),
    0
  );

  const courseName = cart.map((item) => {
    return <li>{item.course_name}</li>;
  });

  console.log();
  return (
    <div className="pl-3 pt-3 sticky top-0 h-[50vh]">
      <h1>
        <span className="text-lg font-semibold">Selected Course</span>:{" "}
        {props.count.length}
      </h1>
      <p>
        <span className="text-lg font-semibold">Total Cost</span>:{priceItem}{" "}
      </p>
      <p>
        <span className="text-lg font-semibold border-b-2 border-red-200">
          Course Name list{" "}
        </span>
        :{courseName}{" "}
      </p>
    </div>
  );
};

export default Cart;
