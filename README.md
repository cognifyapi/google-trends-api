# Google Trends API by CognifyAPI - Implementation Guide 🚀

A guide for integrating the **Google Trends API from [CognifyAPI](https://cognifyapi.com)** into your Node.js applications. Retrieve current search trends, explore and compare keywords, and get related trend suggestions.

#### Free trial. No credit card required.

[![Start Now](https://img.shields.io/badge/Start%20Now-🚀-blue?style=for-the-badge&logo=google-cloud)](https://cognifyapi.com/google-trends?utm_source=github&utm_medium=repo&utm_campaign=google_trends_api&utm_content=cta)

---

## 🔗 Official Resources
- **API Documentation:** [Google Trends API Docs](https://cognifyapi.com/docs/google-trends-docs)
- **More Info:** [Google Trends API](https://cognifyapi.com/google-trends)
- **Official Website:** [CognifyAPI.com](https://cognifyapi.com/)
- **CognifyAPI Studio:** [Get an API key](https://studio.cognifyapi.com/)
- **Source Repository:** [Google Trends API on GitHub](https://github.com/cognifyapi/google-trends-api)

---

## 🛠 Features
- **Trending Now:** Retrieve current trends by country, time, and category.
- **Keyword Exploration:** Get related queries, regional interest, and interest over time.
- **Keyword Comparison:** Compare search interest for two terms.
- **Top and Rising Queries:** Retrieve popular and rising searches for a country and period.
- **Trend Suggestions:** Find related topics for a keyword.

## 📊 Summary of Endpoints

| Endpoint | Description | Key Use Case |
| --- | --- | --- |
| `/google-trends-now` | Retrieve current trending searches. | News and trend monitoring |
| `/trends-explore-search-terms` | Explore related queries and search interest for a keyword. | SEO and keyword research |
| `/trends-explore-compare-search-terms` | Compare interest for two keywords. | Competitor analysis |
| `/trends-searched-queries` | Retrieve top and rising queries for a country and period. | Content planning |
| `/trends-suggestions` | Retrieve suggested trend topics for a keyword. | Topic discovery |

---

## 🚀 Getting Started

### Base URL

`https://api.cognifyapi.com`

### Authentication

Include your CognifyAPI key in the `x-cognifyapi-key` request header:

```text
x-cognifyapi-key: YOUR_COGNIFY_API_KEY
```

### Installation

```bash
npm install axios
```

### Create a Reusable Client

```javascript
const axios = require("axios");

const api = axios.create({
  baseURL: "https://api.cognifyapi.com",
  headers: {
    "x-cognifyapi-key": "YOUR_COGNIFY_API_KEY",
  },
});
```

## 🛠 Usage and Endpoints

### 1. Google Trending Now

Retrieve current trends for a country and time range.

```javascript
const response = await api.get("/google-trends-now", {
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
});

console.log(response.data);
```

**Example Response:**

```json
{
  "status": "success",
  "query": {
    "country": "US",
    "time": "4",
    "category": "0",
    "articleCount": "1",
    "hl": "en-US",
    "tz": "300",
    "enableRelated": "true",
    "enableTimeSeries": "true"
  },
  "results": 121,
  "trendingResults": [
    {
      "query": "how to save in gta 6",
      "articles": [],
      "geo": "US",
      "tzTimestamp": "2026-11-19 10:30:00",
      "traffic": 5000,
      "breakout": 1000,
      "related": [
        "how to save in gta 6",
        "does gta 6 auto save"
      ],
      "category": "Games",
      "timeseries": [[4944355324, "en", "US"]]
    }
  ]
}
```

### 2. Explore Search Terms

Retrieve related queries, regional interest, and interest over time for a keyword.

```javascript
const response = await api.get("/trends-explore-search-terms", {
  params: {
    keyword: "trump",
    country: "US",
    time: "today 12-m",
    category: 0,
    enableRelatedQueries: true,
    enableInterestByRegion: true,
    enableInterestByOverTime: true,
  },
});

console.log(response.data);
```

**Example Response:**

```json
{
  "status": "success",
  "query": {
    "keyword": "trump",
    "country": "US",
    "time": "today 12-m",
    "category": "0",
    "enableRelatedQueries": "true",
    "enableInterestByRegion": "true",
    "enableInterestByOverTime": "true"
  },
  "relatedQueries": {
    "default": {
      "top": [
        {
          "query": "donald trump",
          "value": 100,
          "formattedValue": "100",
          "hasData": true
        }
      ],
      "rising": [
        {
          "query": "trump aca refund checks",
          "value": 8350,
          "formattedValue": "Breakout"
        }
      ]
    }
  },
  "interestByRegion": {
    "default": {
      "geoMapData": [
        {
          "geoCode": "US-DC",
          "geoName": "District of Columbia",
          "value": [100],
          "formattedValue": ["100"]
        }
      ]
    }
  },
  "interestByOverTime": {
    "default": {
      "timelineData": [
        {
          "time": "1763251200",
          "formattedTime": "Nov 16 – 22, 2025",
          "value": [74],
          "formattedValue": ["74"]
        }
      ]
    }
  }
}
```

### 3. Compare Search Terms

Compare search interest for two keywords over a selected time range.

```javascript
const response = await api.get("/trends-explore-compare-search-terms", {
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
});

console.log(response.data);
```

**Example Response:**

```json
{
  "status": "success",
  "pepsi": {
    "relatedQueries": {
      "default": {
        "top": [
          {
            "query": "pepsi diet",
            "value": 100,
            "formattedValue": "100",
            "hasData": true
          }
        ],
        "rising": [
          {
            "query": "pepsi needoh",
            "value": 20850,
            "formattedValue": "Breakout"
          }
        ]
      }
    }
  },
  "cocacola": {
    "relatedQueries": {
      "default": {
        "top": [
          {
            "query": "cocacola can",
            "value": 100,
            "formattedValue": "100",
            "hasData": true
          }
        ]
      }
    }
  },
  "interestByOverTime": {
    "default": {
      "timelineData": [
        {
          "time": "1763251200",
          "value": [60, 4],
          "formattedValue": ["60", "4"]
        }
      ],
      "averages": [71, 4]
    }
  }
}
```

### 4. Searched Queries

Retrieve top and rising searches for a country and time range.

```javascript
const response = await api.get("/trends-searched-queries", {
  params: {
    country: "US",
    time: "today 12-m",
    category: 0,
  },
});

console.log(response.data);
```

**Example Response:**

```json
{
  "status": "success",
  "query": {
    "country": "US",
    "time": "today 12-m",
    "category": "0"
  },
  "results": 25,
  "searchQueries": {
    "default": {
      "top": [
        {
          "query": "from",
          "value": 100,
          "formattedValue": "100",
          "hasData": true
        },
        {
          "query": "weather",
          "value": 72,
          "formattedValue": "72",
          "hasData": true
        }
      ],
      "rising": [
        {
          "query": "krillion",
          "value": 350,
          "formattedValue": "+350%"
        }
      ]
    }
  }
}
```

### 5. Trends Suggestions

Retrieve topic suggestions related to a keyword.

```javascript
const response = await api.get("/trends-suggestions", {
  params: {
    keyword: "trump",
  },
});

console.log(response.data);
```

**Example Response:**

```json
{
  "status": "success",
  "query": {
    "keyword": "trump"
  },
  "results": 5,
  "trends": {
    "default": {
      "topics": [
        {
          "mid": "/m/07gql",
          "title": "Trumpet",
          "type": "Musical instrument"
        },
        {
          "mid": "/g/11c0xr0k6k",
          "title": "Trumpeter",
          "type": "Topic"
        },
        {
          "mid": "/m/0cqt90",
          "title": "Donald Trump",
          "type": "45th and 47th U.S. President"
        }
      ]
    }
  }
}
```

## 💡 Best Practices

1. **Caching:** Cache repeated requests when your use case allows it.
2. **Rate Limits:** Follow the rate limit for your CognifyAPI plan.
3. **Error Handling:** Handle HTTP errors and inspect the response body when a request fails.
