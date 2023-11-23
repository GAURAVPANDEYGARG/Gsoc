var emp={
    ename:"Abhi",
    eid:"CL1235",
    sal:45000,
    place:{
        city:"BANGLORE",
        pincode:560037
    },
    skills:["java","js","sql"],
    exp:false,
    bonus:function(){
        var totalsal = 15000+this.sal;
        console.log(totalsal)
    }
}

console.log(emp)
emp.skills[2]="Oracle sql"
console.log(emp.skills)
console.log(emp.bonus())