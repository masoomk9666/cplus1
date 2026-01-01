import CardCarousel from "./layout/CardCarousel";
export default function Industry() {
 
  return (
    <section className="w-full py-20 bg-white">
      <div className="w-full mx-auto  text-center">
        <p className="text-[17px] tracking-widest text-black uppercase">
          Areas of Focus – What We Are Building
        </p>

        <h2 className="text-[45px] md:[45px] font-bold mt-4">
          Engineered for your industry
        </h2>

        <p className="text-black max-w-2xl mx-auto mt-4">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="text-[18px] px-6 py-3 rounded-full bg-[#E5E5E5] text-black">
            Learn more
          </button>
          <button className="text-[18px] px-6 py-3 rounded-full bg-[#D0F94A] text-black ">
            Lets Connect
          </button>
        </div>

        {/* Cards */}
        <div className="mt-16 flex gap-6 overflow-x-auto pb-6">
          <CardCarousel />
        </div>
      </div>
    </section>
  );
}
