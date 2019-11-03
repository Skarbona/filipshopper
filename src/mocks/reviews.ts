export const reviewsMock = (amount: number) => {
  let reviews = [];

  for (let i = 0; i < amount; i++) {
    reviews.push({
      name: `Name for ${i}`,
      opinion: `Opinion for ${i}`,
      stars: i <= 5 ? i : 5
    })
  }

  return reviews;
};