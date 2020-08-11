export const shuffle = (item: any[]) => {
  let array = item;
  for (let i = item.length; 1 < i; i--) {
    const k = Math.floor(Math.random() * i);
    [array[k], array[i - 1]] = [array[i - 1], array[k]];
  }
  return array;
};
