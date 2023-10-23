import fs, { writeFileSync } from 'node:fs';

const data = fs.readFileSync('./countries.txt', 'utf-8').toString();
const dataArray = data.split('\n');
interface CountryData { countryName: string, population: string, area: string, density: number }


let resultArray: CountryData[] = []

dataArray.forEach(element => {

    const words = element.split(' ')

    const area = words.pop()?.replace(/,/g, '') || '';
    const population = words.pop()?.replace(/,/g, '') || '';
    const countryName = words.join(" ");

    if (!isNaN(parseInt(area)) && !isNaN(parseInt(population)) && isNaN(parseInt(countryName))) {
        const country = { countryName: countryName, population: population, area: area, density: Math.round(parseInt(population) / parseInt(area)) };

        resultArray.push(country);
    }

});
resultArray.sort((a, b) => b.density - a.density)

try {
    const headers = 'Country,Population,Area,Density\n';

    const csvData = resultArray.map(obj => `${obj.countryName},${obj.population},${obj.area},${obj.density}`).join('\n');

    const csvContent = `${headers}${csvData}`;
    fs.writeFileSync('archivo.csv',csvContent );
    console.log('El archivo se escribió exitosamente.');
} catch (error) {
    console.error('Error al escribir el archivo:', error);
}

