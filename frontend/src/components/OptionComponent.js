import React from 'react'
import { Fragment } from 'react'

import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function OptionComponent(props) {
    const {  Options ,Atitle} = props
    return (
        <div className='w-auto bg-white rounded-lg shadow-2l -mr-6 '>
            <div className='inline-flex p-1 '>
                <Menu as="div" className="relative inline-block text-left ">
                    <div>
                        <Menu.Button className="inline-flex w-auto justify-end rounded-md outline-0 border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-0  border focus:ring-offset-gray-100">
                            {Atitle}
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
                                {Options.map((d, i) => <Menu.Item>
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
            
        </div>
    )
}
