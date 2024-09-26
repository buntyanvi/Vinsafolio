const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
        <a href="https://github.com/buntyanvi">
          <img src="/assets/github.svg" alt="github" className="w-7 h-1/2" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/vignesh-lagishetti-69a102219/">
          <img src="/assets/linkedin.svg" alt="instagram" className="w-7 h-1/2" />
          </a>
        </div>
        <div className="social-icon">
        <a href="https://x.com/Buntyanvi">
          <img src="/assets/twitter.svg" alt="twitter" className="w-7 h-1/2" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.instagram.com/vigneshlagishetti/">
          <img src="/assets/instagram.svg" alt="instagram" className="w-7 h-1/2" />
          </a>
        </div>
      </div>

      <p className="text-white-500">© 2024 Lagishetti Vignesh. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
