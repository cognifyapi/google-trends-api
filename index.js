const axios = require("axios");

const API_KEY = process.env.COGNIFY_API_KEY;

if (!API_KEY) {
  throw new Error("Set the COGNIFY_API_KEY environment variable before running this example.");
}

const api = axios.create({
  baseURL: "https://api.cognifyapi.com",
  headers: {
    "x-cognifyapi-key": API_KEY,
  },
});

const requests = [
  {
    name: "Trending Now",
    path: "/google-trends-now",
    params: {
      country: "US",
      time: 4,
      category: 0,
      articleCount: 1,
      hl: "en-US",
      tz: 300,
      enableRelated: true,
      enableTimeSeries: true,
    },
  },
  {
    name: "Explore Search Terms",
    path: "/trends-explore-search-terms",
    params: {
      keyword: "trump",
      country: "US",
      time: "today 12-m",
      category: 0,
      enableRelatedQueries: true,
      enableInterestByRegion: true,
      enableInterestByOverTime: true,
    },
  },
  {
    name: "Compare Search Terms",
    path: "/trends-explore-compare-search-terms",
    params: {
      keywordOne: "pepsi",
      keywordTwo: "cocacola",
      country: "US",
      time: "today 12-m",
      category: 0,
      enableRelatedQueries: true,
      enableInterestByRegion: true,
      enableInterestByOverTime: true,
    },
  },
  {
    name: "Searched Queries",
    path: "/trends-searched-queries",
    params: {
      country: "US",
      time: "today 12-m",
      category: 0,
    },
  },
  {
    name: "Trends Suggestions",
    path: "/trends-suggestions",
    params: {
      keyword: "trump",
    },
  },
];

async function runTrends() {
  for (const request of requests) {
    try {
      const response = await api.get(request.path, {
        params: request.params,
      });
      console.log(`${request.name}:`, response.data);
    } catch (error) {
      console.error(
        `${request.name} failed:`,
        error.response?.data || error.message
      );
    }
  }
}

runTrends();
