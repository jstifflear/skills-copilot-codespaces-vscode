function skillsMember() {
  let member = {
    name: 'John',
    age: 25,
    skills: ['JavaScript', 'React', 'Node'],
    address: {
      city: 'New York',
      country: 'USA'
    }
  };

  // Destructuring
  let { name, age, skills } = member;
  console.log(name, age, skills);
}