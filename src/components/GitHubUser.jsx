export const GitHubUser = ({ login,avatar_url }) => {

  return (
    <div>
      <h1>{login}</h1>
      <img src={avatar_url} width={64} alt="avatar" />
    </div>
  );
};
