import PrivacyPolicy from '../../views/PrivacyPolicy';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Hexanx Privacy Policy — how we collect, use, and protect your enterprise data.',
  alternates: {
    canonical: 'https://www.hexanx.in/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Hexanx',
    description: 'Hexanx Privacy Policy — how we collect, use, and protect your enterprise data.',
    url: 'https://www.hexanx.in/privacy',
  },
};

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}
