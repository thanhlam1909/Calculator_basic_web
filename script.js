// Khai báo các biến toàn cục
let inputNumber = ""; // Số đầu vào từ người dùng
let operation = ""; // Phép toán đã chọn
let secondNumber = ""; // Số thứ hai trong phép toán

// Hàm thêm số hoặc phép toán vào các biến
function appendNumber(value) {
  // Kiểm tra nếu giá trị là phép toán
  if (["+", "-", "*", "/"].includes(value)) {
    if (inputNumber !== "") { // Nếu đã có số đầu vào
      operation = value; // Gán phép toán cho biến operation
      secondNumber = ""; // Xóa số thứ hai để chuẩn bị nhập số mới
    }
  } else { // Nếu giá trị là số
    if (operation === "") { // Nếu chưa chọn phép toán
      inputNumber += value; // Thêm số vào inputNumber
    } else {
      secondNumber += value; // Thêm số vào secondNumber
    }
  }
  updateDisplay(); // Cập nhật giao diện người dùng
}

// Hàm tính toán kết quả dựa trên phép toán đã chọn
function calculateResult() {
  let result = 0; // Khởi tạo biến lưu trữ kết quả
  const num1 = parseFloat(inputNumber); // Chuyển đổi inputNumber thành số thực
  const num2 = parseFloat(secondNumber); // Chuyển đổi secondNumber thành số thực

  // Thực hiện phép toán dựa trên giá trị của biến operation
  switch (operation) {
    case "+":
      result = num1 + num2; // Cộng hai số
      break;
    case "-":
      result = num1 - num2; // Trừ hai số
      break;
    case "*":
      result = num1 * num2; // Nhân hai số
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Error"; // Chia hai số và kiểm tra mẫu số không bằng 0
      break;
    default:
      result = "Error"; // Nếu không có phép toán hợp lệ, trả về lỗi
  }

  inputNumber = result; // Cập nhật biến inputNumber với kết quả
  operation = ""; // Xóa phép toán
  secondNumber = ""; // Xóa số thứ hai
  updateDisplay(); // Cập nhật giao diện người dùng
}

// Hàm tính căn bậc hai của số hiện tại
function calculateSquareRoot() {
  inputNumber = Math.sqrt(parseFloat(inputNumber)); // Tính căn bậc hai và cập nhật inputNumber
  updateDisplay(); // Cập nhật giao diện người dùng
}

// Hàm xóa tất cả các giá trị
function clearAll() {
  inputNumber = ""; // Xóa số đầu vào
  operation = ""; // Xóa phép toán
  secondNumber = ""; // Xóa số thứ hai
  updateDisplay(); // Cập nhật giao diện người dùng
}

// Hàm xóa ký tự cuối cùng của số hoặc phép toán
function clearLast() {
  if (secondNumber !== "") { // Nếu có số thứ hai
    secondNumber = secondNumber.slice(0, -1); // Xóa ký tự cuối cùng
  } else if (operation !== "") { // Nếu có phép toán
    operation = ""; // Xóa phép toán
  } else if (inputNumber !== "") { // Nếu có số đầu vào
    inputNumber = inputNumber.slice(0, -1); // Xóa ký tự cuối cùng
  }
  updateDisplay(); // Cập nhật giao diện người dùng
}

// Hàm thay đổi dấu của số hiện tại
function toggleSign() {
  if (inputNumber !== "") { // Nếu có số đầu vào
    inputNumber = (parseFloat(inputNumber) * -1).toString(); // Thay đổi dấu của số
    updateDisplay(); // Cập nhật giao diện người dùng
  }
}

// Hàm cập nhật giao diện người dùng
function updateDisplay() {
  document.getElementById("inputNumber").value = inputNumber; // Cập nhật giá trị của ô inputNumber
  document.getElementById("operation").value = operation; // Cập nhật giá trị của ô operation
  document.getElementById("secondNumber").value = secondNumber; // Cập nhật giá trị của ô secondNumber
  document.getElementById("result").value = operation ? "" : inputNumber; // Hiển thị kết quả hoặc số đầu vào
}
