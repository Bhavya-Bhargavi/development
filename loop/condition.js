

/*function checkgender(gender){

	if(gender == 'M'){
		return "male";
	}
	else if(gender == 'F'){
		return "female";
	}
	else{
		return "unmatch";
	}
	prompt("type your gender");
}

//var female = checkgender("F");


console.log(checkgender("F"));
console.log(checkgender("M"));*/



function getCarsList(data){
  if(data=="ciaz"){
    return "it is maruti suzuki";
  }
  else if(data=="c2000"){
    return "it is benz"
  }
  else if(data=="wagonar"){
    return "it is volkswagon";
  }
  else{
    return "not defined";
  }
}
console.log(getCarsList("ciaz"));
console.log(getCarsList("c2000"));
console.log(getCarsList("wagonar"));

var employees=[{name:"surendra",salary:52000},{name:"balaram",salary:20000},{name:"ashok",salary:18000}];

var i=0;
function employeeDetails(data){
while(i<data.length){
  console.log(i);
  console.log(data[i].name,data[i].salary);
  i++;
}
  }
employeeDetails(employees);



//while condition

var choice ="";
do{
var target = Number(prompt("please type number"));
var start = 0;

	while(start <= 0){
		console.log(start);
		start++;
	}
	if (start >2){
		break;
	}
}