export const metadata = {
  title: "Qur’an & Tajweed Programs",
  description:
    "Explore Islamtec’s Qur’an and Tajweed programs designed to build correct pronunciation, confidence, and consistency.",
};
const programs = [
  {
    title: "Noorani Qaida",
    description:
      "A foundational program for beginners, especially young learners, focusing on Arabic letters, sounds, and correct pronunciation to prepare students for proper Qur’an recitation.",
  },
  {
    title: "Basic Tajweed",
    description:
      "Introduces essential Tajweed rules with practical application, helping students develop clarity and accuracy in recitation.",
  },
  {
    title: "Qur’an Recitation (Nazrah)",
    description:
      "Guided Qur’an recitation sessions aimed at improving fluency, rhythm, and pronunciation through continuous correction.",
  },
  {
    title: "Advanced Tajweed",
    description:
      "An in-depth program for committed learners, focusing on detailed Tajweed rules, common mistakes, and refined application.",
  },
  {
    title: "Hifz Support",
    description:
      "Structured memorization support with strong emphasis on Tajweed accuracy, regular revision, and long-term retention.",
  },
  {
    title: "Revision & Correction Sessions",
    description:
      "Focused sessions designed especially for adults and advanced learners to correct recurring errors and strengthen Tajweed application.",
  },
];

export default function ProgramsPage() {
  return (
    <main className="bg-white text-textDark">
      {/* Page Header */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-primary">
            Our Qur’an Programs
          </h1>
          <p className="mt-4 text-lg text-textLight max-w-3xl mx-auto">
            Structured programs focused on Tajweed excellence
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-lg leading-relaxed text-textLight">
            Our programs are carefully designed to help learners recite the
            Qur’an correctly, confidently, and consistently, with Tajweed as
            the core discipline at every stage.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <div
              key={index}
              className="rounded-xl bg-white border border-muted p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                {program.title}
              </h3>
              <p className="text-textLight leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
