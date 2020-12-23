import React from 'react'
import ReactDom from 'react-dom'

import App from './App'
import './index.css'

import { Provider } from './context/context'
import { SpeechProvider } from '@speechly/react-client'

ReactDom.render(
    <SpeechProvider
        appId="a948afa0-f7bd-4a37-91c4-743a7ccdb151"
        language="en-US"
    >
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
)
