export default (str) => {
  if (str === '') {
    return '';
  }
  const [firstCh, ...rest] = str;
  return `${firstCh.toUpperCase()}${rest.join('')}`;
};
