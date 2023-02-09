import Navbar from "../components/Navbar"
import Table from "../components/Table"
import { TableType } from "../components/Table"
import { useState } from 'react'
import { HiOutlineBars3 } from "react-icons/hi2"
import Summary from "../components/Summary"
import Chart from "../components/Chart"
import { useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import CardView, { CardType } from "../components/CardView"

export default function Test() {
    const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        responsive: true,
        maintainAspectRatio: false,
        height: 200,
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      }

    const data : TableType[] = [
        { asset: "BTC", "amount": 1542, realised: 1051242, unrealised: 1051242, total: 1051242 },
        { asset: "BTC", "amount": 1542, realised: 1051242, unrealised: 1051242, total: 1051242 },
        { asset: "BTC", "amount": 1542, realised: 1051242, unrealised: 1051242, total: 1051242 },
        { asset: "BTC", "amount": 1542, realised: 1051242, unrealised: 1051242, total: 1051242 }
    ]

    const dataCard : CardType[] = [
        { name: "BTC", accountType: "subaccount", coinCost: 100, actualCost: 1512.14, realised: 1051242, unrealised: 1051242, total: 1051242 },
        { name: "BTC", accountType: "subaccount", coinCost: 100, actualCost: 1512.14, realised: 1051242, unrealised: 1051242, total: 1051242 },
        { name: "BTC", accountType: "subaccount", coinCost: 100, actualCost: 1512.14, realised: 1051242, unrealised: 1051242, total: 1051242 },
        { name: "BTC", accountType: "subaccount", coinCost: 100, actualCost: 1512.14, realised: 1051242, unrealised: 1051242, total: 1051242 }
    ]
    const [hide, setHide] = useState(false)

    const theme = useMantineTheme()
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`)
    const isTablet = useMediaQuery(
      `(min-width: ${theme.breakpoints.sm}px) and (max-width: ${theme.breakpoints.md}px)`
    )
    const isLaptop = useMediaQuery(
      `(min-width: ${theme.breakpoints.md}px) and (max-width: ${theme.breakpoints.lg}px)`
    )
    const isDesktop = useMediaQuery(`(min-width: ${theme.breakpoints.lg}px)`)
  
    return (
       <div className={`flex ${isMobile ? 'flex-col-reverse': 'flex-row'}`}>
            <button className={`absolute left-2 top-2 w-fit z-10`} onClick={() => setHide(!hide)}> <HiOutlineBars3 className="text-2xl hover:text-gray-500"/> </button>
            {isMobile ? 
              <div className={`absolute top-0 left-0 ${!hide ? 'w-0 z-20 overflow-x-hidden transition-all pl-4 opacity-0' : 'opacity-90 w-screen h-screen overscroll-auto mt-10 pl-4 z-20 bg-gray-100'}`}>
                <Navbar className={`mt-10 duration-500`} />
              </div>
              :            
              <div className={`z-0 border border-r-2 border-t-0 border-l-0 p-4 bg-gray-100 overflow-auto ease-in-out transition-all duration-300 ${isMobile ? '' : hide ? '-translate-x-full w-0' : 'translate-x-0 '}`}>
                <Navbar className={`mt-10 duration-500 `}/>
              </div>
            }

            <div className={`z-0 flex flex-col m-10 duration-300 ease-in-out transition-all grow ${isMobile ? '' : hide ? '' : ' '}}`}>
                <button className={`flex items-end justify-self-end self-end bg-slate-200 rounded p-2 px-4  hover:text-gray-600 hover:shadow-sm  ${isMobile ? 'hidden' : 'visible'}`}> Sync</button>
                {
                  isMobile ?
                  <CardView data={dataCard} /> 
                  :
                  <Table data={data} className="mt-10"/>
                }
            </div>
            <div className={`border border-l-2 duration-300 p-8 ease-in-out transition-all flex flex-col space-y-10  ${isMobile ? 'justify-self-center justify-center items-center border-0' : hide ? '' : ''}`}>
              <Chart option={option}/>
              <Summary className="" />
            </div>
       </div>
    )
}