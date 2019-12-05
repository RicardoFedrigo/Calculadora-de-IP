// Este arquivo serve para funcoes utilitarias
function stringIpToArr(string_ip) {
  return string_ip.split(".").map(e => parseInt(e));
}
function into_range(arr, init, fin) {
  if (typeof arr == "string") {
    arr = stringIpToArr(arr);
  }
  if (typeof init == "string") {
    init = stringIpToArr(init);
  }
  if (typeof fin == "string") {
    fin = stringIpToArr(fin);
  }
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < init[index] || arr[index] > fin[index]) {
      return false;
    }
  }
  return true;
}
function intToBin(number) {
  var result = (number >>> 0).toString(2);
  result = completaZero(result);
  return result;
}
function binToInt(number) {
  return parseInt(number, 2);
}
function completaZero(bin_number) {
  size = 8 - bin_number.length;

  for (let i = 0; i < size; i++) {
    bin_number = "0" + bin_number;
  }
  return bin_number;
}
function portAND(ip, mask) {
  result_and = "";
  bin_ip = intToBin(ip);
  bin_mask = intToBin(mask);
  if (bin_ip.length < 8) {
    bin_ip = completaZero(bin_ip);
  }
  if (bin_mask.length < 8) {
    bin_mask = completaZero(bin_mask);
  }
  for (let i = 0; i < 8; i++) {
    result_and = result_and + bin_ip[i] * bin_mask[i];
  }
  return result_and;
}
function portNOT(arr_bit) {
  var result_not = "";
  for (let i = 0; i < 8; i++) {
    if (arr_bit[i] == "1") {
      aux = 0;
    } else {
      aux = 1;
    }
    result_not = result_not + aux;
  }
  return result_not;
}
function semCriatividade(ip, mascara) {
  var result_not = "";

  for (let i = 0; i < ip.length; i++) {
    if (mascara[i] == "0") {
      aux = ip[i];
    } else {
      aux = 1;
    }
    result_not = result_not + aux;
  }
  return result_not;
}

function contador_mascara(mascara) {

  let num_1 = 0;
  let flag = "1";
  for (let i = 0; i < mascara.length; i++) {
   
    if (mascara[i] == "1") {
      num_1++;
    } else {
      flag = "0";
    }
    if (mascara[i] != flag) {
      return "Invalido";
    }
  }
  return num_1;
}
