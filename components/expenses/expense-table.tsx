import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchUserExpenses } from "@/lib/services/expenses";
import { getTranslations } from "next-intl/server";

const ExpenseTable = async () => {
  const expenses = await fetchUserExpenses("user_1");
  const expensesTranslations = await getTranslations("expenses.table");

  return (
    <Table>
      <TableCaption>{expensesTranslations("title")}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">
            {expensesTranslations("id")}
          </TableHead>
          <TableHead className="w-[100px]">
            {expensesTranslations("name")}
          </TableHead>
          <TableHead>{expensesTranslations("category")}</TableHead>
          <TableHead className="text-right">
            {expensesTranslations("amount")}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {expenses.map((expense) => (
          <TableRow key={expense.id}>
            <TableCell className="font-medium">{expense.id}</TableCell>
            <TableCell>{expense.name}</TableCell>
            <TableCell>{expense.categoryId}</TableCell>
            <TableCell className="text-right">{expense.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>{expensesTranslations('total')}</TableCell>
          <TableCell className="text-right">
            {expenses.reduce((total, expense) => total + +expense.amount, 0)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default ExpenseTable;
