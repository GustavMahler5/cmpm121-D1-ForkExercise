// Vite turns this import into a production-safe URL. Keep it as a file so
// even this tiny example demonstrates a separately deployed asset.
// @deno-types="./asset-url.d.ts"
import tileUrl from "./assets/tile.svg?no-inline";

const app = document.querySelector<HTMLElement>("#app")!;

const heading = document.createElement("h1");
heading.textContent = "D1 project";

const image = document.createElement("img");
image.src = tileUrl;
image.alt = "A teal tile with a cream circle";
image.width = 96;
image.height = 96;

const message = document.createElement("p");
message.textContent = "Your project starts here.";

app.append(heading, image, message);

// Button
const clickButton = document.createElement("button");
clickButton.id = "click-button";
clickButton.textContent = "Money!";
app.append(clickButton);

// Counter state + display
let counter: number = 0;

const counterDisplay = document.createElement("div");
counterDisplay.id = "counter";
app.append(counterDisplay);

function updateDisplay() {
  counterDisplay.textContent = `${counter} Golds`;
}
updateDisplay();

// Auto growth: + 1 every sec(s)
setInterval(() => {
  counter += 1;
  updateDisplay();
}, 1000);

// Click adds to the counter
clickButton.addEventListener("click", () => {
  counter += 1;
  updateDisplay();
});
