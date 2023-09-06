export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const mytask = true;
    const mytask2 = false;
    return [mytask, mytask2];
  }

  return [task, task2];
}
