"use server";

import { db } from "@/db";
import { clinicsTable, usersToClinicsTable } from "@/db/schema";
import { auth } from "@/lib/auth";
import { redirect } from "next/dist/server/api-utils";
import { headers } from "next/headers";

export const createClinic = async (name: string) => {
  const headersList = await headers();
  const session = await auth.api.getSession({
    headers: headersList,
  });

  if (!session) {
    return { error: "Unauthorized" };
  }

  const [clinic] = await db
    .insert(clinicsTable)
    .values({
      name,
    })
    .returning();

  await db.insert(usersToClinicsTable).values({
    userId: session.user.id,
    clinicId: clinic.id,
  });
  redirect("/dashboard");
};
