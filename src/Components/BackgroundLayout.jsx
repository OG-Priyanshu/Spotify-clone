import React from "react";
import GlassSphere from "./GlassSphere";

const BackgroundLayout = ({ children }) => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden", backgroundColor: "#000" }}>
      {/* Persistent 3D Background */}
      <GlassSphere />
      
      {/* Page Content Overlay */}
      <div 
        style={{ 
          position: "relative", 
          zIndex: 10, 
          width: "100%", 
          height: "100%", 
          pointerEvents: "none" // Allow interacting with the sphere background where content isn't present
        }}
      >
        <div style={{ pointerEvents: "auto", height: "100%" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default BackgroundLayout;
