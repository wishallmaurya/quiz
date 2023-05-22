import React from 'react'
import { Fragment } from 'react'
import DoubleBarGraph from './DoubleBarGraph'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import SingleBarGraph from './SingleBarGraph'
import OptionComponent from './OptionComponent'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ChartComponent(props) {
    const { title, options,bar, dataset, dataset1, dataset2, labels} = props
    return (
        <div className='w-auto bg-white mt-10 rounded-lg shadow-2l pb-2'>
            <div className='flex p-5 border-b border-#6c6c6c-500  m-b-2'>
                <h1 style={{ fontWeight: 700 }}>{title}</h1>
                <p className="ml-5" style={{ fontSize: "14px", color: "#6c6c6c"  }}>Per Month</p>
            </div>
            <div className='inline-flex justify-end w-full p-5'>
                <Menu as="div" className="relative inline-block text-left ">
                    <div>
                        <Menu.Button className="inline-flex w-44 justify-end rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                            Options
                            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                {options.map((d, i) => <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            key={i}
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            {d}
                                        </a>
                                    )}
                                </Menu.Item>)}
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
            {bar === 'double' ? <DoubleBarGraph
                datasetOne={dataset1}
                datasetTwo={dataset2}
                labels={labels}
            /> : <SingleBarGraph
                dataset={dataset}
                labels={labels}
            />}
        </div>
    )
}
