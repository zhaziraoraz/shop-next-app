import Link from "next/link";
import React, { FC } from "react";

const Benefits: FC = (image) => {
  return (
    <section className="benefits">
      <div className="container mx-auto">
        <h3 className="text-center m-4">
          <strong>Benefits Using Our Service</strong>
        </h3>
        <div className="row justify-content-center">
          <div className="col-3 text-center m-4">
            <img src="images/benefits/quality.svg" />
            <h5>Best Quality</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              consectetur, purus id
            </p>
          </div>
          <div className="col-3 text-center m-4">
            <img src="images/benefits/freeShipping.svg" />
            <h5>Free Shipping</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              consectetur, purus id
            </p>
          </div>
          <div className="col-3 text-center m-4">
            <img src="images/benefits/warranty.svg" />
            <h5>Warranty</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              consectetur, purus id
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
