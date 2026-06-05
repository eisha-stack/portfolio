"use client";

import { cn } from "@/utils/cn";
import { useEffect, useRef } from "react";

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(108, 0, 162)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = false,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const curX = useRef(0);
  const curY = useRef(0);
  const tgX = useRef(0);
  const tgY = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--gradient-background-start", gradientBackgroundStart);
    root.style.setProperty("--gradient-background-end", gradientBackgroundEnd);
    root.style.setProperty("--first-color", firstColor);
    root.style.setProperty("--second-color", secondColor);
    root.style.setProperty("--third-color", thirdColor);
    root.style.setProperty("--fourth-color", fourthColor);
    root.style.setProperty("--fifth-color", fifthColor);
    root.style.setProperty("--pointer-color", pointerColor);
    root.style.setProperty("--size", size);
    root.style.setProperty("--blending-value", blendingValue);
  }, [
    blendingValue,
    fifthColor,
    firstColor,
    fourthColor,
    gradientBackgroundEnd,
    gradientBackgroundStart,
    pointerColor,
    secondColor,
    size,
    thirdColor,
  ]);

  useEffect(() => {
    if (!interactive) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const prefersCoarsePointer = window.matchMedia(
      "(pointer: coarse)"
    ).matches;

    if (prefersReducedMotion || prefersCoarsePointer) return;

    const animate = () => {
      if (!interactiveRef.current) return;

      curX.current += (tgX.current - curX.current) / 20;
      curY.current += (tgY.current - curY.current) / 20;
      interactiveRef.current.style.transform = `translate3d(${Math.round(curX.current)}px, ${Math.round(curY.current)}px, 0)`;

      const isMoving =
        Math.abs(tgX.current - curX.current) > 0.5 ||
        Math.abs(tgY.current - curY.current) > 0.5;

      if (isMoving) {
        rafId.current = requestAnimationFrame(animate);
      } else {
        rafId.current = null;
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!interactiveRef.current) return;
      const rect = interactiveRef.current.getBoundingClientRect();
      tgX.current = event.clientX - rect.left;
      tgY.current = event.clientY - rect.top;
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(animate);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [interactive]);

  const blobClass = cn(
    "absolute [background:radial-gradient(circle_at_center,_rgba(var(--color),_0.8)_0,_rgba(var(--color),_0)_50%)_no-repeat]",
    "[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]",
    "will-change-transform motion-reduce:animate-none"
  );

  return (
    <div
      className={cn(
        "relative min-h-dvh w-full overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 isolate contain-strict blur-2xl motion-reduce:blur-none"
      >
        <div
          style={{ "--color": "var(--first-color)" } as React.CSSProperties}
          className={cn(blobClass, "[transform-origin:center_center] animate-first opacity-100")}
        />
        <div
          style={{ "--color": "var(--second-color)" } as React.CSSProperties}
          className={cn(blobClass, "[transform-origin:calc(50%-400px)] animate-second opacity-100")}
        />
        <div
          style={{ "--color": "var(--third-color)" } as React.CSSProperties}
          className={cn(blobClass, "[transform-origin:calc(50%+400px)] animate-third opacity-100")}
        />
        <div
          style={{ "--color": "var(--fourth-color)" } as React.CSSProperties}
          className={cn(
            blobClass,
            "hidden [transform-origin:calc(50%-200px)] animate-fourth opacity-70 md:block"
          )}
        />
        <div
          style={{ "--color": "var(--fifth-color)" } as React.CSSProperties}
          className={cn(
            blobClass,
            "hidden [transform-origin:calc(50%-800px)_calc(50%+800px)] animate-fifth opacity-100 lg:block"
          )}
        />

        {interactive && (
          <div
            ref={interactiveRef}
            className={cn(
              "absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]",
              "[mix-blend-mode:var(--blending-value)] h-full w-full -left-1/2 -top-1/2 opacity-70 will-change-transform"
            )}
          />
        )}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_100%)]"
      />
      <div className={cn("relative z-10 flex min-h-dvh flex-col", className)}>
        {children}
      </div>
    </div>
  );
};
