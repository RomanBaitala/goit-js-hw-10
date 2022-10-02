export default function markupForCountry({
    flags: {svg},
    name: {official},
    capital,
    population,
    languages
}){
    const langList = Object.values(languages)
    return `<div class="container">
        <img class="country-img" width="60" height="40" src="${svg}" alt="${official} flag">
        <p class="country-name">${official}</p>
    </div>
    <ul class="info-list">
        <li class="info-item">
        <p class="country-text">Capital: <span class="country-span">${capital}</span></p>
        </li>
        <li class="info-item">
        <p class="country-text">Population: <span class="country-span">${population}</span></p>
        </li>
        <li class="info-item">
        <p class="country-text">Languages: <span class="country-span">${langList}</span></p>
        </li>
    </ul>`
}