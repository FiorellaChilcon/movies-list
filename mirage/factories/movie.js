import { Factory } from "ember-cli-mirage";
// import faker from 'faker';

export default Factory.extend({
  title(i) {
    return `Movie ${i}`; // Movie 1, Movie 2, etc.
  },

  // releaseDate() {
  //   return faker.date.past().toLocaleDateString();
  // },

  genre(i) {
    let genres = ["Sci-Fi", "Drama", "Comedy"];

    return genres[i % genres.length];
  },
  year() {
    let min = 1950;
    let max = 2019;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  rating: "PG-13",
});
