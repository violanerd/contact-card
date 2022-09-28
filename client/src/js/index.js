import {toggleForm, clearForm} from "./form";

import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/logo2.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';
import { getDb, initdb, postDb, deleteDb, editDb } from "./databse";
import "../css/index.css"
import { fetchCards } from "./card"

window.addEventListener('load', function(){
    initdb();
    fetchCards();
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
})


  // Form functionality
  const form = document.getElementById("formToggle");
  const newContactButton = document.getElementById("new-contact");
  let submitBtnToUpdate = false;
  let profileId;
  
  newContactButton.addEventListener('click', event => {
    toggleForm()
   })
  
  form.addEventListener('submit', event => {
    // Handle data
    event.preventDefault();
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let profile = document.querySelector('input[type="radio"]:checked').value;
  
    // Post form data to IndexedDB OR Edit an existing card in IndexedDB
  if (submitBtnToUpdate == false) {
    postDb(name, email, phone, profile);
  } else {
    
  //let name = document.getElementById("name").value;
  //let phone = document.getElementById("phone").value;
  //let email = document.getElementById("email").value;
  //let profile = document.querySelector('input[type="radio"]:checked').value;

   // Calls the editDB function passing in any values from the form element as well as the ID of the contact that we are updating
   editDb(profileId, name, email, phone, profile);
    fetchCards();
      // Toggles the submit button back to POST functionality
    submitBtnToUpdate = false;
  }
  
  // Clear form
  clearForm();
  // Toggle form
  toggleForm();
  // Reload the DOM
  fetchCards();
  });

window.deleteCard = (e) => {
    //delete the card
    console.log(e)
    let id = parseInt(e.id)
    deleteDb(id)
    fetchCards()
}

window.editCard = (e) => {
  //edit the card
  profileId = parseInt(e.dataset.id)

  // Grabs information to pre-populate edit form
  let editName = e.dataset.name;
  let editEmail = e.dataset.email;
  let editPhone = e.dataset.phone;
  
  document.getElementById("name").value = editName;
  document.getElementById("email").value = editEmail;
  document.getElementById("phone").value = editPhone;
  
  form.style.display = "block";
  
  // Toggles the submit button so that it now Updates an existing contact instead of posting a new one
  submitBtnToUpdate = true;
  

}
