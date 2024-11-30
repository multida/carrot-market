"use server";

import { z } from "zod";
import validator from "validator";
import { redirect } from "next/navigation";

const phoneSchema = z
  .string()
  .trim()
  .refine(
    (phone) => validator.isMobilePhone(phone, "ko-KR"),
    "Wrong phone format"
  );
const tokenSchema = z.coerce.number().min(100000).max(999999);

export async function smsLogIn(prevState: any, formData: FormData) {
  console.log(formData.get("token"));
  console.log(tokenSchema.parse(formData.get("token")));
}
