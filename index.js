const axios = require('axios');

const API_KEY = 'YOUR_RAPIDAPI_KEY';
const BASE_URL = 'https://google-trends21.p.rapidapi.com';

const config = {
  headers: {
    'x-rapidapi-host': 'google-trends21.p.rapidapi.com',
    'x-rapidapi-key': API_KEY
  }
};

async function runTrends() {
  try {
    // 1. Trending Now
    const trending = await axios.get(`${BASE_URL}/getTrendingNow?country=US&time=4`, config);
    console.log('✅ 1. Trending Now:', trending.data);

    // 2. Explore Search Queries
    const queries = await axios.get(`${BASE_URL}/getExploreSearchQueries?country=US&time=now%207-d&category=0`, config);
    console.log('✅ 2. Search Queries:', queries.data);

    // 3. Explore Specific Search Term
    const searchTerm = await axios.get(`${BASE_URL}/getExploreSearchTerm?keyword=trump&country=US&time=now%207-d`, config);
    console.log('✅ 3. Search Term Details:', searchTerm.data);

    // 4. Compare Search Terms
    const compare = await axios.get(`${BASE_URL}/getExploreCompareSearchTerm?keywordOne=trump&keywordTwo=biden&country=US&time=now%207-d`, config);
    console.log('✅ 4. Comparison Data:', compare.data);

    // 5. Trending Suggestions
    const suggestions = await axios.get(`${BASE_URL}/getTrendingSuggestions?keyword=donald%20tru`, config);
    console.log('✅ 5. Trending Suggestions:', suggestions.data);

    // 6. Google Search Autocomplete
    const autocomplete = await axios.get(`${BASE_URL}/getGoogleSearchAutoComplete?query=trump`, config);
    console.log('✅ 6. Autocomplete:', autocomplete.data);

    // 7. Trending Categories
    const categories = await axios.get(`${BASE_URL}/getTrendingCategories`, config);
    console.log('✅ 7. Categories:', categories.data);

  } catch (error) {
    console.error('❌ Error:', error.response ? error.response.data : error.message);
  }
}

runTrends();