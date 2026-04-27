import { motion } from "motion/react";
import { Heart, Star } from "lucide-react";
import { Footer } from "./common/footer";

interface BirthdayPageProps {
  name: string;
  targetDate: Date;
}

export function BirthdayPage({ name, targetDate }: BirthdayPageProps) {
  return (
    <main className="min-h-screen relative overflow-x-hidden selection:bg-primary-container selection:text-primary">
      <Hero name={name} />
      <LetterSection targetDate={targetDate} />
      <Gallery />
      <WishSection />
      <Footer />
    </main>
  );
}

const Hero = ({ name }: Pick<BirthdayPageProps, "name">) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 hero-gradient pt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl space-y-8"
      >
        <span className="font-sans text-xs font-semibold text-primary uppercase tracking-[0.3em] block opacity-60">
          A Milestone of Grace
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-primary font-serif leading-tight">
          Happy Birthday, <br /> {`My ${name}`}
        </h1>
        <div className="w-24 h-px bg-primary mx-auto opacity-20"></div>
        <p className="font-sans text-lg md:text-xl text-on-surface-variant max-w-lg mb-12 italic leading-relaxed opacity-90 mx-auto md:mx-0">
          To the one who colors my world with shades I never knew existed.
          Today, we celebrate the light you bring to every soul you touch.
        </p>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="pt-12 text-primary/40"
        >
          <motion.div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest font-serif">
              Scroll
            </span>
            <Heart size={20} className="fill-current" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const LetterSection = ({
  targetDate,
}: Pick<BirthdayPageProps, "targetDate">) => {
  const formattedDate =
    targetDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }) || "April 28th, 2026";
  return (
    <section
      id="story"
      className="py-32 bg-background relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-secondary opacity-10 hidden lg:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <Heart size={120} strokeWidth={0.5} />
        </motion.div>
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-20 blush-shadow border border-primary-container/30 rounded-lg relative paper-texture overflow-hidden"
        >
          <article className="space-y-10 relative z-10">
            <header className="text-center pb-8 border-b border-primary-container/20">
              <h2 className="text-3xl font-serif text-primary">
                To My Dearest,
              </h2>
              <p className="text-xs font-sans tracking-widest text-outline mt-2 uppercase">
                {formattedDate}
              </p>
            </header>

            <div className="font-sans text-lg text-on-surface-variant leading-relaxed space-y-6 italic">
              <p>
                There are moments in life that feel like they were written in
                the stars long before we arrived to live them. Meeting you was
                the most beautiful sentence in my life's story. As you celebrate
                another year of life, I found myself looking back through the
                chapters we've written together.
              </p>
              <p>
                I remember the way the light caught your eyes during that first
                summer evening in Paris—how the world seemed to go quiet just so
                I could hear you laugh. You have this incredible way of making
                the mundane feel miraculous, of turning a simple Tuesday into a
                memory I want to keep forever.
              </p>
              <p>
                This year has been a testament to your strength and your
                unwavering kindness. You navigate the world with a quiet luxury
                of spirit that I admire more than words can express. You are my
                anchor, my muse, and my greatest adventure.
              </p>
              <p>
                May this year bring you as much joy as you give to everyone
                around you. May your path be lined with the same warmth you
                offer so freely. I am so lucky to walk beside you.
              </p>

              <div className="pt-8 text-left">
                <p className="italic">With all my love, forever,</p>
                <p className="text-4xl font-serif text-primary mt-2">
                  ~ Pathor
                </p>
              </div>
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiN7GIPbP0sZ7cWdAIlfBsqVbmaSvye7usrZr65h_90mCp5YGcqphcB4O3MMkEZ8Gl5swoFA0YuVZebNEjGVu7KJXtqK6prQ9C2qKFGRZOmOX35ZYJmjGU-CUowKj_CBb2RJStWnmbQbfP6LzGgBcUB8sRe4HYFgbOR4ZxGytmBiJ5XWFkxR1IKSUFLOeczO8mj00F_xJf8Zr7lOC-qhvbjAPmb9s9WF1I4nHvA00kx-D6MAZ7fVkJ4JH3iHuDqZJvt8HVNJfNYZvJ",
      alt: "Couple laughing on balcony",
      caption: "Amalfi Coast, 2023",
      className: "md:col-span-8 md:row-span-2 h-[500px] md:h-auto",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOHCq8_wIuXdx5qBoMiqPWdOG0muKwSKedMbmQ1_A3y6awLfb_y-J5TN5-mum6pX4syIZT15vKE72o3is_3EKvhSagLNjdLYY_ukBUEhJDYoDBiENEh-77NEzoQaBoYAoATEGDZvrSrrzsXacS5azYB4a_pqxr0TFIoDV61ShnsD5asYHQLf3OiOb5Hl7ttDvS67sHoBqCzgu4bNJhI3d7qqe5f8YIAOjUL6JFSDA-l3BFsvLygXLokuzLw02OuytjfnPYEPeUkHkw",
      alt: "Intertwined hands at cafe",
      className: "md:col-span-4 h-[300px] md:h-auto",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-y2_fJ4gnvx2zeMBwGWxgQkkEix05Lk8mWaqLbkMJWywLOXqsW2-JFZI5IwVWU7IzHpqXODBXgltem8rMdiSZmdN0DeO2MjaQv861XDN1DyDJOp6D0QN8DTDSN7WdFUVtcq6zeTeq4pOINngg949-77wHjFklJd-nrHuZ0VmdxoL9f0xhJ7p5kDr_kPDx19Q3ELu2ZpFMoLuE9NPJEgWA1cPJRniAUmMa9vYIxTooK631VzXM9GMmbs3U-VhovPo5yIuDhn4pOKpG",
      alt: "Misty forest",
      className: "md:col-span-4 h-[300px] md:h-auto",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAj8NHHHgRBI2mFqk6zwBmDM4k20HZ9ZlYh9llE7angWeMr3MXi6JSC_i9YBDyQMtxcYmwI68tFr5suGgokWPwwn8QLM-yGlut3FrTCbZDwFkSURBcXttoD02uiQv3-eeePKSfwTHiFdJZid0HnCJBcWglA7VHwJWKlgq-reHos3KXAUmdphddpwpAvtFXH1-6Fg0CywR2JJv807Y5g6MBoix5V2TqMUFs1BgqaiBz0m-1PwQCC4GMMB1HoQzT3tOJ8tI246tEHSL9_",
      alt: "Vintage library",
      className: "md:col-span-4 h-[300px] md:h-auto",
    },
    {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBn49xQQ201gEI6MfbEZxhUvHaCkVx2lJXRBUWFbq_sVE4QlwLTyXQe9Yrr76aZj6RifY-jPHOnslfPAzlAxfTPsAZa5DUCn06SwGIygQbHzHlVxI7UlMjSIojJ-4UfkJceOt5XOh2fbPcVqqURYzvEVy7_mj1HKujcK8TJZoVlO6QkdGMR9T9L3DKCnfSp2Mtjaa_oVccF4vpo5HDDpZLeq7pS2uMO9MW-LMlMK8PHKYDNsLtH7U7_pwPWAIu3YcauPAjhiXeitIRe",
      alt: "Champagne bubbles",
      caption: "New Year's Eve, London",
      className: "md:col-span-8 h-[300px] md:h-auto",
    },
  ];

  return (
    <section id="memories" className="py-32 max-w-7xl mx-auto px-6">
      <div className="text-center mb-20 space-y-4">
        <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em] opacity-60">
          Memories in Motion
        </span>
        <h2 className="text-4xl md:text-5xl font-serif text-primary italic">
          The Moments We Cherish
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[250px]">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`${img.className} relative group overflow-hidden rounded-xl border border-primary-container/30 blush-shadow`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {img.caption && (
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-serif italic text-lg">
                  {img.caption}
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const WishSection = () => {
  return (
    <section className="py-32 bg-primary-container/10 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-12">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block p-5 rounded-full bg-white blush-shadow mb-4"
        >
          <Star className="text-secondary fill-current" size={32} />
        </motion.div>

        <div className="space-y-6">
          <h2 className="text-4xl font-serif text-primary italic">
            Make a Wish
          </h2>
          <p className="text-lg font-serif text-on-surface-variant italic">
            Close your eyes, think of the one thing your heart desires most this
            year, and send it into the universe.
          </p>
        </div>

        <form className="mt-16 space-y-12" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <label className="block text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-4 opacity-50">
              Your Whisper to the Universe
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-0 border-b border-secondary py-4 text-2xl font-serif text-primary placeholder:text-primary/20 focus:ring-0 focus:border-primary-container transition-all text-center outline-none"
              placeholder="Type your silent wish here..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center px-12 py-5 overflow-hidden font-serif text-sm tracking-[0.2em] uppercase bg-white border border-secondary/30 text-primary rounded-pill blush-shadow hover:shadow-xl transition-all duration-500"
          >
            <span className="relative z-10">Send the Wish</span>
            <div className="absolute inset-0 bg-primary-container/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </form>
      </div>
    </section>
  );
};
