export default function Footer() {
  return (
    <footer className="footer">
      <div className="divider" />
      <p className="copyright">HOMA © studio architects</p>
      <div className="bottom_bar">
        <div className="contact_group">
          <span className="group_label">Contact</span>
          <div className="links">
            <a className="footer_link" href="mailto:info@homastudioarchitects.com">
              info@homastudioarchitects.com
            </a>
            <a className="footer_link" href="tel:+35799203429">
              +357 99 203 429
            </a>
          </div>
        </div>
        <div className="social_group">
          <span className="group_label">Follow us</span>
          <div className="links">
            <a className="footer_link" href="#" target="_blank" rel="noopener noreferrer">instagram</a>
            <a className="footer_link" href="#" target="_blank" rel="noopener noreferrer">facebook</a>
            <a className="footer_link" href="#" target="_blank" rel="noopener noreferrer">pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
