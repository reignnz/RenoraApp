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

export default function Dashboard() {
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
    console.log(hide)
    return (
      <> 
        { isMobile &&
          <div className={`absolute top-0 left-0 ${!hide ? 'w-0 z-20 overflow-x-hidden transition-all pl-4 opacity-0' : 'opacity-90 w-screen h-screen overscroll-auto pt-10 pl-4 z-20 bg-gray-100'}`}>
            <button className="absolute left-5 top-2 w-fit" onClick={() => setHide(!hide)}> <HiOutlineBars3 className="text-2xl hover:text-gray-500"/> </button>
            <Navbar />
          </div>
        }
        <div className={`w-screen h-screen flex lg:flex-row md:flex-row xs:flex-col-reverse xs:overflow-y-auto ${isMobile ? '' : ''}`}>
                <div className={`${hide ? 'w-20' : 'w-60'} duration-500 border border-r-3 border-b-0 bg-gray-100`} >
                    <button className="absolute left-5 top-2 w-fit" onClick={() => setHide(!hide)}> <HiOutlineBars3 className="text-2xl hover:text-gray-500"/> </button>
                    { !isMobile && 
                      <div className={`pt-10 w-fit mt-6 duration-300 lg:visible`}>
                          <Navbar className={`duration-500 pl-4 lg:visible ${hide ? 'absolute -left-40' : 'absolute left-0'}`}/>
                      </div>
                    }
                </div>
                
            {
                isMobile ? 
                <div className={`w-screen mr-4 pr-4`}>
                    <CardView data={dataCard}/>
                </div>
                :
                <div className={`w-screen flex flex-col items-start mx-5`}>
                    {/** Dashboard */}
                    <button className="flex items-end justify-self-end self-end bg-slate-200 rounded p-2 px-4 my-2 ml-2 hover:text-gray-600 hover:shadow-sm"> Sync</button>
                    <Table data={data} />
                </div>
            }
            <div className={`lg:border lg:border-left-2 lg:w-2/6 flex flex-col`}>
                <Chart option={option} className="xs:mb-10 lg:mb-20 p-4"/>
                <Summary />
            </div>
        </div>
        </>
    )
}