import InternshipsClient from '../../components/InternshipsClient';

export const metadata = {
  title: 'Internship Program',
  description: 'Apply for 6 Month Industrial Training and Internship at Hexanx. Work on live enterprise SaaS projects.',
  alternates: {
    canonical: 'https://www.hexanx.in/internships',
  },
  openGraph: {
    title: 'Internship Program | Hexanx',
    description: 'Apply for 6 Month Industrial Training and Internship at Hexanx. Work on live enterprise SaaS projects.',
    url: 'https://www.hexanx.in/internships',
  },
};

export default function InternshipsPage() {
  return <InternshipsClient />;
}
