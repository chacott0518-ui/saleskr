"use client";

interface InfiniteMarqueeProps {
  items: React.ReactNode[];
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  gap?: number;
}

export default function InfiniteMarquee({
  items,
  speed = 40,
  direction = "left",
  pauseOnHover = true,
  gap = 32,
}: InfiniteMarqueeProps) {
  return (
    <div
      className={`overflow-hidden w-full relative ${pauseOnHover ? "marquee-hover-pause" : ""}`}
    >
      <div
        className="flex w-max"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: direction === "right" ? "reverse" : "normal",
          gap: `${gap}px`,
        }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
