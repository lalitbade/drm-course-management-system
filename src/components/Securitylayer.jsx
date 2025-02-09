import React, { useEffect } from "react";
import "./SecurityLayer.css";

const SecurityLayer = ({ children }) => {
  useEffect(() => {
    console.log("SecurityLayer mounted");

    // ❌ Disable Copy, Cut, and Paste
    const disableClipboard = (e) => {
      e.preventDefault();
      alert("Copying and pasting is disabled.");
    };

    // ❌ Disable Right-Click (Context Menu)
    const disableRightClick = (e) => {
      e.preventDefault();
      alert("Right-click is disabled.");
    };

    // ❌ Block Common DevTools Shortcuts
    const disableDevTools = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
        alert("Developer tools are disabled.");
      }
    };

    // 🛡 **Detect DevTools by Measuring Execution Time**
    const detectDevTools = () => {
      let start = performance.now();
      debugger; // Slows execution if DevTools is open
      let end = performance.now();
      if (end - start > 100) {
        document.body.innerHTML = "<h1>Access Denied</h1>";
        setTimeout(() => {
          window.close(); // Close tab (not always effective)
          window.location.href = "about:blank"; // Redirect
        }, 500);
      }
    };

    // 🕵️ **Run DevTools Detection in a Loop**
    const devToolsInterval = setInterval(() => {
      detectDevTools();
    }, 2000);

    // ✅ Apply Event Listeners
    document.addEventListener("copy", disableClipboard);
    document.addEventListener("cut", disableClipboard);
    document.addEventListener("paste", disableClipboard);
    document.addEventListener("contextmenu", disableRightClick);
    window.addEventListener("keydown", disableDevTools);

    // ✅ Cleanup Function
    return () => {
      clearInterval(devToolsInterval);

      document.removeEventListener("copy", disableClipboard);
      document.removeEventListener("cut", disableClipboard);
      document.removeEventListener("paste", disableClipboard);
      document.removeEventListener("contextmenu", disableRightClick);
      window.removeEventListener("keydown", disableDevTools);
    };
  }, []);

  return <div className="security-layer">{children}</div>;
};

export default SecurityLayer;
