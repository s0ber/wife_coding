# Урок 5.4

Здесь хранятся файлы веб-странички, которую мы сверстали.

## Как установить SASS в вашем проекте

1. Установите Node.js

https://nodejs.org/en/

2. Установите пакет gulp глобально

npm install -g gulp

3. Создайте каркас для npm-пакета (файл package.json), для этого запустите команду из корневой папки вашего проекта

npm init

4. Установите пакет gulp локально (из корневой папке вашего проекта)

npm install --save-dev gulp

5. Установите пакет gulp-sass для компиляции sass файлов.

npm install --save-dev gulp-sass

6. Создайте файл gulpfile.js с таким содержимым:

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

7. Запустите слежение за изменениями sass-файлов с помощью команды

gulp sass:watch

Теперь ваши стили будут компилироваться автоматически!


## Как установить SASS, если вы скопировали себе этот проект.

1. Установите Node.js

https://nodejs.org/en/

2. Установите пакет gulp глобально

npm install -g gulp

3. Установите необходимые пакеты

npm install

4. Запустите слежение за изменениями sass-файлов с помощью команды

gulp sass:watch

Теперь ваши стили будут компилироваться автоматически!