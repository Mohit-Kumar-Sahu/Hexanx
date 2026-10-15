import TermsOfService from '../../views/TermsOfService';

export const metadata = {
  title: 'Terms of Service',
  description: 'Hexanx Terms of Service — the legal agreement governing your use of our SaaS platform.',
  alternates: {
    canonical: 'https://www.hexanx.in/terms',
  },
  openGraph: {
    title: 'Terms of Service | Hexanx',
    description: 'Hexanx Terms of Service — the legal agreement governing your use of our SaaS platform.',
    url: 'https://www.hexanx.in/terms',
  },
};

export default function TermsPage() {
  return <TermsOfService />;
}
