import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Zap, Heart } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
  ];

  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing every millisecond for the best user experience.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Genuinely loving what I do, and it shows in every project.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(174_72%_56%_/_0.03)_0%,_transparent_70%)]" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left side - Image/Visual */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl blur-3xl" />
              
              {/* Main card */}
              <div className="relative glass-card rounded-3xl p-8 md:p-10">
                {/* Stats grid */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      className="text-center"
                    >
                      <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative code block */}
                <div className="bg-background/50 rounded-xl p-4 font-mono text-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-3 h-3 rounded-full bg-destructive/60" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <span className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <div className="space-y-1 text-muted-foreground">
                    <div>
                      <span className="text-accent">const</span>{" "}
                      <span className="text-primary">developer</span> = {"{"}
                    </div>
                    <div className="pl-4">
                      name: <span className="text-green-400">"Alex Chen"</span>,
                    </div>
                    <div className="pl-4">
                      passion: <span className="text-green-400">"Building great products"</span>,
                    </div>
                    <div className="pl-4">
                      coffee: <span className="text-primary">Infinity</span>
                    </div>
                    <div>{"}"}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <div>
            <motion.div variants={itemVariants}>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Turning Ideas Into
                <br />
                <span className="gradient-text">Digital Reality</span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-lg mb-6 leading-relaxed"
            >
              I'm a passionate full-stack developer with over 5 years of experience
              building web applications that users love. My journey in tech started
              with a curiosity about how things work and evolved into a career
              dedicated to creating exceptional digital experiences.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-lg mb-10 leading-relaxed"
            >
              I specialize in React, TypeScript, and Node.js, but I'm always
              exploring new technologies. When I'm not coding, you'll find me
              contributing to open-source projects or sharing knowledge with the
              developer community.
            </motion.p>

            {/* Values */}
            <motion.div variants={itemVariants} className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 glass-card rounded-xl hover:bg-secondary/30 transition-colors group"
                >
                  <div className="p-2.5 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <value.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;