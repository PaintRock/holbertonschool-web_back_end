import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
const photoPromise = uploadPhoto();
const userPromise = createUser();

  Promise.all([photoPromise, userPromise])
  .then((results) => {
    const [photoResponse, userResponse] = results;
    console.log(`body ${userResponse.firstName} ${userResponse.lastName}`);
  })
  .catch((error) => {
    console.log('Signup system offline');
  });
}

// Call handleProfileSignup to start the process
handleProfileSignup();
