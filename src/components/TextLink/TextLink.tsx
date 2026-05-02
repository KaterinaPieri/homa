import Link from 'next/link';
import ArrowUp from '@/assets/arrow_up.svg';
import ArrowDown from '@/assets/arrow_down.svg';

export type TextLinkProps = {
  text: string;
  arrow?: 'up' | 'down';
  onClick?: () => void;
  href?: string;
  className?: string;
  appearance?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
};

export default function TextLink({
  text,
  appearance = 'primary',
  arrow = 'up',
  onClick,
  href,
  className,
  size = 'md'
}: TextLinkProps) {
  const isSecondary = appearance === 'secondary';
  const classes = `text_link${className ? ` ${className}` : ''} ${size} ${isSecondary ? 'secondary' : 'primary'}`;
  const content = (
    <>
      <span className="tex">{text}</span>
      <span className={`arrow_wrapper ${arrow} ${size}`}>
        {arrow === 'up' ? <ArrowUp /> : <ArrowDown />}
      </span>
    </>
  );

  if (href) {
    const isExternal = /^(https?:|mailto:|tel:)/.test(href);
    if (isExternal) {
      return (
        <a className={classes} href={href} onClick={onClick}>
          {content}
        </a>
      );
    }
    return (
      <Link className={classes} href={href} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
