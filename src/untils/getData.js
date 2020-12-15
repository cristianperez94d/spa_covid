const API_COVID = 'https://covid-193.p.rapidapi.com/';
const config = {
    headers: {
        'x-rapidapi-key': process.env.API_COVID,
        'x-rapidapi-host': 'covid-193.p.rapidapi.com'
    }
}

const getDataCountries = async () => {
    const api_covid = `${API_COVID}countries`; 
    try {
        const response = await fetch(api_covid , config);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('fetch error'), error
    }
}

const getStatisticsCountries = async (country) => {
    const api_covid = country ? `${API_COVID}statistics?country=${country}`: null; 
    try {
        const response = await fetch(api_covid, config);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('fetch error'), error
    }
}

export {getDataCountries, getStatisticsCountries};