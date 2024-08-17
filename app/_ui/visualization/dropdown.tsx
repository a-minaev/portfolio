'use client';

import { useContext, createContext, useState } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const DropdownContext = createContext(false);

function DropdownButton({children, updateView}) {
    return (
        <button onClick={updateView} className="bg-transparent hover:bg-yellow-500 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-grey-500 hover:border-transparent rounded">
            <DropdownContext.Provider value={false}>
                {children}
            </DropdownContext.Provider>
        </button>
    )
}

function DropdownOptions({children}) {
    const showOptions = useContext(DropdownContext); // showOptions defaults to false

    return(
        <div>{showOptions? children : ' '}</div> // you can also nest JSX in ternary results
    )
}

function DropdownOption({children, key, currentSelection, updateSelection}) {
    return(
        <div onClick={updateSelection}>{children.name}</div>
    )
}

const locations = [
    {id: 1, name: 'La Crosse'},
    {id: 2, name: 'Madison'},
    {id: 3, name: 'Eau Claire'},
    {id: 4, name: 'Milwaukee'},
    {id: 5, name: 'Green Bay'}
];

export default function Dropdown() {
    const param = 'location';

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter(); 

    const [isActive, setIsActive] = useState(false);
    const [currentSelection, setCurrentSelection] = useState(locations? locations[0].name: ' '); // this and below are doing the same, update

    function updateView(){
        // update the DropdownContext to true
        setIsActive(!isActive);
    }

    const updateSelection = useDebouncedCallback((id) => {
        const location = locations.filter((location) => location.id === id)[0];
        setCurrentSelection(location.name);
        updateView();
    }, 10);
    
    function updateRoute(){
        const params = new URLSearchParams(searchParams);
        params.set(param, currentSelection)
    }
    return(
        <>
            <DropdownButton updateView={updateView}>{currentSelection}</DropdownButton>
            <DropdownContext.Provider value={isActive}>
                <DropdownOptions>
                    {locations? locations.map((location) => 
                        (<DropdownOption key={location.id} currentSelection={currentSelection} updateSelection={()=>updateSelection(location.id)}>{location}</DropdownOption>)
                    ): ' '}
                </DropdownOptions>
            </DropdownContext.Provider>

        </>
    );
}


