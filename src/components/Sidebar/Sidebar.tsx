'use client';

import { useState } from 'react';
import Logo from '@/components/Logo/Logo';
import MenuItem from '@/components/MenuItem/MenuItem';
import TextLink from '@/components/TextLink/TextLink';
import { markIcon, markIconAlt, hamburgerIcon, closeIcon } from '@/assets/images';

type SidebarProps = {
  pageType?: 'homepage' | 'project';
};

const NAV_ITEMS = ['projects', 'studio', 'contact'];

export default function Sidebar({ pageType = 'homepage' }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <aside className="sidebar closed" onClick={() => setIsOpen(true)}>
        <div className="closed_top">
          <div className="mark_wrapper">
            <img src={markIconAlt} alt="" />
          </div>
          <span className="menu_label">MENU</span>
        </div>
        <div className="closed_bottom">
          <div className="hamburger_wrapper">
            <img src={hamburgerIcon} alt="Open menu" />
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside className="sidebar open">
      <div className="open_top">
        <div className="logo_section">
          <Logo appearance="primary" />
          <div className="small_mark">
            <img src={markIcon} alt="" />
          </div>
        </div>
        <nav className="main_menu">
          {NAV_ITEMS.map((item) => (
            <MenuItem key={item} text={item} />
          ))}
        </nav>
        {pageType === 'homepage' && (
          <div className="page_description">
            <p className="description_text">
              homa designs are deeply connected to the earth, embodying the harmony and grounding it provides
            </p>
            <TextLink text="discover more" appearance="primary" arrow="up" />
          </div>
        )}
      </div>
      <div className="open_bottom">
        <button className="close_wrapper" onClick={() => setIsOpen(false)}>
          <div className="close_icon">
            <img src={closeIcon} alt="Close menu" />
          </div>
        </button>
      </div>
    </aside>
  );
}
