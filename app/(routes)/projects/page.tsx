import ProjectDetails from "@/components/project-details";
import {
  frontEndProjects,
  fullStackProjects,
  mobileProjects,
} from "@/data/projects";

const AllProjectsPage = () => {
  return (
    <div className="container py-10">
      <p className="heading">
        All <span className="text-purple">Projects</span>
      </p>
      <p className="text-center mt-10">
        <span className="font-semibold text-lg">NOTE:</span>{" "}
        <span>All projects will be added soon.</span>
      </p>
      <section className="pt-10">
        <p className="text-xl text-purple">Full-Stack</p>
        <div className="pt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {fullStackProjects.map((project) => (
            <ProjectDetails key={project.id} {...project} />
          ))}
        </div>
      </section>
      <section className="pt-10">
        <p className="text-xl text-purple">Front-End</p>
        <div className="pt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {frontEndProjects.map((project) => (
            <ProjectDetails key={project.id} {...project} />
          ))}
        </div>
      </section>
      <section className="pt-10">
        <p className="text-xl text-purple">Mobile Apps</p>
        <div className="pt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {mobileProjects.map((project) => (
            <ProjectDetails key={project.id} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllProjectsPage;
