let a = prompt ('Введите значение');
    a++
    a--
     console.log(typeof a)
   
    
if (typeof a !== 'number') {
   alert("Упс, кажется, вы ошиблись")
     
} else if (isNaN(a) == true) {
  
 alert("Упс, кажется, вы ошиблись")
  
} else if (a % 2 == 0) {
    console.log('Четное')
     
} else console.log('Не четное')