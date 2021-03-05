const index = (arrangment: 'Y-M-D' | 'D-M-Y' | 'M-D-Y', separator) => {
  let now = new Date();
  let [y, m, d] = [now.getFullYear(), now.getMonth(), now.getDate()];

  switch (arrangment) {
    case 'Y-M-D':
      return [y, m, d].join(separator);
    case 'D-M-Y':
      return [d, m, y].join(separator);
    case 'Y-M-D':
      return [m, d, y].join(separator);
    default:
      return [d, m, y].join(separator);
  }
};

export default index;
