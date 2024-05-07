"use client"
import React from "react"

const Consequences = () => {
    return (
        <div className="w-full max-w-[800px] p-4 justify-center items-center">
            <div className="flex flex-col bg-sky-100 p-4">
                <div className="text-3xl mt-8 flex justify-center items-center font-bold text-center">Positive cash flow</div>
                <div className="flex flex-col">
                    <div className="flex justify-center items-center text-[#6b7177] mt-4 text-center">Your business is bringing in more money than it is spending.</div> 
                    <div className="flex justify-center items-center text-[#6b7177] text-center">Continue forecasting your cash flow month to month.</div>
                    <div className="flex justify-center items-center text-[#6b7177] mt-4 font-bold underline hover:no-underline cursor-pointer text-center">Download this financial worksheet template.</div>

                    <div className="w-full mt-8 border-b border-gray-300">
                        <div className="flex flex-col w-full items-center">
                            <div className="w-full flex justify-between items-center">
                                <div className="text-lg text-[#6b7177]">Cash flow</div>
                                <div className="text-xl font-semibold">Positive</div>
                            </div>
                            <div className="w-full flex items-center h-14">
                                <div className="w-5/12 text-[#6b7177] text-xs">
                                Cash flow is the net amount of money being transferred into and out of your business.
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="w-full mt-4 border-b border-gray-300">
                        <div className="flex flex-col w-full items-center">
                            <div className="w-full flex justify-between items-center">
                                <div className="text-lg text-[#6b7177]">Monthly cash inflow</div>
                                <div className="text-xl font-semibold">$0.00</div>
                            </div>
                            <div className="w-full flex items-center h-14">
                                <div className="w-5/12 text-[#6b7177] text-xs">
                                Cash inflow is the money coming into your business.</div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="w-full mt-4 border-b border-gray-300">
                        <div className="flex flex-col w-full items-center">
                            <div className="w-full flex justify-between items-center">
                                <div className="text-lg text-[#6b7177]">Monthly cash outflow</div>
                                <div className="text-xl font-semibold">$0.00</div>
                            </div>
                            <div className="w-full flex items-center h-14">
                                <div className="w-5/12 text-[#6b7177] text-xs">
                                    Cash outflow is the money coming out of your business.
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="w-full mt-4 border-b border-gray-300">
                        <div className="flex flex-col w-full items-center">
                            <div className="w-full flex justify-between items-center">
                                <div className="text-lg text-[#6b7177]">Net cash flow</div>
                                <div className="text-xl font-semibold">$0.00</div>
                            </div>
                            <div className="w-full flex items-center h-14">
                                <div className="w-5/12 text-[#6b7177] text-xs">
                                Net cash flow is the difference between your company's cash inflows and outflows.</div>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Consequences;