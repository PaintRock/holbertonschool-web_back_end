import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];

  Promise.all(promises)
    .then(([userResponse]) => {
      const { body: { firstName, lastName } } = userResponse;
      console.log(firstName, lastName);
    })
    .catch((error) => {
      console.error('Signup system offline');
    });
}

handleProfileSignup();