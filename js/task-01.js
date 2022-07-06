const itemElements = document.querySelectorAll(
  "ul#categories > li.item"
).length;
console.log(`Number of categories: ${itemElements}`);

const items = document.querySelectorAll("li.item");
items.forEach.call(items, (element) => {
  //console.log(element);
  const title = element.querySelector("h2").innerHTML;
  const itemsLength = element.querySelectorAll("li").length;
  console.log(`Category: ${title} / Category elements: ${itemsLength}`);
});
