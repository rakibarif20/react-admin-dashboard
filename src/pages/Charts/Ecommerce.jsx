import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Pie, ButtonReuse, SparkLine } from "../../components";

import { earningData, SparklineAreaData, ecomPieChartData } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const Ecommerce = () => {
  const {currentColor, currentMode} = useStateContext();
  return (
    <div className="mt-12">
      <div className="grid-2 lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full p-8 pt-9 m-3 bg-hero-pattern bg-no-reapet bg-cover bg-center">
          <div className="flex items-start flex-col">
            <p className="font-bold text-white">Earnings</p>
            <p className="text-2xl text-white">$63,448.78</p>
          </div>
          <div className="mt-6">
            <ButtonReuse color="white" bgColor={currentColor} text="Download" borderRadius="10px" size="md" />
          </div>
        </div>
        <div className="grid lg:grid-cols-4 items-center justify-items-center m-3 md:grid-cols-2  justify-center items-center gap-2 w-full">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white shadow dark:bg-secondary-dark-bg md:w-72 p-4 pt-9 rounded-2xl">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className={`text-lg font-semibold ${currentMode === 'Dark' ? 'text-white' : ''}`}>{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2 ${currentMode === 'Dark' ? 'text-white' : ''}`}>{item.percentage}</span>
              </p>
              <p className={`text-sm text-gray-400 mt-1 ${currentMode === 'Dark' ? 'text-white' : ''}`}>{item.title}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-10 justify-center flex-wrap w-full">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
            <div className="flex justify-between  w-full">
              <p className="font-semibold text-xl">Revenue Updates</p>
              <div className="flex gap-4">
                <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>Expense</span>
                </p>
                <p className="flex items-center gap-2 text-gray-400 hover:drop-shadow-xl">
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>Budget</span>
                </p>
              </div>
            </div>
            <div className="mt-10 flex gap-10 flex-wrap justify-center">
              <div className="border-r-1 border-color m-4 pr-10">
                <div>
                    <p>
                      <span className="text-3xl font-semibold">$93,356</span>
                      <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">23%</span>
                    </p>
                    <p className={`text-2xl mt-1`}>Budget</p>
                </div>
                <div>
                    <p>
                      <span className="text-3xl font-semibold">$83,236</span>
                      
                    </p>
                    <p className={`text-2xl mt-1`}>Expense</p>
                </div>
                <div className="mt-5">
                  <SparkLine currentColor={currentColor} id='sparkline' type='Line' height='80px' width='250px' data={SparklineAreaData} color={currentColor}  />
                </div>
                <div className="mt-10">
                <ButtonReuse color="white" bgColor={currentColor} text="Download Report" borderRadius="10px" size="md" />
                </div>
              </div>
              <div>
                <Stacked width='320px' height='360px' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
