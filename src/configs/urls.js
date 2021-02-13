const getCoins_List =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false";

const getCoins_Single =
    "https://api.coingecko.com/api/v3/coins/"

export { getCoins_List, getCoins_Single }
