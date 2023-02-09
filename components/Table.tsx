
export type TableType = {
    asset: string,
    amount: number,
    realised: number,
    unrealised: number,
    total: number
}

interface TableProps {
    data: TableType[],
    className?: string
}

export default function Table({ data, className }: TableProps) {
    return (
        <table className={`rounded w-full ${className}`}>
            <tbody>
                <tr className="border border-solid border-l-0 border-r-0 rounded">
                    <th className="p-5"> Asset </th>
                    <th className="p-5"> Amount </th>
                    <th className="p-5"> Realised P&L </th>
                    <th className="p-5"> Unrealised P&L </th>
                    <th className="p-5"> Total P&L </th>
                </tr>
                { data && data.map((values) => {
                    return (
                        <tr className="border border-solid border-l-0 border-r-0 rounded text-center hover:bg-blue-200">
                            <td className="p-5">{values.asset}</td>
                            <td className="p-5">{values.amount}</td>
                            <td className="p-5">{values.realised}</td>
                            <td className="p-5">{values.unrealised}</td>
                            <td className="p-5">{values.total}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}