import React from "react";

export default function HeroSection() {
  return (
    <section id="inicio" className="bg-linen border-b border-umber/5">
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-28 md:pt-32 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
          <div className="md:col-span-7">
            <p className="text-sage font-body text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-5">
              Palestrante Espírita · Fisioterapeuta · Desde 2001
            </p>
            <h1 className="font-heading text-umber text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 font-bold">
              Amor, Saúde e Palavra em Movimento
            </h1>
            <p className="text-umber/60 font-body text-base md:text-lg max-w-xl mb-8 leading-relaxed">
              Unindo a ciência do corpo à sabedoria do espírito, Flavio Henrique Bachi promove acolhimento, vitalidade e consolação através da fisioterapia e da Doutrina Espírita há mais de duas décadas.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#atividades"
                className="inline-flex items-center px-6 py-3 bg-umber text-linen font-body text-sm font-semibold rounded-md hover:bg-umber/85 transition-colors duration-300"
              >
                Conhecer o Trabalho
              </a>
              <a
                href="#contato"
                className="inline-flex items-center px-6 py-3 bg-sage text-white font-body text-sm font-semibold rounded-md hover:bg-sage/85 transition-colors duration-300"
              >
                Entrar em Contato
              </a>
            </div>
            <div className="flex flex-wrap gap-x-10 gap-y-4 mt-12 pt-8 border-t border-umber/10">
              <div>
                <p className="font-heading text-umber text-3xl">25+</p>
                <p className="text-umber/50 font-body text-sm">Anos de atuação</p>
              </div>
              <div>
                <p className="font-heading text-umber text-3xl">Fisioterapia</p>
                <p className="text-umber/50 font-body text-sm">Saúde integral</p>
              </div>
              <div>
                <p className="font-heading text-umber text-3xl">Palestras</p>
                <p className="text-umber/50 font-body text-sm">Doutrina Espírita</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative max-w-sm mx-auto md:ml-auto md:mr-0">
              <img
                src="/assets/images/flavio-hero.png"
                alt="Flavio Henrique Bachi — Palestrante Espírita e Fisioterapeuta"
                className="w-full h-auto rounded-lg object-cover shadow-lg"
              />
              <div className="bg-white rounded-b-lg border border-umber/10 border-t-0 px-5 py-4 -mt-1">
                <p className="font-heading text-umber text-lg leading-snug">
                  Flavio Henrique Bachi
                </p>
                <p className="text-umber/50 font-body text-sm">
                  São José do Rio Preto — SP
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
