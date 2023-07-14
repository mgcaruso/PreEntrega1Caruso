import { Disclosure } from '@headlessui/react'
import DropDown from './DropDown/DropDown'


const MobileMenu = ({ navigation, categories, isCategoriesOpen, setIsCategoriesOpen }) => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <Disclosure.Panel className="sm:hidden bg-ultra-light drop-shadow-lg p-2">
            <div className="space-y-1 pb-3">
                {navigation.map((item, i) => (

                    item.name === "Categories" ?

                        //Category drop down
                        <div key={i}>
                            
                        <DropDown list={categories} i={i} isOpen={isCategoriesOpen} setIsOpen={setIsCategoriesOpen} item={item} classNameFn={classNames} />
                        </div>


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
