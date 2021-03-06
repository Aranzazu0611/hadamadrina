

const name_Regex = new RegExp("^[A-Za-zÁÉÍÓÚáéíóúñÑüÜçÇ ]{1,20}$");
const surname_Regex = new RegExp("^[A-Za-zÁÉÍÓÚáéíóúñÑ ]{1,50}$");
const emailRegex = new RegExp(
  "^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$"
);
const phoneRegex = new RegExp(
  "^(([+]{0,1}d{2})|d?)[s-]?[0-9]{2}[s-]?[0-9]{3}[s-]?[0-9]{4}$"
);
const address_Regex = new RegExp("^[0-9A-Za-zÁÉÍÓÚáéíóúñÑ ]{1,20}$");

const stringValidationFood =(data) => {
  const { food_category, description, food_entry_date, food_departure_date} = data;

  isString(food_category, name_Regex, 20);

  isString(description, surname_Regex, 50);

  isDate(food_entry_date);
  if(food_departure_date){
    isDate(food_departure_date);
  } 
}
const stringValidationClothing =(data) => {
  const { clothing_category, description, colour, age,clothing_entry_date, clothing_departure_date} = data;

  isString(clothing_category, name_Regex, 50);

  isString(description, surname_Regex, 100);

  isString(colour, name_Regex, 100); 

  isChild(age)
  
  isDate(clothing_entry_date);
  if(clothing_departure_date){
    isDate(clothing_departure_date);
  }

  
  
}



const stringValidationUser = (data) => {
  const { name, surnames, email, phone, address, password } = data;

  isString(name, name_Regex, 20);

  isString(surnames, surname_Regex, 50);

  isEmail(email, emailRegex);

  isPhone(phone, phoneRegex);

  isString(address, address_Regex, 100);

  isPassword(password);
}

const stringValidationMother = (data) => {
  const {
    name,
    surnames,
    age,
    email,
    phone,
    address,
    nationality,
    mother_birth,
    civil_status,
  } = data;

  isString(name, name_Regex, 20);

  isString(surnames, surname_Regex, 50);
  isAdult(age);
  isNationality(nationality, name_Regex);

  isEmail(email, emailRegex);

  isPhone(phone, phoneRegex);

  isAddress(address, address_Regex, 100);

  isDate(mother_birth);
}

const stringValidationHygiene = (data) => {
  const { hygiene_category, description, brand, hygiene_entry_date, hygiene_departure_date } = data;

  isCategory(hygiene_category, name_Regex, 250);

  isDescription(description, 250);
  isBrand(brand, 100);

  isDate(hygiene_entry_date);
  if(hygiene_departure_date){
    isDate(hygiene_departure_date);
  }
}

const stringValidationFurniture =(data) => {
  const {
    furniture_category,
    description,
    state,
    furniture_entry_date,
    furniture_departure_date,
  } = data;

  isCategory(furniture_category, name_Regex, 250);

  isDescription(description, 250);
  isState(state, 100);
  isDate(furniture_entry_date);
  if(furniture_departure_date){
    isDate(furniture_departure_date);
  }
}

const stringValidationChildren =(data) => {
  const {
    name,
    surnames,
    age,
    gender,
    children_birth,
    father_name

  } = data;

  isString(name, name_Regex, 20);
  isString(surnames, surname_Regex, 50);
  isChild(age);
  isString(gender, name_Regex, 10);
  isDate(children_birth)
  isString(father_name, name_Regex, 20);

}

const isString = (name, name_Regex, size) => {
  if (
    !name_Regex.test(name) ||
    !name ||
    name.length > size ||
    !name.trim() ||
    typeof name === "undefined"
  ) {
    const error_pass = {
      message:
        "El nombre o apellidos debe tener solo letras y menos de " +
        size +
        " letras",
    };

    throw new Error(error_pass.message);
  }
};

const isCategory = (name, name_Regex, size) => {
  if (
    !name_Regex.test(name) ||
    !name ||
    name.length > size ||
    !name.trim() ||
    typeof name === "undefined"
  ) {
    const error_pass = {
      message: "La categoria debe ser una palabra",
    };

    throw new Error(error_pass.message);
  }
};

const isAddress = (address, size) => {
  if (!address || address.length > size || typeof address === "undefined") {
    const error_pass = {
      message: "La nacionalidad debe contener letras",
    };

    throw new Error(error_pass.message);
  }
};

const isBrand = (brand, size) => {
  if (!brand || brand.length > size || typeof brand === "undefined") {
    const error_pass = {
      message: "La marca debe ser correcta",
    };

    throw new Error(error_pass.message);
  }
};

const isState = (brand, size) => {
  if (!brand || brand.length > size || typeof brand === "undefined") {
    const error_pass = {
      message: "El estado debe ser correcto",
    };

    throw new Error(error_pass.message);
  }
};

const isDescription = (description, size) => {
  if (
    !description ||
    description.length > size ||
    typeof description === "undefined"
  ) {
    const error_pass = {
      message: "La descripción debe ser correcta",
    };

    throw new Error(error_pass.message);
  }
};

const isNationality = (nationality, name_Regex) => {
  if (
    !name_Regex.test(nationality) ||
    !nationality ||
    !nationality.trim() ||
    typeof nationality === "undefined"
  ) {
    const error_pass = {
      message: "La nacionalidad debe contener solo letras",
    };

    throw new Error(error_pass.message);
  }
};

const isEmail = (email, emailRegex) => {
  if (
    !emailRegex.test(email) ||
    !email ||
    !email.trim() ||
    typeof email === "undefined"
  ) {
    const error_pass = {
      message: "El email  debe ser valido",
    };

    throw new Error(error_pass.message);
  }
};

const isPhone = (phone, phoneRegex) => {
  if (!phoneRegex.test(phone) || !phone || typeof phone === "undefined") {
    const error_pass = {
      message: "El telefono debe ser valido",
    };

    throw new Error(error_pass.message);
  }
};
const isChild = (data) => {
  if (!data || isNaN(data)|| data > 18 || data < 0) {
    const error_pass = {
      message: "La edad deber ser un número menor de 18 y mayor que 0",
    };

    throw new Error(error_pass.message);
  }
};
const isAdult = (data) => {
  if (!data || isNaN(data)|| data > 90 || data < 18 ) {
    const error_pass = {
      message: "La edad deber ser un número menor de 90 y mayor que 18",
    };

    throw new Error(error_pass.message);
  }
};
const isPassword = (password) => {
  if (
    password.length < 8 ||
    !password ||
    !password.trim() ||
    typeof password === "undefined"
  ) {
    const error_pass = {
      message: "La password debe ser con mas de 8 carácteres",
    };

    throw new Error(error_pass.message);
  }
};

const isDate = (date) => {
  if (date.length < 0 || !date || !isNaN(date) ) {
    const error_pass = {
      message: "Seleccione una fecha correcta",
    };

    throw new Error(error_pass.message);
  }
};

module.exports = {
  stringValidationUser,
  stringValidationMother,
  stringValidationHygiene,
  stringValidationFurniture,
  stringValidationFood,
  stringValidationClothing,
  stringValidationChildren
};
