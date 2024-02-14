// js string methods
// 1.string length
var a='hello world';
document.write(a.length +'<br>');
// 2.touppercase()
var a='hello world';
document.write(a.toUpperCase() +'<br>');
// 3.tolowercase()
var a='Hello WOrld';
document.write(a.toLowerCase() +'<br>');
// 4.replace()
var a='Javascript';
document.write(a.replace('Javascript','Php') +'<br>');
// 5.replaceall()
var a='Javascript css Javascript html';
document.write(a.replaceAll(/Javascript/g,'Php') +'<br>');
// // 6.trim()
// var a='           Javascript     ';
// document.write(alert(a) +'<br>');
// document.write(alert(a.trim()) +'<br>');
// // 7.trimstart()
// var a='  Javascript';
// document.write(alert(a) +'<br>');
// document.write(alert(a.trimStart()) +'<br>');
// // 8.trimend()
// var a='Javascript    ';
// document.write(alert(a) +'<br>');
// document.write(alert(a.trimEnd()) +'<br>');
// 9.charAt()
var a='Javascript';
document.write(a.charAt(7) +'<br>');
// 10.concat()
var a='Javascript';
var b='php';
document.write(a.concat(' ',b) +'<br>');
// 11.split()
var a='js php html css';
document.write(a.split('') +'<br>');
console.log(a[4]);
document.write(a.split(" ") +'<br>');
console.log(a[4]);
document.write(a.split(",") +'<br>');
console.log(a[4]);
document.write(a.split('|') +'<br>');
console.log(a[4]);
document.write(a.split() +'<br>');
console.log(a[0]);
// 12.slice()
var a='js php html css';
document.write(a.slice(1,5) +'<br>');
document.write(a.slice(5) +'<br>');
// 13.substring()
var a='Javascript hello';
document.write(a.substring() +'<br>');
// 14.substr()
var a='Javascript php';
document.write(a.substr(0,5) +'<br>');
// 15.padstart()
var a='Javascript';
document.write(a.padStart(11,'x') +'<br>');
// 16.padend()
var a='Javascript';
document.write(a.padEnd(11,'x') +'<br>');