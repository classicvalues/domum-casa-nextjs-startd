import { FC } from 'react';
import { tw } from 'twind';
import Button from '@/components/button';

const Header: FC = () => (
  <header className={tw`bg-white min-h-screen flex flex-col justify-center items-center`}>
    <div className={tw`max-w-4xl mx-auto py-16 px-6 lg:px-8 text-center`}>
      <h1 className={tw`font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-snug`}>
        Luxury Rentals, Redefined
      </h1>
      <div className={tw`max-w-xl mx-auto mt-6`}>
        <p className={tw`text-gray-500 text-lg lg:text-xl`}>
          Elevate your stay with our exceptional short and long-term rental properties.
        </p>
      </div>
      <div className={tw`mt-10 flex justify-center items-center`}>
        <Button primary className={tw`mr-4`}>
          Explore Rentals
        </Button>
        <Button>Contact Us</Button>
      </div>
    </div>
    <div className={tw`mt-8 text-center text-gray-600 font-mono uppercase text-sm`}>
      <p>See why our clients choose us for their luxurious accommodations</p>
    </div>
  </header>
);

export default Header;
