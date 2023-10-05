let employees = [
    {
        "id": 1,
        "first_name": "Tushar",
        "last_name": "Panda",
        "email": "tushar@gmail.com",
        "gender":"Male",
        "active": true,
    },
    {
        "id": 2,
        "first_name": "Reena",
        "last_name": "Sen",
        "email": "reena@gmail.com",
        "gender":"Female",
        "active": true,
    },
    {
        "id": 3,
        "first_name": "Narsimha",
        "last_name": "Reddy",
        "email": "naru@gmail.com",
        "gender":"Male",
        "active": false,
    },
    {
        "id": 4,
        "first_name": "Komal",
        "last_name": "Sharma",
        "email": "komal@gmail.com",
        "gender":"Female",
        "active": true,
    },
    {
        "id": 5,
        "first_name": "Chandan",
        "last_name": "Biswal",
        "email": "chandan@gmail.com",
        "gender":"Male",
        "active": true,
    },
    {
        "id": 6,
        "first_name": "Priyanka",
        "last_name": "Mishra",
        "email": "priya@gmail.com",
        "gender":"Female",
        "active": true,
    },
    {
        "id": 7,
        "first_name": "Bhuban",
        "last_name": "Kumar",
        "email": "bhuban@gmail.com",
        "gender":"Male",
        "active": false,
    },
    {
        "id": 8,
        "first_name": "Deepak",
        "last_name": "Sahoo",
        "email": "dipu@gmail.com",
        "gender":"Male",
        "active": false,
    },
    {
        "id": 9,
        "first_name": "Kalu",
        "last_name": "Charan",
        "email": "kalu@gmail.com",
        "gender":"Male",
        "active": true,
    },
    {
        "id": 10,
        "first_name": "Anjli",
        "last_name": "Sharma",
        "email": "tushar@gmail.com",
        "gender":"Male",
        "active": true,
    }
]


let allEmpsBtn = document.getElementById('all-emps-btn');
let maleEmpsBtn  = document.getElementById('male-emps-btn');
let femaleEmpsBtn  = document.getElementById('female-emps-btn');


// creating a function
function displayEmps(value){
    let length = value.length;
    let str = ``;
    if(length!==0){
        for(let emp of value)
        {
            str = str + `<tr>
                        <td>${emp.id}</td>
                        <td>${emp.first_name}</td>
                        <td>${emp.last_name}</td>
                        <td>${emp.email}</td>
                        <td>${emp.gender}</td>
                        <td>${emp.active}</td>
                        </tr>`
        }
    }
    let tBody = document.getElementById('emps-data');
    tBody.innerHTML = str;
};



// for all employee
allEmpsBtn.addEventListener('click', () => {
    displayEmps(employees);
})



// for male employee
let maleEmps = employees.filter((emp)=>{
    if(emp.gender==='Male'){
        return emp;
    }
});

maleEmpsBtn.addEventListener('click', () => {
    displayEmps(maleEmps);
})




// for female employee
let femaleEmps = employees.filter((emp)=>{
    if(emp.gender==='Female'){
        return emp;
    }
});

femaleEmpsBtn.addEventListener('click', () => {
    displayEmps(femaleEmps);
});




//# search Box code
let searchTag = document.getElementById('search');

searchTag.addEventListener('keyup', () => {
    let enteredValue = searchTag.value;
    let enames = searchEmpsData(enteredValue, employees);
    displayEmps(enames);
});

function searchEmpsData(val,emps){
    val = val.toUpperCase().trim();
    let filteredEmps = [];
    for(let emp of emps){
        oName = emp.first_name.toUpperCase().trim();
        if(oName.includes(val)){
            filteredEmps.push(emp);
        }
    }
    return filteredEmps;
}

