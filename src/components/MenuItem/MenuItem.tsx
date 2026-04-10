type MenuItemProps = {
  text: string;
  onClick?: () => void;
};

import './styles.scss';

export default function MenuItem({ text, onClick }: MenuItemProps) {
  return (
    <button
      className="menu_item"
      onClick={onClick}
    >
      <span className="label">{text}</span>
    </button>
  );
}
