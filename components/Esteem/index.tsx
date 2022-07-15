import Link from "next/link";
import React, { FC } from "react";

const Esteem: FC = () => {
  return (
    <section className="esteem bg-light">
      <div className="container mx-auto">
        <h3 className="text-center m-4">
          <strong>Benefits Using Our Service</strong>
        </h3>
        <div className="row align-items-center ">
          <div className="col d-flex justify-content-center m-2">
            <img
              src="https://html5css.ru/css/img_lights.jpg"
              className="d-block rounded-2"
              style={{ width: "200px", height: "300px" }}
            />
          </div>
          <div className="col d-flex flex-column justify-content-start m-2">
            <h4 className="m-2">Help us Improve our productivity</h4>
            <span className="m-2 text-secondary">
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nibh erat "
            </span>
            <strong className="m-2">Adriana Lopez</strong>
            <p className="m-2">Client</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Esteem;
