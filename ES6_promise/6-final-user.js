import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  const [userResult, photoResult] = await Promise.allSettled([userPromise, photoPromise]);

  const resultArray = [
    {
      status: userResult.status,
      value: userResult.status === 'fulfilled' ? userResult.value : userResult.reason,
    },
    {
      status: photoResult.status,
      value: photoResult.status === 'fulfilled' ? photoResult.value : photoResult.reason,
    },
  ];

  return resultArray;
}

// Example usage:
handleProfileSignup('John', 'Doe', 'profile.jpg')
  .then((results) => {
    console.log('Results:', results);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

export default handleProfileSignup;
