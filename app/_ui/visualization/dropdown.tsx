'use client';

import { useContext, createContext, useState } from 'react';

const DropdownContext = createContext(false);

function DropdownButton({children, updateView}) {
    return (
        <button onClick={updateView} className="bg-transparent hover:bg-grey-500 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-grey-500 hover:border-transparent rounded">
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

function DropdownOption({children, updateSelection}) {
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
    const [isActive, setIsActive] = useState(false);
    const [currentSelection, setCurrentSelection] = useState(locations[0]);

    function updateView(){
        // update the DropdownContext to true
        setIsActive(!isActive);
    }

    function updateSelection(){
        setCurrentSelection(locations[1]);
        updateView();
    }

    return(
        <>
            <DropdownButton updateView={updateView}>{currentSelection.name}</DropdownButton>
            <DropdownContext.Provider value={isActive}>
                <DropdownOptions>
                    {locations? locations.map((location) => 
                        (<DropdownOption updateSelection={updateSelection}>{location}</DropdownOption>)
                    ): (<DropdownOption updateSelection={updateSelection}>no locations</DropdownOption>)}
                </DropdownOptions>
            </DropdownContext.Provider>

        </>
    );
}


