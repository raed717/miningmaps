import { motion } from "motion/react";
import { mono } from "@/lib/fonts";

const fieldReports = [
  {
    text: "The best lands guy in the business. Instrumental in securing 1 million ounces of gold rights.",
    author: "Chris Lodder",
    role: "President, Barkerville Gold Mines",
  },
  {
    text: "His mapping accuracy and claim staking intuition provided a massive advantage for our Northern campaigns.",
    author: "Senior Geologist",
    role: "Confidential Client, NWT",
  },
];

export function FieldReportsSection() {
  return (
    <section className="relative z-10 bg-background px-4 py-32 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-24">
        <div className="lg:col-span-1">
          <h2 className="mb-6 text-4xl font-extrabold uppercase tracking-tighter md:text-5xl">
            Field
            <br />
            Reports
          </h2>
          <p className={`text-sm uppercase tracking-widest leading-relaxed text-muted-foreground ${mono.className}`}>
            Endorsements from executives, geologists, and industry leaders.
            Verified intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:col-span-2">
          {fieldReports.map((report, index) => (
            <motion.div
              key={report.author}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="border-l-4 border-primary py-2 pl-6"
            >
              <p className="mb-6 text-lg font-medium leading-relaxed md:text-xl">
                "{report.text}"
              </p>
              <div className={`text-xs uppercase tracking-widest text-[#666] ${mono.className}`}>
                <strong className="mb-1 block text-white">{report.author}</strong>
                {report.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
