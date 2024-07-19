export const createColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

export const calculateShift = (index, num) => {
  return index * num;
};