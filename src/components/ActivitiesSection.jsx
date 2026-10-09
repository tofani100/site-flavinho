import React from "react";
import { MapPin, CalendarDays } from "lucide-react";
import { activities } from "../data/activities";

function ActivityCard({ activity, index }) {
  const isEven = index % 2 === 0;

  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-lg border border-umber/10 overflow-hidden shadow-sm">
      <div
        className={`relative h-64 md:h-auto md:min-h-[320px] ${
          isEven ? "" : "md:order-2"
        }`}
      >
        <img
          src={activity.image}
          alt={activity.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div
        className={`p-8 md:p-10 flex flex-col justify-center ${
          isEven ? "" : "md:order-1"
        }`}
      >
        <span className="inline-block self-start px-3 py-1 bg-sage/10 text-sage rounded text-xs font-body font-semibold tracking-wider uppercase mb-4">
          {activity.tag}
        </span>
        <h3 className="font-heading text-umber text-2xl md:text-3xl leading-tight mb-4">
          {activity.title}
        </h3>
        <div className="space-y-1.5 mb-4">
          {activity.location && (
            <p className="flex items-center gap-2 text-umber/60 font-body text-sm">
              <MapPin size={15} className="text-sage shrink-0" />
              {activity.location}
            </p>
          )}
          {activity.frequency && (
            <p className="flex items-center gap-2 text-umber/60 font-body text-sm">
              <CalendarDays size={15} className="text-sage shrink-0" />
              {activity.frequency}
            </p>
          )}
        </div>
        <p className="text-umber/60 font-body text-base leading-relaxed">
          {activity.description}
        </p>
      </div>
    </article>
  );
}

export default function ActivitiesSection() {
  return (
    <section id="atividades" className="bg-linen py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-12 md:mb-16">
          <p className="text-sage font-body text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Trabalhos Recentes & Atividades
          </p>
          <h2 className="font-heading text-umber text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            Amor, Saúde e Palavra em Movimento
          </h2>
          <p className="text-umber/55 font-body text-base md:text-lg">
            Algumas das ações, palestras e dinâmicas realizadas recentemente na comunidade.
          </p>
        </div>

        <div className="space-y-8">
          {activities.map((activity, index) => (
            <ActivityCard activity={activity} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
