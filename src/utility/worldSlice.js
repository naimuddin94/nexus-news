export function sliceDescription(description, numWords) {
  const words = description?.split(" ");
  const slicedWords = words?.slice(0, numWords);
  const result = slicedWords?.join(" ");
  return result;
}
