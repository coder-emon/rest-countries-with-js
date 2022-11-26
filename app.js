const loadCountries = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
const displayCountries = (countries)=>{
    console.log(countries[0])
    const allcountries = countries.map(country => getCountries(country))
    const countryContainer = document.getElementById('countries');
    const div = document.createElement('div');
    countryContainer.innerHTML = allcountries.join(' ');
    console.log(allcountries)
}
const getCountries = ({name,population,independent, region, area, flags })=>{
   return ( `
    <div class="country">
        <img src="${flags.png}">
        <h2>${name.common}</h2>
        <p>Population: ${population}</p>
        <p>Area: ${area}</p>
        <p>Region: ${region}</p>
        <p>${independent?'independent' : 'dependent'}</p>
    </div>
    `)
}
loadCountries()