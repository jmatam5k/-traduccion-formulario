var titulo=function(){
var tituloDos=document.getElementById("form-signin-heading");
tituloDos.innerHTML="Por favor inicia sesión";
};
titulo();

var correo=function(){
	var inmail= document.getElementById("inputEmail").placeholder="Correo Electronico";

};
correo();

var contras=function(){
	var pass=document.getElementById("inputPassword").placeholder="Contraseña";

};
contras();

var chbox=function(){
	var check=document.getElementsByTagName("span")[0];
check.textContent="Recordar datos";

};
chbox();

var boton=function(){
	var botn=document.getElementsByTagName("button")[0];
botn.textContent="Iniciar Sesión";

};
boton();

