import Tooltip from "./Tooltip"
import { TooltipPosition } from "./Tooltip"

type ButtonType = "success" | "error" | "warning" | "info";

export default ({ icon, tooltip = "", onClick, type, position = "bottom" }: { icon: string, tooltip?: string, onClick: () => void, type?: ButtonType, position?: TooltipPosition }) => {
    const iconClasses: Record<ButtonType, string> = {
        success: "text-green-500",
        error: "text-red-500",
        warning: "text-yellow-500",
        info: "text-blue-500",
    }

    return (
        <Tooltip text={tooltip} position={position}>
            <div onClick={onClick} className={`h-8 w-8 flex items-center justify-center hover:cursor-pointer hover:bg-gray-600/10 rounded-full transition duration-200`}>
                <span className={`material-symbols-outlined text-gray-500 ${type ? iconClasses[type] : ''}`}>
                    {icon}
                </span>
            </div>
        </Tooltip>
    )
}
