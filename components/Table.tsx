import { BsCoin } from 'react-icons/bs'

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
                            <td className="p-5 text-left">
                                <div className="flex flex-row space-x-4">
                                    <BsCoin className="text-2xl my-2"/>
                                    <div className="flex flex-col"> 
                                        <p className="text-lg">{values.asset}</p>
                                        <p className="justify-end items-end text-sm">Binance {` (subaccount)`}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="p-5 whitespace-nowrap">
                                <div className="flex flex-col text-right">
                                    <p className="text-lg flex-nowrap">{values.amount} BTC</p>
                                    <p className="justify-end items-end text-sm">10,512 USD</p>
                                </div>
                            </td>
                            <td className="p-5 whitespace-nowrap">
                                <div className="flex flex-col text-right">
                                    <p className="text-lg">{values.realised} USD</p>
                                    <p className="justify-end items-end text-sm">12.5%</p>
                                </div>
                            </td>

                            <td className="p-5 whitespace-nowrap">
                                <div className="flex flex-col text-right">
                                    <p className="text-lg">{values.unrealised} USD</p>
                                    <p className="justify-end items-end text-sm">12.5%</p>
                                </div>
                            </td>
                            <td className="p-5 whitespace-nowrap">
                                <div className="flex flex-col text-right">
                                    <p className="text-lg">{values.total} USD</p>
                                    <p className="text-sm">12.5%</p>
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}