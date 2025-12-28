import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Islamtec | Qur’an & Tajweed Learning",
  description:
    "Contact Islamtec to enroll your child or yourself in structured Qur’an and Tajweed programs with authentic guidance.",
};

export default function ContactPage() {
  return (
    <main className="bg-white py-28 text-textDark">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-semibold text-primary">
            Contact Islamtec
          </h1>
          <p className="mt-4 text-lg text-textLight">
            We are here to guide you toward authentic Qur’an learning with
            proper Tajweed.
          </p>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}
