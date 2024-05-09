"use client"
import Image from "next/image"
import React from "react"
import { useSelector } from "react-redux"
import GeneratePDF from "./generatePDF.jsx"

const Consequences = () => {

    const consequence = useSelector(state => state.consequenceSlice)
    const inflow = consequence.cashInflow;
    const outflow = consequence.cashOutflow;
    const showResults = consequence.showResults;

    let status
    let message1
    let message2
    if(inflow === outflow){
        status = "Neutral"
        message1 = "Your business is not making a profit or loss in any way."
        message2 = "You can manage this by looking for ways to increase your cash coming in or to decrease your cash going out."
    } else if (inflow > outflow) {
        status = "Positive"
        message1 = "Your business is bringing in more money than it is spending."
        message2 = "Continue forecasting your cash flow month to month."
    } else {
        status = "Negative"
        message1 = "Your business is spending more money than it is bringing in."
        message2 = "You can manage this by looking for ways to increase your cash coming in or to decrease your cash going out."
    } 

    return (
        <div className="w-full max-w-[800px] p-4 justify-center items-center">
            {
                showResults === true ? (            <div className="flex flex-col bg-sky-100 p-4">
                <div className="text-3xl mt-8 flex justify-center items-center font-bold text-center">{status} cash flow</div>
                <div className="flex flex-col">
                    <div className="flex justify-center items-center text-[#6b7177] mt-4 text-center">{message1}</div> 
                    <div className="flex justify-center items-center text-[#6b7177] text-center">{message2}</div>
                    <GeneratePDF/>
                    <div className="w-full mt-8 border-b border-gray-300">
                        <div className="flex flex-col w-full items-center">
                            <div className="w-full flex justify-between items-center">
                                <div className="text-lg text-[#6b7177]">Cash flow</div>
                                <div className="text-xl font-semibold">{status}</div>
                            </div>
                            <div className="w-full flex items-center h-14">
                                <div className=" w-full text-[#6b7177] text-xs">
                                Cash flow is the net amount of money being transferred into and out of your business.
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="w-full mt-4 border-b border-gray-300">
                        <div className="flex flex-col w-full items-center">
                            <div className="w-full flex justify-between items-center">
                                <div className="text-lg text-[#6b7177]">Monthly cash inflow</div>
                                <div className="text-xl font-semibold">${inflow.toFixed(2)}</div>
                            </div>
                            <div className="w-full flex items-center h-14">
                                <div className=" w-full text-[#6b7177] text-xs">
                                Cash inflow is the money coming into your business.</div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="w-full mt-4 border-b border-gray-300">
                        <div className="flex flex-col w-full items-center">
                            <div className="w-full flex justify-between items-center">
                                <div className="text-lg text-[#6b7177]">Monthly cash outflow</div>
                                <div className="text-xl font-semibold">${outflow.toFixed(2)}</div>
                            </div>
                            <div className="w-full flex items-center h-14">
                                <div className=" w-full text-[#6b7177] text-xs">
                                    Cash outflow is the money coming out of your business.
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="w-full mt-4 border-b border-gray-300">
                        <div className="flex flex-col w-full items-center">
                            <div className="w-full flex justify-between items-center">
                                <div className="text-lg text-[#6b7177]">Net cash flow</div>
                                <div className="text-xl font-semibold">${(inflow - outflow).toFixed(2)}</div>
                            </div>
                            <div className="w-full flex items-center h-14">
                                <div className=" w-full text-[#6b7177] text-xs">
                                Net cash flow is the difference between your company&apos;s cash inflows and outflows.</div>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>) : (<div>
                <img src={"https://gifdb.com/images/high/anime-dancing-evangelion-asuka-rei-38enmf2rltdnhdnt.gif"} width={800}
                height={500}/>
            </div>)
            }


        </div>
    )
}

export default Consequences;