import { NextSeo } from 'next-seo';
import Page from 'src/components/page';
import Header from 'src/components/header';
import VideoSection from 'src/components/video-section';
import ListSection from 'src/components/list-section';
import FeatureSection from 'src/components/feature-section';
import CasesSection from 'src/components/cases-section';
import SocialProof from 'src/components/social-proof';
import PricingTable from 'src/components/pricing-table';
import Footer from 'src/components/footer';
import { meta } from '@/data/config';

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
        <CasesSection />
        <SocialProof />
        <PricingTable />
      </main>
      <Footer />
    </Page>
  );
}
