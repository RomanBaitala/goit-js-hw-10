import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import './css/styles.css';
import NewApiService from './components/fetchCountries';
import markupForCountries from './components/markup-for-countries';
import markupForCountry from './components/markup-for-country';

const newApiService = new NewApiService()
const DEBOUNCE_DELAY = 300;
const inputRef = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

inputRef.addEventListener('input', debounce(onClearMarkup, DEBOUNCE_DELAY))

function onClearMarkup(evt){
    if (evt.target.value === '') {
        removeMarkup();
        return
    }
    removeMarkup()
    const searchValue = evt.target.value.trim()
    newApiService.query = searchValue
    newApiService.fetchCountries().then(markupCreate)
}

function removeMarkup(){
    countryInfo.innerHTML = '';
    countryList.innerHTML = '';
}

function markupCreate(countries){
    if (countries.length > 10) {
        return Notiflix.Notify
        .info("Too many matches found. Please enter a more specific name.");
    }
    if (countries.length === 1) {
        return countryInfo.insertAdjacentHTML(
            'beforeend', countries.map(markupForCountry).join('')
        )
    }
    if (countries.length > 1 && countries.length < 10) {
        return countryList.insertAdjacentHTML(
            'beforeend', countries.map(markupForCountries).join('')
        )
    }
}
