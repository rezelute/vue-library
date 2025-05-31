async function getProfileCompletion() {
   const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/user/profile/is-complete`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      credentials: "include",
   });
   return response;
}

async function getProfile() {
   const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/user/profile`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      credentials: "include",
   });
   return response;
}

async function updateProfile() {
   const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/user/profile`, {
      method: "PATCH",
      headers: {
         "Content-Type": "application/json",
      },
      credentials: "include",
   });
   return response;
}

export default { getProfileCompletion, getProfile, updateProfile };
