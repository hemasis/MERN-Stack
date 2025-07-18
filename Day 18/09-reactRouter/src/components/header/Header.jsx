import React from "react";
import {Link, NavLink} from "react-router-dom"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md backdrop-blur-sm">
      <nav className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 py-3 lg:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
            className="h-12"
            alt="Logo"
          />
        </Link>

        {/* Buttons */}
        <div className="flex items-center lg:order-2 space-x-2">
          <Link
            to="#"
            className="text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-100 text-gray-700 transition duration-200"
          >
            Log in
          </Link>
          <Link
            to="#"
            className="text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-orange-600 to-orange-700 text-white hover:from-orange-700 hover:to-orange-800 shadow transition duration-200"
          >
            Get started
          </Link>
        </div>

        {/* Nav Items */}
        <div className="hidden lg:flex lg:items-center lg:w-auto lg:order-1">
          <ul className="flex flex-col lg:flex-row gap-4 mt-4 lg:mt-0 lg:space-x-6 text-sm font-medium">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
              { to: "/github", label: "Github" },
            ].map(({ to, label }) => (
              <li key={label}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md transition duration-200 ${
                      isActive
                        ? "text-orange-700 font-semibold bg-orange-100"
                        : "text-gray-700 hover:text-orange-700 hover:bg-orange-50"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
