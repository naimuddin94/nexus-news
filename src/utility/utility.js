export function sliceDescription(description, numWords) {
  const words = description?.split(" ");
  const slicedWords = words?.slice(0, numWords);
  const result = slicedWords?.join(" ");
  return result;
}

export const categories = [
  "World",
  "Politics",
  "Business",
  "Opinion",
  "Tech",
  "Science",
  "Health",
  "Sports",
  "Entertainment",
  "Travel",
  "Others",
];