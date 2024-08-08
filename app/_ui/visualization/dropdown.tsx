'use client';

import { useContext, createContext, useState } from 'react';

const DropdownContext = createContext(false);

function DropdownButton({children}) {
    return (
        <button className="bg-transparent hover:bg-grey-500 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-grey-500 hover:border-transparent rounded">
            {children}
        </button>
    )
}

function DropdownOptions() {

}

function DropdownOption() {

}

export default function Dropdown() {
    return;
}