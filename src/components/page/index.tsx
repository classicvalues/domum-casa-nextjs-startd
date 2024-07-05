// src/components/page/index.tsx

import Head from 'next/head';
import Navigation from '@/components/navigation'; // Updated to Navigation (assuming correct path)
import { tw } from 'twind';
import Footer from '@/components/footer'; // Added Footer component for completeness

interface IProps {
  children: React.ReactNode;
}

const Page = ({ children }: IProps) => (
  <div>
    <Head>
      <title>Domum Casa - Luxury Rental Management</title>
      <meta name="description" content="Domum Casa offers luxury rental management services for short and long-term rentals. Explore our upscale property management solutions today." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={tw(`min-h-screen flex flex-col`)}>
      <Navigation />
      <main className={tw(`flex-grow`)}>{children}</main>
      <Footer /> {/* Include Footer component at the bottom */}
    </div>
  </div>
);

export default Page;
