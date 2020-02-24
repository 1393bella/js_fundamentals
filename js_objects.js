// Zadanie:Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts
//1 oe

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function studentsName (obj){
    for ( var i=0; i<obj.length; i++){
        var students = obj[i];
        var response=""
    response += students['name'] + " ";
        for( n=0; n<students['cohort'].length; n++){
            response += students['cohort'] [n] + "";
        }
        console.log (response)
    }

}
studentsName(students)

// Your console should look like the following when the function is called with the provided array.

// Name: Remy, Cohort: Jan
// Name: Genevieve, Cohort: March
// Name: Chuck, Cohort: Jan
// Name: Osmund, Cohort: June
// Name: Nikki, Cohort: June
// Name: Boris, Cohort: June

//////////////////

//2 oe

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
 
 
 function users1(arr){
  console.log('Employees')
   for (var i =0;i < arr.employees.length;i++) {
    
       console.log(i+1+'-', users.employees[i].last_name+',', users.employees[i].first_name,'-',users.employees[i].first_name.length + users.employees[i].last_name.length )
     }
 
       console.log('Managers')
   for (var j =0;j < arr.managers.length;j++) {
       console.log(j+1+'-', users.managers[j].last_name+',', users.managers[j].first_name,'-',users.managers[j].first_name.length + users.managers[j].last_name.length )
     }
  }
 
 
 
 users1(users)

//  EMPLOYEES
// 1 - JONES, MIGUEL - 11
// 2 - BERTSON, ERNIE - 12
// 3 - LU, NORA - 6
// 4 - BARKYOUMB, SALLY - 14
// MANAGERS
// 1 - CHAMBERS, LILLIAN - 15
// 2 - POE, GORDON - 9