import { User } from "@prisma/client";
import { IUser, IUserResponse } from "../types";
import { _db } from "../utils/_db";

export const getUsers = async (): Promise<IUserResponse[]> => {
  return await _db.user.findMany({
    select: {
      id: true,
      nama: true,
      idPerusahaan: true,
    },
  });
};

export const createUser = async (newUser: Omit<User, "id">): Promise<IUserResponse> => {
  const {nama, nrp, idPerusahaan, password} = newUser;
  return await _db.user.create({
    data: {
      nama,
      nrp,
      idPerusahaan,
      password
    },
    select: {
      id: true,
      nama: true,
      idPerusahaan: true,
    },
  });
};