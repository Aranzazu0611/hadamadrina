function format_date(date) {
  if (date === "0000-00-00") {
    return "";
  }

  const result = new Date(date).toLocaleDateString("en-CA");

  return result;
}

const message_not_register = "No hay registros";

module.exports = {
  format_date,

  message_not_register,
};
