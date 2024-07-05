import { FC } from 'react';
import { tw } from 'twind';

const listItems = [
  {
    title: `Designers`,
    description: `Crafting exquisite interiors that embody luxury and comfort, ensuring every detail exceeds expectations.`,
  },
  {
    title: `Developers`,
    description: `Engineering seamless experiences through state-of-the-art technology, guaranteeing unparalleled functionality.`,
  },
  {
    title: `Property Managers`,
    description: `Managing prestigious estates with meticulous care, offering unparalleled service and attention to detail.`,
  },
];

const ListSection: FC = () => (
  <section className={tw`py-16 lg:py-28 overflow-hidden bg-white`}>
    <div className={tw`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`}>
      <div className={tw`mb-16 text-center`}>
        <h2 className={tw`text-base text-indigo-600 font-semibold tracking-wide uppercase`}>Enhance your Experience</h2>
        <p className={tw`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`}>
          Elevate Your Stay
        </p>
      </div>
      <div className={tw`flex flex-wrap -mx-8 items-center`}>
        <div className={tw`w-full lg:w-1/2 px-8`}>
          <ul className={tw`space-y-12`}>
            {listItems.map((item, index) => (
              <li className={tw`flex -mx-4`} key={item.title}>
                <div className={tw`px-4`}>
                  <span
                    className={tw`flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold rounded-full bg-blue-50 text-blue-500`}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className={tw`px-4`}>
                  <h3 className={tw`my-4 text-xl font-semibold`}>{item.title}</h3>
                  <p className={tw`text-gray-500 leading-loose`}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={tw`w-full lg:w-1/2 px-8`}>
          {/* Placeholder for additional content or image */}
        </div>
      </div>
    </div>
  </section>
);

export default ListSection;
