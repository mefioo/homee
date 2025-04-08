import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ExpensesTableLoadingFallback = () => {
  return (
    <Card className="p-4 w-full">
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-left text-sm font-semibold text-muted-foreground border-b">
                <th className="p-2">
                  <Skeleton className="h-4 w-[120px]" />
                </th>
                <th className="p-2">
                  <Skeleton className="h-4 w-[100px]" />
                </th>
                <th className="p-2">
                  <Skeleton className="h-4 w-[80px]" />
                </th>
                <th className="p-2">
                  <Skeleton className="h-4 w-[140px]" />
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, i) => (
                <tr key={i} className="border-b">
                  <td className="p-2">
                    <Skeleton className="h-4 w-[120px]" />
                  </td>
                  <td className="p-2">
                    <Skeleton className="h-4 w-[100px]" />
                  </td>
                  <td className="p-2">
                    <Skeleton className="h-4 w-[80px]" />
                  </td>
                  <td className="p-2">
                    <Skeleton className="h-4 w-[140px]" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpensesTableLoadingFallback;
