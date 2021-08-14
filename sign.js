function myfunction(){
    var z = document.getElementById('userPassword');
    if(z.type ==='password'){
        z.type = 'text';
    } else{
        z.type = 'password';
    }
}