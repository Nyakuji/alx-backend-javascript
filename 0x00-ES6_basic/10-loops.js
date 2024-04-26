export default function appendToEachArrayValue(array, appendString) {
  const Array = [];
  for (const value of array) {
    Array.push(appendString + value);
  }

  return Array;
}
