import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { transitionClasses } from '../../../utilities/Transitions/TransitionClasses'

const DropDown = ({ index, categories }) => {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <Menu key={index} as="div" className="relative ml-3 rounded-md">
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
                {...transitionClasses.dropdown}
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
    )
}

export default DropDown
