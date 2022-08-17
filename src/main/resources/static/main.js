const userslist = document.getElementById('allUsersTable');
const userPillLink = document.getElementById('userPillLink');
const adminPillLink = document.getElementById('adminPillLink');
const addUserForm = document.getElementById('newUserForm');
const myForm = document.getElementById('myForm');
const url = 'http://localhost:8080/api/users';
const urlPrincipal = 'http://localhost:8080/api/users/principal';
// ---- POST users data ----------
const firstNameValue = document.getElementById('firstname');
const lastNameValue = document.getElementById('lastName');
const ageValue = document.getElementById('age');
const emailValue = document.getElementById('email');
const passwordValue = document.getElementById('password');
const rolesValue = document.getElementById('roleid');
let userRolesNavbar = document.getElementById('userRolesNavbar');
let output = ''
let outputUserPill = ''
let currentUser = ''

//  ---- Rendering table after DOM loaded
document.addEventListener("DOMContentLoaded", function() {
    getAllUsers();
});

//  ----   GET     ----
//  ----   get all users   ----
function getAllUsers() {
    return  fetch(url)
        .then(res => res.json())
        .then(data => renderUsers(data))
        .then(() => {getCurrentUser()})

}



userPillLink.addEventListener('click', (e)=> {
    e.preventDefault();
    fetch(urlPrincipal)
        .then(res => res.json())
        .then(data => renderUserPill(data))
        .then(() => {getCurrentUser()})
})


//  ----    DELETE and EDIT     --------
//  ----    work with userstable    ----
userslist.addEventListener('click', (e)=> {
    e.preventDefault();

    //  ----    Variables for EDIT and DELETE buttons in allUsersTable(postfix "...Global") and inside modal window(postfix "...Local")
    const delButtonGlobal = e.target.id == 'delete-button-global';
    const delButtonLocal = e.target.id == 'delete-button-local';
    const editButtonGlobal = e.target.id == 'edit-button-global';
    const editButtonLocal = e.target.id == 'edit-button-local';

    let parent = e.target.closest("td").parentElement;
    let idContent = parent.querySelector('.id-field').textContent;

    //  ----   Invoke DELETE modal window  ----
    if(delButtonGlobal) {
        let firstnameContent = parent.querySelector('.firstname-field').textContent;
        let lastnameContent = parent.querySelector('.lastName-field').textContent;
        let ageContent = parent.querySelector('.age-field').textContent;
        let emailContent = parent.querySelector('.email-field').textContent;
        let rolesContent = parent.querySelector('.roles-field').textContent;

        $('#idDelete').val(idContent);
        $('#idFirstname').val(firstnameContent);
        $('#idLastname').val(lastnameContent);
        $('#idAge').val(ageContent);
        $('#idEmail').val(emailContent);
        $('#deleteModalCentered').modal('show')
    }

    //  ----   Submit DELETE button in modal window and send DELETE-request     ----
    if(delButtonLocal) {
        fetch(`${url}/${idDelete.value}`, {
            method: 'DELETE',
        })
            .then(()=>{getAllUsers()})
            .then(()=>{getCurrentUser()})
    }

    //  ----   Invoke EDIT modal window  ----
    if(editButtonGlobal) {

        const parent = e.target.closest("td").parentElement;
        let idContentEdit = parent.querySelector('.id-field').textContent;
        let firstnameContentEdit = parent.querySelector('.firstname-field').textContent;
        let lastnameContentEdit = parent.querySelector('.lastName-field').textContent;
        let ageContentEdit = parent.querySelector('.age-field').textContent;
        let emailContentEdit = parent.querySelector('.email-field').textContent;
        let rolesContentEdit = parent.querySelector('.roles-field').textContent;

        $('#idDeleteEdit').val(idContentEdit);
        $('#idFirstnameEdit').val(firstnameContentEdit);
        $('#idLastnameEdit').val(lastnameContentEdit);
        $('#idAgeEdit').val(ageContentEdit);
        $('#idEmailEdit').val(emailContentEdit);
        $('#editModalCentered').modal('show')
    }

    // ---- PUT users data ----------
    const idValue = e.target.parentElement.parentElement.querySelector('#idDeleteEdit');
    const idFirstnameValue = e.target.parentElement.parentElement.querySelector('#idFirstnameEdit');
    const idLastnameValue = e.target.parentElement.parentElement.querySelector('#idLastnameEdit');
    const idAgeValue = e.target.parentElement.parentElement.querySelector('#idAgeEdit');
    const idEmailValue = e.target.parentElement.parentElement.querySelector('#idEmailEdit');
    const idPasswordValue = e.target.parentElement.parentElement.querySelector('#idPasswordEdit');
    const idRoleValue = e.target.parentElement.parentElement.querySelector('#idRoleEdit');

    //   ----   Submit EDIT button in modal window and send PUT-request  ----
    if(editButtonLocal) {
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "id":idValue.value,
                "firstname": idFirstnameValue.value,
                "lastName": idLastnameValue.value,
                "age": idAgeValue.value,
                "email": idEmailValue.value,
                "password": idPasswordValue.value,
                "roles": addroles([].filter
                    .call(idRoleValue.options, option => option.selected)
                    .map(option => option.text))
            })
        })
            .then(res=> res.json())
            .then(() => {getAllUsers()})
        }
})

//   ----    POST     ----
//   ----   work with new user form     ----
addUserForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            "firstname": firstNameValue.value,
            "lastName": lastNameValue.value,
            "age": ageValue.value,
            "email": emailValue.value,
            "password": passwordValue.value,
            "roles": addroles([].filter
                .call(rolesValue.options, option => option.selected)
                .map(option => option.text))
        })
    })
        .then(res=> res.json())
        .then(() => {getAllUsers()})
        .then(() => {getCurrentUser()})
    //  ----    cleaning forms after submitting new user ----
    myForm.reset();

    //  ----    redirect on userstable tab  ----
    $('#myTabs a[href="#userstable"]').tab('show')
})