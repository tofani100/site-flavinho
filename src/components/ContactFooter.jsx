import React, { useState } from "react";
import { Send } from "lucide-react";

export default function ContactFooter() {
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const whatsappUrl = `https://wa.me/5517991796406?text=${encodeURIComponent(
      message.trim()
    )}`;
    window.open(whatsappUrl, "_blank");
    setIsSubmitted(true);
    setMessage("");
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <footer id="contato" className="bg-umber text-linen">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="text-ochre font-body text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              Conexão Fraterna
            </p>
            <h2 className="font-heading text-linen text-3xl md:text-4xl leading-tight mb-4">
              Como podemos ajudar sua jornada?
            </h2>
            <p className="text-linen/55 font-body text-base max-w-md">
              Entre em contato para palestras, parcerias em ações sociais, ou para tirar dúvidas sobre saúde integral e espiritualidade.
            </p>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escreva sua mensagem..."
                  className="flex-1 bg-white/10 border border-white/15 rounded-md px-5 py-3.5 text-linen font-body text-base placeholder:text-linen/35 focus:outline-none focus:border-ochre/60 transition-colors duration-300"
                />
                <button
                  type="submit"
                  className="shrink-0 px-5 rounded-md bg-sage text-white font-body text-sm font-semibold flex items-center gap-2 hover:bg-sage/85 transition-colors duration-300"
                  aria-label="Enviar mensagem"
                >
                  <Send size={16} />
                  <span className="hidden sm:inline">Enviar</span>
                </button>
              </div>
              {isSubmitted && (
                <p className="mt-3 text-sage font-body text-sm">
                  Mensagem recebida com gratidão. Retornaremos em breve!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span
              aria-label="Logo Flavio Henrique Bachi"
              role="img"
              className="inline-block h-[68px] w-[68px]"
              style={{
                backgroundColor: "#2D8659",
                WebkitMaskImage: "url(/assets/images/flavio-logo.png)",
                maskImage: "url(/assets/images/flavio-logo.png)",
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
              }}
            />
            <span className="text-sm font-body font-bold text-sage">
              © {new Date().getFullYear()} Flavio Henrique Bachi — Palestrante Espírita | Fisioterapeuta
            </span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p className="text-xs font-body font-bold text-sage">
              São José do Rio Preto — SP
            </p>
            <a
              href="https://playcomunique.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-body font-semibold hover:underline"
              style={{ color: "#FFD700" }}
            >
              Desenvolvido por playcomunique.com.br
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
