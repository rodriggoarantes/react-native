export function updateAmountRequest(count) {
  return {
    type: '@home/PLUS_REQUEST',
    count,
  };
}

export function updateAmountSuccess(count) {
  return {
    type: '@home/PLUS',
    count,
  };
}
