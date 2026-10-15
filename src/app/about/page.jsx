import AboutUs from '../../views/AboutUs';

export const metadata = {
  title: 'About Us',
  description: 'Learn about Hexanx Technologies — pioneering enterprise SaaS from Raipur for the world.',
  alternates: {
    canonical: 'https://www.hexanx.in/about',
  },
  openGraph: {
    title: 'About Us | Hexanx',
    description: 'Learn about Hexanx Technologies — pioneering enterprise SaaS from Raipur for the world.',
    url: 'https://www.hexanx.in/about',
  },
};

export default function AboutPage() {
  return <AboutUs />;
}
