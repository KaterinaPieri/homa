import Link from 'next/link';

type MenuItemProps = {
  text: string;
  href: string;
};

export default function MenuItem({ text, href }: MenuItemProps) {
  return (
    <Link className="menu_item" href={href}>
      <span className="label">{text}</span>
    </Link>
  );
}
