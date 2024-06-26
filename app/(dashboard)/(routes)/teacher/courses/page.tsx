import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DataTable } from "./_component/data-table";
import { columns } from "./_component/columns";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

const CoursesPage = async () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/");
  }
  const courses = await db.course.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className=" m-4">
      <DataTable columns={columns} data={courses} />
    </div>
  );
};

export default CoursesPage;
