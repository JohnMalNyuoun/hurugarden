import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";


export default function CookiePolicy() {
  return (
    <div className="policy-page">
      <div className="policy-container">
        <Link to="/" className="policy-back-link">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <header className="policy-header">
          <span className="policy-badge">Cookies & Tracking</span>
          <h1>Cookie Policy</h1>
          <p className="policy-updated">Last Updated: September 2026</p>
        </header>

        <div className="policy-content">
          <section className="policy-section">
            <p className="policy-lead">
              This Cookie Policy outlines how Huru Garden uses cookies and web storage technologies to improve site functionality, remember user preferences, and analyze web performance.
            </p>
          </section>

          <section className="policy-section">
            <h2>1. What are Cookies?</h2>
            <p>
              Cookies are small text files stored locally in your web browser by websites you visit. They allow websites to remember your session, preserve settings across page refreshes, and provide responsive user experiences.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. Cookies We Deploy</h2>
            <div className="cookie-table-wrapper">
              <table className="cookie-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Purpose</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Strictly Necessary</strong></td>
                    <td>Maintains essential session state, navigation routing, and security.</td>
                    <td>Session / 1 Year</td>
                  </tr>
                  <tr>
                    <td><strong>Functional</strong></td>
                    <td>Saves language choices, UI preferences, and cookie banner consent status.</td>
                    <td>1 Year</td>
                  </tr>
                  <tr>
                    <td><strong>Analytics</strong></td>
                    <td>Measures visitor traffic and page performance via Meta Pixel and Google Analytics.</td>
                    <td>2 Years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="policy-section">
            <h2>3. Managing Cookie Preferences</h2>
            <p>
              You can accept or decline non-essential cookies via our site's consent banner on your first visit. Additionally, you can adjust browser settings to block or erase cookies at any time:
            </p>
            <ul>
              <li><strong>Chrome / Edge:</strong> Settings &gt; Privacy and Security &gt; Cookies and site data</li>
              <li><strong>Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Block all cookies</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
