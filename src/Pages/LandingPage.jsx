import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="landing-page" style={{ height: "100vh", position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "40px" }}>
      
      {/* Top Navbar Simulation */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: "24px", fontWeight: "700", letterSpacing: "-1px" }}>MELORA</div>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/login" className="btn-outline" style={{ padding: "10px 24px", fontSize: "14px" }}>Log In</Link>
        </div>
      </div>

      {/* Middle Center Content - Aligned with the sphere */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center" }}
        >
          {/* We keep this space relatively empty as requested, to let the 3D visual shine */}
        </motion.div>
      </div>

      {/* Bottom Call to Action */}
      <div style={{ display: "flex", justifyContent: "center", paddingBottom: "40px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link to="/signup" className="btn-primary">
            Get Started <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>

    </div>
  );
};

export default LandingPage;
