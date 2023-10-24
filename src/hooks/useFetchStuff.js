import { faker } from "@faker-js/faker";

function useFetchStuff(category, number) {
  const results = [];
  for (let i = 0; i < number; i++) {
    let result = {};
    const title = `
    ${faker.commerce.productAdjective()} 
    ${faker.word.adjective({ length: { min: 10, max: 30 } })}`;
    const price = faker.commerce.price({ symbol: "$" });
    // const img = faker.image.url({ category: category || "products" });
    const img = faker.image.urlLoremFlickr({
      category: category || "books",
    });
    result.title = title;
    result.price = price;
    result.img = img;
    result.id = crypto.randomUUID();
    results.push(result);
  }

  return results;
}

export default useFetchStuff;
