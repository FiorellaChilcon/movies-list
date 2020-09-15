import Component from "@glimmer/component";

export default class MovieListComponent extends Component {
  get movies() {
    const { movieList } = this.args;
    const data = movieList.map((e) => {
      const { id, type, attributes } = e;
      return { id, type, ...attributes };
    });
    return data;
  }
}
