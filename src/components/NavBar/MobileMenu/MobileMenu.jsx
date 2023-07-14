import { Disclosure, Transition } from '@headlessui/react'
import { FiChevronDown } from "react-icons/fi";
import { transitionClasses } from '../../../Transitions/TransitionClasses';


const MobileMenu = ({ navigation, categories, isCategoriesOpen, setIsCategoriesOpen }) => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <Disclosure.Panel className="sm:hidden bg-ultra-light drop-shadow-lg p-2">
            <div className="space-y-1 pb-3">
                {navigation.map((item, i) => (

                    item.name === "Categories" ?

                        (
                            //Category container
                            <div key={i} className="mt-2 bg-ultra-light">

                                <>
                                    <button onClick={() => setIsCategoriesOpen(!isCategoriesOpen)} style={{ width: "100%" }} className="rounded-md px-3 py-2 text-base font-medium flex justify-between text-primary-inverted" >{item.name}

                                        <FiChevronDown
                                            className={`${isCategoriesOpen ? 'rotate-180 transform' : ''
                                                } h-5 w-5 text-primary-inverted`}
                                        />
                                    </button>

                                    <Transition
                                        show={isCategoriesOpen}
                                        {...transitionClasses.flyOutTop}
                                    >

                                        {
                                            isCategoriesOpen &&
                                            <section className="categories-section pl-4">
                                                {
                                                    categories.map((category, index) =>

                                                        <Disclosure.Button
                                                            onClick={() => setIsCategoriesOpen(false)}
                                                            key={index}
                                                            as="a"
                                                            href="#"
                                                            className={classNames(
                                                                item.current ? 'bg-primary-inverted text-white' : 'text-primary-inverted hover:bg-neutral-lighter hover:text-primary-inverted',
                                                                'block rounded-md px-3 py-2 text-base font-normal'
                                                            )}
                                                            aria-current={item.current ? 'page' : undefined}
                                                        >
                                                            {category}

                                                        </Disclosure.Button>)
                                                }
                                            </section>
                                        }

                                    </Transition>

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
    )
}

export default MobileMenu;
