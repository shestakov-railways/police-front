import { isValidPhoneNumber } from 'libphonenumber-js';

const isValidEmail = (value = "") => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!value.match(regex)) {
      return "Incorrect email format";
    }

    return true;
};

const isValidPhone = (value = "") => {
    if(value.length > 13) return "Incorrect phone number length";

    if (value.startsWith('+')) {
        return value == "" ? true : isValidPhoneNumber(value, 'UA') || "Invalid phone number, use format +[country code][phone number]";
    } else {
        return "Phone number must start with '+'.";
    }
};

function isValidURL(url = "") {
    const pattern = new RegExp('^(https?:\\/\\/)?'+
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
        '((\\d{1,3}\\.){3}\\d{1,3}))'+
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
        '(\\#[-a-z\\d_]*)?$','i');

    return !!pattern.test(url) ? true : "Incorrect URL format";
}

function isValidIP(ip = "") {
    const ipv4Pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    
    return ipv4Pattern.test(ip) ? true : "Incorrect IP address format";
}

export {
    isValidEmail,
    isValidPhone,
    isValidURL,
    isValidIP
}