import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-textDark">
            Teaching the Qur’an with Proper Tajweed
          </h1>

          <p className="text-gray-600 text-lg mb-8 max-w-xl">
            A structured and trusted online platform helping children build
            strong Qur’anic foundations — and supporting adults in refining
            their recitation.
          </p>

          <div className="flex space-x-4">
            <Link
              href="/contact"
              className="btn-primary hover:bg-primaryDark text-sm font-medium hover:bg-gray-800 transition"
            >
              Start Your Child’s Journey
            </Link>

            <Link
              href="/programs"
              className="btn-secondary"
            >
             View Programs
            </Link>
          </div>
        </div>

        {/* Visual Placeholder */}
        <div className="hidden md:block">
          <div className="w-full h-80 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
            <Image
            src="/images/hero-image.jpg"
            alt="Qur’an learning with Tajweed"
            width={600}
            height={400}
            priority
            className="rounded-xl"
          />
          </div>
        </div>

      </div>
    </section>
  );
}
