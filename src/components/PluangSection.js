import { Container, Typography, Stack, Grid, useTheme, useMediaQuery } from "@mui/material";
import { useState } from "react";

import 'react-before-after-slider-component/dist/build.css';

export default function PluangSection({ onChangeTab }){
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.up('md'));

    // jumlah penjualan
    const [solusiPenjualanTab, setSolusiPenjualanTab] = useState(1);

    const onChangeSolusiPenjualanTab = (tab) => {
        setSolusiPenjualanTab(tab);
    }

    const [caseTab, setCaseTab] = useState(1);
    const onChangeCaseTab = (tab) => {
        setCaseTab(tab);
        document.getElementById("section-tab").scrollIntoView({ behavior: 'smooth' });
    }

    return(
        <section>
            <div style={{ backgroundColor: 'var(--pluang-color)', width: '100%'}}>
                <Container maxWidth="xl">
                    <Grid container>
                        <Grid item xs={12} md={8} style={{ padding: '1rem' }}>
                            <Stack style={{ paddingTop: '2rem', paddingBottom: '2rem', color: 'white'}}>
                                <Typography variant="h6" style={{ fontWeight: '400'}}>
                                    Menurut saya, Pluang sudah berfungsi dengan baik dalam memfasilitasi para orang awam untuk dapat berinvestasi pada aset kripto. Dibandingkan aplikasi Pintu, tampilan dan <i>flow</i> aplikasi lebih simpel, <i>clean</i>, dan mudah digunakan.
                                    <br/><br/>
                                    Walau begitu, ada beberapa hal yang dapat dikembangkan menurut saya berdasarkan user merupakan orang awam yang baru mengenal kripto.
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                    
                    <Stack alignItems="center" style={{ width: '100%', paddingBottom: '2rem' }}>
                        <Stack id="section-tab" alignItems="center" direction="row" spacing="0.5rem" style={{ borderRadius: '100px', padding: '0.4rem', border: '1px solid var(--grey)', width: '100%', marginTop: '0.5rem', maxWidth: '30rem', backgroundColor: 'white' }}>
                            <button onClick={() => onChangeCaseTab(1)} className={`tab-btn ${caseTab === 1 && "tab-btn-active"}`} style={{ width: '50%', border: '1px solid var(--grey)', textAlign: 'center' }}>
                                Flow Jual Beli
                            </button>
                            <button onClick={() => onChangeCaseTab(2)} className={`tab-btn ${caseTab === 2 && "tab-btn-active"}`} style={{ width: '50%', border: '1px solid var(--grey)', textAlign: 'center' }}>
                                Detil Kripto
                            </button>
                        </Stack>
                    </Stack>
                </Container>
            </div>

            <div style={{ position: 'relative' }}>
                <div className="polka-bg" />

                {/* FLOW JUAL BELI */}
                {caseTab === 1 &&
                    <>
                        <Container maxWidth="lg" style={{ paddingTop: '4rem', textAlign: 'center' }}>
                            Untuk <i>flow</i> jual/beli sendiri saya tidak menemukan kekurangan yang berarti karena sudah sangat mudah dan simpel digunakan, saya lebih akan membahas tentang komponen-komponen yang terlibat pada <i>flow ini.</i>
                        </Container>

                        <Container id='pluang-flow-section' maxWidth="xl" style={{ zIndex: 5 }}>
                            <Grid container>
                                {/* 1. GESTURE SWIPE */}
                                <Grid item xs={12} style={{ paddingTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--grey)'}}>
                                    <Stack spacing="1rem" direction="row">
                                        {isTablet &&
                                            <img src="/bibit-ux-test/img/pluang/swipeup.jpg" alt="" className="before-after" />
                                        }

                                        <Stack>
                                            <Typography variant="h4" style={{ fontWeight: '700', marginBottom: '0.4rem' }}>
                                                1. Konfirmasi penyelesaian <br/> transaksi jual beli
                                            </Typography>

                                            <div className="warning-label">
                                                Rentan salah dan <i>not undoable</i>
                                            </div>

                                            {!isTablet &&
                                                <img src="/bibit-ux-test/img/pluang/swipeup.jpg" alt="" className="before-after" />
                                            }

                                            <Stack spacing="1rem" style={{ marginTop: '2rem' }}>
                                                <Stack direction="row" alignItems="center">
                                                    <img src="/bibit-ux-test/img/bullet.svg" alt="" style={{ width: '1rem', marginRight: '0.6rem' }} />
                                                    <Typography variant="body">
                                                        <i>Gesture swipe</i> keatas pada konfirmasi transaksi, ketika hanya digeser sedikit saja keatas, maka tidak bisa dibatalkan lagi. 
                                                    </Typography>
                                                </Stack>

                                                <Stack direction="row" alignItems="center">
                                                    <img src="/bibit-ux-test/img/bullet.svg" alt="" style={{ width: '1rem', marginRight: '0.6rem' }} />
                                                    <Typography variant="body">
                                                        Menurut riset singkat yang saya lakukan dengan 3 orang user relevan (orang awam kripto), semua menyimpulkan <i>gesture</i> tersebut bersifat asing/aneh.
                                                    </Typography>
                                                </Stack>

                                                <Stack direction="row" alignItems="center">
                                                    <img src="/bibit-ux-test/img/bullet.svg" alt="" style={{ width: '1rem', marginRight: '0.6rem' }} />
                                                    <Typography variant="body">
                                                        Letak dan <i>gesture</i> yang sangat berdekatan dengan <i>Home Bar</i> pada <i>iPhone</i> yang dapat membuat pengguna rentan melakukan konfirmasi yang tidak disengaja.
                                                    </Typography>
                                                </Stack>
                                            </Stack>

                                            <div className="solution-label" style={{ marginTop: '2rem' }}>
                                                <img src="/bibit-ux-test/img/lamp.svg" alt="" style={{ width: '10rem', position: 'absolute', opacity: '0.15', right: '-5rem', bottom: 0 }} />

                                                <div>
                                                    <Typography variant="h6">
                                                        Solusi
                                                    </Typography>
                                                    Aksi konfirmasi diganti menggunakan <i>button</i>
                                                </div>
                                            </div>
                                        </Stack>
                                    </Stack>
                                </Grid>

                                {/* 2. PILIHAN TIPE ORDER */}
                                <Grid item xs={12} style={{ paddingTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--grey)'}}>
                                    <Stack direction="row">
                                        <Stack style={{ marginRight: '1rem'}}>
                                            <Typography variant="h4" style={{ fontWeight: '700', marginBottom: '0.4rem' }}>
                                                2. Pilihan tipe order (Limit Order)
                                            </Typography>

                                            <div className="warning-label">
                                                Memiliki ketidak jelasan informasi
                                            </div>

                                            {!isTablet &&
                                                <img src="/bibit-ux-test/img/pluang/limitorder.jpg" alt="" className="before-after" />
                                            }

                                            <Stack spacing="1rem" style={{ marginTop: '2rem' }}>
                                                <Stack direction="row" alignItems="center">
                                                    <img src="/bibit-ux-test/img/bullet.svg" alt="" style={{ width: '1rem', marginRight: '0.6rem' }} />
                                                    <Typography variant="body">
                                                        Tipe pemesanan <i>Limit Order</i> hanya di <i>disable</i> begitu saja tanpa informasi yang jelas, 
                                                    </Typography>
                                                </Stack>
                                            </Stack>

                                            <div className="solution-label" style={{ marginTop: '2rem' }}>
                                                <img src="/bibit-ux-test/img/lamp.svg" alt="" style={{ width: '10rem', position: 'absolute', opacity: '0.15', right: '-5rem', bottom: 0 }} />

                                                <div>
                                                    <Typography variant="h6">
                                                        Solusi
                                                    </Typography>
                                                    Sebaiknya disamakan dengan penjelasan tipe pemesanan lainnya yang memiliki label 'Tipe pesanan ini segera hadir'
                                                </div>
                                            </div>
                                        </Stack>

                                        {isTablet &&
                                            <img src="/bibit-ux-test/img/pluang/limitorder.jpg" alt="" className="before-after" />
                                        }
                                    </Stack>
                                </Grid>

                                {/* 3. JUMLAH PENJUALAN */}
                                <Grid item xs={12} style={{ paddingTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--grey)'}}>
                                    <Stack direction="row">
                                        {isTablet &&
                                            <Stack alignItems="center" style={{ width: '100%', maxWidth: '38rem', minWidth: '40%' }} >
                                                {solusiPenjualanTab === 1 &&
                                                    <img src="/bibit-ux-test/img/pluang/jualamount1.jpg" alt="" className="before-after" />
                                                }

                                                {solusiPenjualanTab === 2 &&
                                                    <img src="/bibit-ux-test/img/pluang/jualamount2.jpg" alt="" className="before-after" />
                                                }
                                                
                                                <Stack alignItems="center" direction="row" spacing="0.5rem" style={{ borderRadius: '100px', padding: '0.4rem', border: '1px solid var(--grey)', width: '100%', marginTop: '0.5rem' }}>
                                                    <button onClick={() => onChangeSolusiPenjualanTab(1)} className={`tab-btn ${solusiPenjualanTab === 1 && "tab-btn-active"}`} style={{ width: '50%', border: '1px solid var(--grey)', textAlign: 'center' }}>
                                                        Solusi 1
                                                    </button>
                                                    <button onClick={() => onChangeSolusiPenjualanTab(2)} className={`tab-btn ${solusiPenjualanTab === 2 && "tab-btn-active"}`} style={{ width: '50%', border: '1px solid var(--grey)', textAlign: 'center' }}>
                                                        Solusi 2
                                                    </button>
                                                </Stack>
                                            </Stack>
                                        }

                                        <Stack style={{ marginLeft: '1rem'}}>
                                            <Typography variant="h4" style={{ fontWeight: '700', marginBottom: '0.4rem' }}>
                                                3. Jumlah Penjualan
                                            </Typography>

                                            <div className="warning-label">
                                                Sangat sulit untuk mendapatkan target jumlah nominal rupiah yang sesuai
                                            </div>

                                            {!isTablet &&
                                                <Stack alignItems="center" style={{ width: '100%', maxWidth: '38rem', marginInline: 'auto' }} >
                                                    {solusiPenjualanTab === 1 &&
                                                        <img src="/bibit-ux-test/img/pluang/jualamount1.jpg" alt="" className="before-after" />
                                                    }

                                                    {solusiPenjualanTab === 2 &&
                                                        <img src="/bibit-ux-test/img/pluang/jualamount2.jpg" alt="" className="before-after" />
                                                    }
                                                    
                                                    <Stack alignItems="center" direction="row" spacing="0.5rem" style={{ borderRadius: '100px', padding: '0.4rem', border: '1px solid var(--grey)', width: '100%', marginTop: '0.5rem', maxWidth: '20rem' }}>
                                                        <button onClick={() => onChangeSolusiPenjualanTab(1)} className={`tab-btn ${solusiPenjualanTab === 1 && "tab-btn-active"}`} style={{ width: '50%', border: '1px solid var(--grey)', textAlign: 'center' }}>
                                                            Solusi 1
                                                        </button>
                                                        <button onClick={() => onChangeSolusiPenjualanTab(2)} className={`tab-btn ${solusiPenjualanTab === 2 && "tab-btn-active"}`} style={{ width: '50%', border: '1px solid var(--grey)', textAlign: 'center' }}>
                                                            Solusi 2
                                                        </button>
                                                    </Stack>
                                                </Stack>
                                            }

                                            <Stack spacing="1rem" style={{ marginTop: '2rem' }}>
                                                <Stack direction="row" alignItems="center">
                                                    <img src="/bibit-ux-test/img/bullet.svg" alt="" style={{ width: '1rem', marginRight: '0.6rem' }} />
                                                    <Typography variant="body">
                                                        Tidak seperti saham yang dapat kita atur dalam hitungan lot, aset kripto banyak  diperjual belikan dalam nominal desimal yang sangat kecil (lebih dari 3 desimal). 
                                                    </Typography>
                                                </Stack>

                                                <Stack direction="row" alignItems="center">
                                                    <img src="/bibit-ux-test/img/bullet.svg" alt="" style={{ width: '1rem', marginRight: '0.6rem' }} />
                                                    <Typography variant="body">
                                                        Hal ini membuat user harus menerka-nerka jumlah kripto yang perlu dijual untuk mencapai nominal rupiah tertentu.
                                                    </Typography>
                                                </Stack>
                                            </Stack>

                                            <div className="solution-label" style={{ marginTop: '2rem' }}>
                                                <img src="/bibit-ux-test/img/lamp.svg" alt="" style={{ width: '10rem', position: 'absolute', opacity: '0.15', right: '-5rem', bottom: 0 }} />

                                                <div>
                                                    <Typography variant="h6">
                                                        Solusi
                                                    </Typography>
                                                    1. Menambahkan slider yang mengatur jumlah nominal koin agar user hanya tinggal menggeser slider saja untuk mendapatkan target nominal penjualan yang sesuai
                                                    <br/><br/>
                                                    2. Menjadikan jumlah nominal rupiah menjadi form juga agar user tinggal memasukkan nominal disitu saja, lalu jumlah koin kriptonya akan menyesuaikan.
                                                    Tetapi perlu diperhatikan bahwa solusi ini perlu pengembangkan yang lebih lanjut karena. hanya dapat dilakukan dengan limit order untuk mendapatkan hasil yang akurat. Jikapun menggunakan fitur market order yang ada sekarang, dapat menimbulkan ketidakpastian nominal penjualan aset kripto.
                                                </div>
                                            </div>
                                        </Stack>
                                    </Stack>
                                </Grid>
                                
                            </Grid>
                        </Container>

                        <div style={{ backgroundColor: 'var(--pluang-color)', width: '100%'}}>
                            <Container maxWidth="xl">
                                <Stack alignItems="center" style={{ width: '100%', paddingBottom: '2rem', paddingTop: '2rem' }}>
                                    <Typography variant="h6" style={{ color: 'white' }}>
                                        Lanjut ke halaman detil kripto
                                    </Typography>
                                    <button onClick={() => onChangeCaseTab(2)} className="tab-btn tab-btn-active" style={{ fontSize: '1rem', padding: '0.6rem 1rem'}}>
                                        Detil Kripto
                                    </button>
                                </Stack>
                            </Container>
                        </div>
                    </>
                }

                {/* PAGE DETIL KRIPTO */}
                {caseTab === 2 &&
                    <>
                        <Container id="pluang-detail-section" maxWidth="xl" style={{ zIndex: 5 }}>
                            <Grid container>
                                {/* 1. TIMEFRAME */}
                                <Grid item xs={12} style={{ paddingTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--grey)'}}>
                                    <Stack spacing="1rem" direction="row">

                                        {isTablet &&
                                            <img src="/bibit-ux-test/img/pluang/timeframe.jpg" alt="" className="before-after" />
                                        }

                                        <Stack>
                                            <Typography variant="h4" style={{ fontWeight: '700', marginBottom: '0.4rem' }}>
                                                1. Harga berbeda pada tiap timeframe
                                            </Typography>

                                            <div className="warning-label">
                                                Inkonsistensi informasi dan merusak estetika
                                            </div>

                                            {!isTablet &&
                                                <img src="/bibit-ux-test/img/pluang/timeframe.jpg" alt="" className="before-after" />
                                            }

                                            <Stack spacing="1rem" style={{ marginTop: '2rem' }}>
                                                <Stack direction="row" alignItems="center">
                                                    <img src="/bibit-ux-test/img/bullet.svg" alt="" style={{ width: '1rem', marginRight: '0.6rem' }} />
                                                    <Typography variant="body">
                                                        Ketika mengubah <i>timeframe chart</i> pada halaman detil kripto, semuanya menampikan harga yang berbeda-beda yang dapat menimbulkan pengguna awam berpikiran pemilihan <i>timeframe</i> tersebut mempengaruhi aksi jual beli. 
                                                    </Typography>
                                                </Stack>

                                                <Stack direction="row" alignItems="center">
                                                    <img src="/bibit-ux-test/img/bullet.svg" alt="" style={{ width: '1rem', marginRight: '0.6rem' }} />
                                                    <Typography variant="body">
                                                        Hal ini dapat mempengaruhi segi kredibilas Pluang karena harga merupakan hal yang sangat amat sensitif dengan suatu <i>exchange</i>.
                                                    </Typography>
                                                </Stack>

                                                <Stack direction="row" alignItems="center">
                                                    <img src="/bibit-ux-test/img/bullet.svg" alt="" style={{ width: '1rem', marginRight: '0.6rem' }} />
                                                    <Typography variant="body">
                                                        Ketika <i>timeframe</i> diganti, terjadi <i>blinking</i> pada hampir keseluruhan layar karena terjadinya <i>update</i> pada komponen yang tidak perlu di <i>update</i>, seharusnya bagian <i>chart</i> saja yang ter-<i>update</i>.
                                                    </Typography>
                                                </Stack>
                                            </Stack>

                                            <div className="solution-label" style={{ marginTop: '2rem' }}>
                                                <img src="/bibit-ux-test/img/lamp.svg" alt="" style={{ width: '10rem', position: 'absolute', opacity: '0.15', right: '-5rem', bottom: 0 }} />

                                                <div>
                                                    <Typography variant="h6">
                                                        Solusi
                                                    </Typography>
                                                    Hanya me-<i>render/update</i> ulang bagian <i>chart</i> saja ketika mengganti <i>timeframe</i>.
                                                </div>
                                            </div>
                                        </Stack>
                                    </Stack>
                                </Grid>

                                {/* 2. NOMINAL HARGA USD */}
                                <Grid item xs={12} style={{ paddingTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--grey)'}}>
                                    <Stack direction="row">
                                        <Stack style={{ marginRight: '1rem'}}>
                                            <Typography variant="h4" style={{ fontWeight: '700', marginBottom: '0.4rem' }}>
                                                2. Informasi nominal harga hanya dalam Rupiah
                                            </Typography>

                                            <div className="warning-label">
                                                Perbedaan bentuk informasi
                                            </div>

                                            {!isTablet &&
                                                <img src="/bibit-ux-test/img/pluang/usd.jpg" alt="" className="before-after" />
                                            }

                                            <Stack spacing="1rem" style={{ marginTop: '2rem' }}>
                                                <Stack direction="row" alignItems="center">
                                                    <img src="/bibit-ux-test/img/bullet.svg" alt="" style={{ width: '1rem', marginRight: '0.6rem' }} />
                                                    <Typography variant="body">
                                                        Mayoritas informasi tentang kripto sekarang baik berita, statistik, sosial media, dan lainnya menggunakan kurs USD pada nominal harga aset kriptonya.
                                                    </Typography>
                                                </Stack>

                                                <Stack direction="row" alignItems="center">
                                                    <img src="/bibit-ux-test/img/bullet.svg" alt="" style={{ width: '1rem', marginRight: '0.6rem' }} />
                                                    <Typography variant="body">
                                                        Hal ini dapat menimbulkan user ter-disorientasi dengan nominal harga aset kripto yang ada.
                                                    </Typography>
                                                </Stack>
                                            </Stack>

                                            <div className="solution-label" style={{ marginTop: '2rem' }}>
                                                <img src="/bibit-ux-test/img/lamp.svg" alt="" style={{ width: '10rem', position: 'absolute', opacity: '0.15', right: '-5rem', bottom: 0 }} />

                                                <div>
                                                    <Typography variant="h6">
                                                        Solusi
                                                    </Typography>
                                                    Menambahkan nominal harga dalam kurs USD
                                                </div>
                                            </div>
                                        </Stack>

                                        {isTablet &&
                                            <img src="/bibit-ux-test/img/pluang/usd.jpg" alt="" className="before-after" />
                                        }
                                    </Stack>
                                </Grid>

                                {/* 3. INFORMASI KRIPTO SEDIKIT */}
                                <Grid item xs={12} style={{ paddingTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--grey)'}}>
                                    <Stack direction="row">
                                        {isTablet &&
                                            <img src="/bibit-ux-test/img/pluang/linking.jpg" alt="" className="before-after" />
                                        }

                                        <Stack style={{ marginLeft: '1rem'}}>
                                            <Typography variant="h4" style={{ fontWeight: '700', marginBottom: '0.4rem' }}>
                                                3. Informasi kripto yang sangat sedikit
                                            </Typography>

                                            <div className="warning-label">
                                                Pengguna harus mencari informasi lebih lanjut sendiri secara manual
                                            </div>

                                            {!isTablet &&
                                                <img src="/bibit-ux-test/img/pluang/linking.jpg" alt="" className="before-after" />
                                            }

                                            <Stack spacing="1rem" style={{ marginTop: '2rem' }}>
                                                <Stack direction="row" alignItems="center">
                                                    <img src="/bibit-ux-test/img/bullet.svg" alt="" style={{ width: '1rem', marginRight: '0.6rem' }} />
                                                    <Typography variant="body">
                                                        Halaman detil kripto hanya menampilkan harga dan sedikit hal latar belakang tentang koin tersebut.
                                                    </Typography>
                                                </Stack>
                                            </Stack>

                                            <div className="solution-label" style={{ marginTop: '2rem' }}>
                                                <img src="/bibit-ux-test/img/lamp.svg" alt="" style={{ width: '10rem', position: 'absolute', opacity: '0.15', right: '-5rem', bottom: 0 }} />

                                                <div>
                                                    <Typography variant="h6">
                                                        Solusi
                                                    </Typography>
                                                    Supaya dapat tetap menjaga simplisitas dan kemudahan pengembangan aplikasi, penambahan komponen tautan dapat dilakukan agar pengguna dapat mengakses web/sosial kripto tersebut dengan mudah. Jika komponen tautan di klik, akan muncul daftar <i>link</i> untuk aset kripto tersebut.
                                                    <br/><br/>
                                                    Terlebih Pluang menggunakan informasi dari API CoinMarketCap yang dapat dilihat dari kesamaan deskripsi tiap koinnya. API CoinMarketCap sendiri telah menyediakan API untuk semua <i>linking</i> pada setiap aset kriptonya.
                                                </div>
                                            </div>
                                        </Stack>
                                    </Stack>
                                </Grid>

                                {/* 4. LABA RUGI ANEH */}
                                <Grid item xs={12} style={{ paddingTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--grey)'}}>
                                    <Stack direction="row">
                                        <Stack style={{ marginRight: '1rem'}}>
                                            <Typography variant="h4" style={{ fontWeight: '700', marginBottom: '0.4rem' }}>
                                                4. Persentase laba rugi tidak relevan ketika ada bonus.
                                            </Typography>

                                            <div className="warning-label">
                                                Informasi yang ambigu dan salah.
                                            </div>

                                            {!isTablet &&
                                                <img src="/bibit-ux-test/img/pluang/bonus.jpg" alt="" className="before-after" />
                                            }

                                            <Stack spacing="1rem" style={{ marginTop: '2rem' }}>
                                                <Stack direction="row" alignItems="center">
                                                    <img src="/bibit-ux-test/img/bullet.svg" alt="" style={{ width: '1rem', marginRight: '0.6rem' }} />
                                                    <Typography variant="body">
                                                    Ketika user mendapatkan reward bitcoin saat pendaftaran awal, persentase laba rugi menjadi sangat besar.
                                                    </Typography>
                                                </Stack>

                                                <Stack direction="row" alignItems="center">
                                                    <img src="/bibit-ux-test/img/bullet.svg" alt="" style={{ width: '1rem', marginRight: '0.6rem' }} />
                                                    <Typography variant="body">
                                                        Hal ini dapat menimbulkan salah tafsir bagi pengguna.
                                                    </Typography>
                                                </Stack>
                                            </Stack>

                                            <div className="solution-label" style={{ marginTop: '2rem' }}>
                                                <img src="/bibit-ux-test/img/lamp.svg" alt="" style={{ width: '10rem', position: 'absolute', opacity: '0.15', right: '-5rem', bottom: 0 }} />

                                                <div>
                                                    <Typography variant="h6">
                                                        Solusi
                                                    </Typography>
                                                    Membenarkan operasi perhitungan persentase laba rugi seperti layaknya, menganggap bonus sebagai pembelian pada tanggal diambilnya.
                                                </div>
                                            </div>
                                        </Stack>

                                        {isTablet &&
                                            <img src="/bibit-ux-test/img/pluang/bonus.jpg" alt="" className="before-after" />
                                        }
                                    </Stack>
                                </Grid>
                                
                            </Grid>
                        </Container>

                        <div style={{ backgroundColor: 'var(--pluang-color)', width: '100%'}}>
                            <Container maxWidth="xl">
                                <Stack alignItems="center" style={{ width: '100%', paddingBottom: '2rem', paddingTop: '2rem' }}>
                                    <Typography variant="h6" style={{ color: 'white' }}>
                                        Lanjut ke Case Pintu
                                    </Typography>
                                    <button onClick={() => onChangeTab('pintu')} className="tab-btn tab-btn-active" style={{ fontSize: '1rem', padding: '0.6rem 1rem'}}>
                                        Case Pintu
                                    </button>
                                </Stack>
                            </Container>
                        </div>
                    </>
                }
            </div>
        </section>
    )
}