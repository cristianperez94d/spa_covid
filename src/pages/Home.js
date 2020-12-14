import {getDataCountries} from '../untils/getData';
const Home = async (search) => {
    let countries = await getDataCountries();
    if(search){
        countries.response = countries.response.filter(country => country.toLowerCase().indexOf(search.toLowerCase()) > -1);
    }
    const view = `
        <div class="countries">
            <p>Consulta las estadisticas del Covid-19 segun tu pais</p>
            <div class="countries__search">
                <input id="input_search" placeholder="Ingresa tu pais"></input>
                <button id="btn_search" type="button">Buscar</button>
            </div>            
            ${countries.response.map( country => `
                <article class="country-item">
                    <a href="#/${country}/">
                        <h2>${country}</h2>
                    </a>
                </article>
            `).join('')}
        </div>
    `;
    return view;
}

export default Home;
