// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi
// Parte 2 (Bonus)
// Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti
$('.quadrato').click(function(){
  $(this).addClass('green');
});

$('.quadrato1').click(function(){
  $(this).addClass('red');
});
