var listNumber = [];
function themSo() {
  var txtNumber = document.getElementById("txtNumber").value * 1;
  listNumber.push(txtNumber);
  document.getElementById("resultArray").innerHTML = listNumber;
}
// 1. Tổng các số dương
function tongSoDuong() {
  if (listNumber.length === 0) {
    document.getElementById("result").innerHTML = "Xin hãy nhập số vào mảng";
    return;
  }

  var sum = 0;
  var tong = `Câu 1: Tổng Các Số Dương Trong Mảng Là: `;
  for (var i = 0; i < listNumber.length; i++) {
    var number = listNumber[i];
    if (number >= 0) {
      sum += number;
    }
  }
  tong += sum;
  document.getElementById("result").innerHTML = tong;
}
// 2. Đếm có bao nhiêu số dương trong mảng
function demSoDuong(){
  if (listNumber.length === 0) {
    document.getElementById("result").innerHTML = "Xin hãy nhập số vào mảng";
    return;
  }
  var count = 0;
  var dem = `Câu 2: đếm các số dương của mãng : `;
  for (var i = 0; i < listNumber.length; i++) {
    var number = listNumber[i];
    if (number >= 0) {
      count++;
    }
  }
  dem += count;
  document.getElementById("result").innerHTML = dem;
}
//   3. Tìm số nhỏ nhất trong mảng.
function soNhoNhat() {
  if (listNumber.length === 0) {
    document.getElementById("result").innerHTML = "Xin hãy nhập số vào mảng";
    return;
  }
  var nho = `SỐ NHỎ NHẤT TRONG MẢNG : `;
  var viTri = 0;
  var min = listNumber[viTri];
  for (var i = 1; i < listNumber.length; i++) {
    var number = listNumber[i];
    if (min > number) {
      min = number;
    }
  }
  nho += min;
  document.getElementById("result").innerHTML = nho;
}
// 4. Tìm số dương nhỏ nhất trong mảng.
function soMinDuong() {
  if (listNumber.length === 0) {
    document.getElementById("result").innerHTML = "Xin hãy nhập số vào mảng";
    return;
  }
  var duongnho = `Số Dương Nhỏ Nhất Trong Mảng : `;
  var soNhoNhat = listNumber[0];
  for (var i = 0; i < listNumber.length; i++) {
    if (soNhoNhat > listNumber[i] && listNumber[i] > 0) {
      soNhoNhat = listNumber[i];
    }
  }
  duongnho += soNhoNhat;
  document.getElementById("result").innerHTML = duongnho;
}
// 5. Tìm số chẵn cuối cùng trong mảng.
function soChanCuoi() {
  if (listNumber.length === 0) {
    document.getElementById("result").innerHTML = "Vui lòng nhập số vào mảng";
    return;
  }
  let chan = `Số chẵn cuối cùng trong mảng : `;
  var tong = 0;
  for (var i = 0; i < listNumber.length; i++) {
    var number = listNumber[i];
    if (number % 2 === 0 && listNumber[i] > 0) {
      tong = number;
    }
    if (tong == 0) {
      tong = document.getElementById("result").innerHTML = -1;
    }
  }
  chan += tong;
  document.getElementById("result").innerHTML = chan;
}
// 6. Đổi chỗ
function doichoGiaTri() {
  let inputPosition1 = +document.getElementById("inputPosition1").value;
  let inputPosition2 = +document.getElementById("inputPosition2").value;
  let index3 = 0;
  let change = `MẢNG ĐÃ ĐỔI : `;
  index3 = listNumber[inputPosition1];
  listNumber[inputPosition1] = listNumber[inputPosition2];
  listNumber[inputPosition2] = index3;
  for (let i = 0; i < listNumber.length; i++) {
    change += `[${listNumber[i]}]`;
  }
  document.getElementById("baiDoiCho").innerHTML = change;
}
// 7. Sắp xếp mảng theo thứ tự tăng dần.