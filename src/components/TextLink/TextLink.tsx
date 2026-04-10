import './styles.scss';
import { arrowIcon, arrowLightIcon } from '../../assets/images';

type TextLinkProps = {
  text: string;
  appearance?: 'primary' | 'secondary';
  arrow?: 'up' | 'down';
  onClick?: () => void;
  className?: string;
};

export default function TextLink({
  text,
  appearance = 'primary',
  arrow = 'up',
  onClick,
  className,
}: TextLinkProps) {
  const isSecondary = appearance === 'secondary';
  return (
    <button className={`text_link${className ? ` ${className}` : ''}`} onClick={onClick}>
      <span className={`text ${isSecondary ? 'secondary' : 'primary'}`}>
        {text}
      </span>
      <span className={`arrow_wrapper ${arrow}`}>
        <img alt="" src={isSecondary ? arrowLightIcon : arrowIcon} />
      </span>
    </button>
  );
}
