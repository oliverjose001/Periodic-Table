export default function Dmy2() {
  let center = "flex justify-center items-center";
  let photos = "rounded-[30px] overflow-hidden";

  return (
    <>
      <h1 className={`text-5xl font-bold p-6 bg-cyan-900 ${center}`}>
        JOSE OLIVER
      </h1>

      <div className="flex justify-center">
        <div className="grid md:grid-cols-12 gap-3 w-full max-w-6xl p-4">
          {/* Header */}
          <div className="col-span-12 bg-neutral-700 p-6 rounded-lg">
            <h1 className="text-white text-4xl font-serif font-semibold text-center">
              Header Part
            </h1>
            <p className="text-white mt-3 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          {/* Image */}
          <div className="col-span-5 row-span-5 bg-gray-950 p-3 rounded-lg flex flex-wrap overflow-hidden">
            <img
              src="https://picsum.photos/201"
              className={`w-full h-full  object-cover opacity-80 ${photos}  transition-all duration-500 hover:scale-110 hover:opacity-100`}
            />
          </div>

          {/* Content 1 */}
          <div className="col-span-7 bg-zinc-950 p-5 text-white rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ipsum incidunt placeat,
            quibusdam eaque, recusandae consequatur deserunt aliquam velit
            voluptatum officiis deleniti fuga at minus beatae sit. Similique
            fugiat eos optio!
          </div>

          {/* Content 2 */}
          <div className="col-span-7 bg-zinc-950 p-5 text-white rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            deleniti libero sint nesciunt sunt fuga optio accusantium Lorem
            ipsum dolor, sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Perspiciatis voluptatum sapiente rem
            obcaecati, suscipit voluptatem veritatis numquam laboriosam aut hic
            vero itaque molestiae, est repellendus, tempore voluptates nemo vel
            harum! Facere possimus quasi blanditiis corrupti, aut esse sunt
            temporibus doloremque hic dolore molestias consectetur sequi, iste
            tempore, porro fuga. Quam incidunt maxime unde tempora quos corrupti
            est ad blanditiis distinctio. adipisicing elit. Ab, neque itaque
            incidunt sequi magni labore porro pariatur quo exercitationem?
            Nostrum officia natus nemo pariatur voluptas, voluptates facere
            velit ipsam. Repudiandae optio, ipsa ullam reprehenderit eaque ab
            laboriosam quaerat est harum. Eligendi itaque debitis quasi
            molestiae rerum perferendis voluptatem ipsum. Tempore, ducimus
            deserunt? Officiis quo hic distinctio neque quibusdam sequi
            laudantium? suscipit.
          </div>

          {/* Big text */}
          <div className="col-span-12 bg-slate-500 p-6 rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Eligendi magni optio
            deleniti, ad hic quisquam quidem amet ipsum vel animi.
          </div>

          {/* Footer */}
          <div className="col-span-12 bg-neutral-700 p-4 text-center rounded-lg">
            Footer content here
          </div>
        </div>
      </div>
    </>
  );
}
