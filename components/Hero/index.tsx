import Link from "next/link";
import React, { FC } from "react";
import Image from "next/image";

const Hero: FC = () => {
  return (
    <section className="hero bg-light" style={{ padding: "10% 0%" }}>
      <div className="container mx-auto">
        <div className="row align-items-center">
          <div className="col d-flex flex-column justify-content-center m-2">
            <h1 className="mb-4">
              <strong>Logitech G Pro X Superlight</strong>
            </h1>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nibh erat
            </span>
            <div className="row">
              <div className="col">
                <button className="btn btn-primary bg-dark border-0 btn-lg mt-4">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="col d-flex justify-content-center m-2">
            <img
              src="images/hero/HeroImage.svg"
              style={{ width: "400px", height: "400px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
