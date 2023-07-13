import './navBar.css'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { FiMenu, FiX, FiShoppingCart, FiChevronDown } from "react-icons/fi";
import { useState } from 'react';

const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'About', href: '#', current: false },
    { name: 'Categories', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
]

const categories = ["Classics", "Speed Cubes", "Mirror Cubes"]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Disclosure id="navbar" as="nav" className="bg-primary">
            {({ open }) => (
                <>
                    <div className="mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2                text-primary-inverted hover:bg-primary-inverted hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <FiX className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <FiMenu className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (

                                            item.name === "Categories" ?
                                                <>
                                                    <Menu as="div" className="relative ml-3">
                                                        <div>
                                                            <Menu.Button className="font-medium flex rounded-md text-sm focus:outline-none">

                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <a
                                                                            href="#"
                                                                            className={classNames(active ? 'rounded-md bg-primary-hover' : '', 'rounded-md block px-4 py-2 text-sm text-primary-inverted')}
                                                                        >
                                                                            Categories
                                                                        </a>
                                                                    )}
                                                                </Menu.Item>
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
                                                            <Menu.Items className="absolute -left-1 z-10 mt-2 w-48 origin-top-right rounded-md bg-primary py-1 shadow-lg focus:outline-none">
                                                                {
                                                                    categories.map((category, index) =>
                                                                        <Menu.Item key={index}>
                                                                            {({ active }) => (
                                                                                <a
                                                                                    href="#"
                                                                                    className={classNames(active ? 'bg-primary-hover' : '', 'block px-4 py-2 text-sm text-primary-inverted')}
                                                                                >
                                                                                    {category}
                                                                                </a>
                                                                            )}
                                                                        </Menu.Item>

                                                                    )
                                                                }

                                                            </Menu.Items>
                                                        </Transition>
                                                    </Menu>
                                                </>
                                                :

                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current ? 'bg-primary-inverted text-primary' : 'text-primary-inverted hover:bg-primary-hover hover:text-primary-inverted',
                                                        'rounded-md px-3 py-2 text-sm font-medium'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    type="button"
                                    className="p-2 text-primary-inverted hover:text-neutral focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                                >
                                    <span className="sr-only">View notifications</span>

                                    <FiShoppingCart className="h-6 w-6" aria-hidden="true" />
                                </button>

                                {/* Categories dropdown */}
                                {/* <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="flex rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-primary-inverted">
                                            <span className="sr-only">Open user menu</span>
                                            
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'rounded-md bg-primary-hover' : '', 'rounded-md block px-4 py-2 text-sm text-primary-inverted')}
                                                    >
                                                        Categories
                                                    </a>
                                                )}
                                            </Menu.Item>
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
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-primary py-1 shadow-lg ring-1 ring-primary-inverted ring-opacity-5 focus:outline-none">
                                            {
                                                categories.map((category, index) =>
                                                    <Menu.Item key={index}>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(active ? 'bg-primary-hover' : '', 'block px-4 py-2 text-sm text-primary-inverted')}
                                                            >
                                                                {category}
                                                            </a>
                                                        )}
                                                    </Menu.Item>

                                                )
                                            }

                                        </Menu.Items>
                                    </Transition>
                                </Menu> */}
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 pb-3">
                            {navigation.map((item, i) => (

                                item.name === "Categories" ?

                                    (
                                        //Category container
                                        <div key={i} className="mt-2 bg-ultra-light">

                                            <>
                                                <button onClick={() => setIsOpen(!isOpen)} style={{ width: "100%" }} className="rounded-md px-3 py-2 text-base font-medium flex justify-between" >{item.name}

                                                    <FiChevronDown
                                                        className={`${isOpen ? 'rotate-180 transform' : ''
                                                            } h-5 w-5 text-primary-inverted`}
                                                    />
                                                </button>


                                                {
                                                    isOpen &&
                                                    <section className="categories-section pl-4">
                                                        {
                                                            categories.map((category, index) =>

                                                                <Disclosure.Button
                                                                    key={index}
                                                                    as="a"
                                                                    href="#"
                                                                    className={classNames(
                                                                        item.current ? 'bg-primary-inverted text-white' : 'text-primary-inverted hover:bg-neutral-lighter hover:text-primary-inverted',
                                                                        'block rounded-md px-3 py-2 text-base font-medium'
                                                                    )}
                                                                    aria-current={item.current ? 'page' : undefined}
                                                                >
                                                                    {category}

                                                                </Disclosure.Button>)
                                                        }
                                                    </section>
                                                }


                                            </>

                                        </div>

                                    )
                                    :
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-primary-inverted text-white' : 'text-primary-inverted hover:bg-neutral-lighter hover:text-primary-inverted',
                                            'block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}

                                    </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}


