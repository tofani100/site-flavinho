import React, { useState } from "react";
import { BookOpen, Heart, Leaf, Clock, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const iconMap = {
  BookOpen,
  Heart,
  Leaf,
};

export default function ArticleModal({ article, onClose }) {
  const [currentPage, setCurrentPage] = useState(0);

  if (!article) return null;

  const IconComponent = iconMap[article.iconName] || BookOpen;
  const totalPages = article.pages.length;
  const page = article.pages[currentPage];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] bg-umber/80 backdrop-blur-sm flex items-start justify-center overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.article
          className="bg-linen w-full max-w-3xl my-8 mx-4 rounded-lg shadow-2xl"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{
            type: "spring",
            damping: 24,
            stiffness: 220,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-start justify-between p-7 md:p-10 pb-0">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-md bg-sage/15 flex items-center justify-center shrink-0">
                <IconComponent className="text-sage" size={22} />
              </div>
              <div>
                <span className="text-xs font-body font-semibold text-ochre tracking-widest uppercase block">
                  {article.category}
                </span>
                <span className="flex items-center gap-1.5 text-umber/45 text-xs font-body font-medium mt-1">
                  <Clock size={12} />
                  {article.readTime} de leitura
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-umber/50 hover:text-umber hover:bg-umber/5 rounded-full p-2 transition-all duration-200"
              aria-label="Fechar artigo"
            >
              <X size={22} />
            </button>
          </div>

          <div className="px-7 md:px-10 pt-5">
            <h2 className="font-heading text-umber text-2xl md:text-3xl leading-tight">
              {article.title}
            </h2>
            <p className="text-umber/55 font-body text-sm md:text-base mt-3 italic">
              {article.excerpt}
            </p>
          </div>

          <div className="px-7 md:px-10 py-7">
            <p className="text-xs font-body font-semibold text-sage tracking-widest uppercase mb-3">
              {page.subtitle}
            </p>
            <div className="space-y-4">
              {page.paragraphs.map((paragraph, idx) => (
                <p
                  className="text-umber/75 font-body text-sm md:text-base leading-relaxed"
                  key={idx}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="px-7 md:px-10 pb-8 flex items-center justify-between border-t border-umber/10 pt-5">
            <span className="text-xs font-body text-umber/40">
              Página {currentPage + 1} de {totalPages}
            </span>
            {currentPage < totalPages - 1 ? (
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="flex items-center gap-2 text-sage font-body text-sm font-semibold hover:gap-3 transition-all duration-200"
              >
                Próxima página <ArrowRight size={16} />
              </button>
            ) : (
              <button
                onClick={onClose}
                className="flex items-center gap-2 text-sage font-body text-sm font-semibold hover:underline transition-all duration-200"
              >
                Concluir leitura
              </button>
            )}
          </div>
        </motion.article>
      </motion.div>
    </AnimatePresence>
  );
}
