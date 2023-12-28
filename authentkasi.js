// fungsi
// nilai username
// milai password
// cek username dan password
// berikan alert berhasil dan arahkan ke file index jika benar
// jika username dan password kosong
// berikan alert username dan password kosong
// jika username dan password salah
// berikan alert username dan password salah
function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "admin" && password == "123456"){
        alert('Anda Berhasil Log in');
        window.location = "index.html"
        return false;
    }
    else if (username == "" || password == "") {
        alert("Username / Password tidak boleh kosong")
        return false;
    }
    else{
        alert("Username / Password yang di input salah")
    }
}