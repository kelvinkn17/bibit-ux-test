import styled from "@emotion/styled"
import { Stack } from "@mui/material"

export default function AppTab({ selectedTab, onChange }){

    const AppTabItem = styled.button({
        width: '50%', 
        height: '5rem', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '-1px',
    })

    return(
        <section id="app-tab">
            <Stack direction="row">
                {selectedTab === "pluang" ?
                    <AppTabItem style={{ borderTop: '0.4rem solid var(--pluang-color)', borderRight: '1px solid var(--grey)' }}>
                        <img src="/bibit-ux-test/img/pluang-logo.svg" alt="Pluang" style={{ width: '80%', maxWidth: '14rem'}} />
                    </AppTabItem>
                    :
                    <AppTabItem onClick={() => onChange("pluang")} style={{ borderRight: '1px solid var(--grey)', borderBottom: '1px solid var(--grey)' }}>
                        <img src="/bibit-ux-test/img/pluang-logo.svg" alt="Pluang" style={{ width: '80%', maxWidth: '14rem'}} />
                    </AppTabItem>
                }
                
                {selectedTab === "pintu" ?
                    <AppTabItem style={{ borderTop: '0.4rem solid var(--pintu-color)' }}>
                        <img src="/bibit-ux-test/img/pintu-logo.svg" alt="Pintu" style={{ width: '80%', maxWidth: '14rem'}} />
                    </AppTabItem>
                    :
                    <AppTabItem onClick={() => onChange("pintu")} style={{ borderBottom: '1px solid var(--grey)' }}>
                        <img src="/bibit-ux-test/img/pintu-logo.svg" alt="Pintu" style={{ width: '80%', maxWidth: '14rem'}} />
                    </AppTabItem>
                }
                
            </Stack>
        </section>
    )
}