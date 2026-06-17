import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "One Stop for your Job!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main-2.jpg')] bg-cover">

    <Navbar />
    
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your Applications & Check Your Resume Ratings.</h1>
        <h2>Review Your Submissions with our AI-powered Feedback.</h2>
      </div>
      {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume) => (
            <ResumeCard key = {resume.id} resume={resume} />
            ))}
        </div>
      )}
    </section>
  
  </main>;
}