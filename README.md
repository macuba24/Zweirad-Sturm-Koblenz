# Kundenapp Zweirad Sturm

Eine Seite für das Handy. Name, Kundenkode, Buchung, Foto und Nachricht bleiben auf diesem Gerät.

## Start

Im Ordner `D:\Einzelhandel App\Zweirad sturm`:

```
python -m http.server 8786
```

Dann im Browser `http://127.0.0.1:8786/` öffnen.

Die SQLite-Fassung (älterer Stand der Blaupause, Ordner `static/`) startet mit:

```
python server.py
```

Sie lauscht auf `http://127.0.0.1:8787/`. Dafür braucht es keine Zusatzpakete.

## Am Handy

Die Adresse in Chrome öffnen und zum Startbildschirm hinzufügen. Kunde und Kasse liegen auf demselben Handy.

## Kontakt laut Website

Zweirad Sturm GmbH. Telefon 03725 - 82 519, Website https://www.ktm-sturm.de/

Öffnungszeiten laut Website: Mo-Fr: 09:00-12:00, 13:00-18:00 Uhr, Sa: 09:00 - 12:00 Uhr. Telefonische Unterstützung und Beratung: Mo-Fr: 10:00-12:00, 14:00-18:00 Uhr, Sa: 09:00 - 12:00 Uhr.

Sortiment laut Website: KTM, Husqvarna, GASGAS, CFMOTO, Ersatzteile.

Die Vorteilssätze (1/2/3/5 Prozent) sind die Kartenlogik dieser App und keine Preise der Website. An der Kasse lassen sie sich ändern.
