/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

// let union;
// let literal;

let union: string | number;

union = 'qwerty';
union = 25;

let literal: 'disable' | 'enable';
literal = 'disable'
literal = 'enable'