"use strict";

// alert('hello');

// const result = confirm("Are you here");
// console.log(result);

// const answer = +prompt("Are you 18?", "18");
// console.log(answer + 5);

// let answers = [];

// answers[0] = prompt('your name?', '');
// answers[1] = prompt('your surname?', '');
// answers[2] = prompt('your age?', '');

// document.write(answers);

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = 'Ivan';
// console.log(`Hello, ${user}`);

// console.log('arr' + " - object");

// let incr = 10,
//     decr = 10;

//     // incr++;
//     // decr--;

//     // ++incr;
//     // --decr;

//     console.log(incr++);
//     console.log(--decr);

//     console.log(5%2); 

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''),
    personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
