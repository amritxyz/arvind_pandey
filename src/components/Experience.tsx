const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-5xl cursor-default mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Experience</h2>

        <div className="space-y-12">
          {/* Card 1 */}
          <div className="rounded-3xl border border-border/60 bg-card/60 backdrop-blur-sm shadow-[0_0_40px_hsl(var(--primary)/0.08)] p-6 md:p-8">
            <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-semibold">IT Consultant & Lecturer</h3>
              <p className="text-sm text-muted-foreground">@ Arvind Pandey</p>
              <p className="text-sm text-muted-foreground">2024 - Present</p>
            </div>
            <div className="h-px w-full bg-border/80 my-4" />
            <p className="text-sm md:text-[15px] leading-relaxed text-foreground/90">
              {/* I am an experienced IT Consultant and Lecturer at Crimson College of Technology (CCT), Butwal, Nepal, with a strong track record in both technology solutions and education. With extensive expertise in information technology, I specialize in providing strategic advice to businesses and organizations to optimize their IT infrastructure and operations. My approach combines technical knowledge with a deep understanding of industry trends to deliver innovative solutions that meet client needs. */}
              I am an IT Consultant and Lecturer at Crimson College of Technology (CCT) in Butwal, Nepal, with expertise in IT solutions, software development, and technology education. I provide strategic IT consulting services to businesses, helping them optimize their technology infrastructure, enhance security, and drive innovation. In addition, I teach and mentor students in computer science and IT, equipping them with both theoretical knowledge and practical skills to succeed in the tech industry.
            </p>
            <div className="mt-6">
              <p className="font-semibold mb-2 text-sm md:text-base">Relevant skills:</p>
              <div className="grid grid-cols-2 gap-x-6 text-sm">
                <ul className="list-disc pl-5 space-y-1">
                  <li>C#</li>
                  <li>.Net</li>
                  <li>Java</li>
                </ul>
                <ul className="list-disc pl-5 space-y-1">
                  <li>C++</li>
                  <li>DSA</li>
                  <li>React</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl border border-border/60 bg-card/60 backdrop-blur-sm shadow-[0_0_40px_hsl(var(--primary)/0.08)] p-6 md:p-8">
            <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-semibold">Employment Co-ordinator</h3>
              <p className="text-sm text-muted-foreground">2018 - Present</p>
            </div>
            <div className="h-px w-full bg-border/80 my-4" />
            <p className="text-sm md:text-[15px] leading-relaxed text-foreground/90">
              Currently on Employment Sector in Butwal Sub-metropolitan Office, Butwal-4, Rupandehi.
            </p>
            <div className="mt-6">
              <p className="font-semibold mb-2 text-sm md:text-base">Relevant skills:</p>
              <div className="grid grid-cols-2 gap-x-6 text-sm">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Hiring Manager</li>
                  <li>C#</li>
                  <li>Python</li>
                </ul>
                <ul className="list-disc pl-5 space-y-1">
                  <li>ReactJS</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
