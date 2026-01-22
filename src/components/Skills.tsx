import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Palette,
  Database,
  Cloud,
  GitBranch,
  Smartphone,
  Layers,
  Terminal,
} from "lucide-react";

const skills = [
  {
    icon: Code2,
    name: "Frontend Development",
    description: "React, TypeScript, Next.js, Vue.js",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Database,
    name: "Backend Development",
    description: "Node.js, Python, PostgreSQL, MongoDB",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Palette,
    name: "UI/UX Design",
    description: "Figma, Tailwind CSS, Framer Motion",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Cloud,
    name: "Cloud & DevOps",
    description: "AWS, Docker, Kubernetes, CI/CD",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Smartphone,
    name: "Mobile Development",
    description: "React Native, Flutter, PWA",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: GitBranch,
    name: "Version Control",
    description: "Git, GitHub, GitLab, Code Review",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Layers,
    name: "Architecture",
    description: "System Design, Microservices, APIs",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Terminal,
    name: "Testing & QA",
    description: "Jest, Cypress, Testing Library",
    color: "from-teal-500 to-cyan-500",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(262_83%_65%_/_0.04)_0%,_transparent_60%)]" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built over years of hands-on experience
            with cutting-edge technologies.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full"
              >
                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
                
                <div className="relative h-full glass-card rounded-2xl p-6 hover:border-primary/30 transition-colors duration-300">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} p-2.5 mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>

                  {/* Decorative corner */}
                  <div className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-primary/20">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;