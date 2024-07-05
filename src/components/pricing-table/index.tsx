// src/components/pricing-table/PricingTable.tsx

import { tw } from 'twind';
import { MdCheckCircleOutline } from 'react-icons/md';
import Button from '@/components/button';

const features = [
  'Luxury amenities included',
  'Personalized concierge service',
  '24/7 property management',
  'Flexible short and long-term leasing options',
  'High-end interior design',
  'Exclusive access to premium locations',
  'Professional cleaning services',
  'Dedicated customer support',
];

const PricingTable = () => (
  <section className={tw`bg-gradient-to-b from-gray-100 to-white shadow-inner pt-12`}>
    <div className={tw`relative max-w-7xl mx-auto mb-24 px-4 sm:px-6 lg:px-8`}>
      <div className={tw`overflow-hidden lg:max-w-none lg:flex`}>
        <div className={tw`py-8 px-6 md:px-0 lg:flex-shrink-1`}>
          <h2 className={tw`text-4xl lg:text-7xl font-bold text-gray-800 mb-12`}>Discover Our Premium Offerings</h2>
          <p className={tw`mt-6 text-base leading-6 text-gray-500`}>
            Elevate your lifestyle with Domum Casa&apos;s luxury rental management services. Enjoy the finest properties with
            unparalleled comfort and convenience.
          </p>
          <div className={tw`mt-8`}>
            <div className={tw`flex items-center`}>
              <h3 className={tw`flex-shrink-0 pr-4 text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600`}>
                What&apos;s Included
              </h3>
              <div className={tw`flex-1 border-t-2 border-gray-200`} />
            </div>
            <ul className={tw`mt-8 lg:grid lg:grid-cols-2 lg:gap-8`}>
              {features.map((feature, index) => (
                <li className={tw`flex items-center lg:col-span-1`} key={index}>
                  <div className={tw`flex-shrink-0`}>
                    <MdCheckCircleOutline className={tw`h-8 w-8 text-indigo-600`} />
                  </div>
                  <p className={tw`ml-3 text-gray-600`}>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={tw`py-8 px-6 text-center lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12`}>
          <p className={tw`text-lg font-medium text-gray-800`}>Secure Your Luxury Rental Today</p>
          <div className={tw`my-4 flex items-center justify-center text-6xl leading-none font-bold text-gray-800`}>
            $99/mo
          </div>
          <Button primary className={tw`mt-6`}>
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default PricingTable;
