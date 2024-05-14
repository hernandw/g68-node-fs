import fs from 'fs';
/* 
const miAuto ={
    marca: 'Toyota',
    modelo: 'Corolla',
    annio: 2022,
    
}

fs.writeFileSync('data/autos.json', JSON.stringify(miAuto)) */

const data = JSON.parse(fs.readFileSync('data/autos.json', 'utf-8'));

/* const autos = JSON.parse(data); */

console.log('data: ', data)
/* console.log('autos: ', autos) */