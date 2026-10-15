import ContactClient from '../../components/ContactClient';

export const metadata = {
  title: 'Contact Us',
  description: 'Book a product demo or consultation for our SaaS solutions. Reach out to the Hexanx team.',
  alternates: {
    canonical: 'https://www.hexanx.in/contact',
  },
  openGraph: {
    title: 'Contact Us | Hexanx',
    description: 'Book a product demo or consultation for our SaaS solutions. Reach out to the Hexanx team.',
    url: 'https://www.hexanx.in/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
