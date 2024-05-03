// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two instances of the Student interface
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

const studentsList: Array<Student> = [student1, student2];
const styleSheet = `
html {
  margin: 0;
  height: 100%;
}
body {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
table {
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}
thead {
  font-weight: normal;
}
td {
  padding: 10px;
  border:  1px solid #ddd;
  cursor: pointer;
}
td:hover {
  background-color: #f1f1f1;
}
td:nth-child(1) {
  text-align: center;
}
`;

// Create a table with the student data
export const displayStudents = (students: Array<Student>): void => {
  const table = document.createElement("table");
  const tableHead = document.createElement("thead");
  const headRow = document.createElement("tr");
  const tableBody = document.createElement("tbody");
  headRow.insertAdjacentHTML("beforeend", "<td>FirstName</td>");
  headRow.insertAdjacentHTML("beforeend", "<td>Location</td>");
  tableHead.insertAdjacentElement("beforeend", headRow);

  for (const student of students) {
    const bodyRow = document.createElement('tr');
    bodyRow.insertAdjacentHTML("beforeend", `<td>${student.firstName}</td>`);
    bodyRow.insertAdjacentHTML("beforeend", `<td>${student.location}</td>`);
    tableBody.insertAdjacentElement("beforeend", bodyRow);
  }

  table.insertAdjacentElement("beforeend", tableHead);
  table.insertAdjacentElement("beforeend", tableBody);
  document.body.insertAdjacentElement("beforeend", table);
};

displayStudents(studentsList);
const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.insertAdjacentElement('beforeend', styleSheetElement);
document.title = 'Task 0 - TypeScript';