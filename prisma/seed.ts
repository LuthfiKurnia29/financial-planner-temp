import { IPerusahaan, IUser } from "../src/types";
import { _db } from "../src/utils/_db";

function Perusahaan() : Array<IPerusahaan>
{
  return [
    {
      namaPerusahaan: "YKBUT"
    },
    {
      namaPerusahaan: "MBUT"
    },
    {
      namaPerusahaan: "GSI"
    },
    {
      namaPerusahaan: "KAMAJU"
    },
    {
      namaPerusahaan: "UT SCHOOL"
    },
  ]
}

function Users(): Array<IUser> {
  return [
    {
      nama: "Satrya",
      nrp: "satrya@email.com",
      password: "satrya123",
    },
    {
      nama: "Luthfi",
      nrp: "luthfi@email.com",
      password: "luthfi123",
    },
  ];
}

async function seed() {
  await Promise.all(
    Perusahaan().map((perusahaan) => {
      return _db.perusahaan.create({ data: perusahaan })
    })
    );
}

seed();
