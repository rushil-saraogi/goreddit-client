export default ({ children, classes }: { children: React.ReactNode, classes?: string }) => {
    return (
        <div className={`text-white bg-black bg-opacity-70 font-semibold text-sm font-semibold p-1 rounded ${classes}`}>
            { children }
        </div>
    )
};