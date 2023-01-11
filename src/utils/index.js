// require('dotenv')
// export async function updateMap() {};
// export async function updateWeather() {};
export async function getGeolocationFromLocationString(location) {
    const fetchString = process.env.REACT_APP_BING_MAP_STRINGSTART+'?query='+location+process.env.REACT_APP_BING_MAP_KEYSTRING;
    try {
        const results = await fetch(fetchString);
        console.log(results)
    } catch (error) {
        console.log(error)
    }
};