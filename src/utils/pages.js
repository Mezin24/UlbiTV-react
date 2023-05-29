export const calcTotalPages = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};
