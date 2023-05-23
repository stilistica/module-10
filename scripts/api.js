// https://newsapi.org/v2/everything?q=gpt&apiKey=188c32ad7c18475884f6664ec72f8060

const URL = "https://newsapi.org/v2/everything";
const API_KAY = "188c32ad7c18475884f6664ec72f8060 ";

function getNews(query) {
	return fetch(`${URL}?apiKey=${API_KAY}&q=${query}&searchIn=title&pageSize=9`).then((res) => res.json());
}


export default { getNews };