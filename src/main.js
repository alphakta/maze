const { performance } = require('perf_hooks');
const fs = require('fs');

//Presets map, cellule & stack
let lineMap = null;
let cellStart = null;
let cellEnd = null;
let stack = []
let map = null;
// Taille en largeur/longueur de la map
let lengthCol = null;
let lengthRow = null;

// Obstacles - Chemins
const wall = '*'
const direction = ' '
const directionVisited = '-'
const directionFinal = '2'

// Variable for time execution
let a, b;

function mazeResolve(cell, stack) {
  if (cell.x < 0 || cell.x >= lengthRow) {
    return false
  }

  if (cell.y < 0 || cell.y >= lengthCol) {
    return false
  }

  if (map[cell.x][cell.y] == directionFinal) {
    cellEnd = cell // fait augmenter le temps d'exec
    return true;
  }

  if (map[cell.x][cell.y] == wall || map[cell.x][cell.y] == directionVisited) {
    return false
  }

  map[cell.x][cell.y] = directionVisited
  stack.push(cell)

  // Recursive for 8 direction
  let res = mazeResolve({ x: cell.x, y: cell.y + 1 }, stack) // Up
    || mazeResolve({ x: cell.x + 1, y: cell.y + 1 }, stack) // Up-Right
    || mazeResolve({ x: cell.x + 1, y: cell.y }, stack)  // Right
    || mazeResolve({ x: cell.x + 1, y: cell.y - 1 }, stack) // Down-Right
    || mazeResolve({ x: cell.x, y: cell.y - 1 }, stack) // Down
    || mazeResolve({ x: cell.x - 1, y: cell.y - 1 }, stack) // Down-Left
    || mazeResolve({ x: cell.x - 1, y: cell.y }, stack) // Left
    || mazeResolve({ x: cell.x - 1, y: cell.y + 1 }, stack) // Up-Left

  if (res != false) {
    return res
  }

  map[cell.x][cell.y] = direction
  stack.pop()

  return false;
}
function main() {
  console.log("*** Indiquez le numéro de la map que vous voulez résoudre : *** \n - tapez 1 pour rect_01.map \n - tapez 2 pour rect_02.map \n - tapez 3 pour rect_03.map \n - tapez 4 pour rect_04.map \n - tapez 5 pour rect_05.map")
  process.stdin.on('data', data => {

    switch (data.toString().trim()) {
      case "1":
        lineMap = fs.readFileSync('./maps/rect_01.map', 'utf-8').split('\r\n');
        map = lineMap.map((line) => {
          return line.split('')
        });
        cellStart = { x: 1, y: 12 };
        lengthCol = map[0].length;
        lengthRow = map.length;
        console.log('-----------\r\n Debut:', cellStart)
        a = performance.now();
        mazeResolve(cellStart, stack)
        b = performance.now();
        console.log('Find :', cellEnd)
        console.log(`Temps d'éxecution: ` + (b - a).toFixed(2) + ' ms.');
        break;

      case "2":
        lineMap = fs.readFileSync('./maps/rect_02.map', 'utf-8').split('\r\n');
        map = lineMap.map((line) => {
          return line.split('')
        });
        cellStart = { x: 26, y: 33 };
        lengthCol = map[0].length;
        lengthRow = map.length;
        console.log('-----------\r\n Debut:', cellStart)
        a = performance.now();
        mazeResolve(cellStart, stack)
        b = performance.now();
        console.log('Find :', cellEnd)
        console.log(`Temps d'éxecution: ` + (b - a).toFixed(2) + ' ms.');        
        break;

      case "3":
        lineMap = fs.readFileSync('./maps/rect_03.map', 'utf-8').split('\r\n');
        map = lineMap.map((line) => {
          return line.split('')
        });
        cellStart = { x: 0, y: 5 };
        lengthCol = map[0].length;
        lengthRow = map.length;
        console.log('-----------\r\n Debut:', cellStart)
        a = performance.now();
        mazeResolve(cellStart, stack)
        b = performance.now();
        console.log('Find :', cellEnd)
        console.log(`Temps d'éxecution: ` + (b - a).toFixed(2) + ' ms.');   
        break;

      case "4":
        lineMap = fs.readFileSync('./maps/rect_04.map', 'utf-8').split('\r\n');
        map = lineMap.map((line) => {
          return line.split('')
        });
        cellStart = { x: 0, y: 1 };
        lengthCol = map[0].length;
        lengthRow = map.length;
        console.log('-----------\r\n Debut:', cellStart)
        a = performance.now();
        mazeResolve(cellStart, stack)
        b = performance.now();
        console.log('Find :', cellEnd)
        console.log(`Temps d'éxecution: ` + (b - a).toFixed(2) + ' ms.');   
        break;

      case "5":
        lineMap = fs.readFileSync('./maps/rect_05.map', 'utf-8').split('\r\n');
        map = lineMap.map((line) => {
          return line.split('')
        });
        cellStart = { x: 55, y: 0 };
        lengthCol = map[0].length;
        lengthRow = map.length;
        console.log('-----------\r\n Debut:', cellStart)
        a = performance.now();
        mazeResolve(cellStart, stack)
        b = performance.now();
        console.log('Find :', cellEnd)
        console.log(`Temps d'éxecution: ` + (b - a).toFixed(2) + ' ms.');
        break;

      default:
        console.log("Il n'y a aucune map à ce nom :", data.toString());
    }
    // process.exit();
  });
}
main()






// var a = performance.now();
// // mazeResolve(cellStart, stack)
// var b = performance.now();
// console.log('Find :', cellEnd)


// for(let i=0; i< stack.length; i++){
//   map[stack[i].x][stack[i].y] = 'y'
// }
