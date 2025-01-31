import { Collection } from "@/types/Collection";
import { Product } from "@/types/Product";
import IconButton from "./IconButton";
import { tableDateFormat } from "@/api/util";

type TableData = (Collection[] | Product[]) & { Actions?: React.ReactNode };
const ACTIONS_COLUMN = 'Actions';

export default ({ data = [], onEdit, onDelete }: { data?: TableData, onEdit?: (id: number) => void, onDelete?: (id: number) => void }) => {
    if (!data.length) return (
        (
            <div className="p-4 text-gray-500 text-center bg-gray-400/10">No data available</div>
        )
    );

    const tableDataArray = data
        .map((row) => ({
            ...row,
            Created: tableDateFormat(row.Created),
            Updated: tableDateFormat(row.Updated),
        }))
        .map(row => ({
            [ACTIONS_COLUMN]: (
                <div className="flex gap-2">
                    {onEdit && (<IconButton onClick={() => onEdit(row.ID)} icon="edit" tooltip="Edit" />)}
                    {onDelete && (<IconButton onClick={() => onDelete(row.ID)} icon="delete" tooltip="Delete" />)}
                </div>
            ),
            ...row,
        }))
        .map(row => Object.values(row))

        const headers: string[] = [ACTIONS_COLUMN, ...Object.keys(data[0])];

    return (
        <div className="shadow-sm border border-gray-200 sm:rounded-lg overflow-x-auto">
            <table className="divide-y divide-gray-200 w-full">
                <thead>
                    <tr>
                        {headers.map((header, i) => (
                            <th key={i} scope="col" className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider truncate bg-gray-100">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {tableDataArray.map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                            {row.map((cell, i) => (
                                <td key={i} className="px-4 sm:px-6 py-3 whitespace-nowrap text-gray-700">
                                    {cell as any} {/* Don't care what this is, just render */}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}