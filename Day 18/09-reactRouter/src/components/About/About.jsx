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