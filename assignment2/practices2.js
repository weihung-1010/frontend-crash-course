// 1. Create an object called person with properties for name, age, and gender.Assign values to these properties and then display the name and age of the person.
const person = {
  name: 'Peter',
  age: '23',
  gender: 'male',
  friends:['David','Elisa','Ken']
}
console.log(person)

// 2. Add a method to the person object created in the previous assignment called greet.The method should display a greeting message "Hello".Invoke the greet method to see the greeting message.
person.greet = () =>{
  console.log('Hi' + person.name)
}
person.greet()

// 3. Add a properties called friends to the person which contains several names and print it.
console.log(person.friends)