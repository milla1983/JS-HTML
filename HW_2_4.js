//Написать функцию, которая проверяет, является ли слово палиндромом например, функция isPalindrom(word)
let  word = 'redivider' ;
let Palindrom = 1;             // маркер палиндрома
let i = 0;                     // индекс первого символа слова
let j = word.length - 1;       // индекс последнего символа слова 


function isPalindrom(word) {     
 for ( let k = 1; k <= word.length/2; k++){           
      if (word[i] == word[j]) {
        i++;
        j--;
        
      } else {
        Palindrom = 0;
        break;
      }

      }
 }
 isPalindrom(word);
 switch(Palindrom){
    case 0: console.log(word," - Данное слово не палиндром"); break;
    case 1: console.log(word, " - Данное слово палиндром"); break;

 }
  
        

 
   



