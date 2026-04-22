import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, User, ChevronLeft } from "lucide-react";

const SignupPage = () => {
  return (
    <div 
      style={{ 
        height: "100vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        position: "relative"
      }}
    >
      {/* Back to Home Navigation */}
      <Link 
        to="/" 
        style={{ 
          position: "absolute", 
          top: "40px", 
          left: "40px", 
          display: "flex", 
          alignItems: "center", 
          gap: "8px", 
          color: "white", 
          textDecoration: "none",
          fontSize: "14px",
          fontWeight: "500",
          opacity: 0.7,
          transition: "opacity 0.3s ease"
        }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = 1)}
        onMouseOut={(e) => (e.currentTarget.style.opacity = 0.7)}
      >
        <ChevronLeft size={20} /> Back
      </Link>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass-card"
        style={{ 
          width: "100%", 
          maxWidth: "400px", 
          padding: "48px",
          textAlign: "center",
          background: "rgba(255, 255, 255, 0.02)", // Extra transparent to let the sphere shine through
          border: "1px solid rgba(255, 255, 255, 0.1)"
        }}
      >
        <h1 style={{ fontSize: "32px", marginBottom: "8px", fontWeight: "700" }}>Create account</h1>
        <p style={{ color: "#b3b3b3", marginBottom: "40px", fontSize: "14px" }}>Join the MELORA music community today.</p>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <span className="input-label">Full Name</span>
            <div style={{ position: "relative" }}>
              <User 
                size={18} 
                style={{ 
                  position: "absolute", 
                  left: "14px", 
                  top: "50%", 
                  transform: "translateY(-50%)", 
                  color: "#666" 
                }} 
              />
              <input 
                type="text" 
                className="input-field" 
                placeholder="John Doe"
                style={{ paddingLeft: "44px", width: "100%" }}
              />
            </div>
          </div>

          <div className="input-group">
            <span className="input-label">Email address</span>
            <div style={{ position: "relative" }}>
              <Mail 
                size={18} 
                style={{ 
                  position: "absolute", 
                  left: "14px", 
                  top: "50%", 
                  transform: "translateY(-50%)", 
                  color: "#666" 
                }} 
              />
              <input 
                type="email" 
                className="input-field" 
                placeholder="name@example.com"
                style={{ paddingLeft: "44px", width: "100%" }}
              />
            </div>
          </div>

          <div className="input-group" style={{ marginBottom: "32px" }}>
            <span className="input-label">Password</span>
            <div style={{ position: "relative" }}>
              <Lock 
                size={18} 
                style={{ 
                  position: "absolute", 
                  left: "14px", 
                  top: "50%", 
                  transform: "translateY(-50%)", 
                  color: "#666" 
                }} 
              />
              <input 
                type="password" 
                className="input-field" 
                placeholder="••••••••"
                style={{ paddingLeft: "44px", width: "100%" }}
              />
            </div>
          </div>

          <button type="submit" className="btn-primary" style={{ width: "100%", marginBottom: "24px" }}>
            Create Account
          </button>
        </form>

        <p style={{ fontSize: "14px", color: "#b3b3b3" }}>
          Already have an account? <Link to="/login" style={{ color: "white", textDecoration: "none", fontWeight: "600" }}>Log in</Link>
        </p>
      </motion.div>

    </div>
  );
};

export default SignupPage;
