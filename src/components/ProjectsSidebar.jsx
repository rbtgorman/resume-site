import Button from './Button.jsx';


export default function ProjectsSidebar({onStartAddProject, projects}) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone md:w-72 rounded-r-xl">
        <h2 className ="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
        <div>
            <Button onClick={onStartAddProject}>
                + Add Project
            </Button>
        </div>
        <ul className="mt-8">
            {projects.map(project => <li key={project.id}>
                <Button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200"
                >{project.title}</Button>
            </li>)}
        </ul>
    </aside>
    );

}

/*text-stone-200 hover:text-stone-100 hover:bg-stone-800 rounded-md transition-colors*/