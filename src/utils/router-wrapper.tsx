import React from 'react'
import { MemoryRouter } from 'react-router-dom'

export default function RouterWrapper({ children }: any) {
    return (
        <MemoryRouter>
            {children}
        </MemoryRouter>
    )
}
