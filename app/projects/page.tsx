import ProjectCard from "@/components/ProjectCard";
import { mobileApps, webApps } from "@/data";

const ProjectsPage = () => {
  return (
    <main className="py-20 relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip ">
      <div className="max-w-7xl">
        <h1 className="heading">
          All <span className="text-purple">Projects</span>
        </h1>
        <div className="mt-20">
          <h1 className="text-start font-bold text-xl md:text-2xl">
            Web Applications
          </h1>
          <div className="mt-10 grid md:grid-cols-1 lg:grid-cols-2 gap-10">
            {webApps.map((item) => (
              <ProjectCard
                key={item.id}
                id={item.id}
                title={item.title}
                des={item.des}
                features={item.features}
                img={item.img}
                iconLists={item.iconLists}
                github={item.github}
                liveLink={item.liveLink}
              />
            ))}
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-start font-bold text-xl md:text-2xl">
            Mobile Applications
          </h1>
          <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
            {mobileApps.map((item) => (
              <ProjectCard
                key={item.id}
                id={item.id}
                title={item.title}
                des={item.des}
                img={item.img}
                iconLists={item.iconLists}
                github={item.github}
                liveLink={item.liveLink}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
