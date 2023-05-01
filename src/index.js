import {
  squareOfQuadrate as quadrateSquare,
  squareOfTriangle,
  squareOfRectangle
} from './utils'

// quadrate
const quadrateInput = document.querySelector('#square');
const quadrateButton = document.querySelector('#button-square');
const quarateSquareResultArea = document.querySelector('#calculated-square-square');
quadrateButton.addEventListener('click', () => {
  const inputValue = +quadrateInput.value;
  const calculatedArea = quadrateSquare(inputValue);
  quarateSquareResultArea.innerText = calculatedArea.toString()
});

// Triangle
const triangleInputSide1 = document.querySelector('#triangle-side-1');
const triangleInputSide2 = document.querySelector('#triangle-side-2');
const triangleButton = document.querySelector('#button-triangle');
const triangleSquareResultArea = document.querySelector('#calculated-square-triangle');

triangleButton.addEventListener('click', () => {
  const side1 = +triangleInputSide1.value;
  const side2 = +triangleInputSide2.value;
  const calculatedArea = squareOfTriangle(side1, side2);
  triangleSquareResultArea.innerText = calculatedArea.toString()
})

// Rectangle
const rectangleInputSide1 = document.querySelector('#rectangle-side-1');
const rectangleInputSide2 = document.querySelector('#rectangle-side-2');
const rectangleButton = document.querySelector('#button-rectangle');
const rectangleSquareResultArea = document.querySelector('#calculated-square-rectangle');

rectangleButton.addEventListener('click', () => {
  const side1 = +rectangleInputSide1.value;
  const side2 = +rectangleInputSide2.value;
  const calculatedArea = squareOfRectangle(side1, side2);
  rectangleSquareResultArea.innerText = calculatedArea.toString()
})