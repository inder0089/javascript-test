const employees = [
  {
    id: 1,
    firstName: "Dwayne",
    lastName: "Johnson",
    gender: "man",
    age: 24,
    salary: 20000,
    department: "React Developer",
    address: {
      streetAddress: "1126",
      city: "San Jone",
      state: "CA",
      postalCode: "394221",
    },
    phoneNumbers: [{ type: "home", number: "7354427627" }],
  },
  {
    id: 2,
    firstName: "Vin",
    lastName: "Diesel",
    gender: "man",
    age: 25,
    salary: 25000,
    department: "Tester",
    address: {
      streetAddress: "1226",
      city: "San Jone",
      state: "CA",
      postalCode: "394221",
    },
    phoneNumbers: [{ type: "home", number: "9963627627" }],
  },
  {
    id: 3,
    firstName: "Will",
    lastName: "Smith",
    gender: "man",
    age: 20,
    salary: 50000,
    department: "BA",
    address: {
      streetAddress: "2226",
      city: "US Moss",
      state: "BA",
      postalCode: "394221",
    },
    phoneNumbers: [{ type: "home", number: "9383345627" }],
  },
  {
    id: 4,
    firstName: "Robert",
    lastName: "Downey ",
    gender: "man",
    age: 34,
    salary: 15000,
    department: "UI Designer",
    address: {
      streetAddress: "1444",
      city: "US city",
      state: "DA",
      postalCode: "4221",
    },
    phoneNumbers: [{ type: "home", number: "8883627557" }],
  },
  {
    id: 5,
    firstName: "Chris",
    lastName: "Hemsworth",
    gender: "Women",
    age: 22,
    salary: 22000,
    department: "UI/UX",
    address: {
      streetAddress: "9088",
      city: "Jone Pete",
      state: "RA",
      postalCode: "394221",
    },
    phoneNumbers: [{ type: "home", number: "9983627333" }],
  },
  {
    id: 6,
    firstName: "Leonardo",
    lastName: "DiCaprio",
    gender: "man",
    age: 53,
    salary: 60000,
    department: "software Tester",
    address: {
      streetAddress: "453",
      city: "Cali",
      state: "CA",
      postalCode: "394221",
    },
    phoneNumbers: [{ type: "home", number: "8123627627" }],
  },
  {
    id: 7,
    firstName: "Chris",
    lastName: "Pratt",
    gender: "man",
    age: 45,
    salary: 55000,
    department: "React Developer",
    address: {
      streetAddress: "864",
      city: "california",
      state: "PA",
      postalCode: "394221",
    },
    phoneNumbers: [{ type: "home", number: "998327627" }],
  },
  {
    id: 8,
    firstName: "Hugh",
    lastName: "Jackman",
    gender: "man",
    age: 36,
    salary: 54000,
    department: "React Developer",
    address: {
      streetAddress: "986",
      city: "mooselack",
      state: "SA",
      postalCode: "394221",
    },
    phoneNumbers: [{ type: "home", number: "9988627627" }],
  },
];

// 1) total salary, 2) avg salary , 3) top n salaries , 4) same department wise list , same city , 5) Greater than n age

/*{
    IT:[{},{}],
    HR : [{}]
}*/
function calculateTotalSum(list, key) {
  let sum = 0;
  let average = 0;
  //   console.log(key);
  //   console.log("list", list);

  list.forEach(function (item) {
    // console.log("item", item[key]);
    sum += item[key];
  });
  average = sum / list.length;
  console.log("Average Salary " + average);
  return sum;
}
// const totalSalary = calculateTotalSum(employees, "salary");
// console.log("Total Salary " + totalSalary);

function calculateTopNSalaries(employees, numOfElements) {
  //1) put all salaries in seperate array
  const allSalaries = employees?.map((employee) => employee.salary);
  console.log("all salaries", allSalaries);

  //2) sort the array
  //   allSalaries?.sort(); //TODO Bubble sort
  let n = allSalaries.length;
  for (let i = 0; i <= n - 1; i++) {
    for (let j = 0; j <= n - 1; j++) {
      if (allSalaries[j] > allSalaries[j + 1]) {
        //swap
        let temp = allSalaries[j];
        allSalaries[j] = allSalaries[j + 1];
        allSalaries[j + 1] = temp;
      }
    }
  }
  console.log("sorted salaries", allSalaries);
  let ans = [];
  //3) return n top elements of the array
  if (n > numOfElements) {
    for (let i = n - 1; i >= n - numOfElements; i--) {
      ans.push(allSalaries[i]);
    }
  } else {
    console.log("value is greater then array");
  }
  return ans;
}

// const ans = calculateTopNSalaries(employees, 5);
// console.log(ans);
// const departmentobject = { [ ] };
function sameDepartment(departmentlist, key) {
  let dep = [];

  const deparray = departmentlist?.map((employee) => employee.department);
  //   console.log("department", deparray);
  let depset = new Set(deparray);
  //   console.log(depset);
  for (const element of depset) {
    console.log(element);
    //traverse employees
    //a)if no key in ans
  }
  //   console.log("list", departmentlist);
}

const department = sameDepartment(employees, "department");
