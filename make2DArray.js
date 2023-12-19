export default function make2DArray(r, c, value) {
  return Array(r)
    .fill(null)
    .map((e) => Array(c).fill(value));
}
