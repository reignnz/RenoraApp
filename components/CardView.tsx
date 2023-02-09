import { BsCoin } from "react-icons/bs"

export type CardType = {
    name: string,
    accountType: string,
    coinCost: number,
    actualCost: number,
    realised: number,
    unrealised: number,
    total: number
}

interface CardProps {
    data: CardType[]
}

export default function CardView({ data } : CardProps) {
    return (
        <>
            {data && data.map((val : CardType) => {
                return (
                <div className="w-full flex flex-col m-5 border border-solid rounded p-4 mr-5">
                    <div className="flex justify-between m-2">
                        <div className="flex flex-col">
                            <div className="flex">
                                <BsCoin className="text-2xl my-1 mr-2"/>
                                <p className="text-2xl">{val.name}</p>
                            </div>
                            <p className="text-sm">Binance {' (' + val.accountType + ')'}</p> 
                        </div>

                        <div className="flex flex-col text-center">
                            <p className="text-xl">{val.coinCost} BTC</p>
                            <p className="text-sm">$ {val.actualCost} USD</p>
                        </div>
                    </div>

                    <div className="flex justify-between m-2">
                        <p> Realised P&L </p>
                        <div className="flex flex-col">
                            <p className="text-center">{val.realised} USD</p>
                            <p className="text-end text-sm">{(val.realised/val.total) * 100}%</p>
                        </div>
                    </div>

                    <div className="flex justify-between m-2">
                        <p> Unrealised P&L </p>
                        <div className="flex flex-col">
                            <p className="text-center">{val.realised} USD</p>
                            <p className="text-end text-sm">{(val.realised/val.total) * 100}%</p>
                        </div>
                    </div>

                    <div className="flex justify-between m-2 font-bold">
                        <p> Total P&L </p>
                        <div className="flex flex-col">
                            <p className="text-center">{val.total} USD</p>
                            <p className="text-end text-sm">12.5%</p>
                        </div>
                    </div>

                </div>
            )})}
        </>
    )
}