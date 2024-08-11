import Blog from "@/components/blog";
import HomepageLayer2 from "@/components/homepageLayer2";
import HomepageLayer3 from "@/components/homepageLayer3";
import HomepageLayer4 from "@/components/homepageLayer4";
import ProductsSlider from "@/components/slider";
import { url } from "inspector";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className=" relative max-[400px]:order-1">
        <div className=" max-w-[1170px] mx-auto flex items-center min-[1000px]:h-[90vh] px-3 max-[1000px]:flex-col-reverse">
          <div className=" max-w-[503px] flex flex-col gap-3 items-start">
            <h3 className=" text-[42px] font-[200px] text-gray-700">Riera</h3>
            <h1 className=" text-[54px] font-semibold">Ваш стиль жизни”</h1>
            <p className=" text-[22px]">
              Мы собрали лучшие стили для вас на каждый день, для деловых встреч
              а так же для{" "}
            </p>
            <button className=" bg-[#2C3453] px-10 py-4 text-white">
              Начать покупки
            </button>
          </div>
          <div className=" min-[1000px]:absolute right-0 h-full w-1/2  max-[1000px]:w-full max-[1000px]:h-[50vh] min-[1000px]:px-3">
            <Image
              src="/images/Layer1.png"
              alt="layer1"
              width={782}
              height={680}
              className=" w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center gap-5 mt-10 max-[400px]:order-3">
        <h2 className=" text-[40px] font-medium">Бестселлеры</h2>
        <button className=" bg-[#2C3453] px-10 py-4 text-white">
          Посмотреть все
        </button>
      </div>
      <div className=" max-w-[1170px] mx-auto px-3 mt-10 max-[400px]:order-4">
        <ProductsSlider products={products} />
      </div>
      <div className=" mt-20 max-[400px]:order-5">
        <HomepageLayer2 />
      </div>
      <div className=" max-[400px]:order-6">
        <HomepageLayer3 />
      </div>
      <div className=" max-[400px]:order-7">
        <Blog />
      </div>
      <div className=" mt-20 w-full max-[400px]:order-2">
        <HomepageLayer4 />
      </div>
    </main>
  );
}

const products = [
  {
    id: "1",
    name: "",
    price: "",
    material_color: "",
    sizes: ["44/176", "46/178"],
    count: "2",
    articul: "051",
    category: "Costium",
  },
  {
    id: "1",
    name: "",
    price: "",
    material_color: "",
    sizes: ["44/176", "46/178"],
    count: "2",
    articul: "051",
    category: "Costium",
  },
  {
    id: "1",
    name: "",
    price: "",
    material_color: "",
    sizes: ["44/176", "46/178"],
    count: "2",
    articul: "051",
    category: "Costium",
  },
  {
    id: "1",
    name: "",
    price: "",
    material_color: "",
    sizes: ["44/176", "46/178"],
    count: "2",
    articul: "051",
    category: "Costium",
  },
  {
    id: "1",
    name: "",
    price: "",
    material_color: "",
    sizes: ["44/176", "46/178"],
    count: "2",
    articul: "051",
    category: "Costium",
  },
  {
    id: "1",
    name: "",
    price: "",
    material_color: "",
    sizes: ["44/176", "46/178"],
    count: "2",
    articul: "051",
    category: "Costium",
  },
  {
    id: "1",
    name: "",
    price: "",
    material_color: "",
    sizes: ["44/176", "46/178"],
    count: "2",
    articul: "051",
    category: "Costium",
  },
  {
    id: "1",
    name: "",
    price: "",
    material_color: "",
    sizes: ["44/176", "46/178"],
    count: "2",
    articul: "051",
    category: "Costium",
  },
];
