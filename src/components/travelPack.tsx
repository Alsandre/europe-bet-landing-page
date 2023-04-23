import { TTravelPackProps } from "../types"

export const TravelPack:React.FC<TTravelPackProps> = ({icon, text}) => {
    return <div className="min-h-[56px] w-mobile m-auto bg-primary-dark-400 flex items-center gap-4 my-[6px] py-2 px-4 rounded-[6px]">
        {icon}
        <p className="text-13">{text}</p>
    </div>
}