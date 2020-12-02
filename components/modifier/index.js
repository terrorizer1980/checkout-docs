
import { createContext, useState, useEffect, useContext } from 'react';

import style from './style.module.css'

const ModifierContext = createContext();

export const ModifierProvider = ({ children }) => {
    const [ modifierState, setModifierState ] = useState({});

    return (
        <ModifierContext.Provider value={ [ modifierState, setModifierState ] }>
            { children }
        </ModifierContext.Provider>
    )
}

export const useModifiers = () => {
    const [ modifierState ] = useContext(ModifierContext);
    return modifierState;
}

const ModGroupContext = createContext();

export const ModifierGroup = ({ children }) => {
    const [ modifierState, setModifierState ] = useContext(ModifierContext);
    const [ childModifiers, setChildModifiers ] = useState({});

    const toggle = (name) => {
        setModifierState(_val => {
            const val = { ..._val };
            for (const existingName of Object.keys(childModifiers)) {
                val[existingName] = false;
            }
            val[name] = true;
            return val;
        });
    }

    const register = (name) => {
        setChildModifiers(val => {
            return {
                ...val,
                [ name ]: true
            }
        })
    }
    
    return (
        <ModGroupContext.Provider value={ { register, toggle, modifierState } }>
            { children }
        </ModGroupContext.Provider>
    )
}

export const Modifier = ({ name, label, default: def=false }) => {
    const { register, toggle, modifierState } = useContext(ModGroupContext);

    const selectModifier = () => {
        toggle(name);
    };
    
    useEffect(() => {
        register(name);
        if (def) {
            selectModifier();
        }
    }, []);

    return (
        <button
            active={ modifierState[name] ? 'active' : undefined }
            className={ style.modifier }
            onClick={ selectModifier }>
            { label }
        </button>
    );
}