import { Link } from "react-router-dom";
export function Home (){
    return(
    <div>
        <h1 className="text-8xl text-indigo-500"> hellow from home</h1>
        <Link to="/about">About</Link>
    </div>
    
    );
}
