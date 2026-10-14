import LayeredEcosystemShowcase from '../../components/LayeredEcosystemShowcase';
import PageHeader from '../../components/PageHeader';

export const metadata = {
  title: 'Products',
  description: 'Enterprise SaaS Implementation, Automation, and Ecosystem Products — Hexanx OS, Flasto, Roomyes.',
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <PageHeader title="Our Products" subtitle="SaaS Solutions" />
      <LayeredEcosystemShowcase />
    </div>
  );
}
