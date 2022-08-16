const url = 'http://localhost:8080/api/users';
const urlPrincipal = 'http://localhost:8080/api/users/principal';
let userRolesNavbar = document.getElementById('userRolesNavbar');
const userslistUserPill = document.getElementById('UsersTable');
let outputUserPill = ''
let currentUser = ''

//  ---- Rendering table after DOM loaded
document.addEventListener("DOMContentLoaded", function() {
    getCurrentUser();
    renderuser();
});

function getCurrentUser() {
    fetch(urlPrincipal)
        .then(res => res.json())
        .then(data => renderCurrentUser(data))
}

function renderuser() {
    fetch(urlPrincipal)
        .then(res => res.json())
        .then(data => renderUserPill(data))
        .then(() => {getCurrentUser()})
}

function renderCurrentUser(us) {
    currentUser += `${us.email} with roles: ${us.roles.map(function (role){
        return `${role.name}`
    })}`
    userRolesNavbar.innerHTML = currentUser.replaceAll(",", " ");
    currentUser='';
}

const renderUserPill = (post) => {
    outputUserPill += `
                    <div>
                    <tr data-id=${post.id}>
                      <td>${post.id}</td>
                      <td>${post.firstname}</td>
                      <td>${post.lastName}</td>
                      <td>${post.age}</td>
                      <td>${post.email}</td>
                      <td>                   
                            ${post.roles.map(function (role){
        return `${role.name}`
    })}             
                      </td>              
                    </tr>   
                    </div>
                    `;
    userslistUserPill.innerHTML = outputUserPill.replaceAll(",", " ");
    outputUserPill=''
}

