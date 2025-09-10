import { useRef, useEffect } from "react";

const logos = [
  "/AcuraLogo.png",
  "/CHCLogo.png",
  "/CSLogo.png",
  "/IMSALogo.svg",
  "/PhysicsLogo.png",
  "/UCRLogo.png",
  "/HotWheelsLogo.jpg",
  "/SteamLogo.png",
  "/iRacingLogo.png",
];

export default function LogoCarousel() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;

    const step = () => {
      if (!container) return;
      scrollAmount += 0.3; // Adjust speed here (pixels per frame)
      if (scrollAmount >= container.scrollWidth / 2) scrollAmount = 0;
      container.scrollLeft = scrollAmount;
      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);

    return () => cancelAnimationFrame(step); // cleanup
  }, []);

  return (
    <div
      className="overflow-hidden py-12 lg:py-24 "
      ref={containerRef}
    >
      <div className="flex gap-10">
        {logos.concat(logos).map((logo, idx) => (
          <div key={idx} className="flex-shrink-0">
            <img
              src={logo}
              alt="logo"
              className="h-32 w-32 lg:h-48 lg:w-48 object-contain drop-shadow-xl drop-shadow-[#003DA5] transform transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
