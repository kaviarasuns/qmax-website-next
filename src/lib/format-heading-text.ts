export function formatHeadingText(text: string): string {
  return text.replace(/\b\w+/g, (word) =>
    word.toLowerCase() === "to"
      ? "to"
      : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
  );
}
