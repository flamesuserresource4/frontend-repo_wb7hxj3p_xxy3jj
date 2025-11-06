import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;

    const move = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      x += (tx - x) * 0.15;
      y += (ty - y) * 0.15;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      requestAnimationFrame(tick);
    };

    const onEnter = () => dot.classList.add('scale-150', 'bg-[#00D4FF]');
    const onLeave = () => dot.classList.remove('scale-150', 'bg-[#00D4FF]');

    document.addEventListener('pointermove', move);
    document.querySelectorAll('a, button, .cursor-accent').forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    tick();

    return () => {
      document.removeEventListener('pointermove', move);
      document.querySelectorAll('a, button, .cursor-accent').forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-50 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white/80 shadow-[0_0_0_2px_rgba(255,255,255,0.15)] transition-transform duration-200 will-change-transform"
    />
  );
}
