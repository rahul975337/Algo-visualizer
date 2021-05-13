import { useEffect, useState } from "react";
// .. ALGORITHMS .. //
import BubbleSort from "./../Algorithms/BubbleSort/BubbleSort";
import InsertionSort from "./../Algorithms/InsertionSort/InsertionSort";
import SelectionSort from "./../Algorithms/SelectionSort/SelectionSort";
import ArrayBar from "./../Components/ArrayBar/ArrayBar";
import ButtonsBar from "./../Components/ButtonsBar/ButtonsBar";
// .. COMPONENTS .. //
import Header from "./../Components/Header/Header";
import RangeSlider from "./../Components/RangeSliders/RangeSlider";
// .. HELPER FUNCTIONS .. //
import { playAudio, randomIntFromInterval } from "./../HelperFunctions.js";
// .. SOUNDS .. //
import ResetEffect from "./../sounds/ResetEffect.mp3";
// ...Style
import "./SortingVisualizer.css";
// --------------------------------------------
function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [animationSpeed, setAnimationSpeed] = useState(50);
  const [numberOfArrayBars, setNumberOfArrayBars] = useState(10);

  useEffect(() => {
    generateNewArray();
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
      {/* --------------------- HEADER : 8% Height --------------------- */}
      <Header />

      {/* --------------------- BUTTONS : 10% Height --------------------- */}

      <ButtonsBar
        generateNewArray={generateNewArray}
        bubbleSort={bubbleSort}
        selectionSort={selectionSort}
        insertionSort={insertionSort}
      />

      {/* --------------------- BARS : 74% Height --------------------- */}
      <ArrayBar array={array} />

      {/* --------------------- SLIDERS : 8% Height --------------------- */}
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
