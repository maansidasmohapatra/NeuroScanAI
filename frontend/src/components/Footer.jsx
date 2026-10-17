import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="brand">
            <span className="brand-dot" aria-hidden="true" />
            <span>NeuroScan<span className="brand-ai">AI</span></span>
          </div>
          <p className="muted small">Brain Tumor Classification Using Deep Learning</p>
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/model">Model</Link>
          <Link to="/analyze">Analyze MRI</Link>
          <Link to="/results">Results</Link>
        </div>
      </div>
      <div className="container disclaimer">
      </div>
    </footer>
  );
}
