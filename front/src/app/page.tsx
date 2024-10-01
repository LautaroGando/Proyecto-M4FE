// Components
import Categories from "@/components/HomeComponents/Categories/Categories";
import Offers from "@/components/HomeComponents/Offers/Offers";

// Utils
import { categories, renderCategories } from "@/components/HomeComponents/Categories/utils";
import { offers, renderOffers } from "@/components/HomeComponents/Offers/utils";

export default function Home() {

  return (
    <>
      <div className="w-full height flex items-end">
        <div className="w-full h-2/3 bg-[#373737] rounded-tr-[200px] flex flex-col gap-7 p-10 justify-center sm:w-3/4 md:rounded-tr-[300px]">
          <h1 className="text-[#6ca7ec] font-bold text-4xl sm:text-5xl md:text-7xl">TechZen</h1>
          <h2 className="text-[#f3f4f6] font-bold text-lg sm:text-xl md:text-2xl">¡Bienvenido a TechZen!</h2>
          <p className="text-[#f3f4f6] font-light w-full text-sm md:text-base lg:w-3/4">
            Estamos encantados de tenerte aquí. En TechZen, creemos que la tecnología tiene el poder de transformar tu vida, y estamos comprometidos a ofrecerte lo mejor en innovación y calidad. Explora nuestra amplia selección de productos de última generación, diseñados para satisfacer tus necesidades y superar tus expectativas.
            Descubre el futuro hoy. Si tienes alguna pregunta o necesitas asistencia, nuestro equipo de soporte está aquí para ayudarte en cada paso del camino.
          </p>
          <h2 className="text-[#f3f4f6] font-bold text-lg sm:text-xl md:text-2xl">¡Gracias por elegir TechZen!</h2>
        </div>
      </div>
      <div className="w-full h-[100vh] flex flex-col justify-evenly">
        <h2 className="text-5xl font-bold px-5 text-[#6ca7ec] sm:text-7xl sm:px-10">OFERTAS</h2>
        <Offers offers={offers} renderOffer={renderOffers} />
      </div>
      <div className="w-full h-auto flex flex-col justify-evenly sm:h-[100vh]">
        <h2 className="text-5xl font-bold px-5 text-[#6ca7ec] sm:text-7xl sm:px-10">CATÁLOGO</h2>
        <Categories categories={categories} renderCategories={renderCategories}/>
      </div>
    </>
  )

};