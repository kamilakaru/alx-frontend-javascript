var student1 = {
    firstname: "kamila",
    lastname: "Gojobe",
    age: 26,
    location: "Nairobi"
};
var student2 = {
    firstname: "Sheba",
    lastname: "Njenga",
    age: 29,
    location: "Naivasha"
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.style.background = "blue";
table.appendChild(tbody);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    nameCell.textContent = student.firstname;
    locationCell.textContent = student.location;
    nameCell.style.border = "1px solid blue";
    locationCell.style.border = "1px solid blue";
    nameCell.style.padding = "5px";
    locationCell.style.padding = "5px";
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
document.body.appendChild(table);
