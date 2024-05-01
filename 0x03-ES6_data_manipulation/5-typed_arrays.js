export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // create  a new ArrayBuffer with specified lenghth
  const buffer = new ArrayBuffer(length);

  // Use Dataview to manipulate the ArrayBuffer
  const view = new DataView(buffer);

  // set the Int8 value at specified position
  view.setInt8(position, value);

  // return modified ArrayBuffer
  return buffer;
}
