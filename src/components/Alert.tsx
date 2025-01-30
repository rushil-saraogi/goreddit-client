import React from 'react';

type AlertTypes = 'info' | 'success' | 'warning' | 'error';

export default ({ children, type = 'info', subheader }: { children: React.ReactNode, type?: AlertTypes, subheader?: string }) => {
    const classes: Record<AlertTypes, string> = {
        'info': 'border-blue-200 bg-blue-100 text-blue-800',
        'success': 'border-green-200 bg-green-100 text-green-800',
        'warning': 'border-yellow-200 bg-yellow-100 text-yellow-800',
        'error': 'border-red-200 bg-red-100 text-red-800',
    }

    return (
        <div className={`p-4 border rounded-lg ${classes[type]}`}>
            <div>
                { children }
            </div>

            <div>
                { subheader }
            </div>
        </div>
    )
}