<h1 align="center">
  Maze 🦄
</h1>

## <a name='summary'> Summary 🦄</a>

* [Story](#story)
* [Rules](#rules)
* [Overview](#overview)
* [Credits](#credits)

## <a name='story'>Story 🦊</a>

```sh
~/efrei-courses/learn-algorithm/exams/maze ❯❯❯ cat -e .author.json
[
  {
      "firstName": "Omma Habiba",
      "lastName": "BIPLOB"
    },
    {
      "firstName": "Alpha",
      "lastName": "KEITA"
    }
]$
```

### Prelude

As a programming pragmatic module, you **CAN** use the programming language you want/love.<br />
The only thing is that you must provide a **Dockerfile** that run your project ;)
You **MUST** return a **Dockerfile**

### Algorithm

Your challenge is to have the best algorithm of your class ! <br />
I will check the execution time of your program, and you will get points according to your position :)

### Result

The algorithm solved via a command on the console (see in the **Rules** part), will be displayed in a file **map_resolve.map** (in the file maps).

## <a name='rules'> Rules 🐱</a>

Hi, there are some rules to respect in order to solve each map. There are 5 maps that are mazes. To solve each map, type this in the console :

* To resolv map 1, type : ```time node .\src\main.js ./maps/rect_01.map``` 
* To resolv map 2, type : ```time node .\src\main.js ./maps/rect_02.map```
* To resolv map 3, type : ```time node .\src\main.js ./maps/rect_03.map``` 
* To resolv map 4, type : ```time node .\src\main.js ./maps/rect_04.map``` 
* To resolv map 5, type : ```time node .\src\main.js ./maps/rect_05.map```

## <a name='overview'>Overview 🐨</a>

The purpose of this project is simple, you **MUST** create a binary or a script that take any textual map file that represent a labyrinth and you have to output the labyrinth with a trace of the labyrinth solution.
```sh
❯ time ./maze.ts ./data/maps/rect.07.map

real   0m0,030s
user   0m0,020s
sys    0m0,012s
```

### Run with Docker
```sh
~/learn-algorithm/exams/maze/docker > docker compose up --build
...
```

## <a name='credits'>Credits 😻</a>

* Made with 💛 by Alpha KEITA / Omma Habiba BIPLOB (students at EFREI PARIS)

<p align="right"><a href="#top">back to top</a></p>
