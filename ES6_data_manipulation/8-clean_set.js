export default function cleanSet(Set, startString) {
  const filteredValues = [...Set].filter(value => value.startsWith(startString));
  const resultString = filteredValues.join('-');
  return resultString;
}
