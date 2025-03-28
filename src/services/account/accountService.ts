const getEmail = async () => {
   const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/auth/get-email`, {
      method: "GET",
      credentials: "include",
      headers: {
         "Content-Type": "application/json",
      },
   });

   return response;
};

const changeEmail = async (userNewEmail: string) => {
   const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/auth/change-email`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email: userNewEmail }),
   });
   return response;
};

const requestDelete = async () => {
   const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/auth/request-delete`, {
      method: "POST",
      credentials: "include",
   });
   return response;
};

const deleteAccount = async (deleteToken: string) => {
   const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/auth/delete-account`, {
      method: "DELETE",
      credentials: "include",
      headers: {
         "X-Delete-Token": deleteToken,
         "Content-Type": "application/json",
      },
   });
   return response;
};

export default { getEmail, changeEmail, requestDelete, deleteAccount };
