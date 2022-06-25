import { Container, Typography, Stack, Grid} from "@mui/material";

export default function PluangSection(){
    return(
        <section>
            <div style={{ backgroundColor: 'var(--pluang-color)', width: '100%'}}>
                <Container maxWidth="xl">
                    <Grid container>
                        <Grid item xs={12} md={8} style={{ padding: '1rem' }}>
                            <Stack style={{ paddingTop: '2rem', paddingBottom: '2rem', color: 'white'}}>
                                <Typography variant="h5" style={{ fontWeight: '400'}}>
                                    Menurut saya, Pluang sudah berfungsi dengan baik dalam memfasilitasi para orang awam untuk dapat berinvestasi pada aset kripto. 
                                    <br/><br/>
                                    Walau begitu, ada beberapa hal yang dapat dikembangkan menurut saya berdasarkan user merupakan orang awam yang baru mengenal kripto.
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </section>
    )
}