import React from "react";
import { CourseCard } from "../ui/course/course-card";
import { CourseFilter, CourseFilterMobile } from "../ui/course/course-filter";

export default function Page() {
    return (
        <div className="bg-base-200">
            <div className="flex flex-row">
                <div className="w-3/12 lg:block hidden">
                    <CourseFilter/>
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
