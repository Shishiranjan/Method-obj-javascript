const Shishiranjan = {
    firstName: 'Shihsiranjan',
    lastName: 'Thakur',
    birthyear: 1997,
    Job: 'Software developer',
    friends: ['Randhir', 'Suraj', 'Golu'],
    
    
//You can also be able to pass the function inside an object and perform the operation of function there.    
//calcAGe: function()
   // {
        //Here this keyword indicates to the object named Shishiranjan.
    //console.log(this);
    //return 2021 - birthyear;
//}

//console.log(jonas.calcAge());

//If u want to retrieve something multiple times from the same object then you can also be able to do it. Suppose i want to retrieve the age property three times  then  we have to set the this keyword to age property.


  

calcAge: function()
{
    this.age = 2021 - this.birthyear;
    return this.age;
    

},
getSummary: function()
{
    return `${this.firstName} ${this.lastName}  is a  ${this.calcAge()}   years old` ;
 
}
};

    

console.log(Shishiranjan.calcAge());

console.log(Shishiranjan.age);
console.log(Shishiranjan.age);
console.log(Shishiranjan.age);

console.log(Shishiranjan.getSummary());