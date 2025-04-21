// Remove ad elements with common class names
document
  .querySelectorAll('[id*="ad"], [class*="ad"]')
  .forEach((el) => el.remove());
