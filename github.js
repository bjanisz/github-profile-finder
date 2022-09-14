let myKey = config.MY_KEY;
let mySecret = config.MY_SECRET;

class Github {
  constructor() {
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=' + 'myKey' + '&client_secret= 'mySecret'`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=' + 'myKey' + '&client_secret=' + 'mySecret'`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
