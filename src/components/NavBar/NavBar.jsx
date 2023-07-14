import './navBar.css'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { useState } from 'react';
import CartWidget from './CartWidget/CartWidget';
import { Cross as Hamburger } from 'hamburger-react'
import { transitionClasses } from '../../Transitions/TransitionClasses';
import MobileMenu from './MobileMenu/MobileMenu';

const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'About', href: '#', current: false },
    { name: 'Categories', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
]

const categories = ["Classics", "Speed Cubes", "Mirror Cubes", "Whatever else"]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



export default function NavBar() {

    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

    return (
        <Disclosure id="navbar" as="nav" className="bg-primary">
            {({ open }) => (
                <>
                    <div className="mx-auto px-2 sm:px-6 lg:px-8 bg-primary">
                        <div className="relative flex h-16 items-center justify-between bg-primary">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                                {/* Mobile menu button*/}

                                <Disclosure.Button className="h-70 inline-flex items-center justify-center rounded-md text-primary-inverted"
                                >
                                    <Hamburger toggled={open} size={20} />
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
                                        {navigation.map((item, index) => (

                                            item.name === "Categories" ?

                                                <Menu key={index} as="div" className="relative ml-3">
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
                                                :

                                                <a
                                                    key={index}
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

                            <CartWidget quantity={5} />


                        </div>
                    </div>
                    {/* Dropdown menu - Animated */}
                    <Transition
                        show={open}
                        {...transitionClasses.flyOutTop}
                    >
                        {/* DROP DOWN PANEL */}
                        <MobileMenu navigation={navigation} categories={categories} isCategoriesOpen={isCategoriesOpen} setIsCategoriesOpen={setIsCategoriesOpen} />
                    </Transition>

                </>
            )}
        </Disclosure>
    )
}


