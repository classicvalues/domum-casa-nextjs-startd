import { NextSeo } from 'next-seo';
import Page from '@/components/Page';
import Header from '@/components/Header';
import VideoSection from '@/components/VideoSection';
import ListSection from '@/components/ListSection';
import FeatureSection from '@/components/FeatureSection';
import CasesSection from '@/components/CasesSection';
import SocialProof from '@/components/SocialProof';
import PricingTable from '@/components/PricingTable';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack';
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
        <Hero />
        <VideoSection />
        <ListSection />
        <FeatureSection />
        <CasesSection />
        <SocialProof />
        <PricingTable />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </Page>
  );
}
