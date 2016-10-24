var titulo=function(){
var tituloDos=document.getElementById("form-signin-heading");
tituloDos.innerHTML="Inicia Sesión";
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
	var check=document.getElementsByTagName("SPAN")[0];
check.textContent="Recordar datos";

};
chbox();

var boton=function(){
	var botn=document.getElementsByTagName("BUTTON")[0];
botn.textContent="Iniciar Sesión";

};
boton();

