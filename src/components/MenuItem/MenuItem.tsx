import Link from 'next/link';
import type { MouseEvent } from 'react';

type MenuItemProps = {
  text: string;
  href: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
};

export default function MenuItem({ text, href, onClick }: MenuItemProps) {
  return (
    <Link className="menu_item" href={href} onClick={onClick}>
      <span className="label">{text}</span>
    </Link>
  );
}
