import Hero from "../components/Hero";
import Features from "../components/Features";
import CTA from "../components/CTA";

export const metadata = {
  title: "Learn Qur’an with Proper Tajweed",
  description:
    "Islamtec offers structured Qur’an and Tajweed programs focused on children, with support for adults seeking accurate recitation.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <CTA />
    </main>
  );
}
