
function findHoroscope(day,month){
switch(month){
    case 1:
        if(day <= 21){
           horoscope = "oglak";
        }else{
           horoscope = "kova";
        }
        break;

    case 2:
        if(day <= 19){
           horoscope = "kova";
        }else{
           horoscope = "balik";
        }
        break;

    case 3:
        if(day <= 21){
            horoscope = "balik";
        }else{
            horoscope = "koc";
        }
        break;

    case 4:
        if(day <= 21){
            horoscope = "koc";
        }else{
            horoscope = "boga";
        }
        break;

    case 5:
        if(day <= 21){
            horoscope = "boga";
        }else{
            horoscope = "ikizler";
        }
        break;

    case 6:
        if(day <= 21){
            horoscope = "ikizler";
        }else{
            horoscope = "yengec";
        }
        break;

    case 7:
        if(day <= 21){
            horoscope = "yengec";
        }else{
            horoscope = "aslan";
        }
        break;

    case 8:
        if(day <= 21){
            horoscope = "aslan";
        }else{
            horoscope = "basak";
        }
        break;

    case 9:
        if(day <= 21){
            horoscope = "basak";
        }else{
            horoscope = "terazi";
        }
        break;

    case 10:
        if(day <= 21){
            horoscope = "terazi";
        }else{
            horoscope = "akrep";
        }
        break;

    case 11:
        if(day <= 21){
            horoscope = "akrep";
        }else{
            horoscope = "yay";
        }
        break;

    case 12:
        if(day <= 21){
            horoscope = "yay";
        }else{
            horoscope = "oglak";
        }
        break;
}

return horoscope;

}

console.log(findHoroscope(4,6));






/*
let str = "";
let arr = [];

for (var i = 1; i < 31; i++){
    for(var j = 1; j<13; j++){
        str += `(${i},${j}) `;
    }
}

arr = str.split(' ').filter(function (el) {
  return el != "";
});

console.log(arr[4]);
*/
