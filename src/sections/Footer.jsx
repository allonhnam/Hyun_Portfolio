import { socialImgs } from "../constants";

const Footer = () => {
  return (
<footer className="footer">
  <div className="footer-container">
    <div className="socials">
      {socialImgs.map((socialImg, index) => (
        <div key={index} className="icon">
          <a
            href={socialImg.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={socialImg.imgPath} alt="social icon" />
          </a>
        </div>
      ))}
    </div>
    <p className="text-center">
      © {new Date().getFullYear()} Hyun Nam. All rights reserved.
    </p>
  </div>
</footer>
  );
};

export default Footer;
