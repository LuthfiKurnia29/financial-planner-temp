import { IUser } from "../src/types";
import { _db } from "../src/utils/_db";

function Users(): Array<IUser> {
  return [
    {
      name: "Satrya",
      email: "satrya@email.com",
      password: "satrya123",
    },
    {
      name: "Eka",
      email: "eka@gmail.com",
      password: "eka123",
    },
  ];
}

async function seed() {
  await Promise.all(
    Users().map((user) => {
      return _db.users.create({ data: user });
    })
  );
}

seed();
