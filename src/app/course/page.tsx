import React from "react";
import { CourseCard } from "../ui/course/course-card";
import { CourseFilter, CourseFilterMobile } from "../ui/course/course-filter";

export default function Page() {
    return (
        <div className="bg-base-200">
            <div className="flex flex-row">
                <div className="w-3/12 lg:block hidden bg-base-300 border-t-2 border-base-200">
                    <div className="ml-3 mt-3 mr-3">
                        <input type="text" placeholder="🔍 Search" className="input input-bordered w-full" />

                        <CourseFilter />
                    </div>
                </div>
                <div className="lg:w-6/12 w-full">
                    <div className='flex flex-col items-center justify-center'>
                        <CourseFilterMobile />

                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div>
                </div>
                <div className="w-3/12 lg:block hidden"></div>
            </div>
        </div>
    );
};
