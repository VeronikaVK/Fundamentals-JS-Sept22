function employees(list){
    let employeeList = {};

    list.forEach(person => { //също като forof
        employeeList[person] = person.length;
    });
    //console.log(employeeList); //{Silas Butler: 12, Adnaan Buckley: 14, Juan Peterson: 13, Brendan Villarreal: 18}

    for (const key in employeeList) { //forin

       // console.log(key);   //Silas Butler
                            //Adnaan Buckley
                            //Juan Peterson
                            //Brendan Villarreal
        //console.log(employeeList[key]);  //12
                                         //14
                                        //13
                                        //18
          
        console.log(`Name: ${key} -- Personal Number: ${employeeList[key]}`);
        }
    }

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )