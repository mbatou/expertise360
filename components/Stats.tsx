import { stats } from "@/content/stats";
import { Reveal } from "./ui/Reveal";

export function Stats() {
  return (
    <section aria-label="Chiffres clés" className="bg-navy-deep text-white">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 80}>
            <div className="text-center lg:text-left">
              <p className="font-display text-4xl font-bold text-gold sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-gold-soft">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
