import Link from "next/link";
import React, { FC } from "react";

const Footer: FC = () => {
  const icons = [
    {
      id: 1,
      name: "Facebook",
      path: "#",
    },
    {
      id: 2,
      name: "Instagram",
      path: "#",
    },
    {
      id: 3,
      name: "Twitter",
      path: "#",
    },
    {
      id: 4,
      name: "Youtube",
      path: "#",
    },
  ];
  return (
    <footer className="footer bg-dark">
      <div className="container mx-auto">
        <div className="row align-items-center">
          <div className="col">
            <strong>
              <a className="navbar-brand" href="#">
                Shoply.
              </a>
            </strong>
            <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
              © Copyright 2021. Created by OurTeam
            </div>
          </div>
          <div className="col d-flex justify-content-end">
            {icons.map((item) => (
              <Link key={`${item.id}`} href={`${item.path}`}>
                <img src={`images/footer/${item.name}.svg`} className="m-2" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
