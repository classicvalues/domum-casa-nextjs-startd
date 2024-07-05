import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';

export default function Index() {
  return (
    <Page>
      <NextSeo
        title="Domum Casa - Luxury Rental Management"
        description="Luxury rental management for short and long-term rentals."
      />
      <Header />
      <main>
        <VideoSection />
        <ListSection />
        <FeatureSection />
        <SocialProof />
        <PricingTable />
      </main>
      <Footer />
    </Page>
  );
}
