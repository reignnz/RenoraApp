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
      series: [
        {
          type: 'treemap',
          levels: [
            {
              itemStyle: {
                borderColor: '#333',
              }
            },
            {
              color: ['#942e38', '#269f3c', '#942e38'],
              colorMappingBy: 'value',
            }
          ],
          tooltip: {            
            formatter: ['<div class="tooltip-title> ' + 'BTC' + '</div>',]
          },
          data: [
            {
              name: 'BTC',
              value: 10,
              children: [
                {
                  label: {
                    formatter: () => ['File coin', '-1.25%'].join('\n\n')
                  },
                  value: 4
                },
                {
                  name: 'Etherium \n\n +0.53%',
                  value: 6
                }
              ]
            },
            {
              name: 'nodeB',
              value: 20,
              children: [
                {
                  name: 'nodeBa',
                  value: 20,
                  children: [
                    {
                      name: 'BTC',
                      label: {
                        formatter: () => ['BTC \n\n +1.25%']
                      },
                      value: 20
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };

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
        { (isMobile) &&
          <div className={`absolute top-0 left-0 ${!hide ? 'w-0 z-20 overflow-x-hidden transition-all pl-4 opacity-0' : 'opacity-90 w-screen h-screen overscroll-auto pt-10 pl-4 z-20 bg-gray-100'}`}>
            <button className="absolute left-5 top-2 w-fit z-10" onClick={() => setHide(!hide)}> <HiOutlineBars3 className="text-3xl hover:text-gray-500"/> </button>
            <Navbar />
          </div>
        }
        <div className={`w-screen h-full m-0 flex ${isMobile ? 'flex-col-reverse' : 'flex-row'}`}>
                <div className={`${hide ? 'w-20' : 'w-60'} duration-500 border border-r-3 border-b-0 bg-gray-100`} >
                    <button className="z-10 absolute left-5 top-2 w-fit" onClick={() => setHide(!hide)}> <HiOutlineBars3 className="text-3xl hover:text-gray-500"/> </button>
                    { (isLaptop || isDesktop || isTablet) && 
                        <Navbar className={`mt-14 mb-0 duration-500 pl-4 lg:visible pr-2 ${hide ? 'relative -left-40' : 'relative left-0'}`}/>
                    }
                </div>
                
            {
                isMobile ? 
                    <CardView data={dataCard}/>
                :
                <div className={`flex flex-col w-screen h-fit items-start mx-5`}>
                    {/** Dashboard */}
                    <button className="flex items-end justify-self-end self-end bg-slate-200 rounded p-2 px-4 my-2 ml-2 hover:text-gray-600 hover:shadow-sm"> Sync</button>
                    <Table data={data} />
                </div>
            }
            <div className={`z-0 lg:border lg:border-left-2 flex flex-col lg:border-b-0 lg:overflow-y-auto w-screen lg:w-2/6 ${isMobile ? 'h-fit' : 'h-screen'}`}>
                <Chart option={option} className="w-screen mt-10 mb-10 p-4"/>
                <Summary className="" />
            </div>
        </div>
        </>
    )
}