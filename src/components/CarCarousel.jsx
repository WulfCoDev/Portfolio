import { useRef, useEffect } from "react";

const cars = [
  "/amg.png",
  "/rb.png",
  "/porshe.png",
  "/ferrari.png",
    "/mclaren.png",
    
];

export default function CarCarousel() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = container.scrollWidth / 2; // start halfway

    const step = () => {
      if (!container) return;

      scrollAmount -= 0.3; // move right
      if (scrollAmount <= 0) {
        scrollAmount = container.scrollWidth / 2; // reset seamlessly
      }

      container.scrollLeft = scrollAmount;
      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);

    return () => cancelAnimationFrame(step); // cleanup
  }, []);

  return (
    <div
      className="overflow-hidden py-12 lg:py-24"
      ref={containerRef}
    >
      <div className="flex gap-10">
        {cars.concat(cars).map((car, idx) => (
          <div key={idx} className="flex-shrink-0">
            <img
              src={car}
              alt="car"
              className="h-32 w-32 lg:h-64 lg:w-64 object-contain drop-shadow-xl drop-shadow-[#003DA5] transform transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
