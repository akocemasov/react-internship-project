export function checkValid(type, str) {
  let valid = true;
  let message = "";
  switch (type) {
    case "username":
      if (str.length < 3) {
        valid = false;
        message = "username too short";
      }
      break;
    case "email":
      const email = str.split("@");
      if (email.length < 2) {
        valid = false;
        message = "email should contain @";
      } else if (email.length > 2) {
        valid = false;
        message = "email should not contain more than one @";
      } else if (email[0] === "") {
        valid = false;
        message = "email name before @ should not be empty";
      } else if (email[1] === "") {
        valid = false;
        message = "email name after @ should not be empty";
      }
      break;
    case "password":
    case "passwordConfirm":
      if (str.length < 3) {
        valid = false;
        message = "password too short";
      }
      break;
    default:
      break;
  }
  return [valid, message];
}

export function getRegex(type) {
  let regex;
  switch (type) {
    case "username":
    case "email":
    case "password":
    case "passwordConfirm":
      regex = /\s/g;
      break;
    default:
      regex = /.*/g;
      break;
  }
  return regex;
}
