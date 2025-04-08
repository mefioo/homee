import { prisma } from "@/lib/prisma";
import { ExpenseCategory } from "@prisma/client";

export const fetchCategories = async (): Promise<ExpenseCategory[]> => {
  try {
    const categories = await prisma.expenseCategory.findMany();
    
    return categories;
  } catch (err) {
    console.error("Error fetching users:", err);
    throw new Error("Failed to fetch users");
  }
};
