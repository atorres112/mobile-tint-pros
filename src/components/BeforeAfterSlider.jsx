import React, { useState } from "react";

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before tint",
  afterAlt = "After tint",
}) {
  const [value, setValue] = useState(50);

  return (
    <div className="beforeAfterWrap">
      <div className="beforeAfter" style={{ "--pos": value }}>
        <img className="afterImage" src={afterSrc} alt={afterAlt} />
        <div className="beforeImage">
          <img src={beforeSrc} alt={beforeAlt} />
        </div>
        <div className="beforeAfterHandle" aria-hidden="true" />
        <input
          className="beforeAfterRange"
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          aria-label="Adjust before and after comparison"
        />
      </div>
      <div className="beforeAfterLabels">
        <span>Before</span>
        <span>After</span>
      </div>
    </div>
  );
}
