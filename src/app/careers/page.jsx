import CareersClient from '../../components/CareersClient';

export const metadata = {
  title: 'Careers',
  description: 'Join the Hexanx team. View open positions for Developers and Designers.',
  alternates: {
    canonical: 'https://www.hexanx.in/careers',
  },
  openGraph: {
    title: 'Careers | Hexanx',
    description: 'Join the Hexanx team. View open positions for Developers and Designers.',
    url: 'https://www.hexanx.in/careers',
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
