export const randomColor = () => {
  const redColor = Math.floor(Math.random() * 256);
  const greenColor = Math.floor(Math.random() * 256);
  const blueColor = Math.floor(Math.random() * 256);
  return `rgb(${redColor}, ${greenColor}, ${blueColor})`;
};
