import React from 'react';
import { getConfig } from '@edx/frontend-platform';
import logo from '../style/assets/logo.png';
import podyplomieLogo from '../style/assets/podyplomie-logo.png';

const SiteFooter = () => {
  const lmsBaseUrl = getConfig().LMS_BASE_URL;

  return (
    <div className="footer-wrapper">
      <div className="footer-spacer" />
      <div className="footer-inner-wrapper">
        <div className="horizontal-footer">
          <img src={logo} className="footer-logo" alt="Edumedo Online" />
          <div className="footer-center-buttons">
            <a href={`${lmsBaseUrl}/about`} className="footer-link">O nas</a>
            <a href="https://edumedo.online/documents/regulamin.pdf" className="footer-link">Regulamin</a>
            <a href={`${lmsBaseUrl}/help`} className="footer-link">Pomoc</a>
          </div>
        </div>
        <div className="thin-spacer-line" />
        <div className="copyright-footer">
          <span>Copyrights &copy; 2025 Edumedo Online. Wszelkie prawa zastrzeżone.</span>
          <span className="partner-info">
            Partner serwisu:
            <a href="https://podyplomie.pl" target="_blank" rel="noopener noreferrer">
              <img src={podyplomieLogo} alt="Podyplomie.pl" style={{ height: '16px', verticalAlign: 'middle', marginLeft: '5px' }} />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SiteFooter;
