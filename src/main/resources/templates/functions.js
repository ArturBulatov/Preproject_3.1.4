const userslistUserPill = document.getElementById('allUsersTableUserPill');


//  ----    Rendering all users for allUsersTable  ----
const renderUsers = (users) => {
    users.forEach(post => {
        output += `
                    <div>
                    <tr data-id=${post.id}>
                      <td class='id-field'>${post.id}</td>
                      <td class='firstname-field'>${post.firstname}</td>
                      <td class='lastName-field'>${post.lastName}</td>
                      <td class='age-field'>${post.age}</td>
                      <td class='email-field'>${post.email}</td>
                      <td class='roles-field'>                   
                            ${post.roles.map(function (role){
                                return `${role.name}`
                            })}             
                      </td>                                          
                      <td>
                          <button type="button" id='edit-button-global' class="btn btn-info" >
                            Edit
                          </button>
                    
                    <!----   Modal for editing  ---->                      
                         <div class="modal fade"  id="editModalCentered" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                         <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Edit user</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="container editdeleteusercon">
                                            <form role="form">
                                                <div class="form-group text-center ">
                                                    <label For="disabledTextInput" class="font-weight-bold">ID</label>
                                                    <input type="text" disabled  class="form-control" id="idDeleteEdit" value="">
                                                </div>
                                                <div class="form-group text-center ">
                                                    <label For="firstname" class="font-weight-bold">First name</label>
                                                    <input type="text" class="form-control " id="idFirstnameEdit">
                                                </div>
                                                <div class="form-group text-center ">
                                                    <label for="lastname" class="font-weight-bold">Last name</label>
                                                    <input type="text" class="form-control " id="idLastnameEdit" value="" >
                                                </div>
                                                <div class="form-group text-center ">
                                                    <label for="age" class="font-weight-bold">Age</label>
                                                    <input type="number" class="form-control " id="idAgeEdit" value="" >
                                                </div>
                                                <div class="form-group text-center ">
                                                    <label for="email" class="font-weight-bold">Email</label>
                                                    <input type="email" class="form-control " id="idEmailEdit" value="" >
                                                </div>
                                                <div class="form-group text-center ">
                                                    <label for="password" class="font-weight-bold">Password</label>
                                                    <input type="password" class="form-control " id="idPasswordEdit" >
                                                </div>
                                                <div class="form-group text-center ">
                                                    <label for="role" class="font-weight-bold">Role</label>
                                                    <select required = "required" class="form-select"  id="idRoleEdit"  multiple aria-label="multiple select example" style="height: 50px; width: 100%" >
                                                        <option value="ADMIN">ADMIN</option>
                                                        <option value="USER">USER</option>
                                                    </select>
                                                  </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close
                                                    </button>
                                                    <button type="submit" id='edit-button-local' class="btn btn-danger" data-dismiss="modal">Edit
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>                          
                      <td>
                      <div>
                      <button type="button" id='delete-button-global' class="btn btn-danger" >
                        Delete
                      </button>
                      
                      <!----    Modal for deleting     ----> 
                      </div>
                          <div class="modal fade" id="deleteModalCentered" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Delete user</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="container editdeleteusercon">
                                            <form role="form">
                                                <div class="form-group text-center ">
                                                    <label For="disabledTextInput" class="font-weight-bold">ID</label>
                                                    <input type="text" disabled  class="form-control" id="idDelete" value="">
                                                </div>
                                                <div class="form-group text-center ">
                                                    <label For="firstname" class="font-weight-bold">First name</label>
                                                    <input disabled type="text" class="form-control " id="idFirstname" value=""/>
                                                </div>
                                                <div class="form-group text-center ">
                                                    <label for="lastname" class="font-weight-bold">Last name</label>
                                                    <input disabled type="text" class="form-control " id="idLastname" value="" >
                                                </div>
                                                <div class="form-group text-center ">
                                                    <label for="age" class="font-weight-bold">Age</label>
                                                    <input disabled type="number" class="form-control " id="idAge" value="" >
                                                </div>
                                                <div class="form-group text-center ">
                                                    <label for="email" class="font-weight-bold">Email</label>
                                                    <input disabled type="email" class="form-control " id="idEmail" value="" >
                                                </div>
                                                <div class="form-group text-center ">
                                                    <label for="role" class="font-weight-bold">Role</label>
                                                    <select disabled  name="roles" id="role" class="form-select" multiple aria-label="multiple select example" style="height: 50px; width: 100%; background: #e9ecef">
                                                        <option value="ADMIN">ADMIN</option>
                                                        <option value="USER">USER</option>
                                                    </select>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button" id='delete-button-local' class="btn btn-danger" data-dismiss="modal">Delete</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </td>
                    </tr>   
                    </div>
                    `;

    })
    userslist.innerHTML = output.replaceAll(",", " ");
    output=''
}





//  ----    function for reassemble roles(used in post and put requests, to form correct array for json format). By default - user role     ----
function addroles(data) {
    rolesList = [];
    // if (data.length===0) {
    //     rolesList.push({
    //         "id": 2,
    //         "name": "USER",
    //         "users": null,
    //         "authority": "USER"
    //     })
    // } else if(data.length===1){
    if(data.length===1){
    if(data[0]=="ADMIN") {
            rolesList.push({
                "id": 1,
                "name": "ADMIN",
                "users": null,
                "authority": "ADMIN"
            })
        } else {
            rolesList.push({
                "id": 2,
                "name": "USER",
                "users": null,
                "authority": "USER"
            })
        }
    } else if (data.length===2){
        rolesList.push({
            "id": 1,
            "name": "ADMIN",
            "users": null,
            "authority": "ADMIN"
        })
        rolesList.push({
            "id": 2,
            "name": "USER",
            "users": null,
            "authority": "USER"
        })
    }
    return rolesList;
}

//  ----    Rendering curent users for allUsersTableUserPill in user pill  ----
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

//  ----   get current user to show in user pill   ----
function getCurrentUser() {
    fetch(urlPrincipal)
        .then(res => res.json())
        .then(data => renderCurrentUser(data))
}

//  ----   create string  with current user to show in navbar   ----
function renderCurrentUser(us) {
    currentUser += `${us.email} with roles: ${us.roles.map(function (role){
        return `${role.name}`
    })}`
    userRolesNavbar.innerHTML = currentUser.replaceAll(",", " ");
    currentUser='';
}