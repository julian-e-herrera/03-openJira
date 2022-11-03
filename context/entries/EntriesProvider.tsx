import { FC, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';
import { v4 as uuidv4 } from 'uuid';


export interface EntriesState {
    entries: Entry[];

}


const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(), description: 'Pendiente-first line', status: 'pending', createAt: Date.now()
        },
        {
            _id: uuidv4(), description: 'En-Progreso-seconde line', status: 'in-progress', createAt: Date.now() - 10000
        },
        {
            _id: uuidv4(), description: 'Finished-trecer line', status: 'finished', createAt: Date.now() - 188888
        },
    ]
}

export const EntriesProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

    const addNewEntry = (description: string) => {
        const newEntry: Entry = {
            _id: uuidv4(),
            description,
            createAt: Date.now(),
            status: 'pending'
        }
        dispatch({ type: '[Entry] - Add-Entry', payload: newEntry })
    }


    const updateEntry = (entry: Entry) => {
        dispatch({ type: '[Entry] - Entry-Updated', payload: entry })
    }

    return (
        < EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
            {children}
        </ EntriesContext.Provider>
    )
};