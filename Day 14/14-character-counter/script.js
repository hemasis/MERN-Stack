const textarea = document.getElementById("myText");
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");

textarea.addEventListener("input", () => {
  const text = textarea.value;

  // Count characters
  charCount.textContent = text.length;

  // Count words (ignores extra spaces)
  const words = text.trim().split(/\s+/).filter(word => word !== "");
  wordCount.textContent = words.length;
});