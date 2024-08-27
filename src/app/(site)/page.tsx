import Blog from "@/components/blog";

import ProductsSlider from "@/components/slider";

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
        <ProductsSlider />
      </div>
      <div className=" mt-20 max-[400px]:order-5">
        <section className=" max-w-[1170px] mx-auto ">
          <div
            className=" flex flex-col gap-5 items-center justify-center"
            style={{
              backgroundImage: "url(../images/layer2bg.png)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",

              height: "50vh",
            }}
          >
            <h1 className=" text-[40px] text-white">Весеняя Коллекция 2024</h1>
            <button className=" px-10 py-4 bg-white text-sm text-center">
              Посмотреть коллекцию
            </button>
          </div>
        </section>
      </div>
      <div className=" max-[400px]:order-6">
        <section className=" flex flex-wrap gap-10 mt-10 justify-center ">
          <div className=" flex  gap-10 items-center max-[650px]:max-w-[390px] max-[650px]:max-h-[165px]">
            <div>
              <Image
                src="/images/layer3pic.png"
                alt="layer3pic"
                width={188}
                height={240}
              />
            </div>
            <div className=" flex flex-col gap-2">
              <h3 className=" text-2xl font-medium">Свадебные костюмы</h3>
              <p className=" text-sm">Почувствуй комофрт</p>
              <button className=" bg-[#2C3453] px-10 py-4 text-white max-[650px]:px-5 max-[650px]:py-3 text-sm">
                Перейти к коллекции
              </button>
            </div>
          </div>
          <div className=" flex gap-10 items-center max-[650px]:flex-col ">
            <div>
              <Image
                src="/images/layer3pic2.png"
                alt="layer3pic"
                width={188}
                height={240}
              />
            </div>
            <div className=" flex flex-col gap-2 max-[650px]:items-center ">
              <h3 className=" text-2xl font-medium">Свадебные костюмы</h3>
              <p className=" text-sm">Почувствуй комофрт</p>
              <button className=" bg-[#2C3453] px-10 py-4 text-white max-[650px]:w-full ">
                К покупкам
              </button>
            </div>
          </div>
        </section>
      </div>
      <div className=" max-[400px]:order-7 ">
        <Blog />
      </div>
      <div className=" mt-20 w-full max-[400px]:order-2">
        <section className=" flex mt-5 items-center justify-center max-[400px]:flex-col ">
          <div className=" flex flex-col items-center gap-7 w-[calc(100%/3)] aspect-square object-cover max-[400px]:order-1 max-[400px]:w-full">
            <Image
              src="/images/Layer4pic1.png"
              alt="layer4"
              width={480}
              height={640}
            />
            <h3 className=" text-lg font-semibold max-[400px]:py-6">STYLE</h3>
          </div>
          <div className=" flex flex-col items-center gap-7 w-[calc(100%/3)] aspect-square object-cover max-[400px]:order-3 max-[400px]:w-full">
            <h3 className=" text-lg font-semibold max-[400px]:order-2 max-[400px]:py-6">
              CONFIDENCE
            </h3>
            <Image
              src="/images/Layer4pic2.png"
              alt="layer4"
              width={480}
              height={640}
              className=" max-[400px]:order-1"
            />
          </div>
          <div className=" flex flex-col items-center gap-7 w-[calc(100%/3)] aspect-square object-cover max-[400px]:order-2 max-[400px]:w-full ">
            <Image
              src="/images/Layer4pic3.png"
              alt="layer4"
              width={480}
              height={640}
            />
            <h3 className=" text-lg font-semibold max-[400px]:py-6">STATUS</h3>
          </div>
        </section>
      </div>
    </main>
  );
}
