const formatNumber = (input?: number, type: string = ''): string => {
  let value = input ?? 0;
  let scale = '';

  if (value > 1000) {
    value /= 1000;
    scale = 'k';
  }
  if (value > 1000) {
    value /= 1000;
    scale = 'M';
  }

  return `${value.toFixed(2)} ${scale}${type}`.trim();
};

export { formatNumber };
