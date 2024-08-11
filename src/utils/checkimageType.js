export const CheckImageType = (filepath) => {
  const imageRegex = /\.(jpg|jpeg|png|gif|bmp|webp|tiff)$/i;
  return imageRegex.test(filepath);
};
