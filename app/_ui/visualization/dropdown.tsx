'use client';

import { useContext, createContext, useState } from 'react';

const DropdownContext = createContext(false);

function DropdownButton({children, handleClick}) {
    return (
        <button onClick={handleClick} className="bg-transparent hover:bg-grey-500 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-grey-500 hover:border-transparent rounded">
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

function DropdownOption({children}) {
    return(
        <div>{children}</div>
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
    const [isActive, setIsActive] = useState(false);
    const [currentSelection, setCurrentSelection] = useState(locations[0]);

    function handleClick(){
        // update the DropdownContext to true
        setIsActive(!isActive);
    }

    return(
        <>
            <DropdownButton handleClick={handleClick}>{currentSelection.name}</DropdownButton>
            <DropdownContext.Provider value={isActive}>
                <DropdownOptions>
                    {locations? locations.map((location) => 
                        (<DropdownOption>{location.name}</DropdownOption>)
                    ): (<DropdownOption>no locations</DropdownOption>)}
                </DropdownOptions>
            </DropdownContext.Provider>

        </>
    );
}


