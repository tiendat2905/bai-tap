let month = document.getElementById("month");
let result = document.getElementById("result");

function tinhngay() {
  switch (month.value) {
    case "1":
    case "3":
    case "5":
    case "7":
    case "10":
    case "12":
      result.innerHTML = "Tháng " + " " + month.value + " " + "có 31 ngày";
      break;
    case "2":
      result.innerHTML = "Tháng 2 có 28 hoặc 29 ngày";
      break;
    case "4":
    case "6":
    case "9":
    case "11":
      result.innerHTML = "Tháng" + " " + month.value + " " + "có 30 ngày";
      break;
  }
}
