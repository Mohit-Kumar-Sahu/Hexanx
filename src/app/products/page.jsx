import LayeredEcosystemShowcase from '../../components/LayeredEcosystemShowcase';
import PageHeader from '../../components/PageHeader';

export const metadata = {
  title: 'Products',
  description: 'Enterprise B2B SaaS Ecosystem: Hexanx OS, Flasto POS, Roomyes PMS, and Ayra AI.',
  alternates: {
    canonical: 'https://www.hexanx.in/products',
  },
  openGraph: {
    title: 'Products | Hexanx',
    description: 'Enterprise B2B SaaS Ecosystem: Hexanx OS, Flasto POS, Roomyes PMS, and Ayra AI.',
    url: 'https://www.hexanx.in/products',
  },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <PageHeader title="Our Products" subtitle="SaaS Solutions" />
      <LayeredEcosystemShowcase />
    </div>
  );
}
