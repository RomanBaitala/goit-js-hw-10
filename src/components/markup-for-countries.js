export default function markupForCountries({
    name: {official},
    flags: {svg}
}){
    return `<li class="country-list__item">
    <img 
    class="country-list__img"
    src="${svg}" 
    alt="${official} flag"
    width="60" height="40">
    <p class="country-list__text">${official}</p>
    </li>`
}