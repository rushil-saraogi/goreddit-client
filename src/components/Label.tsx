export default ({ children, text }: { children: React.ReactNode, text: string }) => {
    return (
        <label>
            <span className="block text-sm font-medium text-gray-700 mb-1.5">{text}</span>
            {children}
        </label>
    )
}