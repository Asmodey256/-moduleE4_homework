
// Задание № 1 (Модуль E4).

/*
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение.
*/

function showOwnProps(obj) {
  let result = "";
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result += key + ": " + obj[key] + "\n";
    }
  }
  console.log(result);
}


const student1 = {
  name: "Denis",
  ownCity: "Yaroslavl",
  age: 30,
  course: "Frontend"
};


showOwnProps(student1);
