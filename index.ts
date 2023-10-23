import fs from 'node:fs';

const data = fs.readFileSync('./countries.txt', 'utf-8').toString();
const dataArray = data.split('\n');
interface CountryData { countryName: string, population: string, area: string, density: string }


let resultArray: CountryData[] = []

dataArray.forEach(element => {

    const words = element.split(' ')

    const area = words.pop()?.replace(/,/g, '') || '';
    const population = words.pop()?.replace(/,/g, '') || '';
    const countryName = words.join(" ");

    if (!isNaN(parseInt(area)) && !isNaN(parseInt(population)) && isNaN(parseInt(countryName))) {
        const country = { countryName: countryName, population: population, area: area, density: (parseInt(population) / parseInt(area)).toFixed(1) };

        resultArray.push(country);
    }

});
resultArray.sort((a, b) => a.countryName.localeCompare(b.countryName))

console.log(resultArray)

