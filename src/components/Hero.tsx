import { Facebook, Github, Linkedin, Mail } from "lucide-react";
import beeoImage from "../assets/beeo.jpg";

const Hero = () => {
  const openMailClient = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const email = 'arvindtech93@gmail.com';
    const subject = 'Hello from your portfolio!';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.open(mailtoLink, '_blank');
  };
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "Good morning";
    } else if (hour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  return (
    <section id="home" className="px-4 py-10 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl border border-border/60 bg-card/60 backdrop-blur-sm shadow-[0_0_30px_hsl(var(--primary)/0.06)] p-5 md:p-7">
          <div className="flex flex-col cursor-default gap-4">
            {/* Top row: avatar, name, role */}
            <div className="flex items-center gap-4 md:gap-5">
              <img
                src={beeoImage}
                alt="Arvind Pandey - Lecturer & IT consultant."
                className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div>
                <p className="text-xl md:text-2xl font-semibold text-[hsl(var(--primary))]">Arvind</p>
                <p className="text-sm md:text-base text-foreground/80">Lecturer</p>
              </div>
            </div>

            {/* Greeting headline */}
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
              {getGreeting()}, I'm Arvind!
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base text-foreground/90 leading-relaxed max-w-3xl">
              I am a Lecturer at Crimson College of Technology, where I have the privilege of shaping the minds of future technologists and innovators. My passion for education extends beyond the classroom as I strive to inspire students to excel in their academic and professional journeys.
            </p>

            {/* Social icons row */}
            <div className="flex items-center justify-center gap-2 md:gap-3 pt-1">
              <a
                href="https://www.facebook.com/arvind.pandey.77985"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-9 w-9 rounded-full border border-border/70 bg-background/60 flex items-center justify-center hover:shadow-[0_0_18px_hsl(var(--primary)/0.22)] transition-shadow"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://wa.me/9779857088851"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Whatsapp"
                className="h-9 w-9 rounded-full border border-border/70 bg-background/60 flex items-center justify-center hover:shadow-[0_0_18px_hsl(var(--primary)/0.22)] transition-shadow"
              >
                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                  <g fill="none">
                    <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                    <path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.863-1.26l-.305-.178l-3.032.892a1.01 1.01 0 0 1-1.28-1.145l.026-.109l.892-3.032A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2m0 2a8 8 0 0 0-6.759 12.282c.198.312.283.696.216 1.077l-.039.163l-.441 1.501l1.501-.441c.433-.128.883-.05 1.24.177A8 8 0 1 0 12 4M9.102 7.184a.7.7 0 0 1 .684.075c.504.368.904.862 1.248 1.344l.327.474l.153.225a.71.71 0 0 1-.046.864l-.075.076l-.924.686a.23.23 0 0 0-.067.291c.21.38.581.947 1.007 1.373c.427.426 1.02.822 1.426 1.055c.088.05.194.034.266-.031l.038-.045l.601-.915a.71.71 0 0 1 .973-.158l.543.379c.54.385 1.059.799 1.47 1.324a.7.7 0 0 1 .089.703c-.396.924-1.399 1.711-2.441 1.673l-.159-.01l-.191-.018l-.108-.014l-.238-.04c-.924-.174-2.405-.698-3.94-2.232c-1.534-1.535-2.058-3.016-2.232-3.94l-.04-.238l-.025-.208l-.013-.175l-.004-.075c-.038-1.044.753-2.047 1.678-2.443"></path>
                  </g>
                </svg>
              </a>
              <a
                href="mailto:arvindtech93@gmail.com"
                onClick={openMailClient}
                aria-label="Email"
                className="h-9 w-9 rounded-full border border-border/70 bg-background/60 flex items-center justify-center hover:shadow-[0_0_18px_hsl(var(--primary)/0.22)] transition-shadow"
              >
                <Mail className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
