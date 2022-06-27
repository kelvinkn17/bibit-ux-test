import { Container, Typography, Stack, Grid, useTheme, useMediaQuery } from "@mui/material";
import { useState } from "react";

import 'react-before-after-slider-component/dist/build.css';

export default function PintuSection({ onChangeTab }){
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.up('md'));


    const [caseTab, setCaseTab] = useState(1);
    const onChangeCaseTab = (tab) => {
        setCaseTab(tab);
        document.getElementById("section-tab").scrollIntoView({ behavior: 'smooth' });
    }

    return(
        <section>
            <div style={{ backgroundColor: 'var(--pintu-color)', width: '100%'}}>
                <Container maxWidth="xl">
                    <Grid container>
                        <Grid item xs={12} md={8} style={{ padding: '1rem' }}>
                            <Stack style={{ paddingTop: '2rem', paddingBottom: '2rem', color: 'white'}}>
                                <Typography variant="h6" style={{ fontWeight: '400'}}>
                                    Menurut saya, aplikasi Pintu merupakan aplikasi <i>exchange</i> kripto yang memiliki fitur lebih lengkap dalam bidang kripto dibanding Pluang, koin yang diperjual belikan memiliki utilisasi yang lebih karena dapat ditransfer ke <i>wallet</i> dan <i>exchange</i> lain. Dari fitur-fitur dan tampilannya sendiri lebih ditargetkan ke orang yang memiliki dasar pengetahuan kripto dibandingkan aplikasi Pluang yang ditargetkan untuk orang yang benar-benar awam.
                                    <br/><br/>
                                    Berikut adalah beberapa hal yang menurut saya dapat dikembangkan dalam aplikasi Pintu agar memudahkan pengguna.
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
                            Sama seperti Pluang, untuk <i>flow</i> jual/beli sendiri saya tidak menemukan kekurangan yang berarti karena sudah sangat mudah dan simpel digunakan, saya lebih akan membahas tentang komponen-komponen yang terlibat pada <i>flow ini.</i>
                        </Container>

                        <Container id='pluang-flow-section' maxWidth="xl" style={{ zIndex: 5 }}>
                            <Grid container>
                                {/* 1. GESTURE SWIPE */}
                                <Grid item xs={12} style={{ paddingTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--grey)'}}>
                                    <Stack spacing="1rem" direction="column">
                                        <Stack>
                                            <Typography variant="h4" style={{ fontWeight: '700', marginBottom: '0.4rem' }}>
                                                1. Halaman nominal pembelian/penjualan
                                            </Typography>

                                            <div className="warning-label">
                                                Tidak menampilkan nominal dalam bentuk rupiah dan sulit digunakan
                                            </div>

                                            <Grid container style={{ width: '100%', maxWidth: '78rem', marginInline: 'auto', marginTop: '1rem' }}>
                                                <Grid item xs={12} md={6}>
                                                    <img src="/bibit-ux-test/img/pintu/transaksi1.jpg" alt="" style={{ width: '100%'}} />
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <img src="/bibit-ux-test/img/pintu/transaksi2.jpg" alt="" style={{ width: '100%'}} />
                                                </Grid>
                                            </Grid>

                                            <Stack spacing="1rem" style={{ marginTop: '2rem' }}>
                                                <Stack direction="row" alignItems="center">
                                                    <img src="/bibit-ux-test/img/bullet.svg" alt="" style={{ width: '1rem', marginRight: '0.6rem' }} />
                                                    <Typography variant="body">
                                                        Pengguna harus menerka-nerka nominal penjualan ketika memasukkan dalam nominal rupiah.
                                                    </Typography>
                                                </Stack>

                                                <Stack direction="row" alignItems="center">
                                                    <img src="/bibit-ux-test/img/bullet.svg" alt="" style={{ width: '1rem', marginRight: '0.6rem' }} />
                                                    <Typography variant="body">
                                                        Pengguna harus bolak-balik antar halaman pembelian/penjualan dengan halaman review pembelian/penjualan untuk mengetahui nominal dalam rupiah.
                                                    </Typography>
                                                </Stack>
                                            </Stack>

                                            <div className="solution-label" style={{ marginTop: '2rem' }}>
                                                <img src="/bibit-ux-test/img/lamp.svg" alt="" style={{ width: '10rem', position: 'absolute', opacity: '0.15', right: '-5rem', bottom: 0 }} />

                                                <div>
                                                    <Typography variant="h6">
                                                        Solusi
                                                    </Typography>

                                                    1. Menambahkan detil nominal dalam bentuk rupiah<br/>
                                                    2. Menambahkan <i>shortcut</i> persentase pada penjualan dengan metode nominal rupiah
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
                                                2. Aksi pembelian/penjualan
                                            </Typography>

                                            <div className="warning-label">
                                                Sering gagal setiap harga kripto berubah
                                            </div>

                                            <img src="/bibit-ux-test/img/pintu/konfirmasi.jpg" alt="" className="before-after" style={{ width: '100%', marginInline: 'auto', maxWidth: '60rem' }} />


                                            <Stack spacing="1rem" style={{ marginTop: '2rem' }}>
                                                <Stack direction="row" alignItems="center">
                                                    <img src="/bibit-ux-test/img/bullet.svg" alt="" style={{ width: '1rem', marginRight: '0.6rem' }} />
                                                    <Typography variant="body">
                                                        Pembelian/penjualan kemungkinan besar akan gagal ketika berada di halaman <i>Purchase Review</i> selama lebih dari 5 detik.
                                                    </Typography>
                                                </Stack>
                                            </Stack>

                                            <div className="solution-label" style={{ marginTop: '2rem' }}>
                                                <img src="/bibit-ux-test/img/lamp.svg" alt="" style={{ width: '10rem', position: 'absolute', opacity: '0.15', right: '-5rem', bottom: 0 }} />

                                                <div>
                                                    <Typography variant="h6">
                                                        Solusi
                                                    </Typography>
                                                    Menambahkan <i>auto-update</i> harga pada halaman <i>Purchase Review</i>, hal ini sangat mungkin dilakukan karena aplikasi Pintu sendiri selalu menggunakan <i>Market Order</i> pada setiap pembelian/penjualannya. (Referensi: aplikasi Pluang)
                                                </div>
                                            </div>
                                        </Stack>
                                    </Stack>
                                </Grid>

                                {/* 3. HALAMAN SUKSES*/}
                                <Grid item xs={12} style={{ paddingTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--grey)'}}>
                                    <Stack spacing="1rem" direction="row">
                                        {isTablet &&
                                            <img src="/bibit-ux-test/img/pintu/sukses.jpg" alt="" className="before-after" />
                                        }

                                        <Stack>
                                            <Typography variant="h4" style={{ fontWeight: '700', marginBottom: '0.4rem' }}>
                                                3. Halaman sukses pembelian/penjualan
                                            </Typography>

                                            <div className="warning-label">
                                                Informasi yang minim
                                            </div>

                                            {!isTablet &&
                                                <img src="/bibit-ux-test/img/pintu/sukses.jpg" alt="" className="before-after" />
                                            }

                                            <Stack spacing="1rem" style={{ marginTop: '2rem' }}>
                                                <Stack direction="row" alignItems="center">
                                                    <img src="/bibit-ux-test/img/bullet.svg" alt="" style={{ width: '1rem', marginRight: '0.6rem' }} />
                                                    <Typography variant="body">
                                                        Halaman yang luas masih dapat dipergunakan untuk informasi krusial lainnya.
                                                    </Typography>
                                                </Stack>

                                                <Stack direction="row" alignItems="center">
                                                    <img src="/bibit-ux-test/img/bullet.svg" alt="" style={{ width: '1rem', marginRight: '0.6rem' }} />
                                                    <Typography variant="body">
                                                        Penyusunan kalimat juga tidak benar, contoh: “”Kamu telah menjual Bitcoin 1”, sebaiknya diganti “”Kamu telah menjual 1 Bitcoin”.
                                                    </Typography>
                                                </Stack>
                                            </Stack>

                                            <div className="solution-label" style={{ marginTop: '2rem' }}>
                                                <img src="/bibit-ux-test/img/lamp.svg" alt="" style={{ width: '10rem', position: 'absolute', opacity: '0.15', right: '-5rem', bottom: 0 }} />

                                                <div>
                                                    <Typography variant="h6">
                                                        Solusi
                                                    </Typography>

                                                    Menambahkan informasi yang lebih detil pada halaman ini seperti nominal dalam rupiah dan waktu transaksi. Serta memperbaiki kalimat pesannya.
                                                </div>
                                            </div>
                                        </Stack>
                                    </Stack>
                                </Grid>
                                
                            </Grid>
                        </Container>

                        <div style={{ backgroundColor: 'var(--pintu-color)', width: '100%'}}>
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
                                            <img src="/bibit-ux-test/img/pintu/chart.jpg" alt="" className="before-after" />
                                        }

                                        <Stack>
                                            <Typography variant="h4" style={{ fontWeight: '700', marginBottom: '0.4rem' }}>
                                                1. Warna Grafik dan Nominal Harga
                                            </Typography>

                                            <div className="warning-label">
                                                Tampilan yang <i>misleading</i> dan perbedaan bentuk informasi
                                            </div>

                                            {!isTablet &&
                                                <img src="/bibit-ux-test/img/pintu/chart.jpg" alt="" className="before-after" />
                                            }

                                            <Stack spacing="1rem" style={{ marginTop: '2rem' }}>
                                                <Stack direction="row" alignItems="center">
                                                    <img src="/bibit-ux-test/img/bullet.svg" alt="" style={{ width: '1rem', marginRight: '0.6rem' }} />
                                                    <Typography variant="body">
                                                        Warna grafik yang menyesuaikan warna dasar logo sebaiknya dihilangkan karena penggunaan warna (khususnya hijau dan merah) pada umumnya berkaitan dengan pergerakan harga.
                                                    </Typography>
                                                </Stack>

                                                <Stack direction="row" alignItems="center">
                                                    <img src="/bibit-ux-test/img/bullet.svg" alt="" style={{ width: '1rem', marginRight: '0.6rem' }} />
                                                    <Typography variant="body">
                                                        Mayoritas informasi tentang kripto sekarang baik berita, statistik, sosial media, dan lainnya menggunakan kurs USD pada nominal harga aset kriptonya. Hal ini dapat menimbulkan user ter-disorientasi dengan nominal harga aset kripto yang ada.
                                                    </Typography>
                                                </Stack>
                                            </Stack>

                                            <div className="solution-label" style={{ marginTop: '2rem' }}>
                                                <img src="/bibit-ux-test/img/lamp.svg" alt="" style={{ width: '10rem', position: 'absolute', opacity: '0.15', right: '-5rem', bottom: 0 }} />

                                                <div>
                                                    <Typography variant="h6">
                                                        Solusi
                                                    </Typography>
                                                    1. Mengubah warna <i>chart</i> sesuai dengan pergerakan dalam <i>timeframe</i> yang dipilih, misalkan pada <i>timeframe weekly</i>-nya turun, maka bewarna merah.
                                                    <br/>
                                                    2. Menambahkan nominal USD pada harga koin.
                                                </div>
                                            </div>
                                        </Stack>
                                    </Stack>
                                </Grid>

                                {/* 2. INVESTMENT SUMMARY */}
                                <Grid item xs={12} style={{ paddingTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--grey)'}}>
                                    <Stack direction="row">
                                        <Stack style={{ marginRight: '1rem'}}>
                                            <Typography variant="h4" style={{ fontWeight: '700', marginBottom: '0.4rem' }}>
                                                2. Informasi Ringkasan Investasi
                                            </Typography>

                                            <div className="warning-label">
                                                Tidak jelas fungsinya baik orang awam ataupun orang yang berpengalaman soal kripto.
                                            </div>

                                            {!isTablet &&
                                                <img src="/bibit-ux-test/img/pintu/summary.jpg" alt="" className="before-after" />
                                            }

                                            <Stack spacing="1rem" style={{ marginTop: '2rem' }}>
                                                <Stack direction="row" alignItems="center">
                                                    <img src="/bibit-ux-test/img/bullet.svg" alt="" style={{ width: '1rem', marginRight: '0.6rem' }} />
                                                    <Typography variant="body">
                                                        Nominal average buy price dan average sell price yang menurut saya kurang berguna karena akan tidak relevean dalam jangka waktu yang panjang. Misalkan, untuk apa pengguna mengetahui rata-rata nominal pembelian yang dipengaruhi dari pembeliannya 3 tahun lalu?
                                                    </Typography>
                                                </Stack>

                                                <Stack direction="row" alignItems="center">
                                                    <img src="/bibit-ux-test/img/bullet.svg" alt="" style={{ width: '1rem', marginRight: '0.6rem' }} />
                                                    <Typography variant="body">
                                                        Bagi 3 orang awam yang saya tanyakan perihal fitur ini, mereka bahkan tidak paham maksud fitur ini, dan 2 orang berpengalaman kripto beranggapan fitur ini bersifat aneh karena tidak jelas penggunaannya jika mengikuti pergerakan pasar yang volatil.
                                                    </Typography>
                                                </Stack>

                                                <Stack direction="row" alignItems="center">
                                                    <img src="/bibit-ux-test/img/bullet.svg" alt="" style={{ width: '1rem', marginRight: '0.6rem' }} />
                                                    <Typography variant="body">
                                                        Semua nominal dalam ringkasan investasi hanya bersifat data historikal yang kurang relevan dalam memberikan informasi investasi. Sebaiknya keempat nominal tersebut di perkecil/pindahkan, dan ditambahkan nominal yang lebih relevan seperti nominal gain/loss, nominal aset kripto yang dimiliki, dan average buy price yang ter-reset ketika menjual semua aset kripto tersebut.
                                                    </Typography>
                                                </Stack>
                                            </Stack>

                                            <div className="solution-label" style={{ marginTop: '2rem' }}>
                                                <img src="/bibit-ux-test/img/lamp.svg" alt="" style={{ width: '10rem', position: 'absolute', opacity: '0.15', right: '-5rem', bottom: 0 }} />

                                                <div>
                                                    <Typography variant="h6">
                                                        Solusi
                                                    </Typography>
                                                    Mengganti informasi yang ditampilkan dalam ringkasan investasi dengan informasi yang lebih relevan, dan memindahkan informasi yang ada sekarang ke dalam bagian 'Riwayat Selengkapnya'.
                                                </div>
                                            </div>
                                        </Stack>

                                        {isTablet &&
                                            <img src="/bibit-ux-test/img/pintu/summary.jpg" alt="" className="before-after" />
                                        }
                                    </Stack>
                                </Grid>

                                {/* 3. DCA  */}
                                <Grid item xs={12} style={{ paddingTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--grey)'}}>
                                    <Stack direction="row">
                                        {isTablet &&
                                            <img src="/bibit-ux-test/img/pintu/dca.jpg" alt="" className="before-after" />
                                        }

                                        <Stack style={{ marginLeft: '1rem'}}>
                                            <Typography variant="h4" style={{ fontWeight: '700', marginBottom: '0.4rem' }}>
                                                3. Bagian Nabung Rutin
                                            </Typography>

                                            <div className="warning-label">
                                                Kurang tepat peletakannya
                                            </div>

                                            {!isTablet &&
                                                <img src="/bibit-ux-test/img/pintu/dca.jpg" alt="" className="before-after" />
                                            }

                                            <Stack spacing="1rem" style={{ marginTop: '2rem' }}>
                                                <Stack direction="row" alignItems="center">
                                                    <img src="/bibit-ux-test/img/bullet.svg" alt="" style={{ width: '1rem', marginRight: '0.6rem' }} />
                                                    <Typography variant="body">
                                                        Dari 3 orang awam dan 2 orang berepengalaman kripto yang saya tanyakan, semua menjawab fitur ini akan jarang mereka gunakan. Tetapi bagian ini malah ditempatkan di paling atas setelah bagian <i>chart</i>.
                                                    </Typography>
                                                </Stack>

                                                <Stack direction="row" alignItems="center">
                                                    <img src="/bibit-ux-test/img/bullet.svg" alt="" style={{ width: '1rem', marginRight: '0.6rem' }} />
                                                    <Typography variant="body">
                                                        Kurang tepatnya peletakan ini juga membuat orang yang menggunakan kalkulator ini pada <i>Bear Market</i> saat ini malah mendapatkan kesan yang negatif karena hampir semua hasilnya akan minus puluhan persen.
                                                    </Typography>
                                                </Stack>
                                            </Stack>

                                            <div className="solution-label" style={{ marginTop: '2rem' }}>
                                                <img src="/bibit-ux-test/img/lamp.svg" alt="" style={{ width: '10rem', position: 'absolute', opacity: '0.15', right: '-5rem', bottom: 0 }} />

                                                <div>
                                                    <Typography variant="h6">
                                                        Solusi
                                                    </Typography>
                                                    Memindahkan bagian ini ke bawah bagian Statistik Pasar
                                                </div>
                                            </div>
                                        </Stack>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Container>

                        <div style={{ backgroundColor: 'var(--pintu-color)', width: '100%'}}>
                            <Container maxWidth="xl">
                                <Stack alignItems="center" style={{ width: '100%', paddingBottom: '2rem', paddingTop: '2rem' }}>
                                    <Typography variant="h6" style={{ color: 'white' }}>
                                        Kembali ke Case Pluang
                                    </Typography>
                                    <button onClick={() => onChangeTab('pluang')} className="tab-btn tab-btn-active" style={{ fontSize: '1rem', padding: '0.6rem 1rem'}}>
                                        Case Pluang
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