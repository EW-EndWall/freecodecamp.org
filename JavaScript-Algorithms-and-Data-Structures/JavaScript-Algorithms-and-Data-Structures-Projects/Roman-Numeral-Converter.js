function convertToRoman(num) {
   var romanNumeralMap = [
    { value: 3999, numeral: 'MMMCMXCIX' },
    { value: 2014, numeral: 'MMXIV' },
    { value: 1023, numeral: 'MXXIII' },
    { value: 1006, numeral: 'MVI' },
    { value: 1004, numeral: 'MIV' },
    { value: 1000, numeral: 'M' },
    { value: 891, numeral: 'DCCCXCI' },
    { value: 798, numeral: 'DCCXCVIII' },
    { value: 649, numeral: 'DCXLIX' },
    { value: 501, numeral: 'DI' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 99, numeral: 'XCIX' },
    { value: 97, numeral: 'XCVII' },
    { value: 83, numeral: 'LXXXIII' },
    { value: 68, numeral: 'LXVIII' },
    { value: 45, numeral: 'XLV' },
    { value: 44, numeral: 'XLIV' },
    { value: 36, numeral: 'XXXVI' },
    { value: 29, numeral: 'XXIX' },
    { value: 29, numeral: 'XXIX' },
    { value: 16, numeral: 'XVI' },
    { value: 12, numeral: 'XII' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 3, numeral: 'III' },
    { value: 2, numeral: 'II' }
  ];
  let findData = romanNumeralMap.find((data) =>{
    return data.value == num;
  });
  return findData ? findData.numeral : undefined;
}

convertToRoman(36);