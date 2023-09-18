export default function cleanSet(Set, startString) {
  let resultString = [...Set]
    .filter(value => value.startsWith(startString))
    .map((value) => value.substring(startString.length))
    .join('-');
  return resultString;
}
