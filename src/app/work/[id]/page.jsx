import CaseStudyDetailPage from "@/views/CaseStudyDetailPage";
import { CASE_STUDIES } from "@/data/caseStudiesData";

export function generateStaticParams() {
  return CASE_STUDIES.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const study = CASE_STUDIES.find((s) => s.id === id);
  if (!study) return { title: "Case study" };
  return { title: study.title, description: study.tagline };
}

export default function Page() {
  return <CaseStudyDetailPage />;
}
