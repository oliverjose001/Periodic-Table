export default function Dmy1() {
  // Common styles
  const box =
    "flex justify-center items-start p-5 overflow-hidden rounded-[20px]";
  const boximg = "overflow-hidden rounded-[20px] "; // added min-h for mobile

  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-blue-500">
      {/* Container: 
         - mobile: 1 column grid
         - desktop (md): 12 column grid
      */}
      <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-12 gap-4 w-full max-w-6xl h-auto md:h-[600px]">
        {/* box 1 - Full width on mobile, half on desktop */}
        <div className={`md:col-span-6 md:row-span-12 bg-pink-400 ${box}`}>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure,
            tempore ab eaque obcaecati laudantium similique voluptate
            voluptatibus alias dignissimos officia odio minima voluptatum...
          </p>
        </div>

        {/* box 2 - Image */}
        <div className={`md:col-span-6 md:row-span-6 bg-green-500 ${boximg}`}>
          <img
            src="https://picsum.photos/600/400"
            alt="img1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* box 3 - Text */}
        <div className={`md:col-span-3 md:row-span-6 bg-orange-400 ${box}`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
          distinctio.
        </div>

        {/* box 4 - Image */}
        <div className={`md:col-span-3 md:row-span-3 bg-red-300 ${boximg}`}>
          <img
            src="https://picsum.photos/400/300"
            alt="img2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* box 5 - Image */}
        <div className={`md:col-span-3 md:row-span-3 bg-violet-200 ${boximg}`}>
          <img
            src="https://picsum.photos/401/301"
            alt="img3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
