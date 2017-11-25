var btn_ID_list = new Array();
function allow_drop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}

function select_all_element(divID) {
  var ele = document.getElementById(divID).children;
  var match = new Array();
  var i = fill_array(ele,match);
  //document.getElementById('sho').innerHTML = i;
  //alert(document.getElementById('right_sidebar_drop_area').innerHTML); //test line
  //alert(btn_ID_list.toString()); //test line

}
function fill_array(e1,a1) {
  //alert("made it to array"); // test line
  btn_ID_list = [];
  for(var i =0;i<e1.length;i++) {
    btn_ID_list[i] = e1[i].id; //add the id of each element in the drop area
    if(e1[i].id.indexOf('right_sidebar_drop_area') == 0)
    a1.push(e1[i]);
  }
  return i;
}

function open_this_modal_page(evt, modalPage) {
  var i, x;
  x = document.getElementsByClassName("modal_page");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(modalPage).style.display = "block";
}

function form_submit() {
  document.getElementById("create_function_form").submit();
  var form_function_name = document.getElementsByName('form_function_name')[0].value;
  var form_function_key_binding = document.getElementsByName('form_function_key_binding')[0].value;
  alert("form_function_name is: " + form_function_name + "\nform_function_key_binding is: " + form_function_key_binding +
   "\nbtn_ID_list is: " + btn_ID_list.toString());
}

// Get the modal_window
var modal_window = document.getElementById('modal_window');

// Get the button that opens the modal_window
var open_create_custom_function_button = document.getElementById("open_create_custom_function");

// When the user clicks the button, open the modal_window
open_create_custom_function_button.onclick = function() {
  select_all_element('right_sidebar_drop_area');
  open_this_modal_page(event, 'modal_create_function_select_page')
  modal_window.style.display = "block";
}
