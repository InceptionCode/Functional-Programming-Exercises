
/* global require: true */
const R = require("ramda");
const Maybe = require("ramda-fantasy").Maybe;
const Just = Maybe.Just;
const Nothing = Maybe.Nothing;

const string_input = document.querySelector(".string-input"),
      text_display = document.querySelector(".text-display"),
      insert_button = document.querySelector(".insert-string"),
      reverse_button = document.querySelector(".reverse-button"),
      default_text = "Try inserting text that has at least 10 letters.";
/* If a name is not entered, or not a string, or is less than 10 characters return a default string.
   However, if the name is longer than 10 characters capitalize it.
   After the string has been processed provide a reverse button that will reverse the string.
   If the default string is provided change the reverse button to a error that states "A string must be provided."
*/

const enterString = str => {

  if (checkValue(str)) {

    return Nothing();
  } else {

    return Just(str).getOrElse();
  }
};

const checkValue = str => {

  return str == null || str == undefined || typeof str === "number";
};

const returnUpper = str => {

  if (typeof str === "string" && str.length >= 10) {

    return R.toUpper(str);
  } else {

    return default_text;
  }
};

const insertText = str => {

  return text_display.innerHTML = str;
};

const determineString = R.pipe(enterString, returnUpper, insertText);

insert_button.onclick = function () {

  return determineString(string_input.value);
};

const reverseString = str => {

  if (str === default_text) {

    return "Sorry actually insert a string with at least 10 letters in order to reverse it.";
  } else {

    return R.reverse(str);
  }
};

reverse_button.onclick = function () {

  const insertReverseText = R.pipe(reverseString, insertText);
  return insertReverseText(text_display.innerHTML);
};
