//1. Employee Salary Update: You have a list of employee salaries [30000, 45000, 50000, 35000]. Increase each salary by 10% and create a new array with the updated salaries. 

let empSalary = [30000,45000,50000,35000];
let mappedSalary = empSalary.map((value) => {
return value + (value * 0.1);
})
console.log("Updated array = ",mappedSalary);


//2. Odd Numbers Only: Given an array of daily sales numbers [23, 45, 60, 70, 33], filter out only the odd sales numbers to analyze specific buying patterns.     

let numbers = [23, 45, 60, 70, 33];
let oddNumbers = numbers.filter(function even(num) {
    return num % 2 != 0;
});
console.log("Odd sales numbers = ",oddNumbers);

//3. Product Price Tag Update: You have a list of product names in lowercase ['soap', 'shampoo', 'toothpaste']. Capitalize each product name to display on tags. 

let productNames =  ['soap', 'shampoo', 'toothpaste'];
let tagName = productNames.map((value) =>{
return value.charAt(0).toUpperCase()+ value.slice(1,);
}
)
console.log("Capitalised product names = ",tagName);

//4. Student Passing Scores: From an array of student scores [55, 70, 82, 47], filter out scores that are above 50 to get a list of students who passed. 

let studentMarks = [55, 70, 82, 47].filter((value, index) => {
    return value > 50
})
console.log("Scores that are above 50 = ",studentMarks);

//5. Customer Names Extraction: You have an array of customer records [{'name': 'Alice'}, {'name': 'Bob'}, {'name': 'Charlie'}]. Extract just the names for a promotional email list.

let customerRecords = [{'name': 'Alice'}, {'name': 'Bob'}, {'name': 'Charlie'}];
let extractedNames = customerRecords.map((value)=>{
    return value.name;
}
)
console.log(extractedNames)