import ExpenseTable from "@/components/expenses/expense-table";
import ExpensesTableLoadingFallback from "@/components/expenses/expense-table-loading-fallback";
import React, { Suspense } from "react";

const FinancesOverview = async () => {
  return (
    <div className="flex">
      <Suspense fallback={<ExpensesTableLoadingFallback />}>
        <ExpenseTable />
      </Suspense>
    </div>
  );
};

export default FinancesOverview;
