import { useEffect, useRef, type ReactNode } from "react";

type ScrollParallaxImageProps = {
  src: string;
  alt: string;
  className: string;
  imageClassName?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  children?: ReactNode;
};

export function ScrollParallaxImage({
  src,
  alt,
  className,
  imageClassName = "",
  loading = "lazy",
  fetchPriority,
  children,
}: ScrollParallaxImageProps) {
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const image = frame?.querySelector("img");
    if (!frame || !image || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animationFrame = 0;
    const updateOffset = () => {
      animationFrame = 0;
      const bounds = frame.getBoundingClientRect();
      const progress = (window.innerHeight - bounds.top) / (window.innerHeight + bounds.height);
      const travel = Math.min(bounds.height * 0.08, 32);
      image.style.setProperty(
        "--scroll-parallax-offset",
        `${((progress - 0.5) * travel).toFixed(2)}px`,
      );
    };
    const onScroll = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateOffset);
    };
    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            ([entry]) => {
              if (entry?.isIntersecting) {
                updateOffset();
                window.addEventListener("scroll", onScroll, { passive: true });
                window.addEventListener("resize", onScroll, { passive: true });
              } else {
                window.removeEventListener("scroll", onScroll);
                window.removeEventListener("resize", onScroll);
              }
            },
            { rootMargin: "100px 0px" },
          )
        : null;

    if (observer) {
      observer.observe(frame);
    } else {
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
      updateOffset();
    }

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div ref={frameRef} className={`scroll-parallax-frame ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        className={`scroll-parallax-image ${imageClassName}`}
      />
      {children}
    </div>
  );
}
