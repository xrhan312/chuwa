/*
Question 1
1. Given the following array and implement the table dynamically(you need to create the table via JavaScript)
2. And then you should implement a form(focus on the logic only, you DON'T need to create the form via JavaScript) for taking the some format input form users(Student Name，Age，Phone,Address). When the user clicks the Add button, the data will be added into the existing table(after the existing data), and the user input in the form should be cleared. 
*/

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

function createThead(table, headerInfo) {
  const thead = table.createTHead();
  const row = thead.insertRow();
  var headers = headerInfo.map((element) => {
    var th = document.createElement("th");
    th.textContent = element;
    return th;
  });
  row.append(...headers);
}

function createTable(tableInfo) {
  //create table header
  const table_q1 = document.createElement("TABLE");
  table_q1.id = "table_q1";
  createThead(table_q1, tableInfo["tableHeader"]);

  //create table body
  const tbody = document.createElement("TBODY");
  tableInfo["tableContent"].forEach((student) => {
    const row = tbody.insertRow();
    for (const [key, val] of Object.entries(student)) {
      const cell = row.insertCell(-1);
      cell.textContent = val;
    }
  });
  table_q1.appendChild(tbody);
  return table_q1;
}

let q1 = document.getElementsByClassName("q1")[0];
const newTable = createTable(tableInfo);
const form_q1 = document.getElementById("form1");
q1.insertBefore(newTable, form_q1);

function updateTable() {
  const form1 = document.getElementById("form1");
  const tbody = document
    .getElementById("table_q1")
    .getElementsByTagName("TBODY")[0];

  const row = tbody.insertRow();
  [...form1.elements].forEach((ele) => {
    if (ele.type === "text") {
      const cell = row.insertCell(-1);
      cell.textContent = ele.value;
    }
  });
  form1.reset();
}

/*
  Question 2
  Given the array and generate order list and unordered list dynamically as following:
  */

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

function createLists(list, type, parentId) {
  let nodes = list.map((ele) => {
    let li = document.createElement("li");
    li.textContent = ele;
    return li;
  });

  //question: if reuse ...nodes, only last works?

  let parent = document.getElementById(parentId);
  let newList = document.createElement(type);
  newList.append(...nodes);
  parent.appendChild(newList);
}

createLists(list, "OL", "q2_ol");
createLists(list, "UL", "q2_ul");

/*
  Question 3
  1. Given the array and implement a dropdown list with the following options dynamically 
  2. Console the value, when the user select one option
  */

const dropDownList = [
  { value: "", content: "Please select" },
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

function createDropdown(dropDownList) {
  let q4 = document.getElementsByClassName("q3")[0];
  let dropdown = document.createElement("select");
  //on change event
  dropdown.onchange = function () {
    console.log(dropdown.value);
    var location = document.getElementById("location");
    if (location == null) {
      let res = document.createElement("h4");
      res.id = "location";
      res.textContent = "You selected " + dropdown.value + ".";
      q4.appendChild(res);
    } else {
      location.textContent = "You selected " + dropdown.value + ".";
    }
  };

  //create drop down
  let nodes = dropDownList.map(({ value, content }) => {
    let option = document.createElement("option");
    option.textContent = content;
    option.value = value;
    return option;
  });
  dropdown.append(...nodes);
  q4.appendChild(dropdown);
}

createDropdown(dropDownList);
