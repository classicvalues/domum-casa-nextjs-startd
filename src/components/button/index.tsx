import { FC, ButtonHTMLAttributes } from 'react';
import tw, { TwStyle } from 'twin.macro';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  modifier?: TwStyle;
}

const Button: FC<ButtonProps> = ({ primary = false, modifier, children, ...rest }) => {
  const baseStyle = tw`font-sans font-medium py-2 px-4 border rounded`;
  const buttonStyles = primary
    ? tw`bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-700`
    : tw`bg-white text-gray-600 border-gray-300 hover:bg-gray-100`;

  return (
    <button className={`${baseStyle} ${buttonStyles} ${modifier ?? ''}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
