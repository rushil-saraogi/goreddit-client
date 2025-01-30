export default ({ classes = '' }: { classes: string }) => {
    return (
        <div className="flex justify-center items-center">
            <div
                className={`loader ease-linear rounded-full border-2 border-t-2 border-gray-200 h-5 w-5 ${classes}`}
            ></div>
        </div>
    )
}