import { useEffect, useRef } from "react";

const ACCENT = "205, 255, 87"; // Chartreuse — passend zu --primary

/**
 * Selbst gecodeter Hero-Hintergrund: perspektivisches Wireframe-Terrain,
 * das sanft und endlos fliesst (mathematisch, daher perfekt loopend).
 * Leichtgewichtig (2D-Canvas), pausiert ausserhalb des Viewports und bei
 * verstecktem Tab, respektiert prefers-reduced-motion (statisches Bild).
 */
const HeroBackground = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let w = 0;
    let h = 0;

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const ROWS = 24;
    const COLS = 44;

    const draw = (time: number) => {
      ctx.clearRect(0, 0, w, h);
      const horizon = h * 0.36;
      const t = time * 0.00042;

      for (let r = 0; r <= ROWS; r++) {
        const z = r / ROWS; // 0 = Horizont, 1 = Vordergrund
        const depth = Math.pow(z, 1.7);
        const y0 = horizon + depth * (h - horizon) * 1.06;
        const spread = (0.32 + depth) * w * 1.5;
        const amp = 6 + depth * 36;
        const alpha = 0.05 + depth * 0.13;

        ctx.beginPath();
        for (let c = 0; c <= COLS; c++) {
          const u = c / COLS - 0.5;
          const x = w / 2 + u * spread;
          const wave =
            Math.sin(u * 7 + t + z * 5) * 0.6 +
            Math.sin(u * 13 - t * 1.4 + z * 9) * 0.4;
          const y = y0 + wave * amp;
          if (c === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(${ACCENT}, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Punkte auf jedem 2. Ring — wie Messpunkte auf dem Raster
        if (r % 2 === 0) {
          for (let c = 2; c < COLS; c += 4) {
            const u = c / COLS - 0.5;
            const x = w / 2 + u * spread;
            const wave =
              Math.sin(u * 7 + t + z * 5) * 0.6 +
              Math.sin(u * 13 - t * 1.4 + z * 9) * 0.4;
            const y = y0 + wave * amp;
            ctx.fillStyle = `rgba(${ACCENT}, ${Math.min(alpha * 2.6, 0.55)})`;
            ctx.fillRect(x - 1, y - 1, 2, 2);
          }
        }
      }
    };

    let raf = 0;
    let inView = true;

    const start = () => {
      cancelAnimationFrame(raf);
      const loop = (time: number) => {
        draw(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    };

    const onResize = () => {
      resize();
      if (prefersReduced) draw(0);
    };
    window.addEventListener("resize", onResize);

    if (prefersReduced) {
      draw(0);
      return () => window.removeEventListener("resize", onResize);
    }

    start();

    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      cancelAnimationFrame(raf);
      if (inView && !document.hidden) start();
    });
    io.observe(canvas);

    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && inView) start();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
};

export default HeroBackground;
