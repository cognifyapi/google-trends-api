# Google Trends API by CognifyApi - Implementation Guide

A comprehensive guide for integrating the **Google Trends API from [Cognify API](https://cognifyapi.com)** into your Node.js applications. This API allows you to programmatically access real-time search trends, keyword comparisons, and autocomplete suggestions.

---

## 🔗 Official Resources
- **API Documentation:** [Google Trends API Docs](https://cognifyapi.com/docs/google-trends-docs)
- **More Info:** [Google Trends API](https://cognifyapi.com/google-trends)
- **Official Website:** [CognifyAPI.com](https://cognifyapi.com/)
- **Provider Platform (RapidApi):** [Google Trends Api ](https://rapidapi.com/johnjames28/api/google-trends21)

---

## 🛠 Features
- **Massive Database:** Access Google's vast trends repository.
- **Advanced Metadata:** Get indepth predictive analysis .
- **Auto-Complete:** Access Google search suggestions alongside trends results.
- **Scalable:** Built on high-performance infrastructure for production apps.
  
---

## 📊 Summary of Endpoints

| Endpoint | Description | Key Use Case |
| --- | --- | --- |
| `/getTrendingNow` | Live trending topics | News Aggregators |
| `/getExploreSearchQueries` | Trending search queries | SEO Research |
| `/getExploreSearchTerm` | Detailed keyword analysis | SEO Research |
| `/getExploreCompareSearchTerm` | Side-by-side comparison | Competitor Analysis |
| `/getTrendingSuggestions` | Predictive trends based on partial keywords | Predictive Analysis |
| `/getGoogleSearchAutoComplete` | Real-time query completion | UX/Search Bars |
| `/getTrendingCategories` | List of available categories | Data Filtering |

  
---

## 🚀 Getting Started

### Base URL
`https://google-trends21.p.rapidapi.com`

## 🚀 Getting Started

### Prerequisites

* **Node.js** (v14 or higher recommended)
* **npm** or **yarn**
* A valid **RapidAPI Key** from the [CognifyAPI Dashboard](https://rapidapi.com/johnjames28/api/google-trends21)

### Installation

We recommend using `axios` for handling HTTP requests due to its robust error handling and promise-based structure.

```bash
npm install axios

```

---

## 🛠 Usage & Endpoints

Initialize your API configuration:

```javascript
const axios = require('axios');

const apiClient = axios.create({
  baseURL: 'https://google-trends21.p.rapidapi.com',
  headers: {
    'x-rapidapi-host': 'google-trends21.p.rapidapi.com',
    'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY' // Replace with your actual key
  }
});

```

## 1. Get Trending Now

Fetch the top trending topics and search stories currently gaining traction in a specific country.

```javascript
const axios = require('axios');

const getTrendingNow = async () => {
  const options = {
    method: 'GET',
    url: 'https://google-trends21.p.rapidapi.com/getTrendingNow',
    params: {
      country: 'US',
      time: '4',
      enableRelated: 'false',
      enableTimeSeries: 'false',
      tz: '300',
      articleCount: '0'
    },
    headers: {
      'x-rapidapi-host': 'google-trends21.p.rapidapi.com',
      'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

```

## 2. Get Explore Top/Rising Searched Queries

Retrieve a list of trending search queries based on specific categories and timeframes.

```javascript
const axios = require('axios');

const exploreSearchQueries = async () => {
  const options = {
    method: 'GET',
    url: 'https://google-trends21.p.rapidapi.com/getExploreSearchQueries',
    params: { country: 'US', time: 'now 7-d', category: '0' },
    headers: {
      'x-rapidapi-host': 'google-trends21.p.rapidapi.com',
      'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

```

## 3.  Get Explore Search Term

Get detailed search interest data for a single keyword, including regional breakdowns.

```javascript
const axios = require('axios');

const exploreSearchTerm = async (keyword) => {
  const options = {
    method: 'GET',
    url: 'https://google-trends21.p.rapidapi.com/getExploreSearchTerm',
    params: {
      keyword: keyword,
      country: 'US',
      time: 'now 7-d',
      subRegion: 'region',
      category: '0',
      enableRelatedQueries: 'true',
      enableInterestByRegion: 'false',
      enableInterestByOverTime: 'false'
    },
    headers: {
      'x-rapidapi-host': 'google-trends21.p.rapidapi.com',
      'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

```

## 4. Get Explore Search Compare Term

Benchmark the search interest of two different keywords side-by-side.

```javascript
const axios = require('axios');

const compareSearchTerms = async (term1, term2) => {
  const options = {
    method: 'GET',
    url: 'https://google-trends21.p.rapidapi.com/getExploreCompareSearchTerm',
    params: {
      keywordOne: term1,
      keywordTwo: term2,
      country: 'US',
      time: 'now 7-d',
      subRegion: 'region',
      category: '0',
      enableRelatedQueries: 'true',
      enableInterestByRegion: 'false',
      enableInterestByOverTime: 'false'
    },
    headers: {
      'x-rapidapi-host': 'google-trends21.p.rapidapi.com',
      'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};


```

## 5. Get Trending Suggestions

Predictive trends based on partial keyword strings.

```javascript
const axios = require('axios');

const getTrendingSuggestions = async (partialKeyword) => {
  const options = {
    method: 'GET',
    url: 'https://google-trends21.p.rapidapi.com/getTrendingSuggestions',
    params: { keyword: partialKeyword },
    headers: {
      'x-rapidapi-host': 'google-trends21.p.rapidapi.com',
      'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

```

## 6.Get Explore Autocomplete API

Direct access to the Google Autocomplete engine for real-time search suggestions.

```javascript
const axios = require('axios');

const getAutocomplete = async (query) => {
  const options = {
    method: 'GET',
    url: 'https://google-trends21.p.rapidapi.com/getGoogleSearchAutoComplete',
    params: { query: query },
    headers: {
      'x-rapidapi-host': 'google-trends21.p.rapidapi.com',
      'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

```

## 7. Get Trending Categories

Fetch the list of valid categories to use as filters for other endpoints.

```javascript
const axios = require('axios');

const getCategories = async () => {
  const options = {
    method: 'GET',
    url: 'https://google-trends21.p.rapidapi.com/getTrendingCategories',
    headers: {
      'x-rapidapi-host': 'google-trends21.p.rapidapi.com',
      'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
```


## 💡 Best Practices

1. **Caching:** Implement a caching layer (like Redis) for `getTrendingNow` results to reduce API costs and improve performance.
2. **Rate Limiting:** Monitor your RapidAPI dashboard to stay within your plan's limits.
3. **Error Handling:** Always wrap your calls in `try...catch` blocks to handle network timeouts or invalid parameters gracefully.
---
