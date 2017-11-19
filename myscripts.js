function addNewModifier() {

  // Get the main Div in which all the other divs will be added
  var mainContainer = document.getElementById('mainContainer');

  // Create a new div for holding text and button input elements
  var newDiv = document.createElement('div');

  // Create array for modifier keys
  var modifierKeys = ["Ctrl", "Shift", "Alt"];
  var newDropdown = document.createElement('select');

  for(i = 0; i < modifierKeys.length; i++) {
    // Create a new text input

    var newDropdownOption = document.createElement("option");
    newDropdownOption.value = modifierKeys[i];
    newDropdownOption.text = modifierKeys[i];

    newDropdown.add(newDropdownOption);
  }

  // Create buttons for creating and removing inputs
  var newAddButton = document.createElement('input');
  newAddButton.type = "button";
  newAddButton.value = " + ";

  var newDelButton = document.createElement('input');
  newDelButton.type = "button";
  newDelButton.value = " - ";

  // Append new text input to the newDiv
  newDiv.appendChild(newDropdown);

  // Append new button inputs to the newDiv
  newDiv.appendChild(newAddButton);
  newDiv.appendChild(newDelButton);

  // Append newDiv input to the mainContainer div
  mainContainer.appendChild(newDiv);

  // Add a handler to button for deleting the newDiv from the mainContainer
  newAddButton.onclick = addNewModifier;

  newDelButton.onclick = function() {
    mainContainer.removeChild(newDiv);
  };
}

function addNewFunctionKey() {

  // Get the main Div in which all the other divs will be added
  var mainContainer = document.getElementById('mainContainer');

  // Create a new div for holding text and button input elements
  var newDiv = document.createElement('div');

  // Create array for modifier keys
  var functionKeys = ["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "f12",
    "Caps", "Tab", "Delete", "Home"];
  var newDropdown = document.createElement('select');

  for(i = 0; i < functionKeys.length; i++) {
    // Create a new text input

    var newDropdownOption = document.createElement("option");
    newDropdownOption.value = functionKeys[i];
    newDropdownOption.text = functionKeys[i];

    newDropdown.add(newDropdownOption);
  }

  // Create buttons for creating and removing inputs
  var newAddButton = document.createElement('input');
  newAddButton.type = "button";
  newAddButton.value = " + ";

  var newDelButton = document.createElement('input');
  newDelButton.type = "button";
  newDelButton.value = " - ";

  // Append new text input to the newDiv
  newDiv.appendChild(newDropdown);

  // Append new button inputs to the newDiv
  newDiv.appendChild(newAddButton);
  newDiv.appendChild(newDelButton);

  // Append newDiv input to the mainContainer div
  mainContainer.appendChild(newDiv);

  // Add a handler to button for deleting the newDiv from the mainContainer
  newAddButton.onclick = addNewFunctionKey;

  newDelButton.onclick = function() {
    mainContainer.removeChild(newDiv);
  };
}

function addNewAlpha() {

  // Get the main Div in which all the other divs will be added
  var mainContainer = document.getElementById('mainContainer');

  // Create a new div for holding text and button input elements
  var newDiv = document.createElement('div');

  // Create array for modifier keys
  var alphaKeys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
   "s", "t", "u", "v", "w", "x", "y", "z"];
  var newDropdown = document.createElement('select');

  for(i = 0; i < alphaKeys.length; i++) {
    // Create a new text input

    var newDropdownOption = document.createElement("option");
    newDropdownOption.value = alphaKeys[i];
    newDropdownOption.text = alphaKeys[i];

    newDropdown.add(newDropdownOption);
  }

  // Create buttons for creating and removing inputs
  var newAddButton = document.createElement('input');
  newAddButton.type = "button";
  newAddButton.value = " + ";

  var newDelButton = document.createElement('input');
  newDelButton.type = "button";
  newDelButton.value = " - ";

  // Append new text input to the newDiv
  newDiv.appendChild(newDropdown);

  // Append new button inputs to the newDiv
  newDiv.appendChild(newAddButton);
  newDiv.appendChild(newDelButton);

  // Append newDiv input to the mainContainer div
  mainContainer.appendChild(newDiv);

  // Add a handler to button for deleting the newDiv from the mainContainer
  newAddButton.onclick = addNewAlpha;

  newDelButton.onclick = function() {
    mainContainer.removeChild(newDiv);
  };
}

function addNewCustom() {

  // Get the main Div in which all the other divs will be added
  var mainContainer = document.getElementById('mainContainer');

  // Create a new div for holding text and button input elements
  var newDiv = document.createElement('div');

  var input = document.createElement("input");
  input.setAttribute('type', 'text');

  // Create buttons for creating and removing inputs
  var newAddButton = document.createElement('input');
  newAddButton.type = "button";
  newAddButton.value = " + ";

  var newDelButton = document.createElement('input');
  newDelButton.type = "button";
  newDelButton.value = " - ";

  // Append new text input to the newDiv
  newDiv.appendChild(input);

  // Append new button inputs to the newDiv
  newDiv.appendChild(newAddButton);
  newDiv.appendChild(newDelButton);

  // Append newDiv input to the mainContainer div
  mainContainer.appendChild(newDiv);

  // Add a handler to button for deleting the newDiv from the mainContainer
  newAddButton.onclick = addNewCustom;

  newDelButton.onclick = function() {
    mainContainer.removeChild(newDiv);
  };
}
