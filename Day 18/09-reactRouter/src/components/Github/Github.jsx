import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  const data = useLoaderData();

//     const [data, setData] = useState([])

//   useEffect(() => {
//       fetch('https://api.github.com/users/navyumm')
//       .then(response => response.json())
//       .then(data => {
//           console.log(data);
//           setData(data)
//       })
//   }, [])

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

export const githubInfoLoader = async () => {
    const respone = await fetch("https://api.github.com/users/navyumm")
    return respone.json();
}