function ageCheck() {
    let age;
    age = parseInt(prompt("Xin mời nhập số tuổi cần kiểm tra"));
    if (age > 0 && age <= 120) {
        alert("Đây là số tuổi của con người");
    } else  {
        alert("Đây không phải là số tuổi của con người");
    }
}