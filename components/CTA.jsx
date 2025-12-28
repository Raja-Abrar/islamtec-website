import Link from "next/link";

export default function CTA() {
  return (
      <section className="py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-semibold text-primary">
            Begin Your Child’s Qur’an Learning with Confidence
          </h2>
          <p className="mt-4 text-lg text-textLight">
            Take the first step toward authentic Qur’an education with
            structured guidance and a trusted learning environment.
          </p>

          <div className="mt-8">
            <a
              href="/contact"
              className="btn-primary"
            >
              Contact Islamtec
            </a>
          </div>
        </div>
      </section> 
  );
}
