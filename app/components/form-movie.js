import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import MoviesService from "mirage-app/services/movies";
import { tracked } from "@glimmer/tracking";

export default class FormMovieComponent extends Component {
  /**
   * @type {MoviesService}
   */
  @service movies;

  @service router;

  @tracked
  empty = false;

  @action
  onSubmit(e) {
    e.preventDefault();
    const { target } = e;
    const year = target.querySelector("#year").value;
    const genre = target.querySelector("#genre").value;
    const title = target.querySelector("#title").value;
    const data = {
      genre,
      year,
      title,
    };
    if (genre && year && title) {
      this.movies.add(data);
      return this.router.transitionTo("/");
    }
    return (this.empty = true);
  }
}
