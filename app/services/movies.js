import Service from "@ember/service";
import { action } from "@ember/object";

export default class MoviesService extends Service {
  @action
  async add(data) {
    const resp = await fetch("/api/movies", {
      method: "POST",
      body: JSON.stringify(data),
    });
    return resp.json;
  }
}
