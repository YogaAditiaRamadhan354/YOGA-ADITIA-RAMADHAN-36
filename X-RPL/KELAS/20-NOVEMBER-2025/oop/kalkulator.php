<?php

    class Kalkulator {

        function penjumlahan($a, $b) {
            echo "penjumlahan";
            echo '<br>'.$a + $b;
        }
        function pengurangan($a, $b) {
            echo "pengurangan";
            echo '<br>'.$a - $b;
        }
        function pembagian($a, $b) {
            echo "pembagian";
            echo '<br>'.$a * $b;
        }
        function perkalian($a, $b) {
            echo "perkalian";
            echo '<br>'.$a / $b;
        }

    }

    $kalkulator = new Kalkulator();
    $kalkulator->penjumlahan(5, 4);
    $kalkulator->pengurangan(3, 1);
    $kalkulator->pembagian(10, 5);
    $kalkulator->perkalian(5, 5);

?>

