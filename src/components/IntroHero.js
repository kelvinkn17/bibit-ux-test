import { Container, Grid, Typography, Stack, useTheme, useMediaQuery } from '@mui/material';

export default function IntroHero(){
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.up('md'));

    return(
        <section id="intro" style={{ display: 'flex', position: 'relative', alignItems: 'center', minHeight: '68vh', backgroundColor: '#FAFAFF'}}>
            <Container maxWidth="xl">
                <Grid container spacing="1rem" style={{ padding: '2rem' }}>
                    <Grid item xs={12} md={8} lg={8}>
                        <Stack style={{ marginBottom: '6rem' }}>
                            <Typography variant="h4" className="poppins-font" style={{ color: 'var(--primary-dark)', fontWeight: '700' }}>
                                UX RESEARCH
                            </Typography>
                            <Typography variant="h6" style={{ fontWeight: '400', opacity: 0.6, marginTop: '-0.6rem'}}>
                                by Kelvin Adithya
                            </Typography>

                            {!isTablet &&
                                <object type="image/svg+xml" data="/bibit-ux-test/img/rocket_animated.svg" style={{ width: '100%' , maxWidth: '25rem', marginInline: 'auto', marginBottom: '-4rem', marginTop: '2rem'}}>
                                    Rocket
                                </object>
                            }

                            <Typography variant="h2" style={{ color: 'var(--primary)', fontWeight: '700', marginTop: '4rem' }}>
                                Bibit's UX Design Test
                            </Typography>
                            <Typography variant="body" style={{ marginTop: '0.6em' }}>
                                Berikut adalah jawaban saya atas tes untuk posisi UX Designer - Crypto, membahas
                                tentang berbagai pain point yang ada di aplikasi Pluang dan Pintu.
                                <br/><br/>
                                Solusi-solusi yang diberikan memiliki dasar bahwa user adalah orang awam perihal
                                dunia kripto.
                            </Typography>
                        </Stack>
                    </Grid>

                    {isTablet &&
                        <Grid item xs={12} md={4} lg={4}>
                            <Stack alignItems="center" justifyContent="center" style={{ width: '100%', height: '100%' }}>
                                {/* <img src="/img/rocket.svg" alt="" style={{ width: '100%' , maxWidth: '25rem'}}/> */}
                                <object type="image/svg+xml" data="/bibit-ux-test/img/rocket_animated.svg" style={{ width: '100%' , maxWidth: '25rem'}}>
                                    Rocket
                                </object>
                            </Stack>
                        </Grid>
                    }
                </Grid>
            </Container>

            <div className="wave-1" style={{ backgroundImage: "url(/bibit-ux-test/img/wave-1.svg)" }} />
        </section>
    )
}

