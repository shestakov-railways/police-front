import { isValidPhoneNumber } from 'libphonenumber-js';

const isValidEmail = (value) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!value.match(regex)) {
      return "Incorrect email format";
    }

    return true;
};

const isValidPhone = (value) => {
    return value == "" ? true : isValidPhoneNumber(value, 'UA') || "Invalid phone number, use format +[country code][phone number]";
};

export {
    isValidEmail,
    isValidPhone
}