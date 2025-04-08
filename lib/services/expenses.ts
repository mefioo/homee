import { Expenses } from "@prisma/client";
import { prisma } from "../prisma";
import { UserId } from "@/types/users";

export const fetchUserExpenses = async (
  userId: UserId
): Promise<Expenses[]> => {
  try {
    const userExpenses = await prisma.expenses.findMany({
      where: {
        userId,
      },
    });

    return userExpenses;
  } catch (err) {
    console.log("Error while fetching user expenses: ", err);
    throw new Error("Failed to fetch user expenses");
  }
};
