import { useState } from "preact/hooks";

export function CarouselHeader() {
  const photos = [
    { url: "../../public/slide01.png" },
    { url: "../../public/fondo01.jpg" },
    { url: "../../public/slide02.png" },
    { url: "../../public/fondo02.jpg" },
    { url: "../../public/slide03.png" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  let prevSlide = () => {
    currentIndex === 0
      ? setCurrentIndex(photos.length - 1)
      : setCurrentIndex(currentIndex - 1);
    console.log(`slide: ${currentIndex}`);
  };
  let nextSlide = () => {
    currentIndex === photos.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
    console.log(`slide: ${currentIndex}`);
  };
  let goToSlide = (key) => {
    setCurrentIndex(key);
    console.log(`slide: ${currentIndex}`);
  };

  return (
    <section id="Carousel" class="w-full h-[650px] m-auto relative">
      <div
        id="CaruoselSlides"
        style={{ backgroundImage: `url(${photos[currentIndex].url})` }}
        class="flex flex-col w-full h-full bg-center bg-cover duration-700"
      >
        {/* Nav buttons */}
        <div
          id="CarouselNavButtons"
          class="flex absolute inset-0 px-2 items-center justify-between opacity-65"
        >
          {/* Left Button  */}
          <button
            onClick={prevSlide}
            class="p-0.5 rounded-full shadow-xl bg-white/60 text-gray-800 hover:bg-white/90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 6l-6 6l6 6" />
            </svg>
          </button>
          {/* Right Button  */}
          <button
            onClick={nextSlide}
            class="p-0.5 rounded-full shadow bg-white/60 text-gray-800 hover:bg-white/80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </button>
        </div>
        {/* Current Slide Points */}
        <div
          id="CarouselCurrentSlidePoints"
          class="w-full h-full flex flex-row gap-2 pb-2 justify-center items-end"
        >
          {photos.map((photo, photoIndex) => (
            <button
              key={photoIndex}
              onClick={() => goToSlide(photoIndex)}
              class="rounded-full p-1 bg-gray-700 opacity-45 hover:opacity-95"
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
