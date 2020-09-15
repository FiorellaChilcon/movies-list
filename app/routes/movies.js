import Route from "@ember/routing/route";

export default class MoviesRoute extends Route {
  async model() {
    let resp = await fetch("/api/movies");
    let { data } = await resp.json();
    console.log(data);
    return data;
  }
}
