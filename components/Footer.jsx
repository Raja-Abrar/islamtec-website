import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Islamtec
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            A platform dedicated to knowledge, technology, and purpose,
            aligned with Islamic values.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/programs">Programs</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3">
            Resources
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="#">Articles</Link></li>
            <li><Link href="#">Learning</Link></li>
            <li><Link href="#">Community</Link></li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3">
            Get in Touch
          </h4>
          <p className="text-sm text-gray-600 mb-4">
            Start your journey with Islamtec today.
          </p>
          <Link
            href="/contact"
            className="btn-primary"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="border-t py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Islamtec. All rights reserved.
      </div>
    </footer>
  );
}
