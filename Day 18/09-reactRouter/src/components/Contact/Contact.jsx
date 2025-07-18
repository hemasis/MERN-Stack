export default function Contact() {
  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-gradient-to-r from-white via-blue-50 to-blue-100 sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden shadow-xl rounded-2xl bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Contact Info */}
            <div className="p-8 bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300 sm:rounded-l-2xl">
              <h1 className="text-3xl sm:text-4xl text-gray-900 font-extrabold tracking-tight">
                Get in touch:
              </h1>
              <p className="text-lg sm:text-xl font-medium text-gray-800 mt-3">
                Fill in the form to start a conversation
              </p>

              <div className="flex items-center mt-8 text-gray-700">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-7 h-7 text-orange-600"
                >
                  <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="ml-4 font-medium text-md">
                  Acme Inc, Street, State, Postal Code
                </span>
              </div>

              <div className="flex items-center mt-5 text-gray-700">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-7 h-7 text-orange-600"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="ml-4 font-medium text-md">+44 1234567890</span>
              </div>

              <div className="flex items-center mt-5 text-gray-700">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-7 h-7 text-orange-600"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="ml-4 font-medium text-md">info@acme.org</span>
              </div>
            </div>

            {/* Right Form */}
            <form className="p-8 flex flex-col justify-center bg-white">
              <div className="flex flex-col mb-4">
                <label htmlFor="name" className="hidden">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 shadow-sm transition duration-200"
                />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 shadow-sm transition duration-200"
                />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="tel" className="hidden">
                  Number
                </label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Telephone Number"
                  className="py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 shadow-sm transition duration-200"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full md:w-40 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg transition-all duration-300 ease-in-out shadow-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}