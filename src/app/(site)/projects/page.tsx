import ProjectSection from '@/components/global/ProjectSection';
import { getProjects } from '@/sanity/utils/sanity.query';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Projects - Cletus Ntsoereng',
  description: 'The web development projects I have built over the years',
};

export const revalidate = 3600;

export default async function Project() {
  const projects = await getProjects();

  return (
    <>
      <ProjectSection />
    </>
  );
}
