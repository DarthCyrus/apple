import React from "react";
import { Link } from "react-router-dom";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          <FontAwesomeIcon icon={faAppleAlt}/> Apple
        </Link>
        <ul className="flex space-x-4">

          <li className="nav-item">
            <Link to="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
