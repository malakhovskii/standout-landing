import { useState } from "react";

export default function StandOutHero() {
  const [angle, setAngle] = useState(-12);
  const [tracking, setTracking] = useState(-2);

  return (
    <section className="relative grid place-items-center px-4 md:px-12 min-h-[80vh] overflow-x-hidden">
      {/* Боковые тех-метки */}
      <div className="pointer-events-none select-none absolute left-4 top-40 rotate-90 text-[10px] tracking-[0.2em] text-neutral-300 uppercase hidden md:block">
        Digital Design & QA
      </div>
      <div className="pointer-events-none select-none absolute right-4 bottom-40 -rotate-90 text-[10px] tracking-[0.2em] text-neutral-300 uppercase hidden md:block">
        Be Bold • Be Clear
      </div>

      {/* Угловой заголовок */}
      <div className="max-w-[1200px] w-full origin-center" style={{ transform: `rotate(${angle}deg)` }}>
        <h1
          className="leading-[0.92] font-extrabold uppercase break-words"
          style={{
            letterSpacing: `${tracking}px`,
            fontSize: "clamp(2.2rem, 6vw, 8rem)",
          }}
        >
          <span className="block text-cyan-400">Сделаю бизнес</span>
          <span className="block text-cyan-400">заметным</span>
          <span className="block text-neutral-900">&</span>
          <span className="block text-neutral-900">STAND</span>
          <span className="block text-neutral-900">OUT</span>
        </h1>
      </div>

      {/* Подзаголовок */}
      <p className="mt-10 max-w-2xl text-center text-neutral-500">
        Делаю продукты ярче: стратегия, дизайн, контент, QA. Метрики, гипотезы,
        A/B — и бренд, который невозможно игнорировать.
      </p>

      {/* Ползунки тюнинга */}
      <div className="mt-8 flex flex-wrap gap-6 items-center justify-center text-sm text-neutral-600">
        <label className="flex items-center gap-3">
          <span className="w-24">Угол</span>
          <input
            type="range"
            min={-25} max={25}
            value={angle}
            onChange={(e) => setAngle(parseInt(e.target.value))}
            className="w-56"
          />
          <span className="tabular-nums w-10 text-right">{angle}°</span>
        </label>
        <label className="flex items-center gap-3">
          <span className="w-24">Кернинг</span>
          <input
            type="range"
            min={-4} max={6}
            value={tracking}
            onChange={(e) => setTracking(parseInt(e.target.value))}
            className="w-56"
          />
          <span className="tabular-nums w-10 text-right">{tracking}px</span>
        </label>
      </div>

      {/* CTA */}
      <div className="mt-10 flex gap-4">
        <a href="#contact" className="rounded-2xl px-6 py-3 bg-neutral-900 text-white text-sm font-semibold shadow-lg hover:shadow-xl active:translate-y-px transition">
          Обсудить проект
        </a>
        <a href="#projects" className="rounded-2xl px-6 py-3 border border-neutral-300 text-sm font-semibold hover:border-neutral-900 transition">
          Портфолио
        </a>
      </div>
    </section>
  );
}
