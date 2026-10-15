import Sitemap from '../../views/Sitemap';

export const metadata = {
  title: 'Sitemap',
  description: 'Navigate all pages and resources of Hexanx — your enterprise B2B SaaS ecosystem.',
  alternates: {
    canonical: 'https://www.hexanx.in/sitemap',
  },
  openGraph: {
    title: 'Sitemap | Hexanx',
    description: 'Navigate all pages and resources of Hexanx — your enterprise B2B SaaS ecosystem.',
    url: 'https://www.hexanx.in/sitemap',
  },
};

export default function SitemapRoute() {
  return <Sitemap />;
}
