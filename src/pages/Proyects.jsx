import ProyectsCard from "../components/ProyectsCard";
import { proyects } from "../components/lists/ProyectsList";

const Proyects = () => {
    return (
        <div id="proyects" className="bg-[rgba(0,0,50,1.0)] text-[#ffffff] text-center p-[40px]">
            <p className="text-[40px] mb-[10px]">Proyects</p>
            <div className="grid grid-cols-2 justify-items-center">
                {proyects.map(ele => {
                    return(
                        <ProyectsCard title={ele.title} image={ele.image} repo={ele.repo} deploy={ele.deploy} />
                    )
                    })
                }
            </div>
        </div>
    )
}

export default Proyects;