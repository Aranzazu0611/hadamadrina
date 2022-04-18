
const name_Regex = new RegExp("^[A-Za-zÁÉÍÓÚáéíóúñÑüÜçÇ ]{1,20}$")
const surname_Regex = new RegExp("^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{1,50}$")
const emailRegex = new RegExp("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$")
const phoneRegex = new RegExp("^(([+]{0,1}\d{2})|\d?)[\s-]?[0-9]{2}[\s-]?[0-9]{3}[\s-]?[0-9]{4}$")
const address_Regex = new RegExp("^[0-9A-Za-zÁÉÍÓÚáéíóúñÑ ]{1,20}$")




function stringValidation(data) {

    const { name, surnames, email, phone, address, password, volunteers_rol } = data

    isString(name, name_Regex, 20, "Name: ")

    isString(surnames, surname_Regex, 50, "Surname: ")

    isEmail(email, emailRegex)

    isPhone(phone, phoneRegex)

    isString(address, address_Regex, 100, "Address: ")

    isPassword(password)

    isVolunteer(volunteers_rol)





}

const isString=(name, name_Regex, size, field)=> { 

    if (!name_Regex.test(name) || !name || name.length > size  || !name.trim() || typeof name ==="undefined") { 

        const error_name = field + "El nombre  debe tener solo letras y menos de "+size+" letras";       
        throw new Error(error_name);        
      
    }
}

const isEmail=(email, emailRegex)=> { 

     if (!emailRegex.test(email) || !email || !email.trim() || typeof email ==="undefined") {
        throw new Error("El email  debe ser valido");

    }
}

const isPhone=(phone,phoneRegex) => {
     if (!phoneRegex.test(phone) || !phone || typeof phone ==="undefined") {
        throw new Error("El telefono debe ser valido");

    }
}

const isPassword=(password)=> {
    if (password.length < 8 || !password || !password.trim() || typeof password === "undefined") {

        throw new Error("La password debe ser con menos de 8 carácteres");
    }

}

const isVolunteer=(volunteer) => {
    if ( !volunteer || !volunteer.trim() || typeof volunteer === "undefined" || volunteer !="ADMIN" || volunteer !="FOOD" ) {

        throw new Error("La volunteer debe ser valida");
    }
}

module.exports = {
    stringValidation
}