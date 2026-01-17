import { getDashboardCourses } from "@/actions/get-dashboard-courses";
import { CourseList } from "@/components/courses-list";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import { CheckCircle, Clock } from "lucide-react";
import { redirect } from "next/navigation";
import { InfoCard } from "./_components/info-card";
export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/");
  }
  const { completedCourses, courseInProgress } = await getDashboardCourses(
    userId
  );
  return (
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InfoCard
          icon={Clock}
          label="In progress"
          numberOfItems={courseInProgress.length}
        />
        <InfoCard
          icon={CheckCircle}
          label="Compleated"
          numberOfItems={completedCourses.length}
          variant="success"
        />
      </div>
      <CourseList items={[...courseInProgress, ...completedCourses]} />
    </div>
  );
}
