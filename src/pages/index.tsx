import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';
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
        <Video-Section />
        <List-Section />
        <Feature-Section />
        <Cases-Section />
        <Social-Proof />
        <Pricing-Table />
      </main>
      <Footer />
    </Page>
  );
}
