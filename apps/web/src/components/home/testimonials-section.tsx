import { motion } from "motion/react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Adamson Geomatics transformed how our executive team interprets ground truth. Their GIS mapping for our mining operations was flawless.",
      author: "Senior Operations Manager",
      role: "JDS Mining",
    },
    {
      quote:
        "Chris successfully led the mapping for our 100+ km powerline right-of-way project in BC. The title research and route analysis were exceptional.",
      author: "Lead Project Developer",
      role: "Barkerville Gold Mines",
    },
    {
      quote:
        "We rely heavily on their accurate land title searches and summary of liens. A truly indispensable partner for complex real estate developments.",
      author: "Partner",
      role: "Dentons LLC",
    },
    {
      quote:
        "Their ability to identify and map viable lithium pegmatite targets gave our exploration team a massive head start this season.",
      author: "Exploration Geologist",
      role: "BullRun Ventures",
    },
  ];

  return (
    <section className="bg-muted/30 py-24 border-y border-border/50">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
          Trusted by Industry Leaders
        </h2>
        <p className="mb-16 text-center text-muted-foreground max-w-2xl mx-auto">
          Delivering precision mapping and land services for major mining companies, law firms, and developers worldwide.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-xl border border-border/50 bg-background p-6 flex flex-col justify-between"
            >
              <p className="mb-6 text-sm italic text-muted-foreground leading-relaxed">
                "{test.quote}"
              </p>
              <div>
                <div className="font-semibold text-foreground text-sm">
                  {test.author}
                </div>
                <div className="text-xs font-medium text-primary mt-1">{test.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
