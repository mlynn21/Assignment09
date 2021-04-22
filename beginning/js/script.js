let storage;
let employee;
let employees = [];
let count = '';

// CREATE AN ARRAY OF EMPLOYEES

employees = [
    [11111111, 'Tom', 1111, 'tom@gmail.com', 'Administration'],
    [22222222, 'Shirley', 2222, 'shirley@gmail.com', 'Engineering'],
    [33333333, 'Alice', 3333, 'alice@gmail.com', 'Executive'],
    [44444444, 'Sam', 4444, 'sam@gmail.com', 'Marketing'],
    [55555555, 'Alex', 5555, 'alex@gmail.com', 'Sales'],
];
localStorage.setItem('employees', JSON.stringify(employees));
// console.log(JSON.parse(localStorage.getItem('employees')));


// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
const displayEmployeeList = () => {
    if (employees.length === 0) {
    // IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
    storage = localStorage.getItem('employees') || '';   
    // JSON.parse(localStorage.getItem('employees'));
    }
};


// GET DOM ELEMENTS
const $ = (id) => {
    return document.getElementById(id);
};

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
for (i of employees) {
    var table = document.querySelector('tbody');
    var row = table.insertRow(0);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var deleteButton = row.insertCell(5);

    cell1.innerHTML = `${i[0]}`;
    cell2.innerHTML = `${i[1]}`;
    cell3.innerHTML = `${i[2]}`;
    cell4.innerHTML = `${i[3]}`;
    cell5.innerHTML = `${i[4]}`;
    deleteButton.innerText = 'X'
    deleteButton.className = 'btn btn-danger btn-sm float-right m-2 p-2'
}

// ADD EMPLOYEE
addForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.querySelector('#id').value;
    let empName = document.querySelector('#name').value;
    let extension = document.querySelector('#extension').value;
    let email = document.querySelector('#email').value;
    let department = document.querySelector('#department').value;
    
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployeeArr = [id, empName, extension, email, department];
    console.log(newEmployeeArr);

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    // employees = employees.push(newEmployeeArr); - returns error
  

    // BUILD THE GRID


    // RESET THE FORM
    document.querySelector('#id').value = '';
    document.querySelector('#name').value = '';
    document.querySelector('#extension').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#department').value = '';

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();

});


// DELETE EMPLOYEE
table.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
        if (e.target.classList.contains('btn')) {
            if (confirm('Are you sure you want to delete this employee?')) {
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        // CALL DELETEROW() METHOD TO DELETE SPECIFIC ROW IN THE TABLE
                table.deleteRow(e.target.parentNode.parentNode.rowIndex);
                }
            }
        });

        // REMOVE EMPLOYEE FROM ARRAY

        // BUILD THE GRID



// BUILD THE EMPLOYEES GRID
function buildGrid() {
    
    
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION

    // REBUILD THE TBODY FROM SCRATCH

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE


    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT

    // STORE THE ARRAY IN STORAGE

};

