export const parseStringToArray = strings => {
  if (strings) {
    if (strings.indexOf(',') >= 0) {
      const list = strings.split(',').map(item => item.trim());
      return list;
    } else {
      return [strings.trim()];
    }
  }
  return [];
};
