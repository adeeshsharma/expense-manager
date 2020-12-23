import React, { useEffect, useRef } from 'react'
import { Grid, Typography } from '@material-ui/core'
import {
    PushToTalkButton,
    PushToTalkButtonContainer,
    ErrorPanel,
} from '@speechly/react-ui'

import { SpeechState, useSpeechContext } from '@speechly/react-client'
import Details from './components/Details/Details'
import Main from './components/Main/Main'
import useStyles from './styles'

const App = () => {
    const classes = useStyles()
    const { speechState } = useSpeechContext()

    // for scrolling to main component when speaking into speechly on mobile
    const main = useRef(null)
    const executeScroll = () => main.current.scrollIntoView()
    useEffect(
        () => {
            if (speechState === SpeechState.Recording) {
                executeScroll()
            }
        },
        [speechState]
    )

    return (
        <div>
            <Grid
                className={classes.grid}
                container
                spacing={0}
                alignItems="center"
                justify="center"
                style={{ height: '100vh' }}
            >
                {/* on desktop this will be shown | HIDES FOR MOBILE */}
                <Grid item xs={12} sm={3} className={classes.mobile}>
                    <Details title="Income" />
                </Grid>

                {/* Main component doesn't move */}
                <Grid ref={main} item xs={12} sm={3} className={classes.main}>
                    <Main />
                </Grid>

                {/* on mobile this will be shown | HIDES FOR DESKTOP */}
                <Grid item xs={12} sm={3} className={classes.desktop}>
                    <Details title="Income" />
                </Grid>

                {/* ALWAYS displayed last*/}
                <Grid item xs={12} sm={3} className={classes.last}>
                    <Details title="Expense" />
                </Grid>
            </Grid>

            {/* Speechly talk button */}
            <PushToTalkButtonContainer>
                <PushToTalkButton />
                <ErrorPanel />
            </PushToTalkButtonContainer>
        </div>
    )
}

export default App
