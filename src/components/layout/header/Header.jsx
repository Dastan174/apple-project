import React from "react";
import scss from "./header.module.scss";
import { nav } from "../../../constants/common";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <h1>Exclusive</h1>
          <nav>
            {nav.map((el, idx) => (
              <Link to={el.link}>
                <span>{el.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
