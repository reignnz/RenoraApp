interface SummaryProps {
    className?: string
}


export default function Summary({ className }: SummaryProps){
    return (
        <div className={`flex flex-col ml-10 ${className}`}>
            <div className="font-bold">
                <p> Net worth</p>
                <p className="text-xl">10,512.42 USD</p>
            </div>
            
            <div>
                <p>Realised returns</p>
                <p className="text-xl">10,512.42 USD</p>
            </div>
            
            <div>
                <p>Unrealised returns</p>
                <p className="text-xl">10,512.42 USD</p>
            </div>
        </div>
    )
}