"use client";
import { useState, useEffect } from "react" 
import Link from "next/link";

type Job = {
    _id: number;
    title: string;
    description: string;
    handle: string;
}

export default function Jobs() {

    const [jobs, setJobs] = useState<Job[]>([])

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_JOBBER_BACKEND_URL+'/board/jobs')
            .then(response => response.json())
            .then(data => setJobs(data.jobs))
    }, [])

    return (
        <>
            <h1>Jobs</h1>
            {jobs.map((job) => {
                return(
                <div key={job._id}>
                    <h2>{job.title}</h2>
                    <p>{job.description}</p>
                    <Link href={`/jobs/${job.handle}`}>
                        View {job.handle}
                    </Link>
                </div>
                )
              })
            }
        </>
    )
}