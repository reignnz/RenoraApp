import { useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

interface SummaryProps {
    className?: string
}

export default function Summary({ className }: SummaryProps){
    const theme = useMantineTheme()
    const isLaptop = useMediaQuery(
      `(min-width: ${theme.breakpoints.md}px) and (max-width: ${theme.breakpoints.lg}px)`
    )
    const isDesktop = useMediaQuery(`(min-width: ${theme.breakpoints.lg}px)`)
    return (
        <div className={`flex flex-col ml-10 ${className} space-y-2`}>
            <div className="font-bold whitespace-nowrap">
                <p> Net worth</p>
                <p className={`whitespace-nowrap ${isLaptop || isDesktop ? 'text-xl' : 'text-md'}`}>10,512.42 USD</p>
            </div>
            
            <div className="whitespace-nowrap">
                <p>Realised returns</p>
                <p className={`whitespace-nowrap ${isLaptop || isDesktop ? 'text-xl' : 'text-md'}`}>10,512.42 USD</p>
            </div>
            
            <div className="whitespace-nowrap">
                <p>Unrealised returns</p>
                <p className={`${isLaptop || isDesktop ? 'text-xl ' : 'text-md'}`}>10,512.42 USD</p>
            </div>
        </div>
    )
}