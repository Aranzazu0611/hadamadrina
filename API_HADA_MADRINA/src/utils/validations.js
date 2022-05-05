const { response } = require("express");

const name_Regex = new RegExp("^[A-Za-zÁÉÍÓÚáéíóúñÑüÜçÇ ]{1,20}$");
const surname_Regex = new RegExp("^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{1,50}$");
const emailRegex = new RegExp(
  "^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$"
);
const phoneRegex = new RegExp(
  "^(([+]{0,1}d{2})|d?)[s-]?[0-9]{2}[s-]?[0-9]{3}[s-]?[0-9]{4}$"
);
const address_Regex = new RegExp("^[0-9A-Za-zÁÉÍÓÚáéíóúñÑ ]{1,20}$");

function stringValidation(data) {
  const { name, surnames, email, phone, address, password } = data;

  isString(name, name_Regex, 20, "Nombre: ");

  isString(surnames, surname_Regex, 50, "Surname: ");

  isEmail(email, emailRegex);

  isPhone(phone, phoneRegex);

  isString(address, address_Regex, 100, "Address: ");

  isPassword(password);
}

const isString = (name, name_Regex, size, field) => {
  if (
    !name_Regex.test(name) ||
    !name ||
    name.length > size ||
    !name.trim() ||
    typeof name === "undefined"
  ) {
    const error_name =
      field +
      "El nombre  debe tener solo letras y menos de " +
      size +
      " letras";
    throw new Error({ message: error_name });
  }
};

const isEmail = (email, emailRegex) => {
  if (
    !emailRegex.test(email) ||
    !email ||
    !email.trim() ||
    typeof email === "undefined"
  ) {
    const error_email = "El email  debe ser valido";
    throw new Error({ message: error_email });
  }
};

const isPhone = (phone, phoneRegex) => {
  if (!phoneRegex.test(phone) || !phone || typeof phone === "undefined") {
    const error_phone = "El telefono debe ser valido";
    response.Json({ message: error_phone });
    throw new Error({ message: error_phone });
  }
};

const isPassword = (password ) => {
  if (
    password.length < 8 ||
    !password ||
    !password.trim() ||
    typeof password === "undefined"
  ) {

    const error_pass = {
        message: "La password debe ser con menos de 8 carácteres",       
    };   
    
    throw new Error(error_pass.message);
    
  }
};

module.exports = {
  stringValidation,
};
