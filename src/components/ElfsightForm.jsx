import { useEffect, useRef } from "react";

export default function ElfsightForm() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const container = containerRef.current;
    if (!container) return undefined;

    // Keep third-party DOM outside React's managed tree to avoid removeChild errors.
    container.innerHTML = "";
    const widget = document.createElement("div");
    widget.className = "elfsight-app-203d7257-e941-4419-a954-06ed83b1d81e";
    widget.setAttribute("data-elfsight-app-lazy", "");
    widget.style.minHeight = "400px";
    widget.style.width = "100%";
    container.appendChild(widget);

    // Prevent loading multiple times
    if (document.getElementById("elfsight-script")) return;

    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    script.id = "elfsight-script";
    document.body.appendChild(script);

    return () => {
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <div className="elfsight-wrap" suppressHydrationWarning>
      <div ref={containerRef} suppressHydrationWarning />
    </div>
  );
}
