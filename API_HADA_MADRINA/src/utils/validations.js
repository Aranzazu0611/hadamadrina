const stringValidation = (data) => {
    const name_Regex = new RegExp("^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{1,20}$")
    const surname_Regex = new RegExp("^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{1,50}$")
    const emailRegex = new RegExp("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$")
    const phoneRegex = new RegExp("^(([+]{0,1}\d{2})|\d?)[\s-]?[0-9]{2}[\s-]?[0-9]{3}[\s-]?[0-9]{4}$")
    const address_Regex = new RegExp("^[0-9A-Za-zÁÉÍÓÚáéíóúñÑ ]{1,20}$")
    const password_Regex = new RegExp("/^(?=.*[a-záéíóúñ])(?=.*[A-ZÁÉÍÓÚÑ])(?=.*[0-9])\S{8,16}$/gm")

    const { name, surnames, email, phone, address, password, volunteers_rol } = data



    if (!name_Regex.test(name) || !name) {

        throw new Error("El nombre  debe tener solo letras y menos de 20 letras");


    }

    if (!surname_Regex.test(surnames) || !surnames) {
        throw new Error("El apellido  debe tener solo letras y menos de 50 letras");

    }

    if (!emailRegex.test(email) || !email) {
        throw new Error("El email  debe ser valido");

    }
    if (!phoneRegex.test(phone) || !phone) {
        throw new Error("El telefono debe ser valido");

    }

    if (!address_Regex.test(address) || !address) {
        throw new Error("La dirección debe ser valida");

    }

    if (!password_Regex.test(password) || !password) {

        throw new Error("La password debe ser valida");


    }

    // if (!surname_Regex.test(volunteers_rol) || !volunteers_rol) {
    //     return res
    //         .status(400)
    //         .send({ message: "El rol debe ser valida" })

    // }









}

module.exports = {
    stringValidation
}