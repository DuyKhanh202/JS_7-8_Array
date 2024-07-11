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
  var chan = `Số chẵn cuối cùng trong mảng : `;
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
  var inputPosition1 = +document.getElementById("inputPosition1").value;
  var inputPosition2 = +document.getElementById("inputPosition2").value;
  var index3 = 0;
  var change = `MẢNG ĐÃ ĐỔI : `;
  index3 = listNumber[inputPosition1];
  listNumber[inputPosition1] = listNumber[inputPosition2];
  listNumber[inputPosition2] = index3;
  for (var i = 0; i < listNumber.length; i++) {
    change += `[${listNumber[i]}]`;
  }
  document.getElementById("baiDoiCho").innerHTML = change;
}
// 7. Sắp xếp mảng theo thứ tự tăng dần.
function sort() {
  // Kiểm tra xem mảng listNumber có rỗng hay không
  if (listNumber.length === 0) {
    document.getElementById("result").innerHTML = "Vui lòng nhập số vào mảng";
    return;
  }

  // Biến lưu trữ kết quả sắp xếp
  var sapXep = "Sắp Xếp Tăng Dần : ";
  // Sắp xếp mảng theo thứ tự tăng dần
  for (var i = 0; i < listNumber.length - 1; i++) {
    for (var j = i + 1; j < listNumber.length; j++) {
      // Đổi chỗ nếu phần tử phía trước lớn hơn phần tử phía sau
      if (listNumber[i] > listNumber[j]) {
        var temp = listNumber[i];
        listNumber[i] = listNumber[j];
        listNumber[j] = temp;
      }
    }
  }
  // Cập nhật kết quả sắp xếp
  sapXep += listNumber.join(', ');
  document.getElementById("result").innerHTML = sapXep;
}
function test_prime(n) {
  if (n === 1 || n === 0) {  // Kiểm tra nếu n là 1 hoặc 0
    return false;
  }
  if (n === 2) {// Kiểm tra nếu n là 2
    return true;
  }
  // Kiểm tra nếu n chia hết cho bất kỳ số nào từ 2 đến n-1
  for (var x = 2; x < n; x++) {
    if (n % x === 0) {
      return false;
    }
  }
  // Nếu không chia hết cho số nào từ 2 đến n-1, n là số nguyên tố
  return true;
}
// 8. Tìm số nguyên tố đầu tiên
function timSoNguyenToDauTien() {
  if (listNumber.length === 0) {
    document.getElementById("result").innerHTML = "Vui lòng nhập số vào mảng";
    return;
  }

  var firstPrime = 0;
  var soHang = `SỐ NGUYÊN TỐ ĐẦU TIÊN TRONG MẢNG : `;

  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      if (test_prime(listNumber[i]) === true) {
        firstPrime = listNumber[i];
      }
    }
  }

  if (firstPrime == 0) {
    soHang = document.getElementById("result").innerHTML = -1;
  }
  soHang += firstPrime;
  document.getElementById("result").innerHTML = soHang;
}
//      9. Đếm số nguyên tố
function demSoNguyenTo() {
  if (listNumber.length === 0) {
    document.getElementById("result").innerHTML = "Vui lòng nhập số vào mảng";
    return;
  }
  var countPrime = 0;
  var soThuc = `Các Số Nguyên Trong Mảng : `;

  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      if (test_prime(listNumber[i]) === true) {
        countPrime++;
      }
    }
  }
  soThuc += countPrime;
  document.getElementById("result").innerHTML = soThuc;
}
// 10. So sánh số lượng âm dương
function soSanhSoLuongAmDuong() {
  if (listNumber.length === 0) {
    document.getElementById("result").innerHTML = "Vui lòng nhập số vào mảng";
    return;
  }

  var countPos = 0;
  var countNev = 0;

  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] >= 0) {
      countPos++;
    } else {
      countNev++;
    }
  }

  var soSanh = "";
  if (countPos > countNev) {
    soSanh = "Số dương nhiều hơn";
  } else if (countNev > countPos) {
    soSanh = "Số âm nhiều hơn";
  } else {
    soSanh = "Dương và âm bằng nhau";
  }

  document.getElementById("result").innerHTML = soSanh;
}
