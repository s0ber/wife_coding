# Урок 5.4

Здесь хранятся файлы веб-странички, которую мы сверстали.

## Как установить SASS в вашем проекте

Установите Node.js

`https://nodejs.org/en/`

Установите пакет gulp глобально

`npm install -g gulp`

Создайте каркас для npm-пакета (файл package.json), для этого запустите команду из корневой папки вашего проекта

`npm init`

Установите пакет gulp локально (из корневой папке вашего проекта)

`npm install --save-dev gulp`

Установите пакет gulp-sass для компиляции sass файлов.

`npm install --save-dev gulp-sass`

Создайте файл gulpfile.js с таким содержимым:

```js
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./styles_src/main.scss')
    .pipe(sass({includePaths: ['./styles_src']}).on('error', sass.logError))
    .pipe(gulp.dest('./styles'));
});

gulp.task('sass:watch', function () {
  gulp.watch(['./styles_src/**/*.scss', './styles_src/**/*.sass'], ['sass']);
});
```

Запустите слежение за изменениями sass-файлов с помощью команды

`gulp sass:watch`

Теперь ваши стили будут компилироваться автоматически!


## Как установить SASS, если вы скопировали себе этот проект.

Установите Node.js

https://nodejs.org/en/

Установите пакет gulp глобально

`npm install -g gulp`

Установите необходимые пакеты

`npm install`

Запустите слежение за изменениями sass-файлов с помощью команды

`gulp sass:watch`

Теперь ваши стили будут компилироваться автоматически!
