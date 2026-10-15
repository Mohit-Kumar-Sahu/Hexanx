import BookingClient from '../../components/BookingClient';

export const metadata = {
  title: 'Book a Consultation',
  description: 'Schedule a personalized product demonstration with our SaaS implementation experts.',
  alternates: {
    canonical: 'https://www.hexanx.in/booking',
  },
  openGraph: {
    title: 'Book a Consultation | Hexanx',
    description: 'Schedule a personalized product demonstration with our SaaS implementation experts.',
    url: 'https://www.hexanx.in/booking',
  },
};

export default function BookingPage() {
  return <BookingClient />;
}
