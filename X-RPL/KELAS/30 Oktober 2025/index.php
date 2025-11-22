<?php 

    $hasilZodiak1 = "";

    if (isset($_POST['kirim'])) {
        $tanggal = $_POST['tanggal'];
        $bulan = $_POST['bulan'];

        $hasilZodiak1 = zodiak($bulan, $tanggal);
    }

    function zodiak($bulan, $tanggal) {
        if ($tanggal > 0 && $tanggal < 32 && $bulan > 0 && $bulan < 13) {
            if ($bulan == 1) {
                if ($tanggal > 0 && $tanggal < 20) {
                    return "Zodiak anda: Capricorn";
                } else {
                    return "Zodiak anda: Aquarius";
                }
            }

            if ($bulan == 2) {
                if ($tanggal > 0 && $tanggal < 20) {
                    return "Zodiak anda: Aquarius";
                } else if ($tanggal > 28) {
                    return "Bulan Februari tidak memiliki tanggal $tanggal !";
                }
                else {
                    return "Zodiak anda: Pisces";
                }
            }

            if ($bulan == 3) {
                if ($tanggal > 0 && $tanggal < 21) {
                    return "Zodiak anda: Pisces";
                } else {
                    return "Zodiak anda: Aries";
                }
            }

            if ($bulan == 4) {
                if ($tanggal > 0 && $tanggal < 20) {
                    return "Zodiak anda: Aries";
                } else {
                    return "Zodiak anda: Taurus";
                }
            }

            if ($bulan == 5) {
                if ($tanggal > 0 && $tanggal < 21) {
                    return "Zodiak anda: Taurus";
                } else {
                    return "Zodiak anda: Gemini";
                }
            }

            if ($bulan == 6) {
                if ($tanggal > 0 && $tanggal < 21) {
                    return "Zodiak anda: Gemini";
                } else {
                    return "Zodiak anda: Cancer";
                }
            }

            if ($bulan == 7) {
                if ($tanggal > 0 && $tanggal < 23) {
                    return "Zodiak anda: Cancer";
                } else {
                    return "Zodiak anda: Leo";
                }
            }

            if ($bulan == 8) {
                if ($tanggal > 0 && $tanggal < 23) {
                    return "Zodiak anda: Leo";
                } else {
                    echo "Zodiak anda: Virgo";
                }
            }

            if ($bulan == 9) {
                if ($tanggal > 0 && $tanggal < 23) {
                    return "Zodiak anda: Virgo;";
                } else {
                    return "Zodiak anda: Libra";
                }
            }

            if ($bulan == 10) {
                if ($tanggal > 0 && $tanggal < 23) {
                    return "Zodiak anda: Libra";
                } else {
                    return "Zodiak anda: Scorpio";
                }
            }

            if ($bulan == 11) {
                if ($tanggal > 0 && $tanggal < 22) {
                    return "Zodiak anda: Scorpio";
                } else {
                    return "Zodiak anda: Sagittarius";
                }
            }

            if ($bulan == 12) {
                if ($tanggal > 0 && $tanggal < 22) {
                    return "Zodiak anda: Sagittarius";
                } else {
                    return "Zodiak anda: Capricorn";
                }
            }
        } else {
            return "tanggal atau bulan salah !";
        }
    }

    $hasilKalkulasi = "";

    if (isset($_POST['hitung'])) {
        $hitung = $_POST['hitung'];
        $a = $_POST['a'];
        $b = $_POST['b'];

        if ($hitung == 'jumlahkan') {
            $hasilKalkulasi = 'Penjumlahan dari ' . $a . ' + ' . $b . ' adalah: <br>' . $a + $b;
        }
        if ($hitung == 'kurangi') {
            $hasilKalkulasi = 'Pengurangan dari ' . $a . ' - ' . $b . ' adalah: <br>' . $a - $b;
        }
        if ($hitung == 'kalikan') {
            $hasilKalkulasi = 'Perkalian dari ' . $a . ' * ' . $b . ' adalah: <br>' . $a * $b;
        }
        if ($hitung == 'bagikan') {
            $hasilKalkulasi = 'Pembagian dari ' . $a . ' / ' . $b . ' adalah: <br>' . $a / $b;
        }
    }

    $hasilZodiak = "";
    $keterangan = "";

    if (isset($_POST['cekzodiak'])) {
        $tanggal = $_POST['tugas-tanggal'];
        $bulan = $_POST['tugas-bulan'];

        $hasilZodiak = cekZodiak($bulan, $tanggal);
        $keterangan = cekKeterangan($bulan, $tanggal);
    }

    function cekZodiak($bulan, $tanggal) {
        if ($bulan > 0 && $bulan < 13 && $tanggal > 0 && $tanggal < 32) {

            if ($bulan == 1) {
                if ($tanggal > 0 && $tanggal < 20) {
                    return "Zodiak anda: Capricorn";
                } else {
                    return "Zodiak anda: Aquarius";
                }
            }

            if ($bulan == 2) {
                if ($tanggal > 0 && $tanggal < 20) {
                    return "Zodiak anda: Aquarius";
                } else if ($tanggal > 28) {
                    return "Bulan Februari tidak memiliki tanggal $tanggal !";
                }
                else {
                    return "Zodiak anda: Pisces";
                }
            }

            if ($bulan == 3) {
                if ($tanggal > 0 && $tanggal < 21) {
                    return "Zodiak anda: Pisces";
                } else {
                    return "Zodiak anda: Aries";
                }
            }

            if ($bulan == 4) {
                if ($tanggal > 0 && $tanggal < 20) {
                    return "Zodiak anda: Aries";
                } else {
                    return "Zodiak anda: Taurus";
                }
            }

            if ($bulan == 5) {
                if ($tanggal > 0 && $tanggal < 21) {
                    return "Zodiak anda: Taurus";
                } else {
                    return "Zodiak anda: Gemini";
                }
            }

            if ($bulan == 6) {
                if ($tanggal > 0 && $tanggal < 21) {
                    return "Zodiak anda: Gemini";
                } else {
                    return "Zodiak anda: Cancer";
                }
            }

            if ($bulan == 7) {
                if ($tanggal > 0 && $tanggal < 23) {
                    return "Zodiak anda: Cancer";
                } else {
                    return "Zodiak anda: Leo";
                }
            }

            if ($bulan == 8) {
                if ($tanggal > 0 && $tanggal < 23) {
                    return "Zodiak anda: Leo";
                } else {
                    return "Zodiak anda: Virgo";
                }
            }

            if ($bulan == 9) {
                if ($tanggal > 0 && $tanggal < 23) {
                    return "Zodiak anda: Virgo;";
                } else {
                    return "Zodiak anda: Libra";
                }
            }

            if ($bulan == 10) {
                if ($tanggal > 0 && $tanggal < 23) {
                    return "Zodiak anda: Libra";
                } else {
                    return "Zodiak anda: Scorpio";
                }
            }

            if ($bulan == 11) {
                if ($tanggal > 0 && $tanggal < 22) {
                    return "Zodiak anda: Scorpio";
                } else {
                    return "Zodiak anda: Sagittarius";
                }
            }

            if ($bulan == 12) {
                if ($tanggal > 0 && $tanggal < 22) {
                    return "Zodiak anda: Sagittarius";
                } else {
                    return "Zodiak anda: Capricorn";
                }
            }
        } else {
            return "<span style='color:red;'>Bulan atau Tanggal tidak valid !</span>";
        }
    }

    function cekKeterangan($bulan, $tanggal) {
        if ($bulan > 0 && $bulan < 13 && $tanggal > 0 && $tanggal < 32) {

            if ($bulan == 1) {
                if ($tanggal > 0 && $tanggal < 20) {
                    return "Anda berjiwa pemimpin, penuh semangat, dan sukaAries berjiwa pemimpin, penuh semangat, dan suka tantangan. Mereka spontan, energik, dan cepat mengambil keputusan, tapi terkadang terlalu impulsif dan mudah marah. Meski keras kepala, Aries punya keberanian besar dan selalu ingin jadi yang pertama dalam segala hal.";
                } else {
                    return "Aquarius unik, berpikiran maju, dan suka hal-hal inovatif. Mereka peduli pada kemanusiaan dan bebas dari aturan kaku. Kadang terlihat dingin karena lebih banyak berpikir logis daripada emosional. Aquarius selalu menghargai kebebasan pribadi.";
                }
            }

            if ($bulan == 2) {
                if ($tanggal > 0 && $tanggal < 20) {
                    return "Aquarius unik, berpikiran maju, dan suka hal-hal inovatif. Mereka peduli pada kemanusiaan dan bebas dari aturan kaku. Kadang terlihat dingin karena lebih banyak berpikir logis daripada emosional. Aquarius selalu menghargai kebebasan pribadi.";
                } else if ($tanggal > 28) {
                    return "Bulan Februari tidak memiliki tanggal $tanggal !";
                }
                else {
                    return "Pisces lembut, imajinatif, dan penuh empati. Mereka mudah tersentuh dan punya intuisi kuat. Pisces suka membantu orang lain, tapi kadang terlalu terbawa perasaan. Dunia fantasi dan seni sering jadi tempat pelarian mereka dari realita.";
                }
            }

            if ($bulan == 3) {
                if ($tanggal > 0 && $tanggal < 21) {
                    return "Pisces lembut, imajinatif, dan penuh empati. Mereka mudah tersentuh dan punya intuisi kuat. Pisces suka membantu orang lain, tapi kadang terlalu terbawa perasaan. Dunia fantasi dan seni sering jadi tempat pelarian mereka dari realita.";
                } else {
                    return "Anda berjiwa pemimpin, penuh semangat, dan sukaAries berjiwa pemimpin, penuh semangat, dan suka tantangan. Mereka spontan, energik, dan cepat mengambil keputusan, tapi terkadang terlalu impulsif dan mudah marah. Meski keras kepala, Aries punya keberanian besar dan selalu ingin jadi yang pertama dalam segala hal.";
                }
            }

            if ($bulan == 4) {
                if ($tanggal > 0 && $tanggal < 20) {
                    return "Anda berjiwa pemimpin, penuh semangat, dan sukaAries berjiwa pemimpin, penuh semangat, dan suka tantangan. Mereka spontan, energik, dan cepat mengambil keputusan, tapi terkadang terlalu impulsif dan mudah marah. Meski keras kepala, Aries punya keberanian besar dan selalu ingin jadi yang pertama dalam segala hal.";
                } else {
                    return "Taurus dikenal sabar, setia, dan pekerja keras. Mereka menyukai kenyamanan, keindahan, dan kestabilan hidup. Namun, sifat keras kepala dan sulit berubah bisa jadi kekurangannya. Taurus sangat bisa dipercaya dan selalu menjaga komitmen.";
                }
            }

            if ($bulan == 5) {
                if ($tanggal > 0 && $tanggal < 21) {
                    return "Taurus dikenal sabar, setia, dan pekerja keras. Mereka menyukai kenyamanan, keindahan, dan kestabilan hidup. Namun, sifat keras kepala dan sulit berubah bisa jadi kekurangannya. Taurus sangat bisa dipercaya dan selalu menjaga komitmen.";
                } else {
                    return "Gemini cerdas, komunikatif, dan mudah beradaptasi. Mereka suka belajar hal baru dan pandai bergaul, tapi kadang mudah bosan dan sulit fokus. Gemini punya dua sisi kepribadian — menyenangkan sekaligus penuh misteri.";
                }
            }

            if ($bulan == 6) {
                if ($tanggal > 0 && $tanggal < 21) {
                    return "Gemini cerdas, komunikatif, dan mudah beradaptasi. Mereka suka belajar hal baru dan pandai bergaul, tapi kadang mudah bosan dan sulit fokus. Gemini punya dua sisi kepribadian — menyenangkan sekaligus penuh misteri.";
                } else {
                    return "Cancer lembut, penyayang, dan sangat peduli dengan keluarga. Mereka sensitif dan intuitif, tapi mudah tersinggung jika merasa tidak dihargai. Cancer juga setia dan suka melindungi orang yang mereka cintai.";
                }
            }

            if ($bulan == 7) {
                if ($tanggal > 0 && $tanggal < 23) {
                    return "Cancer lembut, penyayang, dan sangat peduli dengan keluarga. Mereka sensitif dan intuitif, tapi mudah tersinggung jika merasa tidak dihargai. Cancer juga setia dan suka melindungi orang yang mereka cintai.";
                } else {
                    return "Leo percaya diri, karismatik, dan lahir sebagai pemimpin alami. Mereka suka menjadi pusat perhatian dan punya rasa bangga tinggi. Meski kadang terkesan egois, Leo berhati hangat dan sangat loyal terhadap teman dan keluarga.";
                }
            }

            if ($bulan == 8) {
                if ($tanggal > 0 && $tanggal < 23) {
                    return "Leo percaya diri, karismatik, dan lahir sebagai pemimpin alami. Mereka suka menjadi pusat perhatian dan punya rasa bangga tinggi. Meski kadang terkesan egois, Leo berhati hangat dan sangat loyal terhadap teman dan keluarga.";
                } else {
                    return "Virgo perfeksionis, analitis, dan suka keteraturan. Mereka teliti dalam setiap detail dan punya rasa tanggung jawab besar. Namun, kadang terlalu kritis baik pada diri sendiri maupun orang lain. Meski begitu, Virgo sangat bisa diandalkan.";
                }
            }

            if ($bulan == 9) {
                if ($tanggal > 0 && $tanggal < 23) {
                    return "Virgo perfeksionis, analitis, dan suka keteraturan. Mereka teliti dalam setiap detail dan punya rasa tanggung jawab besar. Namun, kadang terlalu kritis baik pada diri sendiri maupun orang lain. Meski begitu, Virgo sangat bisa diandalkan.";
                } else {
                    return "Libra cinta kedamaian, adil, dan punya rasa estetika tinggi. Mereka suka harmoni dan sering menjadi penengah dalam konflik. Namun, sifatnya yang sulit mengambil keputusan bisa membuat mereka tampak ragu-ragu. Libra menawan dan sopan dalam berinteraksi.";
                }
            }

            if ($bulan == 10) {
                if ($tanggal > 0 && $tanggal < 23) {
                    return "Libra cinta kedamaian, adil, dan punya rasa estetika tinggi. Mereka suka harmoni dan sering menjadi penengah dalam konflik. Namun, sifatnya yang sulit mengambil keputusan bisa membuat mereka tampak ragu-ragu. Libra menawan dan sopan dalam berinteraksi.";
                } else {
                    return "Scorpio intens, misterius, dan sangat bersemangat. Mereka setia tapi juga mudah cemburu dan sulit memaafkan pengkhianatan. Scorpio punya intuisi tajam dan tidak suka berpura-pura. Jika percaya, mereka akan berkorban sepenuh hati.";
                }
            }

            if ($bulan == 11) {
                if ($tanggal > 0 && $tanggal < 22) {
                    return "Scorpio intens, misterius, dan sangat bersemangat. Mereka setia tapi juga mudah cemburu dan sulit memaafkan pengkhianatan. Scorpio punya intuisi tajam dan tidak suka berpura-pura. Jika percaya, mereka akan berkorban sepenuh hati.";
                } else {
                    return "Sagittarius optimis, petualang, dan mencintai kebebasan. Mereka suka belajar hal baru dan berpikir filosofis. Namun, kejujurannya kadang terdengar kasar. Sagittarius selalu membawa energi positif dan sulit dikekang.";
                }
            }

            if ($bulan == 12) {
                if ($tanggal > 0 && $tanggal < 22) {
                    return "Sagittarius optimis, petualang, dan mencintai kebebasan. Mereka suka belajar hal baru dan berpikir filosofis. Namun, kejujurannya kadang terdengar kasar. Sagittarius selalu membawa energi positif dan sulit dikekang.";
                } else {
                    return "Anda berjiwa pemimpin, penuh semangat, dan sukaAries berjiwa pemimpin, penuh semangat, dan suka tantangan. Mereka spontan, energik, dan cepat mengambil keputusan, tapi terkadang terlalu impulsif dan mudah marah. Meski keras kepala, Aries punya keberanian besar dan selalu ingin jadi yang pertama dalam segala hal.";
                }
            }
        } else {
            return "<span style='color:red;'>Bulan atau Tanggal tidak valid !</span>";
        }
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        body {
            background-color: rgb(19, 19, 19);
            color: white;
        }

        .container {
            margin-top: 30px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 20px;
        }

        .container > div {
            margin: auto;
            width: 25rem;
        }

        .calculator-container {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
    </style>
</head>
<body>
   <h1 style="text-align: center;">Belajar PHP Function</h1>
   <hr />
   
   <div class="container">
    <div class="form-container">
        <form action="" method="post">
            <fieldset>
                <h2 style="text-align: center;">Zodiak</h2>
                <fieldset>
                    <legend>Masukkan Data</legend>
                    Tanggal:
                    <input type="number" name="tanggal" placeholder="Masukkan Tanggal"> <br>
                    Bulan :
                    <input type="number" name="bulan" placeholder="Masukkan Bulan"> <br>
                </fieldset> <br />

                <fieldset>
                    <legend>Hasil Zodiak</legend>
                    <p style="text-align: center;">
                        <?php echo $hasilZodiak1 ?>
                    </p>
                </fieldset>

                <br />

                <input type="submit" name="kirim" value="Zodiak anda ...">
            </fieldset>
        </form>
    </div>

    <div class="form-container">
        <form action="" method="post">
            <fieldset>
                <h2 style="text-align: center;">Kalkulator Sederhana</h2>
                <fieldset>
                    <legend>Masukkan Data</legend>
                    a:
                    <input type="number" name="a" placeholder="Bilangan a"> <br>
                    b:
                    <input type="number" name="b" placeholder="Bilangan b"> <br>
                </fieldset> <br />

                <div class="calculator-container">
                    <input type="submit" name="hitung" value="jumlahkan">
                    <input type="submit" name="hitung" value="kurangi">
                    <input type="submit" name="hitung" value="kalikan">
                    <input type="submit" name="hitung" value="bagikan">
                </div>

                <br><br>

                <fieldset>
                    <legend>Hasil Kalkulasi:</legend>
                    <p style="text-align: center;">
                        <?php echo $hasilKalkulasi?>
                    </p>
                </fieldset>
                <br />
            </fieldset>
        </form>
    </div>

    <div class="form-container">
        <form action="" method="post">
            <fieldset>
                <h2 style="text-align: center;">Tugas: Zodiak dengan menggunakan 'return'</h2>
                <fieldset>
                    <legend>Masukkan Data</legend>
                    Tanggal:
                    <input type="number" name="tugas-tanggal" placeholder="Masukkan Tanggal"> <br />
                    Bulan:
                    <input type="number" name="tugas-bulan" placeholder="Masukkan Bulan"> <br />
                </fieldset>
                <br />

                <fieldset>
                    <legend>Output</legend>
                    <p style="text-align: center;">
                        <?php echo $hasilZodiak.'<br>'.$keterangan ?>
                    </p>
                </fieldset>

                <br />
                <input type="submit" name="cekzodiak" value="Cek Zodiak...">
            </fieldset>
        </form>
    </div>
   </div>
    <br />
     
</body>
</html>


<?php 

    // === Belajar Function di PHP ===

    

    

    
    
    function belajar() {
        echo "Hari ini, saya belajar function";
    }

    function cekTanggal($tanggal) {
        

        if ($tanggal > 0 && $tanggal < 32) {
            // echo "tanggal benar !";
            return true;
        } else {
            // echo "tanggal salah !";
            return false;
        }
    }
    
    // >> Memanggil function <<
    // cekTanggal(1);
    // cekTanggal(0);
    // cekTanggal(100);

    // $tanggal = 22;
    // $bulan = 6;

    

    

    // zodiak(100, 1);
    // zodiak(12, 30);
    // zodiak(5, 20);

    // function cekBulan($bulan) {
    //     if ($bulan > 0 && $bulan < 13) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    // if (cekBulan(1)) {
    //     echo "Bulan atau tanggal benar";
    // } else {
    //     echo "Bulan atau tanggal salah";
    // }

    function luasPersegiPanjang($p, $l) {
        $luas = $p * $l;
        return $luas;
    }

    $p = 55;
    $l = 33;
    $t = 155;

    // echo "Volume balok dengan panjang $p, lebar $l, dan tinggi $t adalah: <br>";

    // echo luasPersegiPanjang($p, $l) * $t;

    function tambah($a, $b) {
        return $a + $b;
    }

    function kurang($a, $b) {
        return $a - $b;
    }

    function kali($a, $b) {
        return $a * $b;
    }

    function bagi($a, $b) {
        return $a / $b;
    }

    $a = 15;
    $b = 5;

    // echo 'Penjumlahan dari'. $a . 'dan' . $b . 'adalah:' . tambah($a, $b) . '<br>';
    // echo 'Penjumlahan dari'. $a . 'dan' . $b . 'adalah:' . tambah($a, $b) . '<br>';
    // echo 'Penjumlahan dari'. $a . 'dan' . $b . 'adalah:' . tambah($a, $b) . '<br>';
    // echo 'Penjumlahan dari'. $a . 'dan' . $b . 'adalah:' . tambah($a, $b) . '<br>';

?> 