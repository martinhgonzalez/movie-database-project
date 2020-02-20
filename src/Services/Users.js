const getUsersArray = async () => {
  const res = await fetch("./users.txt");
  const users = await res.json();
  return users.users;
};

export { getUsersArray };


