import Blog from '../../views/Blog';

export const metadata = {
  title: 'Blog',
  description: 'Enterprise SaaS insights, product updates, and technology thought leadership from the Hexanx team.',
  alternates: {
    canonical: 'https://www.hexanx.in/blog',
  },
  openGraph: {
    title: 'Blog | Hexanx',
    description: 'Enterprise SaaS insights, product updates, and technology thought leadership from the Hexanx team.',
    url: 'https://www.hexanx.in/blog',
  },
};

export default function BlogPage() {
  return <Blog />;
}
