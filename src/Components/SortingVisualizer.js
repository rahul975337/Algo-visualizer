import "./SortingVisualizer.css";

import { playAudio, randomIntFromInterval } from "./../HelperFunctions.js";
import { useEffect, useState } from "react";

import ArrayBar from "./../Components/ArrayBar/ArrayBar";
import BubbleSort from "./../Algorithms/BubbleSort/BubbleSort";
import ButtonsBar from "./../Components/ButtonsBar/ButtonsBar";
import Header from "./../Components/Header/Header";
import InsertionSort from "./../Algorithms/InsertionSort/InsertionSort";
import RangeSlider from "./../Components/RangeSliders/RangeSlider";
import ResetEffect from "./../sounds/ResetEffect.mp3";
import SelectionSort from "./../Algorithms/SelectionSort/SelectionSort";

function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [animationSpeed, setAnimationSpeed] = useState(50);
  const [numberOfArrayBars, setNumberOfArrayBars] = useState(10);

  useEffect(() => {
    generateNewArray();
    // eslint-disable-next-line
  }, []);

  const generateNewArray = () => {
    const array = [];
    for (let i = 0; i < numberOfArrayBars; i++) {
      // ## Generates an element between 5 and 70, and pushes it into the array. ## //
      array.push(randomIntFromInterval(5, 70));
    }
    playAudio(ResetEffect);
    setArray(array);
  };

  // ******************************************************************************* //

  // ## Handles if the "Array Size" slider is changed. ## //
  const onChangeArrayBarRangeSlider = (event, value) => {
    setNumberOfArrayBars(value);
    setTimeout(() => {
      generateNewArray();
    }, 300);
  };

  // ## Handles if the "Animation Speed" slider is changed. ## //
  const onChangeAnimationSpeedRangeSlider = (event, value) => {
    setAnimationSpeed(value);
  };

  // ******************************************************************************* //

  // ## Calls the BubbleSort component/function. ## //
  const bubbleSort = () => {
    BubbleSort(array, animationSpeed);
  };

  // ## Calls the SelectionSort component/function. ## //
  const selectionSort = () => {
    SelectionSort(array, animationSpeed);
  };

  // ## Calls the InsertionSort component/function. ## //
  const insertionSort = () => {
    InsertionSort(array, animationSpeed);
  };

  // ******************************************************************************* //

  return (
    <div className="main-container">
      <Header />
      <ButtonsBar
        generateNewArray={generateNewArray}
        bubbleSort={bubbleSort}
        selectionSort={selectionSort}
        insertionSort={insertionSort}
      />
      <ArrayBar array={array} />
      <RangeSlider
        numberOfArrayBars={numberOfArrayBars}
        animationSpeed={animationSpeed}
        onChangeArrayBarRangeSlider={onChangeArrayBarRangeSlider}
        onChangeAnimationSpeedRangeSlider={onChangeAnimationSpeedRangeSlider}
      />
      <p>Copyright &copy;</p>
    </div>
  );
}

export default SortingVisualizer;
