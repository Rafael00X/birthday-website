import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Heart, Star } from "lucide-react";
import { Footer } from "./common/footer";

interface BirthdayPageProps {
  name: string;
  targetDate: Date;
}

export function BirthdayPage({ name, targetDate }: BirthdayPageProps) {
  // Use a ref to keep track of the audio object across renders
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Use the path that worked in your browser test
    const audio = new Audio("song.mp3");
    audio.loop = true;
    audioRef.current = audio;

    const handleUserInteraction = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          console.log("Music started successfully!");
          // Remove listeners once it starts so we don't keep calling play()
          removeListeners();
        } catch (err) {
          console.error("Playback still failed:", err);
        }
      }
    };

    const removeListeners = () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };

    // 1. Try to play immediately (works if they already interacted with a previous page)
    handleUserInteraction();

    // 2. Add listeners for the first interaction on this page
    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("touchstart", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);

    return () => {
      removeListeners();
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

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
        <p className="font-sans text-lg md:text-xl text-on-surface-variant max-w-lg mb-12 italic leading-relaxed opacity-90 mx-auto">
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
                Meeting you was the most beautiful sentence in the story of my
                life. And as you turn another page today, I find myself
                revisiting all the moments that made us us.
              </p>
              <p>
                I still remember the day we crossed that quiet line between
                friendship and something deeper. The feeling of finally being
                able to call you mine is something I’ll carry with me forever.
                There’s so much I want to tell you about how deeply I admire you
                and love you—but I’ll save some of those words for our next
                Valentine’s.
              </p>
              <p>
                This past year hasn’t been easy for you, I know that. But even
                through the pressure, the stress, and the moments that felt
                overwhelming—you’ve shown a kind of strength that amazes me. Not
                loud or dramatic, but steady, graceful, and real. You keep
                going, and that’s something I admire more than I can ever fully
                put into words.
              </p>
              <p>
                I hope this year is gentler with you. I hope it brings you peace
                on the days you need it most, confidence when you doubt
                yourself, and happiness that feels effortless. You deserve all
                of that—and so much more. And no matter what comes, just know
                this: you’re not alone in any of it. I’m right here, always.
              </p>
              <div className="pt-8 text-left">
                <p className="italic">Happy Birthday, my love.</p>
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
      src: "Together1.jpeg",
      alt: "Dhobighat, Barrackpore, 2025",
      caption: "Dhobighat, Barrackpore, 2025",
      className: "md:col-span-8 md:row-span-2 h-[500px] md:h-auto",
    },
    {
      src: "Together2.jpeg",
      alt: "Shantiniketan, 2024",
      caption: "Shantiniketan, 2024",
      className: "md:col-span-4 md:row-span-2 h-[600px] md:h-auto",
    },
    {
      src: "Together3.jpeg",
      alt: "OG By The Lake, Kolkata, 2025",
      caption: "OG By The Lake, Kolkata, 2025",
      className: "md:col-span-4 h-[600px] md:h-auto",
    },
    {
      src: "Together4.jpeg",
      alt: "Mani Square, Kolkata, 2024",
      caption: "Mani Square, Kolkata, 2024",
      className: "md:col-span-8 h-[600px] md:h-auto",
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
