import { partials_load } from "./partials.js";

document.addEventListener("DOMContentLoaded", () => {
  partials_load().catch((err) => console.error("Failed to load partials:", err)); // dev only
});
