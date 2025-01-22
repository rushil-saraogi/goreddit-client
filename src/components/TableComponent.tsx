import { Collection } from "@/types/Collection";
import { Product } from "@/types/Product";

type TableData = Collection[] | Product[];

export default ({ data = [] }: { data?: TableData }) => {
    if (!data.length) return null;

    const headers: string[] = Object.keys(data[0]);
    const tableDataArray = data.map(row => Object.values(row));

    return (
        <div className="shadow-sm border overflow-hidden border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        {headers.map((header, i) =>(
                            <th key={i} scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider truncate">
                                { header }
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                    {tableDataArray.map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                            {row.map((cell, i) => (
                                <td key={i} className="px-4 sm:px-6 py-4 whitespace-nowrap text-gray-700">
                                    { cell }
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}