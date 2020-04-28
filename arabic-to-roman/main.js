let arabicRoman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V:5,
    IV: 4,
    I: 1
};

function arabicToRoman(num){
    let romanized = "";
    for (var roman in arabicRoman){
        while(num >= arabicRoman[roman]){
            romanized += roman;
            num -= arabicRoman[roman];
        }
    }
    return romanized;
}

document.write(arabicToRoman(1907));


// ================Different Syntax - 1============================

// arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
// roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

// function arabicToRoman(num){
//     let romanized = "";
//     for(let i = 0; i < arabic.length; i++){
//         while(num >= arabic[i]){
//             romanized += roman[i];
//             num -= arabic[i];
//         }
//     }
//     return romanized;
// }

// document.write(arabicToRoman(1907));



// ================Different Syntax - 2============================

// let arabicRoman = [
//     {1000: "M"}, {900: "CM"}, {500: "D"}, {400: "CD"}, {100: "C"}, {90: "XC"},
//     {50: "L"}, {40: "XL"}, {10: "X"}, {9: "IX"}, {5: "V"}, {4: "IV"}, {1: "I"},
// ];

// function arabicToRoman(num){
//     let romanized = "";
//     for(let i = 0; i < arabicRoman.length; i++){
//         while(num >= Object.keys(arabicRoman[i])){
//             romanized += Object.values(arabicRoman[i]);
//             num -= Object.keys(arabicRoman[i]);
//         }
//     }
//     return romanized;
// }

// document.write(arabicToRoman(1907));



