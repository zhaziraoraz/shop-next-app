import Link from "next/link";
import React, { FC } from "react";

const Card: FC = (image) => {
  return (
    <div
      className="item-card card shadow-md m-4"
      style={{
        backgroundImage: `url("https://html5css.ru/css/img_lights.jpg"`,
      }}
    >
      <div className="card-body">
        <a href="#" className="btn btn-primary m-2">
          Details
        </a>
        <a className="p-2 rounded-3 bg-white m-2">
          <i className="bi bi-cart"></i>
        </a>
      </div>
    </div>
  );
};

export default Card;
