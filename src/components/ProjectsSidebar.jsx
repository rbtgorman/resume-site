import Button from './Button.jsx';


export default function ProjectsSidebar() {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone md:w-72 rounded-r-xl">
        <h2 className ="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
        <div>
            <Button>
                + Add Project
            </Button>
        </div>
        <ul>

        </ul>
    </aside>
    );

}

/*text-stone-200 hover:text-stone-100 hover:bg-stone-800 rounded-md transition-colors*/