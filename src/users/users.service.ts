import { IUser, IUserResponse } from "../types";
import { _db } from "../utils/_db";

export const getUsers = async (): Promise<IUserResponse[]> => {
  return await _db.users.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
};

export const createUser = async (newUser: IUser): Promise<IUserResponse> => {
  return await _db.users.create({
    data: newUser,
    select: {
      id: true,
      name: true,
      email: true,
    },
  });
};
