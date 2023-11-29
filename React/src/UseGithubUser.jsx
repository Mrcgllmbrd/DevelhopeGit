import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export function UseGithubUser({ username }) {

 

  const { data, error } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );
   if (username === null) {
     return {
       data: null,
     } 
   }

   return {
    data,
    error
   }
  
}

/*
Modify the useGithubUser hook so that,
if the username is null, no request is made. 
*/
