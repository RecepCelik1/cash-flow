"use client"
import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { setConsequences } from "../redux/slice";

const App = () => {

        const [values , setValues ] = useState({
            
            inStore : 0,
            onlineSales : 0,
            otherRevenue : 0,
            
            rent : 0,
            payroll : 0,
            inventoryCost : 0,
            utilities : 0,
            equipmentAndSupplies : 0,
            marketingSpend : 0,
            taxes : 0,
            insurence : 0,
            interest : 0,
            fees : 0,
            otherCost : 0,

        });

        const dispatch = useDispatch()

        const handleInputChanges = (field, value) => {

            const parsedValue = value === "" ? 0 : parseFloat(value);

            setValues(prevState => ({
                ...prevState,
                [field] : parsedValue,
            }))
        }

        const cashInflow = values.inStore + values.onlineSales + values.otherRevenue

        const cashOutflow = values.rent + values.payroll + values.inventoryCost + values.utilities + values.equipmentAndSupplies + values.marketingSpend + values.taxes + values.insurence + values.interest + values.fees + values.otherCost

        const computeResults = () => {
            dispatch(setConsequences({inflow : cashInflow , outflow : cashOutflow}))
        }


    return (
        <div className="w-full flex justify-center items-center h-full min-h-screen">
        <div className="w-full max-w-[800px] bg-white flex flex-col p-4">
        <div className="flex flex-col w-full">
          <div className="text-2xl text-sky-800">
            Startxpress cash flow calculator
          </div>
          <div className="text-[#6b7177] mt-4 text-lg">
            Enter your business details into the cash flow calculator.
          </div>
        </div>
        

        <div className="w-full flex flex-col mt-10">
            <div className="text-lg text-sky-800">What are your projected monthly cash inflows?</div>
            <div className="w-full flex flex-col sm:flex-row mt-2">
              <div className="w-full flex flex-col">
                  <div className="flex flex-col w-full sm:flex-row gap-5">
                    <div className="w-full">
                        <div className="text-[#6b7177]">In-store sales revenue ($)</div>
                        <div className="mt-2">
                            <input
                            type="number"
                            className="w-full max-w-[370px] h-12 p-5 text-2xl font-gabarito border border-black"
                            placeholder="0.00"
                            onChange={(e) => handleInputChanges("inStore" , e.target.value)}
                            style={{
                                WebkitAppearance: "none",
                                margin: 0, 
                            }}
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="text-[#6b7177]">Online sales revenue ($)</div>
                        <div className="mt-2">
                            <input
                            type="number"
                            className="w-full max-w-[370px] h-12 p-5 text-2xl font-gabarito border border-black"
                            placeholder="0.00"
                            style={{
                                WebkitAppearance: "none",
                                margin: 0, 
                            }}
                            onChange={(e) => handleInputChanges("onlineSales" , e.target.value)}
                            />
                        </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full sm:flex-row gap-5 mt-4 sm:mt-8">
                    <div className="w-full">
                        <div className="text-[#6b7177]">Other revenue (if applicable) ($)</div>
                        <div className="mt-2">
                            <input
                            type="number"
                            className="w-full max-w-[370px] h-12 p-5 text-2xl font-gabarito border border-black"
                            placeholder="0.00"
                            style={{
                                WebkitAppearance: "none",
                                margin: 0, 
                            }}
                            onChange={(e) => handleInputChanges("otherRevenue" , e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="text-[#6b7177]">Total Monthly Cash Inflow</div>
                        <div className="mt-2 flex items-center text-[#6b7177] text-2xl h-12 overflow-hidden whitespace-nowrap text-overflow-ellipsis"
                        style={{ maxWidth: '115px', overflow: 'hidden'}}
                        >
                            $ {cashInflow.toFixed(2)}
                        </div>
                    </div>
                  </div>
              </div>

            </div>
        </div>

        <div className="w-full flex flex-col mt-6">
            <div className="text-lg text-sky-800">What are your projected monthly cash outflows?</div>
            <div className="w-full flex flex-col sm:flex-row mt-2">
              <div className="w-full flex flex-col">


                  <div className="flex flex-col w-full sm:flex-row gap-5">
                    <div className="w-full">
                        <div className="text-[#6b7177]">Rent ($)</div>
                        <div className="mt-2">
                            <input
                            type="number"
                            className="w-full max-w-[370px] h-12 p-5 text-2xl font-gabarito border border-black"
                            placeholder="0.00"
                            style={{
                                WebkitAppearance: "none",
                                margin: 0, 
                            }}
                            onChange={(e) => handleInputChanges("rent" , e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="text-[#6b7177]">Payroll ($)</div>
                        <div className="mt-2">
                            <input
                            type="number"
                            className="w-full max-w-[370px] h-12 p-5 text-2xl font-gabarito border border-black"
                            placeholder="0.00"
                            style={{
                                WebkitAppearance: "none",
                                margin: 0, 
                            }}
                            onChange={(e) => handleInputChanges("payroll" , e.target.value)}
                            />
                        </div>
                    </div>
                  </div>


                  <div className="flex flex-col w-full sm:flex-row gap-5 mt-4 sm:mt-8">
                    <div className="w-full">
                        <div className="text-[#6b7177]">Inventory costs ($)</div>
                        <div className="mt-2">
                            <input
                            type="number"
                            className="w-full max-w-[370px] h-12 p-5 text-2xl font-gabarito border border-black"
                            placeholder="0.00"
                            style={{
                                WebkitAppearance: "none",
                                margin: 0, 
                            }}
                            onChange={(e) => handleInputChanges("inventoryCost" , e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="text-[#6b7177]">Utilities ($)</div>
                        <div className="mt-2">
                            <input
                            type="number"
                            className="w-full max-w-[370px] h-12 p-5 text-2xl font-gabarito border border-black"
                            placeholder="0.00"
                            style={{
                                WebkitAppearance: "none",
                                margin: 0, 
                            }}
                            onChange={(e) => handleInputChanges("utilities" , e.target.value)}
                            />
                        </div>
                    </div>
                  </div>

                  <div className="flex flex-col w-full sm:flex-row gap-5 mt-4 sm:mt-8">
                    <div className="w-full">
                        <div className="text-[#6b7177]">Equipment and supplies ($)</div>
                        <div className="mt-2">
                            <input
                            type="number"
                            className="w-full max-w-[370px] h-12 p-5 text-2xl font-gabarito border border-black"
                            placeholder="0.00"
                            style={{
                                WebkitAppearance: "none",
                                margin: 0, 
                            }}
                            onChange={(e) => handleInputChanges("equipmentAndSupplies" , e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="text-[#6b7177]">Marketing spend ($)</div>
                        <div className="mt-2">
                            <input
                            type="number"
                            className="w-full max-w-[370px] h-12 p-5 text-2xl font-gabarito border border-black"
                            placeholder="0.00"
                            style={{
                                WebkitAppearance: "none",
                                margin: 0, 
                            }}
                            onChange={(e) => handleInputChanges("marketingSpend" , e.target.value)}
                            />
                        </div>
                    </div>
                  </div>

                  <div className="flex flex-col w-full sm:flex-row gap-5 mt-4 sm:mt-8">
                    <div className="w-full">
                        <div className="text-[#6b7177]">Taxes ($)</div>
                        <div className="mt-2">
                            <input
                            type="number"
                            className="w-full max-w-[370px] h-12 p-5 text-2xl font-gabarito border border-black"
                            placeholder="0.00"
                            style={{
                                WebkitAppearance: "none",
                                margin: 0, 
                            }}
                            onChange={(e) => handleInputChanges("taxes" , e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="text-[#6b7177]">Insurance ($)</div>
                        <div className="mt-2">
                            <input
                            type="number"
                            className="w-full max-w-[370px] h-12 p-5 text-2xl font-gabarito border border-black"
                            placeholder="0.00"
                            style={{
                                WebkitAppearance: "none",
                                margin: 0, 
                            }}
                            onChange={(e) => handleInputChanges("insurence" , e.target.value)}
                            />
                        </div>
                    </div>
                  </div>

                  <div className="flex flex-col w-full sm:flex-row gap-5 mt-4 sm:mt-8">
                    <div className="w-full">
                        <div className="text-[#6b7177]">Interest ($)</div>
                        <div className="mt-2">
                            <input
                            type="number"
                            className="w-full max-w-[370px] h-12 p-5 text-2xl font-gabarito border border-black"
                            placeholder="0.00"
                            style={{
                                WebkitAppearance: "none",
                                margin: 0, 
                            }}
                            onChange={(e) => handleInputChanges("interest" , e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="text-[#6b7177]">Fees (banking, licenses, etc.) ($)</div>
                        <div className="mt-2">
                            <input
                            type="number"
                            className="w-full max-w-[370px] h-12 p-5 text-2xl font-gabarito border border-black"
                            placeholder="0.00"
                            style={{
                                WebkitAppearance: "none",
                                margin: 0, 
                            }}
                            onChange={(e) => handleInputChanges("fees" , e.target.value)}
                            />
                        </div>
                    </div>
                  </div>


                  <div className="flex flex-col w-full sm:flex-row gap-5 mt-4 sm:mt-8">
                    <div className="w-full">
                        <div className="text-[#6b7177]">Other costs (if applicable) ($)</div>
                        <div className="mt-2">
                            <input
                            type="number"
                            className="w-full max-w-[370px] h-12 p-5 text-2xl font-gabarito border border-black"
                            placeholder="0.00"
                            style={{
                                WebkitAppearance: "none",
                                margin: 0, 
                            }}
                            onChange={(e) => handleInputChanges("otherCost" , e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="text-[#6b7177]">Total Monthly Cash Outflow</div>
                        <div className="mt-2 flex items-center text-[#6b7177] text-2xl h-12 overflow-hidden whitespace-nowrap text-overflow-ellipsis"
                            style={{ maxWidth: '115px', overflow: 'hidden'}}
                        >
                            $ {cashOutflow.toFixed(2)}
                        </div>
                    </div>
                  </div>
              </div>

            </div>
        </div>
        <div className="w-full">
            <button className="w-full flex justify-center items-center bg-sky-600 text-white text-xl mt-8 rounded-md p-2 hover:bg-sky-800 transition-all duration-150 shadow-sm shadow-sky-600"
            onClick={() => computeResults()}
            >
                Calculate

            </button>
        </div>

        <div className="text-xs mt-10">
            <div className="text-[#6b7177]">
            The content on this webpage is provided by Startxpress Inc. for information purposes only and use of this webpage and any Startxpress services is subject to the Terms of Service and Privacy Policy.
            </div>

            <div className="mt-4 text-[#6b7177]">
            Any projected cash flow is an estimate only and the information on this webpage is not intended to replace or be relied on as financial or professional advice of any sort. This webpage does not create any funding commitment from Startxpress Inc. or its affiliates.
            </div>



        </div>
      </div>
      </div>
    )
}

export default App;