import Link from "next/link";
import React, { FC } from "react";

const Partners: FC = () => {
  return (
    <section className="partners">
      <div className="container mx-auto">
        <h3 className="text-center m-4">
          <strong>Our Partners</strong>
        </h3>
        <div className="row align-items-center">
          <div className="col d-flex justify-content-center m-2">
            <img src="images/partners/jp-morgan.svg" />
          </div>
          <div className="col d-flex justify-content-center m-2">
            <img src="images/partners/oysho.svg" />
          </div>
          <div className="col d-flex justify-content-center m-2">
            <img src="images/partners/pull-bear.svg" />
          </div>
          <div className="col d-flex justify-content-center m-2">
            <img src="images/partners/rosewood.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
