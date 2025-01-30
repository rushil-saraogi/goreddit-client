import Tooltip from "./Tooltip"

export default ({ icon, tooltip = "", onClick }: { icon: string, tooltip?: string, onClick: () => void }) => {
    return (
        <Tooltip text={tooltip} position="bottom">
            <div onClick={onClick} className="h-8 w-8 flex items-center justify-center hover:cursor-pointer hover:bg-slate-200 rounded-full transition duration-200">
                <span className="material-symbols-outlined text-gray-600">
                {icon}
                </span>
            </div>
        </Tooltip>
    )
}
