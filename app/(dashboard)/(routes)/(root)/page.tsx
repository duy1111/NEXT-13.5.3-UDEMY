import { getDashboardCourses } from "@/actions/get-dashboard-courses";
import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";


export default async function Dashboard() {
  const {userId} = auth();

  if(!userId){
    return redirect("/");
  }

  const {
    completedCourses,
    coursesInProgress
  } = await getDashboardCourses(userId);


  return (
    <div>

    </div>
  )
}
