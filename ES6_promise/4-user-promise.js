export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}

// Example usage:
signUpUser('John', 'Doe')
  .then((user) => {
    console.log('User signed up:', user);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
