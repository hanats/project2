function startlog(){
    var net1 = document.getElementById('nama').value + document.getElementById('pswd').value;
    var net2 = ('hanats') + ('254');
    if (net1 == net2){
        var logakses = document.getElementById('submit').innerHTML = 'Login Successfully';
    }else {
        var logakses = document.getElementById('submit').innerHTML = 'Login Failed';
    };
}