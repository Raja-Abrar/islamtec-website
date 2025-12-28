export default function Features() {
  return (
      <section className="bg-muted py-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-semibold text-primary">
            Our Qur’an Programs
          </h2>
          <p className="mt-4 text-lg text-textLight max-w-3xl mx-auto">
            Structured learning paths designed to support students at every
            stage of their Qur’anic journey.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
            {[
              "Noorani Qaida",
              "Basic Tajweed",
              "Qur’an Recitation (Nazrah)",
              "Advanced Tajweed",
              "Hifz Support",
              "Revision & Correction",
            ].map((program, index) => (
              <div
                key={index}
                className="rounded-xl bg-white border border-muted p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {program}
                </h3>
                <p className="text-textLight">
                  Tajweed-focused instruction designed to ensure accuracy,
                  confidence, and steady progress.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="/programs"
              className="btn-primary"
            >
              Explore All Programs
            </a>
          </div>
        </div>
      </section>
      );
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white p-8 rounded-xl border hover:shadow-md transition">
      <h3 className="text-lg font-semibold border-muted text-textLightmb-3">
        {title}
      </h3>
      <p className="border-muted text-textLighttext-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
