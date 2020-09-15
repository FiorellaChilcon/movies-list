import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class AddMovieBtnComponent extends Component {
  @service router;

  @action
  async goToAddMovie() {
    this.router.transitionTo("addmovie");
  }
}
