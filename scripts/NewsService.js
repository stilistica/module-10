import LoadMoreBtn from "./components/LoadMoreBtn";

const URL = "https://newsapi.org/v2/everything";
const API_KAY = "188c32ad7c18475884f6664ec72f8060 ";


export default class NewsService {
  // static URL = "https://newsapi.org/v2/everything";
  constructor() {
    this.page = 1;
    this.searchQuery = "";
  }

  getNews() {
    return fetch(
      `${URL}?apiKey=${API_KAY}&q=${this.searchQuery}&searchIn=title&pageSize=6&page=${this.page}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.status);
        // if (data.status === "error") throw new Error("The end");

        this.incrementPage();
        return data.articles;
      })
  }
  resetPage() {
    this.page = 1;
  }
  incrementPage() {
    this.page += 1;
  }
}

