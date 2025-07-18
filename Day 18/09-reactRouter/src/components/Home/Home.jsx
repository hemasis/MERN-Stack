import { Link } from "react-router-dom";
// import {ArrowDownTrayIcon} from "@heroicons/react/24/solid"
export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto my-5">
      {/* Hero Section */}
      <aside className="relative bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 text-white rounded-3xl shadow-2xl px-6 sm:px-12 py-20 sm:py-28 mx-3 sm:mx-8 overflow-hidden">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-10 z-10 relative">
          {/* Text Content */}
          <div className="sm:max-w-lg space-y-6 text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
              Experience the Future
              <span className="block text-yellow-100">Download Now</span>
            </h1>
            <p className="text-lg sm:text-xl font-light text-orange-100">
              Lorem ipsum dolor sit amet consectetur. Fast, beautiful & powerful
              tool for modern needs.
            </p>

            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white text-orange-700 hover:bg-orange-50 font-semibold px-6 py-3 rounded-full transition shadow-md hover:shadow-lg"
            >
              <button className="w-5 h-5" />
              Download Now
            </Link>
          </div>

          {/* Hero Image */}
          <div className="drop-shadow-xl">
            <img
              src="https://images.pexels.com/photos/32868382/pexels-photo-32868382.jpeg"
              alt="App Illustration"
              className="w-72 sm:w-[400px] animate-bounce-slow"
            />
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl"></div>
      </aside>

      {/* Secondary Feature Image */}
      <div className="flex mx-4">
        <div className="grid place-items-center mt-20 sm:mt-28 px-4">
          <img
            src="https://images.pexels.com/photos/32916985/pexels-photo-32916985.jpeg"
            alt="Feature"
            className="w-48 sm:w-96 rounded-xl shadow-xl"
          />
        </div>

        <div className="grid place-items-center mt-20 sm:mt-28 px-4">
          <img
            src="https://images.pexels.com/photos/32916985/pexels-photo-32916985.jpeg"
            alt="Feature"
            className="w-48 sm:w-96 rounded-xl shadow-xl"
          />
        </div>

        <div className="grid place-items-center mt-20 sm:mt-28 px-4">
          <img
            src="https://images.pexels.com/photos/32916985/pexels-photo-32916985.jpeg"
            alt="Feature"
            className="w-48 sm:w-96 rounded-xl shadow-xl"
          />
        </div>
      </div>

      {/* 🧾 Footer Title */}
      <h2 className="text-center text-3xl sm:text-5xl py-16 font-bold text-orange-700 drop-shadow-md">
        Lorem Ipsum Yojo
      </h2>
    </div>
  );
}
