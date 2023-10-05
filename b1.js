function getValue(id) {
    return document.getElementById(id).value.trim();
}

// Hiển thị lỗi
function showError(key, mess) {
    document.getElementById(key + '_error').innerHTML = mess;
}
// kiểm tra lỗi 
function validate() {

     var flag = true;
    // 1.masv
    var masv = getValue('masv');
    if (masv.length != 10) {
       // flag = false;
        showError('masv', 'Mã sinh viên gồm 10 ký tự ');
    }

    // 2. hoten
    var hoten = getValue('hoten');
    if (hoten == '' || hoten.length < 31 || !/^[a-zA-Z]+$/.test(hoten)) {
       // flag = false;
        showError('hoten', 'Họ tên không rõng và < 30 ký tự ');
    }
    // 3. tuoi
    var tuoi = getValue('tuoi');
    if (tuoi == '' || tuoi < 18) {
       // flag = false;
        showError('tuoi', 'Tuổi phải 18 trở lên ');
    }
    // 4.  ngoaingu

    var ngoaingu = document.getElementById('ngoaingu');
    var value = document.getElementsByName("ngoaingu");

    var ngoainguList = []

    for (var i = 0; i < value.length; i++) {
        if (value[i].checked) {
            ngoainguList.push(value[i].value);
        }
    }

    ngoaingu.innerHTML = ngoainguList.join(' và ');


      
     //56. chuyennganh
    var message = document.getelementbyid('chuyennganh');
    var value = obj.value;
    if (value === '') {
         message.innerhtml = "bạn chưa chọn chuyên ngành";
    } 
    else if (value === 'hệ thống') {
        message.innerhtml = "phân tích và thiết kế";
    }
    else if (value === 'phần mềm') {
         message.innerhtml = "lập trình";
    }
    else if (value === 'mạng máy tính') {
        message.innerhtml = "quản lý mạng";
    }
    showerror( ' bạn phải nhập lại cho đúng ');
    return flag;
};



