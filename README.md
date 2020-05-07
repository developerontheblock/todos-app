# Notes App


## Installation

Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.

It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your machine. To create a project, run:

```bash
npx create-react-app my-app
cd my-app
npm start

```

## Requirements
Студентите разработват самостоятелен курсов проект в рамките на триместъра. Изискванията за проекта са както следва:

Да се създаде приложение с ReactJS, което да има следната функционалност:

1. Автентикация:
 - регистрация, при която потребителят by default няма администраторски права
 - потребител може да влезе в системата с потребителско име и парола
 - потребителите могат да бъдат или да не бъдат администратори

2. Управление на потребители
 - администраторите могат да добавят, редактират, изтриват и преглеждат потребителите в системата, както и да дават администраторски права на съществуващи потребители
 - при изтриване на даден потребител, всички негови задачи също трябва да бъдат изтрити ( Cascade Deletion )

3. Управление на задачи
 - всеки потребител може да създава, изтрива, редактира и преглежда задачи
 - задачата се състои от: заглавие; описание; оценка (време в часове); 
 - статут на задачата (приключена, чакаща изпълнение). 
 - редакцията/изтриването на задачите става по следният начин 
   - администраторът може да изтрива/променя всички задачи, а потребителят - само тези, които той е създал

Приложението да се реализира със следните детайли
 - LocalStorage като база данни
 - React Routing за навигация между компонентите

## License
[Docs](https://docs.google.com/document/d/1jpIJo9LBsPsH5L2QzlfYQ_yry_EU3Nrn6l05ZR4jV_E/edit)