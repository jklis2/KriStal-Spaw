import ContactForm from "@/containers/ContactForm";
import ContactInfo from "@/containers/ContactInfo";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-weldingRed mb-6">
        Kontakt
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}
