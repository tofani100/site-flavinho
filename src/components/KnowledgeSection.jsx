import React, { useState } from "react";
import { BookOpen, Heart, Leaf, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { articles } from "../data/articles";
import ArticleModal from "./ArticleModal";

const iconMap = {
  BookOpen,
  Heart,
  Leaf,
};

export default function KnowledgeSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="conhecimento" className="bg-white border-y border-umber/5 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-12 md:mb-16">
          <p className="text-ochre font-body text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Hub de Conhecimento
          </p>
          <h2 className="font-heading text-umber text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            Reflexões para a Jornada
          </h2>
          <p className="text-umber/55 font-body text-base md:text-lg">
            Artigos e reflexões que integram a ciência da saúde à sabedoria espiritual, ampliando o conhecimento e nutrindo a alma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, idx) => {
            const IconComponent = iconMap[article.iconName] || BookOpen;

            return (
              <motion.article
                key={idx}
                onClick={() => setSelectedArticle(article)}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  type: "spring",
                  damping: 18,
                  stiffness: 260,
                }}
                className="flex flex-col bg-linen rounded-lg border border-umber/10 p-7 hover:shadow-xl hover:border-sage/30 cursor-pointer"
              >
                <div className="w-11 h-11 rounded-md bg-sage/15 flex items-center justify-center mb-5">
                  <IconComponent className="text-sage" size={20} />
                </div>
                <span className="text-xs font-body font-semibold text-ochre tracking-widest uppercase mb-2">
                  {article.category}
                </span>
                <h3 className="font-heading text-umber text-xl md:text-2xl leading-snug mb-3">
                  {article.title}
                </h3>
                <p className="text-umber/55 font-body text-sm leading-relaxed mb-6 flex-1">
                  {article.excerpt}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="flex items-center gap-1.5 text-umber/40 text-xs font-body font-medium">
                    <Clock size={13} />
                    {article.readTime} de leitura
                  </span>
                  <span className="text-sage text-xs font-body font-bold">
                    Clique para mais...
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </section>
  );
}
