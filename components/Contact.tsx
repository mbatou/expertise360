import { Globe, Mail, MapPin } from "lucide-react";
import { contactIntro } from "@/content/contact";
import { site } from "@/content/site";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./ui/Reveal";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-titre" className="bg-navy py-16 text-white sm:py-24">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)] gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)]">
        <Reveal>
          <div>
            <p className="mb-3 text-sm font-semibold tracking-widest text-gold uppercase">
              {contactIntro.eyebrow}
            </p>
            <h2 id="contact-titre" className="font-display text-3xl font-semibold text-balance sm:text-4xl">
              {contactIntro.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gold-soft">
              {contactIntro.description}
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium transition-colors hover:text-gold-soft"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span className="font-medium">{site.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span className="font-medium">{site.coverage}</span>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
