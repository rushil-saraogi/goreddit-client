"use client";

import { useEffect } from "react";
import { Collection } from "@/types/Collection";
import { Product } from "@/types/Product";
import WatchExPost, { WatchExPostWithBrandAndProductTable } from "@/types/WatchExPost";
import IconButton from "./IconButton";
import { tableDateFormat } from "@/api/util";
import { useInView } from "react-intersection-observer";

type TableData = (Collection[] | Product[] | WatchExPost[] | WatchExPostWithBrandAndProductTable[]) & { Actions?: React.ReactNode };
const ACTIONS_COLUMN = 'Actions';

export default ({ data = [], onEdit, onDelete, onClick, onViewMore }: {
    data?: TableData,
    onEdit?: (id: number) => void,
    onDelete?: (id: number) => void,
    onClick?: (id: number) => void,
    onViewMore?: () => void,
}) => {
    const { ref: infiniteScrollTriggerRef, inView } = useInView();

    useEffect(() => {
        if (inView && onViewMore) {
            onViewMore();
        }
    }, [inView]);

    if (!data?.length) return (
        (
            <div className="p-4 text-gray-500 text-center bg-gray-400/10">No data available</div>
        )
    );

    const callback = (id: string, cb: (id: string) => void) => (e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLTableRowElement>) => {
        e.stopPropagation();
        cb(id);
    }

    const tableDataArray = data
        .map((row) => ({
            ...row,
            Created: tableDateFormat(row.Created),
            Updated: tableDateFormat(row.Updated),
        }))
        .map(row => {
            if (!onEdit && !onDelete) return row;

            return {
                [ACTIONS_COLUMN]: (
                    <div className="flex gap-2">
                        {onEdit && (<IconButton onClick={callback(row.ID, onEdit)} icon="edit" />)}
                        {onDelete && (<IconButton onClick={callback(row.ID, onDelete)} icon="delete" />)}
                    </div>
                ),
                ...row,
            };
        })
        .map(row => Object.values(row))

    const headers: string[] = Object.keys(data[0]);

    if (onEdit || onDelete) {
        headers.unshift(ACTIONS_COLUMN);
    }

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
                        <tr key={i} className={`${onClick ? 'cursor-pointer hover:bg-gray-500/5' : ''}`} onClick={onClick ? callback(data[i].ID, onClick) : () => {}}>
                            {row.map((cell, i) => (
                                <td key={i} className="px-4 sm:px-6 py-3 whitespace-nowrap text-gray-700 max-w-80 overflow-hidden overflow-ellipsis">
                                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                                    {cell as any} {/* Don't care what this is, just render */}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div ref={infiniteScrollTriggerRef}></div>
        </div>
    )
}