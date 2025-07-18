# all raw html css file for react router

## header component

```javascript
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
```

## Footer component

```javascript
export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-indigo-100 via-white to-cyan-100 border-t border-indigo-200 shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 py-10 lg:py-12">
        <div className="md:flex md:justify-between md:items-start">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="h-16 w-auto drop-shadow-md hover:scale-105 transition-transform"
                alt="Logo"
              />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h2 className="mb-4 text-sm font-bold text-gray-800 uppercase tracking-wider">
                Resources
              </h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link
                    to="/"
                    className="hover:text-orange-600 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-orange-600 transition-colors"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-sm font-bold text-gray-800 uppercase tracking-wider">
                Follow us
              </h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a
                    href="https://github.com/navyumm"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-orange-600 transition-colors"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <Link
                    to="/"
                    className="hover:text-orange-600 transition-colors"
                  >
                    Discord
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-sm font-bold text-gray-800 uppercase tracking-wider">
                Legal
              </h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link
                    to="#"
                    className="hover:text-orange-600 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-orange-600 transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-8 border-orange-300" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500">
            © 2025{" "}
            <a
              href="#"
              className="hover:underline text-orange-600 font-semibold"
            >
              Navyum
            </a>
            . All Rights Reserved.
          </span>

          <div className="flex mt-4 space-x-5 sm:mt-0">
            <Link
              to="#"
              className="text-gray-400 hover:text-orange-500 transition"
            >
              <svg
                className="w-5 h-5 fill-current"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:text-orange-500 transition"
            >
              <svg
                className="w-5 h-5 fill-current"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </Link>

            <Link
              to="#"
              className="text-gray-400 hover:text-orange-500 transition"
            >
              <svg
                className="w-5 h-5 fill-current"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fill-rule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </Link>

            <Link
              to="#"
              className="text-gray-400 hover:text-orange-500 transition"
            >
              <svg
                className="w-5 h-5 fill-current"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </Link>

            <Link
              to="#"
              className="text-gray-400 hover:text-orange-500 transition"
            >
              <svg
                className="w-5 h-5 fill-current"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Dribbble account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

## Home component

```javascript
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
              <ArrowDownTrayIcon className="w-5 h-5" />
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
```

## About us component

```javascript
export default function About() {
  return (
    <div className="py-20 bg-gradient-to-r from-white to-blue-50">
      <div className="container mx-auto px-4 text-gray-700 md:px-10 lg:px-16">
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg"
              alt="Startup Illustration"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis
              voluptatem accusantium nemo perspiciatis delectus atque autem!
              Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## Contact us Component

```javascript
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
```

## Github Component

```javascript
export default function Github {
  const data = useLoaderData();

    // const [data, setData] = useState([])

  // useEffect(() => {
  //     fetch('https://api.github.com/users/navyumm')
  //     .then(response => response.json())
  //     .then(data => {
  //         console.log(data);
  //         setData(data)
  //     })
  // }, [])

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#e0f7fa] via-white to-[#f1f8e9]">
      <div className="backdrop-blur-xl bg-white/60 p-10 rounded-3xl shadow-2xl border border-gray-200 w-full max-w-md text-center transition-all duration-300 hover:scale-[1.02]">
        <img
          src={data.avatar_url}
          alt="GitHub Avatar"
          className="w-36 h-36 mx-auto rounded-full border-4 border-white shadow-md mb-4"
        />
        <h1 className="text-3xl font-bold text-gray-800">@{data.login}</h1>
        <p className="text-lg text-gray-600 mt-2">Followers</p>
        <p className="text-4xl font-extrabold text-indigo-700">
          {data.followers}
        </p>
        <a
          href={data.html_url}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition duration-300"
        >
          Visit GitHub
        </a>
      </div>
    </div>
  );
}
```