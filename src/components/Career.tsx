import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead Web Development Intern</h4>
                <h5>Vidyavyukta</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Led development of multiple websites and collaborated with designers and developers to deliver production-ready web applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Web Developer</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>2023 - 2024</h3>
            </div>
            <p>
              Designed and developed custom responsive websites for local businesses. Implemented SEO best practices and integrated CMS platforms like WordPress and Shopify.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer Intern</h4>
                <h5>Tech Innovators</h5>
              </div>
              <h3>2022 - 2023</h3>
            </div>
            <p>
              Assisted in building interactive React components and migrating legacy codebases to modern React standards. Collaborated with UI/UX designers for pixel-perfect implementations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Web Developer</h4>
                <h5>Creative Digital Agency</h5>
              </div>
              <h3>2021 - 2022</h3>
            </div>
            <p>
              Developed ecommerce stores and landing pages. Optimized website performance and created tailored Shopify themes for clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
