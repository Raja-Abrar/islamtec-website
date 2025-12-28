export const metadata = {
  title: "About Islamtec",
  description:
    "Islamtec is a dedicated Qur’an learning platform focused on Tajweed-based education for children and adults.",
};

export default function AboutPage() {
  return (
    <main className="bg-white text-textDark">
      {/* Page Header */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-primary">
            About Islamtec
          </h1>
          <p className="mt-4 text-lg text-textLight max-w-3xl mx-auto">
            Dedicated to authentic Qur’an learning with proper Tajweed
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-lg leading-relaxed text-textLight">
            Islamtec is a dedicated online Qur’an learning platform focused on
            teaching the Holy Qur’an with{" "}
            <span className="font-medium text-textDark">
              proper Tajweed
            </span>
            . We help children build strong foundations in Qur’anic recitation
            while supporting adults who wish to improve or correct their
            recitation through guided and structured instruction.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Our Mission
            </h2>
            <p className="leading-relaxed text-textLight">
              Our mission is to make authentic Qur’an education accessible to
              learners worldwide by providing structured, Tajweed-focused
              programs delivered in a disciplined, supportive, and respectful
              learning environment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Our Vision
            </h2>
            <p className="leading-relaxed text-textLight">
              We envision Islamtec as a trusted global platform for Qur’an
              learning—nurturing learners who recite with accuracy and
              confidence today, while laying the foundation for broader Islamic
              education in the future.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Islamtec */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-semibold text-primary mb-8">
            Why Choose Islamtec
          </h2>

          <ul className="grid gap-4 md:grid-cols-2 text-textLight">
            <li>• Strong emphasis on correct pronunciation and Tajweed</li>
            <li>• Structured learning paths designed especially for children</li>
            <li>• Qualified instructors with a disciplined teaching approach</li>
            <li>• Regular guidance and correction for steady improvement</li>
            <li>• Flexible online learning for families and adult learners</li>
          </ul>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Who We Serve
          </h2>
          <p className="leading-relaxed text-textLight">
            Islamtec primarily serves children beginning their Qur’anic journey,
            ensuring they learn correct recitation from the start. We also
            welcome adult learners who seek to refine their recitation or
            correct past mistakes through structured and supportive learning.
          </p>
        </div>
      </section>
    </main>
  );
}
