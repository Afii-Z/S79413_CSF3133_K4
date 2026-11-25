// Problem B: Student Grade Calculator
// Debugging and Extend

// ERROR 1 (grade.html, Line 9): Missing return before checkMark()
// ERROR 2 (grade.js, Line 5): Use == instead of = for comparison
// ERROR 3 (grade.js, Line 5): Use trim() to check empty name
// ERROR 4 (grade.js, Line 9): Check empty mark before numeric validation
// ERROR 5 (grade.js, Line 14): Use || instead of &&
// ERROR 6 (grade.js, Line 13): Use Number() to validate decimal values correctly
// ERROR 7 (grade.js, Line 30): Use style.color instead of style.colour
// ERROR 8 (grade.js, Line 42): Use i = 0 to include grade A
// ERROR 9 (grade.js, Line 46): Use innerHTML with correct capitalization

// 1. Check Mark Function
function checkMark() {

    // Get name and mark values
    let name = document.forms["gradeForm"]["name"].value;
    let mark = document.forms["gradeForm"]["mark"].value;

    // Check empty name
    if (name.trim() === "") {
        alert("Name must be filled out.");
        return false;
    }

    // Check empty mark
    if (mark.trim() === "") {
        alert("Mark field cannot be empty.");
        return false;
    }

    // Check whether mark is a valid number
    if (isNaN(mark)) {
        alert("Please enter a valid numeric value.");
        return false;
    }

    // Convert mark to number
    mark = Number(mark);

    // Check mark range
    if (mark < 0 || mark > 100) {
        alert("Mark must be between 0 and 100.");
        return false;
    }

    // Determine grade
    let grade;

    if (mark >= 80) {
        grade = "A";
    } else if (mark >= 65) {
        grade = "B";
    } else if (mark >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }

    // Display result
    document.getElementById("result").innerHTML =
        name + " got grade " + grade;

    // Change result colour
    if (grade === "A" || grade === "B") {
        document.getElementById("result").style.color = "green";
    } else if (grade === "C") {
        document.getElementById("result").style.color = "orange";
    } else {
        document.getElementById("result").style.color = "red";
    }

    // Display date and time
    document.getElementById("checkTime").innerHTML =
        "Checked on: " + new Date().toLocaleString();

    return false;
}


// 2. Show Grade Table Function
function showTable() {

    // Grade and mark ranges
    let grades = ["A", "B", "C", "F"];
    let ranges = ["80-100", "65-79", "50-64", "0-49"];

    // Create table HTML
    let tableHTML =
        "<table>" +
        "<tr><th>Grade</th><th>Mark range</th></tr>";

    // Loop through all grades
    for (let i = 0; i < grades.length; i++) {

        tableHTML +=
            "<tr><td>" + grades[i] +
            "</td><td>" + ranges[i] +
            "</td></tr>";
    }

    tableHTML += "</table>";

    // Display table
    document.getElementById("tableContainer").innerHTML = tableHTML;
}


// 3. Random Mark Function
function randomMark() {

    // Generate random whole number from 0 to 100
    let random = Math.floor(Math.random() * 101);

    // Display random mark in mark input
    document.getElementById("mark").value = random;
}
