export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-left reveal">
        <div className="section-tag">Commission &amp; Contract</div>
        <h2 className="contact-heading">
          SERIOUS<br />
          INQUIRIES<br />
          <span>ONLY</span>
        </h2>
        <p className="contact-body">
          We work with architects, developers, corporate fit-out companies, hospitality groups, and institutional buyers. Complete the intake form to begin a conversation.
        </p>
        <div className="contact-detail">
          <div className="contact-row">
            <span className="contact-row-label">Location</span>
            <span className="contact-row-value">Jos, Nigeria</span>
          </div>
          <div className="contact-row">
            <span className="contact-row-label">Lead Time</span>
            <span className="contact-row-value">4–16 weeks depending on scope</span>
          </div>
          <div className="contact-row">
            <span className="contact-row-label">Min. Order</span>
            <span className="contact-row-value">Single commissions welcome</span>
          </div>
        </div>
      </div>
      <div className="contact-right reveal reveal-delay-2">
        <div className="contact-form">
          <div className="form-row">
            <div className="form-field">
              <label className="form-label">Full Name</label>
              <input className="form-input" type="text" placeholder="Your name" />
            </div>
            <div className="form-field">
              <label className="form-label">Organisation</label>
              <input className="form-input" type="text" placeholder="Company or firm" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label className="form-label">Email</label>
              <input className="form-input" type="email" placeholder="your@email.com" />
            </div>
            <div className="form-field">
              <label className="form-label">Phone</label>
              <input className="form-input" type="tel" placeholder="+234 ..." />
            </div>
          </div>
          <div className="form-field">
            <label className="form-label">Client Type</label>
            <select className="form-input">
              <option value="">Select your category</option>
              <option>Architect / Designer</option>
              <option>Property Developer</option>
              <option>Corporate / Commercial</option>
              <option>Hospitality Group</option>
              <option>Residential (High-End)</option>
              <option>Export / International Buyer</option>
            </select>
          </div>
          <div className="form-field">
            <label className="form-label">Project Scope</label>
            <textarea className="form-input" placeholder="Describe the project, number of pieces, specifications..." />
          </div>
          <div className="form-row">
            <div className="form-field">
              <label className="form-label">Timeline</label>
              <select className="form-input">
                <option value="">Required by</option>
                <option>Under 6 weeks</option>
                <option>6–12 weeks</option>
                <option>3–6 months</option>
                <option>Ongoing contract</option>
              </select>
            </div>
            <div className="form-field">
              <label className="form-label">Budget Range</label>
              <select className="form-input">
                <option value="">Approx. budget</option>
                <option>₦500k – ₦2M</option>
                <option>₦2M – ₦10M</option>
                <option>₦10M – ₦50M</option>
                <option>₦50M+</option>
              </select>
            </div>
          </div>
          <button type="button" className="form-submit">Submit Inquiry →</button>
        </div>
      </div>
    </section>
  );
}
