import { uploadPhoto, createUser } from "./utils";

function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];

  Promise.all(promises)
    .then(([photoResponse, userResponse]) => {
      const { body: { firstName, lastName } } = userResponse;
      console.log(firstName, lastName);
    })
    .catch(error => {
      console.error("Signup system offline");
    });
}

handleProfileSignup();
