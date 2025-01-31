type pillType = "success" | "default";

export default ({ children, onClick, type = 'default' }: { children: React.ReactNode, onClick: () => void, type?: pillType }) => {
    const classes = {
        success: "bg-green-400/10 border-green-400/10 hover:bg-green-400/20",
        default: "bg-gray-400/10 border-gray-400/10 hover:bg-gray-400/20",
    }
    return (
        <div onClick={onClick} className={`bg-gray-400/10 border px-4 py-2 rounded-lg hover:cursor-pointer ${classes[type]}`}>
            {children}
        </div>
    );
}