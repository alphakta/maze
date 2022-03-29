const fs = require('fs');

//Presets map, cellule & stack
const argvs = process.argv.slice(1)
const file = argvs[1]
const map = fs.readFileSync(file, 'utf-8')
              .split('\r\n')
              .map((line) => { return line.split('') })
let cellStart = null;
let stack = [];
// Taille en largeur/longueur de la map
const lengthCol = map[0].length;
const lengthRow = map.length;
// Obstacles - Chemins
const wall = '*'
const directionVisited = 'x'
const directionFinal = '2'

if(file == './maps/rect_01.map')
  cellStart = { x: 1, y: 12 };
if(file == './maps/rect_02.map')
  cellStart = { x: 26, y: 33 };
if(file == './maps/rect_03.map')
  cellStart = { x: 0, y: 5 };
if(file == './maps/rect_04.map')
  cellStart = { x: 0, y: 1 };
if(file == './maps/rect_05.map')
  cellStart = { x: 55, y: 0 }

mazeResolve(cellStart, stack)

fs.writeFile('./maps/map_resolve.map',
            map.map(function(v){ return v.join(',') }).join('\n'),
           function (err) { if (err) throw err; }
           )

function mazeResolve(cell, stack) {

  if (cell.x < 0 || cell.x >= lengthRow) {
    return false
  }

  if (cell.y < 0 || cell.y >= lengthCol) {
    return false
  }

  if (map[cell.x][cell.y] == directionFinal) {
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

  stack.pop()

  return false;
}