// Sections.jsx

/* ======== Услуги ======== */
export function Services() {
  const items = [
    { t: "UX/UI дизайн", d: "Десктоп, мобайл, дизайн-системы" },
    { t: "Контент & бренд", d: "Тональность, визуальные гайды, тексты" },
    { t: "Конверсия", d: "Аналитика, A/B, воронки, лид-магниты" },
    {
      t: "QA обеспечение качества",
      d: "UI тестирование, backend тестирование, автоматическое тестирование",
    },
  ];

  return (
    <section id="services" className="px-6 md:px-12 pt-10 pb-16">
      <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-8 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
        Услуги
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((i) => (
          <div
            key={i.t}
            className="rounded-2xl p-6 border border-neutral-200 hover:border-neutral-900 transition"
          >
            <div className="text-lg font-semibold">{i.t}</div>
            <div className="text-neutral-500 mt-2">{i.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ======== Проекты ======== */
export function Projects() {
  const items = [
    { t: "E-commerce revamp", d: "+31% конверсия" },
    { t: "SaaS onboarding", d: "-18% churn, +12% активации" },
    { t: "Landing performance", d: "-35% CPL, +22% MQL" },
    {
      t: "Codikup.com",
      d: "QA Bootcamp • Automation • CI/CD курс • Mobile",
      link: "https://codikup.com",
    },
  ];

  return (
    <section id="projects" className="px-6 md:px-12 pt-10 pb-16">
      <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-8 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
        Проекты
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((i) => (
          <a
            key={i.t}
            href={i.link || "#"}
            target={i.link ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={`rounded-2xl p-6 transition shadow-sm block hover:shadow-md hover:-translate-y-1
              ${
                i.t === "Codikup.com"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0"
                  : "bg-white border border-neutral-200 hover:border-neutral-900"
              }
            `}
          >
            <div className="text-lg font-semibold">{i.t}</div>
            <div
              className={`mt-2 ${
                i.t === "Codikup.com" ? "text-white/90" : "text-neutral-500"
              }`}
            >
              {i.d}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ======== Связаться (с печатью) ======== */
export function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-12 pt-10 pb-16 overflow-hidden"
    >
      {/* Печать */}
      <div
        className="pointer-events-none select-none hidden md:block absolute top-3 right-3"
        aria-hidden="true"
      >
        <div className="relative w-36 h-36 rounded-full border-[3px] border-red-600 rotate-[-12deg] opacity-85">
          <div className="absolute inset-2 rounded-full border border-red-500/70"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-center text-[10px] leading-tight font-extrabold uppercase tracking-wider text-red-600">
              Сделано <br /> эксклюзивно <br /> для <br /> Формула Азии
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
        Связаться
      </h2>

      <p className="text-neutral-500 mb-6">
        Пиши в Telegram или на почту — пришлю предложения по улучшению и быстрый
        план работ.
      </p>

      <div className="flex flex-wrap gap-3">
        <a
          href="mailto:malakhovskii@yahoo.com"
          className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 bg-neutral-900 text-white text-sm font-semibold"
        >
          <span>malakhovskii@yahoo.com</span>
        </a>

        <a
          href="https://t.me/malik_eng"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 border border-neutral-300 text-sm font-semibold"
        >
          <span>t.me/malik_eng</span>
        </a>
      </div>
    </section>
  );
}
