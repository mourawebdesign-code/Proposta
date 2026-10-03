"use client";
import Image from "next/image";
import { VISIT_CTA, WHATSAPP_HREF } from "@/lib/content";
import { useReveal } from "@/lib/useReveal";
import s from "./VisitCta.module.css";

/** 11 — CTA final. Antes carregava também a lista de depoimentos numa
 * coluna estreita; agora respira sozinho, fechando a jornada. */
export default function VisitCta() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="visit" className={s.section}>
      <div className={`${s.frame} ${visible ? s.visible : ""}`} ref={ref} data-reveal>
        <Image
          src="/images/lumea/visit/Interior.png"
          alt=""
          fill
          sizes="100vw"
          quality={95}
          className={s.bg}
          aria-hidden="true"
        />
        <div className={s.overlay} />

        <div className={s.inner}>
          <h2 className={s.heading}>
            <span className={s.line}>
              {VISIT_CTA.headingPre} <span className={s.hl}>{VISIT_CTA.headingHighlight}</span>
            </span>{" "}
            <span className={s.line}>{VISIT_CTA.headingLine2}</span>
          </h2>
          <p className={s.body}>{VISIT_CTA.body}</p>
          <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${s.cta}`}>{VISIT_CTA.button}</a>
        </div>
      </div>
    </section>
  );
}
