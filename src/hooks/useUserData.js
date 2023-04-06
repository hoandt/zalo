import { useQuery } from "react-query";

const useUserData = (username) => {
  const gitProfile = useQuery(["userProfile", username], 
  ()=>fetch(`https://api.github.com/users/${username}`).then((res) =>
  res.json()))
 const gitRes = useQuery(["userRes",username],()=>fetch(`https://api.github.com/users/${username}/repos`).then(res=>res.json()))
 console.log(gitRes); 
 return gitProfile;
  
};

export default useUserData;
