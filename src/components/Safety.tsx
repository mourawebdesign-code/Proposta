"use client";
import { SAFETY } from "@/lib/content";
import { useReveal } from "@/lib/useReveal";
import s from "./Safety.module.css";

/** Segurança e cuidado: composição editorial em duas colunas. À esquerda
 * eyebrow, título e introdução; à direita os 4 cuidados, separados
 * por filetes finos. */
export default function Safety() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.12);

  return (
    <section id="safety" className={s.section}>
      <div className={`${s.inner} ${visible ? s.visible : ""}`} ref={ref}>
        <div className={s.head}>
          <span className="eyebrow">{SAFETY.eyebrow}</span>
          <h2 className={s.heading}>{SAFETY.heading}</h2>
          <p className={s.intro}>{SAFETY.intro}</p>
          <div className={s.photo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={SAFETY.image.src}
              alt={SAFETY.image.alt}
              width={SAFETY.image.w}
              height={SAFETY.image.h}
              className={s.photoImg}
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </div>
        </div>

        <ul className={s.list}>
          {SAFETY.items.map((it, i) => (
            <li key={it.title} className={s.item} style={{ ["--i" as string]: i }}>
              <div className={s.body}>
                <h3 className={s.title}>{it.title}</h3>
                <p className={s.text}>{it.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
