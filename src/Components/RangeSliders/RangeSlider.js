import React from "react";
import AnimationSpeedRangeSlider from "./AnimationSpeedRangeSlider/AnimationSpeedRangeSlider";

import ArrayBarRangeSlider from "./ArrayBarRangeSlider/ArrayBarRangeSlider";
import "./RangeSlider.css";
function RangeSlider({
  numberOfArrayBars,
  animationSpeed,
  onChangeArrayBarRangeSlider,
  onChangeAnimationSpeedRangeSlider,
}) {
  return (
    <div id="range-slider">
      <div className="column">
        <ArrayBarRangeSlider
          numberOfArrayBars={numberOfArrayBars}
          onChangeArrayBarRangeSlider={onChangeArrayBarRangeSlider}
        />
      </div>
      <div className="column">
        <AnimationSpeedRangeSlider
          animationSpeed={animationSpeed}
          onChangeAnimationSpeedRangeSlider={onChangeAnimationSpeedRangeSlider}
        />
      </div>
    </div>
  );
}

export default RangeSlider;
