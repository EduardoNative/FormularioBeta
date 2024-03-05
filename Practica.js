//js
function Registrar() {

  //codigo para capturar lo que el usuario escribe
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var birthday = document.getElementById("birthday").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;



  //codigo para validar el nombre
  if (name == null || name.length == 0 || /^\s+$/.test(name)) {
    alert("Empiece escribiendo sus nombres");
    return false;
  }

  //codigo para validar la edad
  if (!validateAge(age)) {
    alert("La edad es incorrecta");
    return false;
  }

  //codigo para validar la fecha de Nacimiento
  if (!validateDateFormat(birthday)) {
    alert("La fecha es incorrecta");
    return false;
  }

  //codigo para validar el email
  if (!validateEmails(email)) {
    alert("Correo incorrecto");
    return false;
  }

  //codigo para validar contraseña
  if (validatePasswords(password)) {
    alert("De 8 a 16 caracteres, al menos un digito, al menos una minsuscula y una mayuscula sin otros simbolos");
    return false;
  }

}


function validateAge(num) {
  var patt = new RegExp("^[1-9]?[0-9]$");
  return (patt.test(num)) ? true : false;
}


function validateDateFormat(date) {

  //var patt=new RegExp("^\d{1,2}\/\d{1,2}\/\d{2,4}$");
  var patt = new RegExp("^[0-3][0-9]\/[0-1][0-9]\/[1-2][0-9][0-9][0-9]$"); // \/\d{1,2}\/\d{2,4}

  if (patt.test(date)) {
    day = date.substring(0, 2);
    month = date.substring(3, 5);
    year = date.substring(6, 10);

    return validateDates(day, month, year);
  }
  else {
    return false;
  }
}


function validateDates(day, month, year) {
  //Expresiones Regulares para validar la entrada de los campos 
  var patt_day = new RegExp("^[0-2][0-9]|[3][0-1]$");
  if (!patt_day.test(day)) return false;

  var patt_month = new RegExp("^[0-1][0-9]|[1][0-2]$");
  if (!patt_month.test(month)) return false;

  var patt_year = new RegExp("^[1-2][0-9][0-9][0-9]$");
  if (!patt_year.test(year)) return false;

  day == parseInt(day);
  month == parseInt(month);
  year == parseInt(year);

  //Verifica que el dia este entre 1 y 31, el mes entre 1 y 12 y el año entre 1900 y 2100
  if ((day <= 0 || day > 31) || (month <= 0 || month > 12) || (year <= 1900 || year >= 2100)) {
    return false;
  }
  //Verifica que Feb, Abr, Jun, Sep y Nov NO tengan 31 días
  else if (day == 31 && (month == 2 || month == 4 || month == 6 || month == 9 || month == 11)) {
    return false;
  }
  //Verifica que Febrero no tenga 30 días
  else if (day == 30 && month == 2) {
    return false;
  }
  //Verifica que Febrero solo pueda tener 29 días en un año bisiesto
  else if (day == 29 && month == 2 && !isLeapYear(year)) {
    return false;
  }
  else {
    return true;
  }

}


function validateEmails(email) {
  expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!expr.test(email))
    return false;
  return true;
}

function validatePasswords(password) {
  expr = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  if (!expr.test(password))
    return true;
  return false;
}