// Functie om van pagina te wisselen
function toonPagina(paginaId) {
    // 1. Haal alle elementen met de klasse 'pagina' op
    var paginas = document.getElementsByClassName('pagina');

    // 2. Verberg alle pagina's door de klasse 'actief' te verwijderen
    for (var i = 0; i < paginas.length; i++) {
        paginas[i].classList.remove('actief');
    }

    // 3. Toon de geselecteerde pagina door de klasse 'actief' toe te voegen
    var gekozenPagina = document.getElementById(paginaId);
    if (gekozenPagina) {
        gekozenPagina.classList.add('actief');
    }
}