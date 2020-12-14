import getHash from '../untils/getHash';
import {getStatisticsCountries} from '../untils/getData';

const Country = async () => {
    const param = getHash();
    const country = await getStatisticsCountries(param);
    const view = `
        <div class="countries-inner">
            <article class="countries-card">
                <h2>${country.response[0].country}</h2>
            </article>
            <article class="countries-card">
                <div class="countries__details">
                    <p>Casos confirmados: </p>
                    <h3>${country.response[0].cases.total}</h3>
                </div>
                <div class="countries__details">
                    <p>Casos activos:</p>
                    <h3>${country.response[0].cases.active}</h3>
                </div>
                <div class="countries__details">    
                    <p>Recuperados:</p>
                    <h3>${country.response[0].cases.recovered}</h3>
                </div>
                <div class="countries__details">    
                    <p>Muertes:</p>
                    <h3>${country.response[0].deaths.total}</h3>
                </div>
                <h3 class="fecha">${country.response[0].day}</h3>
            </article>
        </div>
    `;
    return view;
}
export default Country;