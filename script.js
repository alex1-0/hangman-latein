// Hier können Sie die Wortliste erweitern
const words = [
    { word: "ADESSE", translation: "da sein, helfen " },
    { word: "AUDERE", translation: "wagen" },
    { word: "CUR", translation: "warum" },
    { word: "DEBERE", translation: "müssen, sollen, schulden" },
    { word: "DOMINUS", translation: "der Herr" },
    { word: "DUBITARE", translation: "zögern, zweifeln" },
    { word: "EQUUS", translation: "das Pferd" },
    { word: "ESSE", translation: "sein, sich befinden" },
    { word: "ET", translation: "und, auch" },
    { word: "ETIAM", translation: "auch, sogar; (m. Komparativ) noch" },
    { word: "HUC", translation: "hierher" },
    { word: "IAM", translation: "schon, bereits, nun" },
    { word: "IBI", translation: "dort, da" },
    { word: "ITAQUE", translation: "deshalb" },
    { word: "NON", translation: "nicht" },
    { word: "ORARE", translation: "bitten, beten, anbeten" },
    { word: "POPULUS", translation: "das Volk" },
    { word: "SED", translation: "aber, sondern" },
    { word: "SERVUS", translation: "der Sklave, der Diener" },
    { word: "SOLUM", translation: "nur" },
    { word: "STARE", translation: "stehen" },
    { word: "TANDEM", translation: "endlich, schließlich" },
    { word: "TUM", translation: "da, dann, damals" },
    { word: "VENIRE", translation: "kommen" },
    { word: "VICTORIA", translation: "der Sieg" },
    { word: "VIDERE", translation: "sehen" },
    { word: "AD", translation: "zu, nach, bei, an" },
    { word: "AMICUS", translation: "der Freund" },
    { word: "ANTE", translation: "vor" },
    { word: "AUDIRE", translation: "hören" },
    { word: "DARE", translation: "geben" },
    { word: "DIU", translation: "lange, lange Zeit" },
    { word: "EGO", translation: "ich" },
    { word: "EXSPECTARE", translation: "warten (auf), erwarten" },
    { word: "ITA", translation: "so" },
    { word: "NAM", translation: "denn" },
    { word: "NONIAM", translation: "nicht mehr" },
    { word: "NUNC", translation: "jetzt, nun" },
    { word: "PECUNIA", translation: "das Geld, das Vermögen" },
    { word: "PER", translation: "durch" },
    { word: "POST", translation: "hinter, nach" },
    { word: "POSTULARE", translation: "fordern" },
    { word: "REPERIRE", translation: "finden, wiederfinden" },
    { word: "ROGARE", translation: "fragen, bitten" },
    { word: "SATIS", translation: "genug" },
    { word: "SCIRE", translation: "wissen, kennen, verstehen" },
    { word: "SEMPER", translation: "immer" },
    { word: "TENERE", translation: "halten, festhalten, besitzen" },
    { word: "TU", translation: "du" },
    { word: "UBI", translation: "wo" },
    { word: "VALERE", translation: "gesund sein, stark sein, Einfluss haben" },
    { word: "VIA", translation: "der Weg, die Straße" },
    { word: "ANIMUS", translation: "der Geist, der Mut, die Gesinnung" },
    { word: "BENE", translation: "gut" },
    { word: "DUM", translation: "während, solange, bis" },
    { word: "ETET", translation: "sowohl … als auch" },
    { word: "GRATIA", translation: "der Dank, die Gnade" },
    { word: "INIURIA", translation: "das Unrecht, die Beleidigung" },
    { word: "NEGARE", translation: "leugnen, verneinen, verweigern" },
    { word: "PARARE", translation: "(vor)bereiten, vorhaben, erwerben" },
    { word: "PAULO", translation: "(um) ein wenig" },
    { word: "POENA", translation: "die Strafe" },
    { word: "PROHIBERE", translation: "abhalten, hindern, verhindern" },
    { word: "RESPONDERE", translation: "antworten" },
    { word: "SENTENTIA", translation: "die Meinung, der Satz, der Sinn" },
    { word: "SOCIUS", translation: "der Gefährte, der Verbündete" },
    { word: "SUPERARE", translation: "besiegen, überwinden, übertreffen" },
    { word: "SUSTINERE", translation: "ertragen, standhalten" },
    { word: "UNA", translation: "zusammen, zugleich" },
    { word: "VOCARE", translation: "rufen, nennen, benennen" },
    { word: "AMARE", translation: "lieben" },
    { word: "APPELLARE", translation: "rufen, anrufen, nennen" },
    { word: "AT", translation: "aber, jedoch" },
    { word: "ATQUEAC", translation: "und, und auch; (im Vergleich) wie, als" },
    { word: "CUM", translation: "mit, zusammen mit" },
    { word: "DE", translation: "über; von, von … her, von … weg, von … herab" },
    { word: "EEX", translation: "aus, von … her" },
    { word: "ENIM", translation: "denn, nämlich" },
    { word: "FUGA", translation: "die Flucht" },
    { word: "IN", translation: "in, an, auf, bei (wo?)" },
    { word: "IN", translation: "in (… hinein), nach (wohin?); gegen" },
    { word: "MEMORIA", translation: "die Erinnerung, das Gedächtnis, die Zeit" },
    { word: "MOVERE", translation: "bewegen, beeindrucken" },
    { word: "NESCIRE", translation: "nicht wissen, nicht kennen, nicht verstehen" },
    { word: "NOLLE", translation: "nicht wollen" },
    { word: "OCULUS", translation: "das Auge" },
    { word: "PROCUL", translation: "von fern; weit weg" },
    { word: "PROPE", translation: "nahe, in der Nähe; beinahe" },
    { word: "PROPTER", translation: "wegen" },
    { word: "QUE", translation: "und" },
    { word: "SENTIRE", translation: "fühlen, meinen, wahrnehmen" },
    { word: "SILVA", translation: "der Wald" },
    { word: "TAMEN", translation: "dennoch, jedoch" },
    { word: "TIBI", translation: "dir, für dich" },
    { word: "TIMERE", translation: "fürchten, Angst haben (vor)" },
    { word: "VELLE", translation: "wollen" },
    { word: "AAB", translation: "von, von … her" },
    { word: "ADHUC", translation: "bis jetzt, (immer) noch" },
    { word: "AUTEM", translation: "aber, andererseits" },
    { word: "CAELUM", translation: "der Himmel" },
    { word: "COGERE", translation: "zwingen (etw. zu tun); (ver)sammeln" },
    { word: "COGNOSCERE", translation: "erkennen, kennen lernen; (Perf. auch) kennen, wissen" },
    { word: "COLERE", translation: "verehren; bewirtschaften, pflegen" },
    { word: "CONSILIUM", translation: "die Beratung; der Beschluss, der Plan, der Rat" },
    { word: "CONSTITUERE", translation: "aufstellen, gründen, festsetzen, beschließen" },
    { word: "COPIA", translation: "die Menge; der Vorrat; (Pl. auch) die Truppen" },
    { word: "DEUS", translation: "der Gott, die Gottheit" },
    { word: "DICERE", translation: "sagen, sprechen; (m. dopp. Akk.) nennen, bezeichnen (als)" },
    { word: "DUCERE", translation: "führen, ziehen; (m. dopp. Akk.) halten für" },
    { word: "IMPERIUM", translation: "der Befehl; die Herrschaft; das Reich" },
    { word: "INVENIRE", translation: "finden, erfinden" },
    { word: "LEGERE", translation: "lesen; auswählen" },
    { word: "NATURA", translation: "die Natur, das Wesen, die Beschaffenheit" },
    { word: "NEQUE", translation: "und nicht, auch nicht" },
    { word: "OPERA", translation: "die Arbeit, die Mühe" },
    { word: "OPPIDUM", translation: "die Stadt, die Kleinstadt" },
    { word: "OSTENDERE", translation: "zeigen, erklären" },
    { word: "PETERE", translation: "bitten; verlangen; streben (nach); aufsuchen; angreifen" },
    { word: "POSTEA", translation: "nachher, später" },
    { word: "QUASI", translation: "gleichsam, wie" },
    { word: "RESISTERE", translation: "Widerstand leisten; stehen bleiben" },
    { word: "SCRIBERE", translation: "schreiben, beschreiben" },
    { word: "SINE", translation: "ohne" },
    { word: "TERRA", translation: "die Erde, das Land" },
    { word: "VERBUM", translation: "das Wort, die Äußerung" },
    { word: "VITA", translation: "das Leben" },
    { word: "VIVERE", translation: "leben" },
    { word: "NE", translation: "Fragesignal (wird nicht übersetzt)" },
    { word: "ACCIPERE", translation: "erhalten, erfahren, annehmen" },
    { word: "APUD", translation: "bei" },
    { word: "BONUS", translation: "gut; tüchtig" },
    { word: "CAPERE", translation: "nehmen, fassen, ergreifen, erobern" },
    { word: "CETERI", translation: "die übrigen" },
    { word: "CUPERE", translation: "wollen, wünschen, verlangen" },
    { word: "FAMA", translation: "der (gut/schlechte) Ruf; das Gerücht" },
    { word: "FORTUNA", translation: "das Glück; das Schicksal" },
    { word: "GLORIA", translation: "der Ruhm, die Ehre" },
    { word: "HABERE", translation: "haben, halten" },
    { word: "INCIPERE", translation: "anfangen, beginnen" },
    { word: "INTER", translation: "unter; während; zwischen" },
    { word: "LAUDARE", translation: "loben" },
    { word: "LIBERI", translation: "die Kinder" },
    { word: "MAGNUS", translation: "groß, bedeutend" },
    { word: "ME", translation: "mich" },
    { word: "MEUS", translation: "mein" },
    { word: "MIHI", translation: "mir, für mich" },
    { word: "MISER", translation: "arm, erbärmlich, unglücklich" },
    { word: "MODUS", translation: "die Art, die Weise; das Maß" },
    { word: "MULTUS", translation: "viel" },
    { word: "NULLUS", translation: "kein" },
    { word: "PARVUS", translation: "klein, gering" },
    { word: "PUER", translation: "der Junge" },
    { word: "QUAM", translation: "als, wie; (m. Superlativ) möglichst" },
    { word: "QUIDEM", translation: "freilich, gewiss, wenigstens, zwar" },
    { word: "QUIS", translation: "wer? was?" },
    { word: "QUOQUE", translation: "auch" },
    { word: "SUPERI", translation: "die Götter" },
    { word: "TE", translation: "dich" },
    { word: "TEMPLUM", translation: "der Tempel" },
    { word: "VIR", translation: "der Mann" },
    { word: "ABESSE", translation: "abwesend sein, fehlen" },
    { word: "ACCEDERE", translation: "herbeikommen, hingehen, sich nähern" },
    { word: "ALTUS", translation: "hoch, tief" },
    { word: "AMOR", translation: "die Liebe" },
    { word: "AN", translation: "oder (etwa)" },
    { word: "AUXILIUM", translation: "die Hilfe" },
    { word: "CONVENIRE", translation: "zusammenkommen; zusammenpassen; (m. Akk.) treffen" },
    { word: "EMERE", translation: "kaufen" },
    { word: "ERIPERE", translation: "entreissen" },
    { word: "FUGERE", translation: "fliehen (vor), entfliehen, meiden" },
    { word: "IGITUR", translation: "also, folglich" },
    { word: "LABOR", translation: "die Arbeit, die Mühe, die Anstrengung" },
    { word: "LIBERTAS", translation: "die Freiheit" },
    { word: "PERICULUM", translation: "die Gefahr" },
    { word: "POSSE", translation: "können" },
    { word: "PULCHER", translation: "schön" },
    { word: "QUAERERE", translation: "fragen; suchen; erwerben wollen" },
    { word: "SAEPE", translation: "oft" },
    { word: "SI", translation: "wenn; falls" },
    { word: "SIMUL", translation: "gleichzeitig, zugleich" },
    { word: "SOLUS", translation: "allein, einzig" },
    { word: "STUDIUM", translation: "die Beschäftigung; das Engagement, das Interesse" },
    { word: "ALIUS", translation: "ein anderer" },
    { word: "ARMA", translation: "die Waffen; das Gerät" },
    { word: "CUM", translation: "als (plötzlich), (zu der Zeit) als, (immer) wenn" },
    { word: "DEINDE", translation: "dann, darauf" },
    { word: "FACERE", translation: "machen, tun, handeln" },
    { word: "MALUS", translation: "schlecht, schlimm, böse" },
    { word: "NIHIL", translation: "nichts" },
    { word: "NISI", translation: "wenn nicht" },
    { word: "NOBIS", translation: "uns, für uns" },
    { word: "PAUCI", translation: "wenige" },
    { word: "PAX", translation: "der Frieden" },
    { word: "POSTQUAM", translation: "nachdem, als" },
    { word: "PUGNARE", translation: "kämpfen" },
    { word: "PUTARE", translation: "glauben, meinen; (m. doppeltem Akk.) halten für" },
    { word: "QUAMQUAM", translation: "obwohl" },
    { word: "QUIA", translation: "weil" },
    { word: "SECUM", translation: "mit sich, bei sich" },
    { word: "UNUS", translation: "einer, ein einziger" },
    { word: "VOS", translation: "ihr (Nom.); euch (Akk.)" },
    { word: "VOX", translation: "die Stimme, die Äußerung, der Laut" },
        { word: "ACCIDERE", translation: "geschehen, sich ereignen" },
    { word: "ALIUSALIUS", translation: "der eine ... der andere" },
    { word: "CONTENDERE", translation: "eilen; sich anstrengen; kämpfen; behaupten" },
    { word: "DISCEDERE", translation: "weggehen, auseinandergehen" },
    { word: "ERGO", translation: "also, deshalb" },
    { word: "HOMO", translation: "der Mensch" },
    { word: "INDE", translation: "von dort; darauf; deshalb" },
    { word: "MANERE", translation: "bleiben; warten (auf)" },
    { word: "MATER", translation: "die Mutter" },
    { word: "MONS", translation: "der Berg" },
    { word: "MORS", translation: "der Tod" },
    { word: "MULTITUDO", translation: "die Menge, die große Zahl" },
    { word: "NOBISCUM", translation: "mit uns" },
    { word: "NOS", translation: "wir (Nom.); uns (Akk.)" },
    { word: "OPS", translation: "die Hilfe; die Kraft; (Pl.) die Macht, die Mittel, der Reichtum" },
    { word: "PARENS", translation: "der Vater; die Mutter; (Pl.) die Eltern" },
    { word: "PARS", translation: "der Teil, die Seite" },
    { word: "PATER", translation: "der Vater" },
    { word: "RELINQUERE", translation: "verlassen, zurücklassen" },
    { word: "RURSUS", translation: "wieder" },
    { word: "URBS", translation: "die Stadt" },
    { word: "VINCERE", translation: "siegen, besiegen, übertreffen" },
    { word: "VOBIS", translation: "euch, für euch" },
    { word: "AGER", translation: "der Acker, das Feld, das Gebiet" },
    { word: "ANNUS", translation: "das Jahr" },
    { word: "ANTE", translation: "vorher" },
    { word: "CAUSA", translation: "die Sache; der Grund; der Prozess" },
    { word: "CIVITAS", translation: "die Gemeinde, der Staat" },
    { word: "COMMITTERE", translation: "anvertrauen; begehen; veranstalten" },
    { word: "CONSISTERE", translation: "stehen bleiben, sich aufstellen" },
    { word: "CREDERE", translation: "glauben; anvertrauen" },
    { word: "DOLOR", translation: "der Schmerz" },
    { word: "FACTUM", translation: "die Handlung, die Tat, die Tatsache" },
    { word: "FILIA", translation: "die Tochter" },
    { word: "FILIUS", translation: "der Sohn" },
    { word: "FRATER", translation: "der Bruder" },
    { word: "HIC", translation: "hier" },
    { word: "IMPERARE", translation: "befehlen, herrschen (über)" },
    { word: "INSIDIAE", translation: "die Falle, das Attentat, die Hinterlist" },
    { word: "INTERFICERE", translation: "töten, vernichten" },
    { word: "IS", translation: "dieser, diese, dieses; er, sie, es; (Gen.) sein, ihr" },
    { word: "IUBERE", translation: "befehlen, beauftragen" },
    { word: "LOCUS", translation: "der Ort, der Platz, die Stelle" },
    { word: "MITTERE", translation: "schicken, werfen" },
    { word: "NEMO", translation: "niemand" },
    { word: "NOSTER", translation: "unser" },
    { word: "NOVUS", translation: "neu, ungewöhnlich" },
    { word: "NOX", translation: "die Nacht" },
    { word: "PLERIQUE", translation: "die meisten, sehr viele" },
    { word: "PRAETEREA", translation: "außerdem" },
    { word: "PRO", translation: "vor; anstelle von; für" },
    { word: "QUONIAM", translation: "da ja, weil ja" },
    { word: "REX", translation: "der König" },
    { word: "AGERE", translation: "handeln, treiben, verhandeln" },
    { word: "AMPLUS", translation: "bedeutend, groß, weit" },
    { word: "AQUA", translation: "das Wasser" },
    { word: "CASTRA", translation: "das Lager" },
    { word: "CLARUS", translation: "hell, klar, berühmt" },
    { word: "CONTRA", translation: "gegen" },
    { word: "CURA", translation: "die Sorge; die Sorgfalt" },
    { word: "DEFENDERE", translation: "abwehren; verteidigen (vor/gegen)" },
    { word: "EXEMPLUM", translation: "das Beispiel, das Vorbild" },
    { word: "FINIS", translation: "das Ende; die Grenze; das Ziel, der Zweck; (Pl.) das Gebiet" },
    { word: "HOSTIS", translation: "der Feind, der Landesfeind" },
    { word: "INQUAM", translation: "sage ich, sagte ich" },
    { word: "LACRIMA", translation: "die Träne" },
    { word: "LEX", translation: "das Gesetz; die Bedingung" },
    { word: "LUX", translation: "das Licht, das Tageslicht" },
    { word: "MALUM", translation: "das Leid, das Übel, das Unglück" },
    { word: "MILES", translation: "der Soldat" },
    { word: "NUMERUS", translation: "die Zahl, die Menge" },
    { word: "OBSES", translation: "die Geisel" },
    { word: "PATRIA", translation: "die Heimat" },
    { word: "PERVENIRE", translation: "kommen zu/nach" },
    { word: "PONERE", translation: "(auf)stellen, (hin)legen, setzen" },
    { word: "PRAESIDIUM", translation: "der Schutz; die Hilfe; der Wachposten; die Schutztruppe" },
    { word: "PREMERE", translation: "drücken; unterdrücken, bedrängen" },
    { word: "PRIMUM", translation: "erstens, zuerst, zum ersten Mal" },
    { word: "PRIMUS", translation: "der erste" },
    { word: "QUI", translation: "der, die, das; welcher, welche, welches; (am Satzanfang: ) dieser, diese, dieses; (ohne Bw: ) wer, was" },
    { word: "SERVARE", translation: "retten, bewahren; beobachten" },
    { word: "SUMMUS", translation: "der höchste, oberste, letzte" },
    { word: "SUUS", translation: "sein, ihr" },
    { word: "TELUM", translation: "die Waffe, das Geschoss" },
    { word: "TUTUS", translation: "sicher" },
    { word: "ULLUS", translation: "irgendeiner, irgendeine, irgendein" },
    { word: "VESTER", translation: "euer" },
    { word: "VICTOR", translation: "der Sieger, (adj.) siegreich" },
    { word: "VIRGO", translation: "das Mädchen, die junge Frau" },
    { word: "VIRTUS", translation: "die Tapferkeit, die Tüchtigkeit, die Vortrefflichkeit; die Leistung" },
    { word: "ABIRE", translation: "weggehen" },
    { word: "ADDUCERE", translation: "heranführen, veranlassen, beeinflussen" },
    { word: "ADIRE", translation: "herantreten (an), hingehen (zu), aufsuchen; auf sich nehmen; angreifen" },
    { word: "BELLUM", translation: "der Krieg" },
    { word: "CELER", translation: "schnell" },
    { word: "CIVIS", translation: "der Bürger" },
    { word: "COMMUNIS", translation: "gemeinsam, allgemein" },
    { word: "EXISTIMARE", translation: "meinen; schätzen" },
    { word: "FACILIS", translation: "leicht (zu tun)" },
    { word: "FORTIS", translation: "kräftig; tapfer" },
    { word: "GERERE", translation: "führen, ausführen; tragen" },
    { word: "GRAVIS", translation: "schwer" },
    { word: "HAUD", translation: "nicht" },
    { word: "HINC", translation: "von hier; hierauf" },
    { word: "IMPERATOR", translation: "der Feldherr; der Kaiser" },
    { word: "INGENS", translation: "gewaltig, riesig, ungeheuer" },
    { word: "IRE", translation: "gehen" },
    { word: "LEGIO", translation: "die Legion" },
    { word: "NOSCERE", translation: "erkennen, kennenlernen" },
    { word: "NUMQUAM", translation: "nie, niemals" },
    { word: "OMNIS", translation: "jeder, ganz; (Pl.) alle" },
    { word: "PAR", translation: "gleich, ebenbürtig" },
    { word: "PERIRE", translation: "umkommen, zugrunde gehen" },
    { word: "PLACET", translation: "es gefällt jmdm., jmd. beschließt" },
    { word: "PLURIMI", translation: "die meisten, sehr viele" },
    { word: "POTESTAS", translation: "die Macht, die Gewalt, die Amtsgewalt" },
    { word: "PROELIUM", translation: "der Kampf, die Schlacht" },
    { word: "RATIO", translation: "der Grund; die Vernunft; die Überlegung; die Art und Weise" },
    { word: "REDIRE", translation: "zurückgehen, zurückkehren" },
    { word: "RELIGUUS", translation: "übrig; künftig" },
    { word: "SALUS", translation: "die Gesundheit; die Rettung; das Glück; der Gruß" },
    { word: "SE", translation: "sich" },
    { word: "SIBI", translation: "sich, für sich" },
    { word: "SIMILIS", translation: "ähnlich" },
    { word: "VIS", translation: "die Kraft, die Gewalt; die Menge; (Pl.) die Kräfte, die Streitkräfte" },
    { word: "AEDIS", translation: "der Tempel; (Pl.) das Haus" },
    { word: "AUCTORITAS", translation: "das Ansehen, der Einfluss, die Macht" },
    { word: "CERTUS", translation: "sicher" },
    { word: "DIES", translation: "der Tag" },
    { word: "FIDES", translation: "der Glaube; die Treue; das Vertrauen; die Zuverlässigkeit" },
    { word: "HONOR", translation: "die Ehre; das Ehrenamt" },
    { word: "IGNIS", translation: "das Feuer" },
    { word: "INTELLEGERE", translation: "merken, bemerken, verstehen, begreifen" },
    { word: "INVIDIA", translation: "der Neid; der Hass" },
    { word: "LICET", translation: "es ist erlaubt, es ist möglich" },
    { word: "MAGNITUDO", translation: "die Größe" },
    { word: "MENS", translation: "der Geist, der Sinn, der Verstand; die Meinung" },
    { word: "NEQUE", translation: "weder ... noch" },
    { word: "REGIO", translation: "das Gebiet, die Gegend; die Richtung" },
    { word: "RES", translation: "die Sache, das Ding, die Angelegenheit" },
    { word: "RESPUBLICA", translation: "der Staat" },
    { word: "SIGNUM", translation: "das Zeichen; das Merkmal; der Beweis" },
    { word: "SOL", translation: "die Sonne" },
    { word: "SPES", translation: "die Hoffnung, die Erwartung" },
    { word: "TAM", translation: "so" },
    { word: "TANTUM", translation: "nur" },
    { word: "TRADERE", translation: "übergeben, ausliefern" },
    { word: "TRAHERE", translation: "ziehen, schleppen" },
    { word: "TUUS", translation: "dein" },
    { word: "UBI", translation: "sobald" },
    { word: "VERO", translation: "aber, in der Tat, wirklich" },
    { word: "VERUS", translation: "echt, richtig, wahr" },
    { word: "AC", translation: "und, und auch; (im Vergleich) wie, als" },
    { word: "AETAS", translation: "die Zeit, das Zeitalter, die Lebenszeit" },
    { word: "AMITTERE", translation: "verlieren" },
    { word: "CLASSIS", translation: "die Flotte; die Abteilung" },
    { word: "DUX", translation: "der Anführer, die Anführerin" },
    { word: "FATUM", translation: "das Schicksal; der Götterspruch" },
    { word: "GENS", translation: "der Stamm; die Familie; das Volk" },
    { word: "GENUS", translation: "das Geschlecht; die Art; die Abstammung" },
    { word: "ITER", translation: "die Reise, der Weg, der Marsch" },
    { word: "LITUS", translation: "die Küste, der Strand" },
    { word: "LONGUS", translation: "lang, weit" },
    { word: "NAVIS", translation: "das Schiff" },
    { word: "NOMEN", translation: "der Name" },
    { word: "OFFICIUM", translation: "der Dienst; die Pflicht; das Pflichtgefühl" },
    { word: "OPUS", translation: "das Werk; die Arbeit; die Tat" },
    { word: "ORBIS", translation: "der Kreis(lauf); der Erdkreis, die Welt" },
    { word: "PRINCEPS", translation: "der erste Mann, der führende Mann; der Kaiser" },
    { word: "QUO", translation: "wohin?" },
    { word: "QUOD", translation: "dass, weil" },
    { word: "SCELUS", translation: "das Verbrechen" },
    { word: "SIC", translation: "so" },
    { word: "TEMPUS", translation: "die Zeit; die günstige Zeit; die Umstände" },
    { word: "UXOR", translation: "die Ehefrau, die Gattin" },
    { word: "VENTUS", translation: "der Wind" },
    { word: "CORPUS", translation: "der Körper; der Leichnam" },
    { word: "DUO", translation: "zwei" },
    { word: "EO", translation: "dorthin; deswegen" },
    { word: "FLUMEN", translation: "der Fluss" },
    { word: "LAUS", translation: "das Lob; der Ruhm" },
    { word: "MARE", translation: "das Meer" },
    { word: "MULIER", translation: "die Frau" },
    { word: "MUNUS", translation: "die Aufgabe; das Geschenk" },
    { word: "NOBILIS", translation: "adlig, vornehm; berühmt" },
    { word: "PECTUS", translation: "die Brust; das Herz" },
    { word: "RECIPERE", translation: "aufnehmen; wiederbekommen, zurücknehmen" },
    { word: "REDDERE", translation: "zurückgeben, geben; (m. doppeltem Akk.) jmdn. zu etw. machen" },
    { word: "TALIS", translation: "derartig, ein solcher, so (beschaffen)" },
    { word: "UT", translation: "sobald; sooft" },
    { word: "ALIENUS", translation: "fremd" },
    { word: "AUFERRE", translation: "wegbringen, rauben" },
    { word: "CASUS", translation: "der Fall, der Zufall" },
    { word: "COMPLURES", translation: "mehrere" },
    { word: "CONFERRE", translation: "zusammentragen, vergleichen" },
    { word: "CONSUL", translation: "der Konsul" },
    { word: "DIGNUS", translation: "würdig, wert (einer Sache)" },
    { word: "EXERCITUS", translation: "das Heer" },
    { word: "FACINUS", translation: "die Handlung, die Untat" },
    { word: "FERRE", translation: "bringen, tragen, ertragen" },
    { word: "INFERRE", translation: "hineintragen, zufügen" },
    { word: "INGENIUM", translation: "die Begabung, das Talent, der Verstand" },
    { word: "MALE", translation: "schlecht, schlimm" },
    { word: "METUS", translation: "die Angst, die Furcht" },
    { word: "MOS", translation: "der Brauch, die Sitte, (Pl.) der Charakter" },
    { word: "NEC", translation: "und nicht, auch nicht" },
    { word: "REFERRE", translation: "(zurück)bringen, berichten" },
    { word: "REGNUM", translation: "die Herrschaft, die Königsherrschaft, das Reich" },
    { word: "SENATUS", translation: "der Senat, die Senatsversammlung" },
    { word: "STATUERE", translation: "aufstellen, beschließen, festsetzen" },
    { word: "USUS", translation: "der Nutzen, die Benutzung, die Ausübung" },
    { word: "DOMUS", translation: "das Haus" },
    { word: "HIC", translation: "dieser, diese, dieses (hier), folgender" },
    { word: "ILLE", translation: "jener, jene, jenes, der, die, das (dort), damalig, berühmt" },
    { word: "LITTERAE", translation: "der Brief, die Literatur, die Wissenschaften, (Sg.) der Buchstabe" },
    { word: "PES", translation: "der Fuß" },
    { word: "PUBLICUS", translation: "öffentlich, staatlich" },
    { word: "UT", translation: "wie" },
    { word: "ACIES", translation: "die Schärfe, die Schlacht, das Heer" },
    { word: "BARBARUS", translation: "ausländisch, unzivilisiert, (Subst.) der Barbar" },
    { word: "CRIMEN", translation: "das Verbrechen, der Vorwurf" },
    { word: "IDEM", translation: "derselbe, der gleiche" },
    { word: "ISTE", translation: "dieser, diese, dieses (da)" },
    { word: "NIHIL NISI", translation: "nichts als, nur" },
    { word: "OPORTET", translation: "es gehört sich, es ist nötig" },
    { word: "RELIGIO", translation: "der Glaube, die (Gottes-)Verehrung, die Frömmigkeit, die Gewissenhaftigkeit" },
    { word: "VETUS", translation: "alt" },
    { word: "CUM", translation: "als, nachdem, weil, obwohl, während (dagegen)" },
    { word: "ITEM", translation: "ebenso, gleichfalls" },
    { word: "IUDICARE", translation: "urteilen, beurteilen" },
    { word: "IUS", translation: "das Recht" },
    { word: "NUNTIARE", translation: "melden" },
    { word: "OCCUPARE", translation: "besetzen, einnehmen" },
    { word: "PROVINCIA", translation: "die Provinz" },
    { word: "SUPPLICIUM", translation: "die Hinrichtung, die Strafe, das flehentliche Bitten" }
];



let selectedWordObj = null; // Speichert das aktuelle Wort-Objekt
let lastWord = ""; // Speichert das zuletzt verwendete Wort
let guessedLetters = [];
let timeElapsed = 0;
let timerInterval;
let mistakes = 0;
let gameEnded = false; // Neuer Zustand, um das Spielende zu verfolgen
let wins = 0; // Counter für gewonnene Spiele
let losses = 0; // Counter für verlorene Spiele
let recognition;
let isListening = false;

const hangmanSvg = document.getElementById("hangman-svg");
const wordDisplay = document.getElementById("word-display");
const lettersDiv = document.getElementById("letters");
const messageDiv = document.getElementById("message");
const translationDiv = document.getElementById("translation");
const timerDiv = document.getElementById("timer");
const resetButton = document.getElementById("reset-button");
const winsSpan = document.getElementById("wins"); // Counter für gewonnene Spiele
const lossesSpan = document.getElementById("losses"); // Counter für verlorene Spiele

const hangmanParts = [
    { id: "gallows", draw: (svg) => drawLine(svg, 50, 220, 150, 220) }, // Galgenbasis
    { id: "pole", draw: (svg) => drawLine(svg, 100, 220, 100, 50) },   // Galgenstange
    { id: "beam", draw: (svg) => drawLine(svg, 100, 50, 150, 50) },    // Galgenbalken
    { id: "rope", draw: (svg) => drawLine(svg, 150, 50, 150, 70) },   // Seil
    { id: "head", draw: (svg) => drawCircle(svg, 150, 90, 20) },       // Kopf
    { id: "body", draw: (svg) => drawLine(svg, 150, 110, 150, 170) }, // Körper
    { id: "left-arm", draw: (svg) => drawLine(svg, 150, 130, 120, 150) }, // Linker Arm
    { id: "right-arm", draw: (svg) => drawLine(svg, 150, 130, 180, 150) }, // Rechter Arm
    { id: "left-leg", draw: (svg) => drawLine(svg, 150, 170, 120, 200) },  // Linkes Bein
    { id: "right-leg", draw: (svg) => drawLine(svg, 150, 170, 180, 200) }  // Rechtes Bein
];

function init() {
    selectedWordObj = getRandomWord(); // Zufälliges Wort-Objekt auswählen
    guessedLetters = [];
    mistakes = 0;
    timeElapsed = 0;
    gameEnded = false; // Spielzustand zurücksetzen
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
    updateWordDisplay();
    createLetterButtons();
    updateHangmanDisplay();
    messageDiv.textContent = "";
    translationDiv.textContent = ""; // Deutsche Bedeutung zurücksetzen
    timerDiv.textContent = `Verstrichene Zeit: ${timeElapsed}s`;
    resetHangman();
}

function getRandomWord() {
    let newWordObj;
    do {
        newWordObj = words[Math.floor(Math.random() * words.length)];
    } while (newWordObj.word === lastWord); // Wiederhole, bis ein anderes Wort ausgewählt wird
    lastWord = newWordObj.word; // Speichere das neue Wort als zuletzt verwendet
    return newWordObj;
}

function updateWordDisplay() {
    wordDisplay.textContent = selectedWordObj.word
        .split("")
        .map(letter => guessedLetters.includes(letter) ? letter : "_")
        .join(" ");
}

function createLetterButtons() {
    lettersDiv.innerHTML = "";
    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i);
        const button = document.createElement("button");
        button.textContent = letter;
        button.classList.add("letter-button");
        button.addEventListener("click", () => guessLetter(letter, button));
        if (gameEnded || guessedLetters.includes(letter)) {
            button.disabled = true; // Buttons deaktivieren, wenn das Spiel beendet ist oder der Buchstabe bereits geraten wurde
        }
        lettersDiv.appendChild(button);
    }
}

function guessLetter(letter, button) {
    if (!guessedLetters.includes(letter) && !gameEnded) {
        guessedLetters.push(letter);
        button.disabled = true; // Deaktiviere den Button nach dem Klicken
        if (!selectedWordObj.word.includes(letter)) {
            mistakes++;
            updateHangmanDisplay();
        }
        updateWordDisplay();
        checkGameStatus();
    }
}

function updateHangmanDisplay() {
    if (mistakes > 0 && mistakes <= hangmanParts.length) {
        hangmanParts[mistakes - 1].draw(hangmanSvg);
    }
}

function resetHangman() {
    hangmanSvg.innerHTML = ""; // SVG leeren
}

function checkGameStatus() {
    if (selectedWordObj.word.split("").every(letter => guessedLetters.includes(letter))) {
        messageDiv.textContent = "Gewonnen!";
        translationDiv.textContent = `Deutsche Bedeutung: ${selectedWordObj.translation}`; // Deutsche Bedeutung anzeigen
        wins++; // Gewonnen-Counter erhöhen
        winsSpan.textContent = wins; // Gewonnen-Counter aktualisieren
        gameEnded = true; // Spiel beenden
        clearInterval(timerInterval);
        disableLetterButtons();
    } else if (mistakes >= hangmanParts.length) {
        messageDiv.textContent = `Verloren! Das Wort war: ${selectedWordObj.word}`;
        translationDiv.textContent = `Deutsche Bedeutung: ${selectedWordObj.translation}`; // Deutsche Bedeutung anzeigen
        losses++; // Verloren-Counter erhöhen
        lossesSpan.textContent = losses; // Verloren-Counter aktualisieren
        gameEnded = true; // Spiel beenden
        clearInterval(timerInterval);
        disableLetterButtons();
    }
}

function disableLetterButtons() {
    const buttons = document.querySelectorAll(".letter-button");
    buttons.forEach(button => {
        button.disabled = true; // Alle Buttons deaktivieren
    });
}

function updateTimer() {
    if (!gameEnded) {
        timeElapsed++;
        timerDiv.textContent = `Verstrichene Zeit: ${timeElapsed}s`;
    }
}

function drawLine(svg, x1, y1, x2, y2) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", "black");
    line.setAttribute("stroke-width", "2");
    svg.appendChild(line);
}

function drawCircle(svg, cx, cy, r) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", r);
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", "2");
    circle.setAttribute("fill", "transparent");
    svg.appendChild(circle);
}

function initSpeechRecognition() {
    // Browserkompatibilität prüfen
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        alert("Spracherkennung wird in diesem Browser nicht unterstützt!");
        return;
    }

    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "de-DE"; // Deutsch als Sprache

    recognition.onstart = () => {
        isListening = true;
        document.getElementById("voice-status").textContent = "Spracherkennung: Aktiv";
    };

    recognition.onend = () => {
        isListening = false;
        document.getElementById("voice-status").textContent = "Spracherkennung: Inaktiv";
    };

    recognition.onresult = (event) => {
        const spokenLetter = event.results[0][0].transcript.trim().toUpperCase();
        
        // Nur Buchstaben A-Z akzeptieren
        if (/^[A-ZÄÖÜ]$/.test(spokenLetter)) {
            // Finde den entsprechenden Button und "klicke" ihn
            const buttons = document.querySelectorAll(".letter-button");
            for (const button of buttons) {
                if (button.textContent === spokenLetter && !button.disabled) {
                    guessLetter(spokenLetter, button);
                    break;
                }
            }
        }
    };

    recognition.onerror = (event) => {
        console.error("Spracherkennungsfehler:", event.error);
        document.getElementById("voice-status").textContent = `Fehler: ${event.error}`;
    };
}

function toggleVoiceRecognition() {
    if (!recognition) {
        initSpeechRecognition();
    }

    if (isListening) {
        recognition.stop();
    } else {
        try {
            recognition.start();
        } catch (e) {
            console.error("Fehler beim Starten der Spracherkennung:", e);
        }
    }
}

// Füge den Event-Listener für den Voice-Button hinzu
document.getElementById("voice-button").addEventListener("click", toggleVoiceRecognition);

resetButton.addEventListener("click", init);

init();
