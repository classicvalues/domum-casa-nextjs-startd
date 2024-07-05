import { FC } from 'react';
import { tw } from 'twind';
import { MdCheckCircleOutline } from 'react-icons/md';

const FeatureSection: FC = () => (
  <section className={tw`bg-white pb-6`}>
    <div className={tw`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`}>
      <div className={tw`container mx-auto px-6 p-6 bg-white`}>
        <div className={tw`mb-16 text-center`}>
          <h4 className={tw`text-base text-indigo-600 font-semibold tracking-wide uppercase`}>Key Features</h4>
          <p className={tw`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`}>
            Elevating Your Stay
          </p>
        </div>
        <div className={tw`flex flex-wrap my-12`}>
          {features.map((feature, index) => (
            <div key={index} className={tw`w-full border-b md:w-1/2 lg:w-1/3 p-8 ${index % 3 === 2 ? 'lg:border-r lg:border-b-0' : 'md:border-r'}`}>
              <div className={tw`flex items-center mb-6`}>
                <MdCheckCircleOutline width={20} height={20} fill="currentColor" className={tw`h-6 w-6 text-indigo-500`} />
                <div className={tw`ml-4 text-xl`}>{feature.title}</div>
              </div>
              <p className={tw`leading-loose text-gray-500`}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const features = [
  {
    title: 'Luxury Accommodations',
    description: 'Experience the pinnacle of luxury with our meticulously curated rental properties.',
  },
  {
    title: 'Personalized Service',
    description: 'Enjoy bespoke services tailored to meet your every need during your stay with us.',
  },
  {
    title: 'Exclusive Locations',
    description: 'Discover prime locations that offer unparalleled views and access to local attractions.',
  },
  {
    title: 'Trusted by Clients',
    description: 'Recommended by discerning travelers who seek excellence in every aspect of their stay.',
  },
  {
    title: 'Modern Amenities',
    description: 'Experience modern amenities and state-of-the-art facilities designed for your comfort.',
  },
  {
    title: 'Flexible Booking',
    description: 'Choose from flexible booking options that cater to both short-term getaways and extended stays.',
  },
];

export default FeatureSection;
