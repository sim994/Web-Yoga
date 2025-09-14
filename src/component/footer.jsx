import React from "react";

export function Footer() {
  return (
    <footer className="footer">
      <div className="web-intro">
        <h2 className="footer-logo">_Web_Yoga</h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Far far away,
          behind the word mountains, far from the countries Vokalia and
          Consonantia, there live the blind texts.
        </p>
      </div>

      <div className="qiuck-links">
        <h2>Quick Links</h2>
        <ul>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Become Instructor</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>

      <div className="contact-box">
        <h2>Contact Info</h2>
        <ul>
          <li>King Street, 5th Avenue, New York</li>
          <li>+01 123 456 7891</li>
          <li>webyoga@mail.com</li>
        </ul>
      </div>
    </footer>
  );
}
