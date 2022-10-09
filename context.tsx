import * as React from 'react'
import { Pomiary } from './mockedData/pomiary'

type Action = { type: 'add', name: string, pomiar: any }
type Dispatch = (action: Action) => void
type State = { pomiary: any }
type CountProviderProps = { children: React.ReactNode }

export const PomiaryContext = React.createContext<
    { state: State; dispatch: Dispatch } | undefined
>(undefined)

function pomiaryReducer(state: State, action: Action) {
    switch (action.type) {
        case 'add': {
            const newPomiary = JSON.parse(JSON.stringify(state.pomiary));
            const index = state.pomiary.findIndex((pom: any) => pom.name === action.name);
            newPomiary[index].data.unshift(action.pomiar);
            newPomiary[index].value = action.pomiar.value;
            return { pomiary: newPomiary }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

function PomiaryProvider({ children }: CountProviderProps) {
    const [state, dispatch] = React.useReducer(pomiaryReducer, { pomiary: Pomiary })
    // NOTE: you *might* need to memoize this value
    // Learn more in http://kcd.im/optimize-context
    const value = { state, dispatch }
    return (
        <PomiaryContext.Provider value={value}>
            {children}
        </PomiaryContext.Provider>
    )
}

function usePomiar() {
    const context = React.useContext(PomiaryContext)
    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider')
    }
    return context
}

export { PomiaryProvider, usePomiar }