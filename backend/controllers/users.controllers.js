export const getUsers = async (req, res, next) => {
  try {
    const users = await selectUsers();
    res.status(200).send({ users });
  } catch {
    next(err);
  }
};
