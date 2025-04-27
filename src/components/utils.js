export const scrollToElement = (to, offset) => {
  const element = document.querySelector(to);
  if (element) {
    window.scrollTo({
      top: element.offsetTop + offset,
      behavior: "smooth",
    });
  }
};
