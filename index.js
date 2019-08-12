var fs = require('fs');

//w zmiennej folder jest zapisana ścieżka do folderu
var folder = '../17.7';

//odczyt zawartości katalogu i zapisanie jako tablica w files
fs.readdir(folder, function(err, files) {
    if (err) {
        console.log(err);
    };
    //przejście przez wszytskie elementy tablicy i wyświetlenie ich nazw w konsoli
    files.forEach(function(name) {
        console.log(name);
    });

    var files = files;
    //zapis pobranych nazw w pliku
    fs.writeFile('text.txt', files, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
});


