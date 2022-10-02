import Notiflix from "notiflix";
const BASE_LINK = 'https://restcountries.com/v3.1';
const FILTER_NAME = 'name';
const FILTERS = 'fields=name,capital,population,flags,languages';


export default class NewApiService{
    constructor(){
        this.searchQuery = '';
    }
    fetchCountries(){
        const url = `${BASE_LINK}/${FILTER_NAME}/${this.searchQuery}?${FILTERS}`;
        return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(
                    Notiflix.Notify.failure(`Oops, there is no country with that name`)
                );
            }
            return response.json();
        })
        .catch(error => error);
    }
    get query(){
        return this.searchQuery;
    }
    set query(newQuery){
        this.searchQuery = newQuery;
    }
};