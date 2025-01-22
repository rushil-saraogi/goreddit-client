import InputGroup from "@/components/InputGroup"

export default () => {
    return (
        <div className="max-w-lg mx-auto p-4 border border-gray-200 rounded-lg">
            <label>
                <span className="block text-sm font-medium text-gray-700">Name</span>
                <InputGroup />
            </label>
        </div>
    )
}