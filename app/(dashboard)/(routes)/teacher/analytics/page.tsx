import { getAnalytics } from "@/actions/get-analytics";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { DataCard } from "./_components/data-card";
import { Chart } from "./_components/chart";

const AnalyticPage = async () => {
  const { userId } = auth();
  if (!userId) return redirect("/");
  const { data, totalReveneu, totalSales } = await getAnalytics(userId);
  return (
    <div className="p-6">
      <div className="grid grid-col-1 md:grid-cols-2 gap-4 mb-4">
        <DataCard label="Total Reveneu" value={totalReveneu} shoulFormat />
        <DataCard label="Total Sales" value={totalSales} />
      </div>
      <Chart data={data} />
    </div>
  );
};

export default AnalyticPage;
