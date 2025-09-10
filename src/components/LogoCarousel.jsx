const logos = [
  "/AcuraLogo.png",
  "/CHCLogo.png",
  "/CSLogo.png",
  "/IMSALogo.svg",
  "/PhysicsLogo.png",
  "/UCRLogo.png",
];

export default function LogoCarousel() {
  return (
    <div className="overflow-hidden py-12">
      <div className="flex animate-scroll gap-10">
        {logos.concat(logos).map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt="logo"
            className="h-32 w-32 object-contain"
          />
        ))}
      </div>
    </div>
  );
}
