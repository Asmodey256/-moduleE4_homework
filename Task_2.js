// Задание № 2 (Модуль E4).

/*
Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.
*/



function showProps(obj, objKeyName) {
    return (objKeyName in obj);
}

const student1 = {
    name: "Denis",
    ownCity: "Yaroslavl",
    age: 30,
    course: "Frontend"
  };


  console.log(showProps(student1, "same"));
  console.log(showProps(student1, "name"));
