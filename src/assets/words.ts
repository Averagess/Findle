const words: string[] = [
  "AALTO",
  "AAMEN",
  "AARRE",
  "AATOS",
  "AATTO",
  "AHAVA",
  "AHDAS",
  "AHDIN",
  "AHKIO",
  "AHMIA",
  "AHNAS",
  "AHTAA",
  "AHVEN",
  "AIDAS",
  "AIHIO",
  "AIJAI",
  "AIKOA",
  "AINES",
  "AINOA",
  "AINUT",
  "AIRUT",
  "AISTI",
  "AITIO",
  "AITOA",
  "AITTA",
  "AIVAN",
  "AIVOT",
  "AJAJA",
  "AJELU",
  "AJURI",
  "ALATI",
  "ALAVA",
  "ALETA",
  "ALIAS",
  "ALIBI",
  "ALKAA",
  "ALKIO",
  "ALLAS",
  "ALPPI",
  "ALTIS",
  "AMMIS",
  "AMMUA",
  "AMMUS",
  "AMMUU",
  "AMPUA",
  "ANKEA",
  "ANKKA",
  "ANNOS",
  "ANODI",
  "ANOJA",
  "ANSIO",
  "ANTAA",
  "APILA",
  "APINA",
  "APNEA",
  "APURI",
  "ARABI",
  "ARAVA",
  "ARKKI",
  "ARKKU",
  "ARMAS",
  "AROMI",
  "ARPOA",
  "ARVIO",
  "ASEMA",
  "ASETE",
  "ASKAR",
  "ASKEL",
  "ASTIA",
  "ASTIN",
  "ASTMA",
  "ASTUA",
  "ASUIN",
  "ASUJA",
  "ATARI",
  "ATOMI",
  "AUETA",
  "AUKEA",
  "AUKIO",
  "AUKKO",
  "AUKOA",
  "AULIO",
  "AUTIO",
  "AVAIN",
  "AVARA",
  "AVATA",
  "AVAUS",
  "AVOIN",
  "BAANA",
  "BAARI",
  "BALSA",
  "BAMBU",
  "BANJO",
  "BARBI",
  "BASSO",
  "BEIBI",
  "BEIGE",
  "BENSA",
  "BIDEE",
  "BIISI",
  "BILSA",
  "BINGO",
  "BITTI",
  "BOKSI",
  "BONGO",
  "BONUS",
  "BOOLI",
  "BROMI",
  "BUSSI",
  "BUUMI",
  "BÄNDI",
  "CHILI",
  "COUPE",
  "DIIVA",
  "DIODI",
  "DIPPI",
  "DISKO",
  "DORKA",
  "DUUNI",
  "DUURI",
  "DYYNI",
  "EDETÄ",
  "EEPOS",
  "EHEYS",
  "EHKEN",
  "EHTIÄ",
  "EHTOO",
  "EHTYÄ",
  "EILEN",
  "EINES",
  "EKSYÄ",
  "ELLEI",
  "ELOON",
  "ELPYÄ",
  "ELÄIN",
  "ELÄKE",
  "ELÄMÄ",
  "ELÄVÄ",
  "EMPIÄ",
  "ENETÄ",
  "ENNEN",
  "ENSIN",
  "ENTÄS",
  "EPELI",
  "EPÄYS",
  "ERITE",
  "ERITÄ",
  "EROON",
  "EROTA",
  "ESIIN",
  "ESINE",
  "ESITE",
  "ESSEE",
  "ESTYÄ",
  "ESTÄÄ",
  "ETANA",
  "ETEEN",
  "ETELÄ",
  "ETEVÄ",
  "ETSIN",
  "ETSIÄ",
  "ETUUS",
  "ETÄIS",
  "EUKKO",
  "EVÄTÄ",
  "FAIJA",
  "FAKSI",
  "FAKTA",
  "FARAO",
  "FARMI",
  "FATSI",
  "FIINI",
  "FIKSU",
  "FILEE",
  "FILMI",
  "FINNI",
  "FIRMA",
  "FOBIA",
  "FOKUS",
  "FOLIO",
  "FORMU",
  "FUDIS",
  "FUTIS",
  "FÖÖNI",
  "GAALA",
  "GAMMA",
  "GEELI",
  "GEENI",
  "GENRE",
  "GETTO",
  "GIMMA",
  "GLÖGI",
  "GOUDA",
  "GRADU",
  "GUAVA",
  "HAAMU",
  "HAAPA",
  "HAARA",
  "HAAVA",
  "HAAVI",
  "HAHLO",
  "HAHMO",
  "HAIKU",
  "HAIMA",
  "HAITE",
  "HAKEA",
  "HAKKU",
  "HALIA",
  "HALJU",
  "HALKI",
  "HALKO",
  "HALLA",
  "HALLI",
  "HALMA",
  "HALME",
  "HALOO",
  "HALPA",
  "HANHI",
  "HANKE",
  "HANKI",
  "HANKO",
  "HANSA",
  "HAPAN",
  "HAPPI",
  "HAPPO",
  "HAPSI",
  "HAPSU",
  "HARHA",
  "HARJA",
  "HARJU",
  "HARMI",
  "HARRI",
  "HARSO",
  "HARVA",
  "HASSI",
  "HASSU",
  "HATTU",
  "HAUDE",
  "HAUIS",
  "HAUKI",
  "HAULI",
  "HAURA",
  "HAUTA",
  "HAUVA",
  "HEHKU",
  "HEHTO",
  "HEILA",
  "HEILI",
  "HEIMO",
  "HEINÄ",
  "HEITE",
  "HELEÄ",
  "HELLA",
  "HELLE",
  "HELLÄ",
  "HELMA",
  "HELMI",
  "HEMMO",
  "HENKI",
  "HENNA",
  "HENRY",
  "HENTO",
  "HEPPA",
  "HEPPU",
  "HEREÄ",
  "HERJA",
  "HERMO",
  "HERNE",
  "HERRA",
  "HERUA",
  "HETKI",
  "HEVIN",
  "HIDAS",
  "HIESU",
  "HIHNA",
  "HIILI",
  "HIIRI",
  "HIISI",
  "HIIVA",
  "HIKKA",
  "HILLA",
  "HILLO",
  "HILSE",
  "HILUT",
  "HINDI",
  "HINDU",
  "HINKU",
  "HINTA",
  "HIOMO",
  "HIOTA",
  "HIPAT",
  "HIPIÄ",
  "HIPOA",
  "HIPPA",
  "HIPPI",
  "HIPPU",
  "HIRMU",
  "HIRSI",
  "HIRVI",
  "HISSA",
  "HISSI",
  "HITSI",
  "HITTI",
  "HITTO",
  "HIUKA",
  "HIVEN",
  "HOHDE",
  "HOHKA",
  "HOHTO",
  "HOIDE",
  "HOITO",
  "HOIVA",
  "HOKEA",
  "HOLVI",
  "HOMMA",
  "HOPEA",
  "HOPPU",
  "HORMI",
  "HORNA",
  "HOSUA",
  "HOURE",
  "HUHTA",
  "HUILU",
  "HUIMA",
  "HUIVI",
  "HUKKA",
  "HULLU",
  "HUMMA",
  "HUOKU",
  "HUOLI",
  "HUONE",
  "HUONO",
  "HUOPA",
  "HUOVI",
  "HUPPU",
  "HUPSU",
  "HURJA",
  "HURMA",
  "HUTTU",
  "HUULI",
  "HUUMA",
  "HUUME",
  "HUURU",
  "HUUSI",
  "HUUTI",
  "HUUTO",
  "HYLJE",
  "HYLKY",
  "HYLLY",
  "HYLSY",
  "HYMIÖ",
  "HYMNI",
  "HYPPY",
  "HYRRÄ",
  "HYTTI",
  "HYVIN",
  "HYYDE",
  "HYYTÖ",
  "HYÖKY",
  "HYÖTY",
  "HYÖTÖ",
  "HÄIJY",
  "HÄIVE",
  "HÄIVÄ",
  "HÄKKI",
  "HÄNTÄ",
  "HÄPEÄ",
  "HÄRKÄ",
  "HÄRMÄ",
  "HÄVIÖ",
  "HÄÄTÖ",
  "HÄÄVI",
  "HÄÄYÖ",
  "HÖHLÄ",
  "HÖLLÄ",
  "HÖLMÖ",
  "HÖPSÖ",
  "HÖPÖN",
  "HÖRHÖ",
  "HÖTTÖ",
  "HÖYDE",
  "HÖYLI",
  "HÖYLÄ",
  "HÖYRY",
  "HÖYTY",
  "IDOLI",
  "IHANA",
  "IIKKA",
  "IIRIS",
  "IKINÄ",
  "IKONI",
  "IKÄNÄ",
  "IKÄVÄ",
  "IKÄYS",
  "IKÄÄN",
  "ILKEÄ",
  "ILKIÖ",
  "ILMAN",
  "ILMIÖ",
  "ILVES",
  "IMAGO",
  "IMELÄ",
  "IMUKE",
  "IMURI",
  "ININÄ",
  "INSSI",
  "INTTI",
  "IPANA",
  "IRVIÄ",
  "ISKEÄ",
  "ISLAM",
  "ISOTA",
  "ISOUS",
  "ISTUA",
  "ISYYS",
  "ITARA",
  "ITKEÄ",
  "IVATA",
  "IÄKÄS",
  "IÄTÖN",
  "JAAHA",
  "JAALA",
  "JAHKA",
  "JAHTI",
  "JAKAA",
  "JAKKI",
  "JAKKU",
  "JAKSO",
  "JALAN",
  "JALAS",
  "JALKA",
  "JALUS",
  "JAMIT",
  "JANNU",
  "JAOKE",
  "JAPSI",
  "JARRU",
  "JATKE",
  "JATKO",
  "JATSI",
  "JAUHE",
  "JAUHO",
  "JEKKU",
  "JEMMA",
  "JENGI",
  "JENKA",
  "JEPPE",
  "JERMU",
  "JETTI",
  "JIIRI",
  "JIPPO",
  "JOHDE",
  "JOHTO",
  "JOKIN",
  "JOLLA",
  "JOLMA",
  "JONNE",
  "JOOGA",
  "JOOGI",
  "JOOLI",
  "JOSPA",
  "JOTEN",
  "JOUHI",
  "JOULE",
  "JOULU",
  "JOUSI",
  "JUHLA",
  "JUHTA",
  "JUKKA",
  "JUKRA",
  "JULKI",
  "JULMA",
  "JUNNU",
  "JUODA",
  "JUOMA",
  "JUOMU",
  "JUONI",
  "JUOPA",
  "JUORU",
  "JUOTE",
  "JUOVA",
  "JUPPI",
  "JUROA",
  "JURRI",
  "JUSSI",
  "JUTTU",
  "JUURI",
  "JYLHÄ",
  "JYSKE",
  "JYTKE",
  "JYTÄÄ",
  "JÄKKI",
  "JÄLKI",
  "JÄLSI",
  "JÄNIS",
  "JÄNKÄ",
  "JÄNNE",
  "JÄNNÄ",
  "JÄREÄ",
  "JÄRIN",
  "JÄRKI",
  "JÄRVI",
  "JÄSEN",
  "JÄTKÄ",
  "JÄTTI",
  "JÄTTÖ",
  "JÄTÖS",
  "JÄYHÄ",
  "JÄYNÄ",
  "JÄÄDÄ",
  "JÄÄHY",
  "JÄÄMÄ",
  "JÄÄRÄ",
  "JÄÄVI",
  "KAADE",
  "KAALI",
  "KAAOS",
  "KAAPU",
  "KAARA",
  "KAARI",
  "KAASO",
  "KAASU",
  "KAATO",
  "KAAVA",
  "KAHJO",
  "KAHJU",
  "KAHLE",
  "KAHTA",
  "KAHVA",
  "KAHVI",
  "KAIDE",
  "KAIHI",
  "KAIHO",
  "KAIKU",
  "KAIMA",
  "KAINO",
  "KAIRA",
  "KAITA",
  "KAIVO",
  "KAIVU",
  "KAJAL",
  "KAKKA",
  "KAKKU",
  "KAKRU",
  "KAKSI",
  "KALHU",
  "KALJA",
  "KALJU",
  "KALKE",
  "KALLA",
  "KALLE",
  "KALLO",
  "KALMA",
  "KALMO",
  "KALPA",
  "KALSA",
  "KALVO",
  "KAMEE",
  "KAMMO",
  "KAMPA",
  "KAMPE",
  "KAMPI",
  "KANDI",
  "KANKI",
  "KANNA",
  "KANNE",
  "KANNU",
  "KANSA",
  "KANSI",
  "KANTA",
  "KANTO",
  "KAPEA",
  "KAPPA",
  "KAPPI",
  "KAPSE",
  "KAPUT",
  "KARHE",
  "KARHI",
  "KARHO",
  "KARHU",
  "KARJA",
  "KARJU",
  "KARKU",
  "KARMA",
  "KARMI",
  "KARRI",
  "KARSI",
  "KARVA",
  "KARVE",
  "KASKI",
  "KASKO",
  "KASKU",
  "KASSA",
  "KASSI",
  "KASTE",
  "KASTI",
  "KASVI",
  "KASVO",
  "KASVU",
  "KATKA",
  "KATKI",
  "KATKO",
  "KATKU",
  "KATOS",
  "KATSE",
  "KATTI",
  "KATTO",
  "KATUA",
  "KATVE",
  "KAUAN",
  "KAUAS",
  "KAUHA",
  "KAUHU",
  "KAUKO",
  "KAULA",
  "KAUNA",
  "KAURA",
  "KAUSI",
  "KAVIO",
  "KEBAB",
  "KEHIÄ",
  "KEHNO",
  "KEHNÄ",
  "KEHRÄ",
  "KEHTO",
  "KEHUA",
  "KEHYS",
  "KEIJA",
  "KEIJU",
  "KEILA",
  "KEINO",
  "KEINU",
  "KEISO",
  "KEKRI",
  "KEKSI",
  "KELJU",
  "KELLO",
  "KELMI",
  "KELMU",
  "KELPO",
  "KELTA",
  "KEMIA",
  "KEMUT",
  "KENDO",
  "KENKÄ",
  "KENNO",
  "KEPEÄ",
  "KEPPI",
  "KERHO",
  "KERIÄ",
  "KERMA",
  "KERNI",
  "KERSA",
  "KERTA",
  "KERTO",
  "KERUU",
  "KESIÄ",
  "KESKI",
  "KESSU",
  "KESTI",
  "KESTO",
  "KETJU",
  "KETKU",
  "KETSI",
  "KETTO",
  "KETTU",
  "KEULA",
  "KEVEÄ",
  "KEVYT",
  "KEVÄT",
  "KHAKI",
  "KHMER",
  "KIELI",
  "KIELO",
  "KIERO",
  "KIERÄ",
  "KIHTI",
  "KIILA",
  "KIILU",
  "KIIMA",
  "KIINA",
  "KIIRE",
  "KIIRI",
  "KIIRU",
  "KIISU",
  "KIITO",
  "KIIVI",
  "KIKKA",
  "KILJU",
  "KILKE",
  "KILPA",
  "KILPI",
  "KILSA",
  "KILTA",
  "KIMEÄ",
  "KIMMA",
  "KIMPI",
  "KINGI",
  "KINOS",
  "KINUA",
  "KIPEÄ",
  "KIPPI",
  "KIPPO",
  "KIPSA",
  "KIPSI",
  "KIREÄ",
  "KIRIÄ",
  "KIRJA",
  "KIRJE",
  "KIRJO",
  "KIRNU",
  "KIRSI",
  "KIRSU",
  "KIRVA",
  "KISKA",
  "KISKO",
  "KISSA",
  "KITKA",
  "KITKU",
  "KITSI",
  "KITTI",
  "KITUA",
  "KIUAS",
  "KIULU",
  "KIURU",
  "KIUSA",
  "KIVES",
  "KLANI",
  "KLAPI",
  "KLUBI",
  "KOALA",
  "KOBRA",
  "KOHDE",
  "KOHTA",
  "KOHTI",
  "KOHTU",
  "KOHVA",
  "KOIPI",
  "KOIRA",
  "KOISA",
  "KOISO",
  "KOITE",
  "KOIVU",
  "KOKEA",
  "KOKKA",
  "KOKKI",
  "KOKKO",
  "KOKSI",
  "KOLEA",
  "KOLHO",
  "KOLHU",
  "KOLJA",
  "KOLKE",
  "KOLLI",
  "KOLLO",
  "KOLME",
  "KOLMI",
  "KOLOA",
  "KOLVI",
  "KOMEA",
  "KOMPA",
  "KONKI",
  "KONNA",
  "KONSA",
  "KONTU",
  "KOODI",
  "KOOMA",
  "KOOTA",
  "KOPEA",
  "KOPIO",
  "KOPLA",
  "KOPPA",
  "KOPPI",
  "KOPRA",
  "KOPSE",
  "KOPSU",
  "KOPTI",
  "KOREA",
  "KORIS",
  "KORKO",
  "KORNI",
  "KORPI",
  "KORSI",
  "KORSU",
  "KORTE",
  "KORVA",
  "KORVO",
  "KOSER",
  "KOSIA",
  "KOSKA",
  "KOSKI",
  "KOSTE",
  "KOSTO",
  "KOTIA",
  "KOTKA",
  "KOTOA",
  "KOTSA",
  "KOTVA",
  "KOUHO",
  "KOULU",
  "KOURA",
  "KOURU",
  "KOVAA",
  "KOVIN",
  "KOVIS",
  "KRAPU",
  "KRIMI",
  "KROMI",
  "KRÄNÄ",
  "KUDIN",
  "KUDOS",
  "KUHMU",
  "KUHUN",
  "KUILU",
  "KUIRI",
  "KUITU",
  "KUIVA",
  "KUKIN",
  "KUKKA",
  "KUKKO",
  "KUKKU",
  "KUKSA",
  "KULHO",
  "KULJU",
  "KULKU",
  "KULLI",
  "KULMA",
  "KULTA",
  "KULTI",
  "KULUA",
  "KUMEA",
  "KUMMA",
  "KUMMI",
  "KUMPI",
  "KUMPU",
  "KUNDI",
  "KUNNE",
  "KUNPA",
  "KUNTA",
  "KUNTO",
  "KUOHA",
  "KUOHU",
  "KUOLA",
  "KUOLO",
  "KUOMA",
  "KUOMU",
  "KUONA",
  "KUONO",
  "KUORE",
  "KUORI",
  "KUORO",
  "KUOSI",
  "KUOVI",
  "KUPLA",
  "KUPPA",
  "KUPPI",
  "KUPRO",
  "KUPRU",
  "KURDI",
  "KURHO",
  "KURIN",
  "KURJA",
  "KURKI",
  "KURKO",
  "KUROA",
  "KURRA",
  "KURRE",
  "KURRI",
  "KURVA",
  "KURVI",
  "KUSKI",
  "KUSSA",
  "KUSTA",
  "KUTEA",
  "KUTEN",
  "KUTKA",
  "KUTOA",
  "KUTSU",
  "KUTTU",
  "KUULA",
  "KUULO",
  "KUULU",
  "KUUMA",
  "KUUME",
  "KUURA",
  "KUURI",
  "KUURO",
  "KUUSI",
  "KUVAS",
  "KUVIO",
  "KVASI",
  "KYETÄ",
  "KYHMY",
  "KYLKI",
  "KYLLÄ",
  "KYLMÄ",
  "KYLPY",
  "KYLVÖ",
  "KYMRI",
  "KYNIÄ",
  "KYNSI",
  "KYNTE",
  "KYNTÖ",
  "KYPSI",
  "KYPSÄ",
  "KYRPÄ",
  "KYRSÄ",
  "KYSSÄ",
  "KYSTA",
  "KYSTÄ",
  "KYSYÄ",
  "KYTEÄ",
  "KYTIS",
  "KYTKY",
  "KYTTÄ",
  "KYYLÄ",
  "KYYRY",
  "KYYTI",
  "KYÖMY",
  "KÄHEÄ",
  "KÄNNI",
  "KÄNNY",
  "KÄNSÄ",
  "KÄREÄ",
  "KÄRHI",
  "KÄRHÖ",
  "KÄRKI",
  "KÄRRI",
  "KÄRRY",
  "KÄRSÄ",
  "KÄSIN",
  "KÄSKY",
  "KÄSNÄ",
  "KÄTKÖ",
  "KÄYDÄ",
  "KÄYPÄ",
  "KÄYRÄ",
  "KÄYTE",
  "KÄYVÄ",
  "KÄÄMI",
  "KÄÄPÄ",
  "KÄÄRE",
  "KÄÄRÖ",
  "KÄÄTY",
  "KÖHIÄ",
  "KÖKKÖ",
  "KÖLLI",
  "KÖSSI",
  "KÖYHÄ",
  "KÖYRY",
  "KÖYSI",
  "KÖYTE",
  "KÖÖRI",
  "LAAJA",
  "LAAKA",
  "LAAKI",
  "LAAMA",
  "LAARI",
  "LAATA",
  "LAATU",
  "LAAVA",
  "LAAVU",
  "LADOS",
  "LAFKA",
  "LAHJA",
  "LAHJE",
  "LAHKO",
  "LAHNA",
  "LAHTI",
  "LAIHA",
  "LAIHO",
  "LAIMI",
  "LAINA",
  "LAINE",
  "LAITA",
  "LAITE",
  "LAIVA",
  "LAKEA",
  "LAKKA",
  "LAKKI",
  "LAKKO",
  "LAMEE",
  "LAMPI",
  "LANDE",
  "LANKA",
  "LANKO",
  "LANNE",
  "LANTA",
  "LAOTA",
  "LAPIO",
  "LAPPI",
  "LAPPO",
  "LAPPU",
  "LAPSI",
  "LARGO",
  "LASER",
  "LASKO",
  "LASKU",
  "LASSI",
  "LASSO",
  "LASTA",
  "LASTI",
  "LASTU",
  "LATOA",
  "LATTA",
  "LATVA",
  "LAUDE",
  "LAUHA",
  "LAULU",
  "LAUMA",
  "LAUSE",
  "LAUTA",
  "LAVEA",
  "LEFFA",
  "LEHMI",
  "LEHMÄ",
  "LEHTI",
  "LEHTO",
  "LEHVÄ",
  "LEIDI",
  "LEIJA",
  "LEIKE",
  "LEILI",
  "LEIMA",
  "LEIMU",
  "LEINI",
  "LEIPÄ",
  "LEIRI",
  "LEIVO",
  "LELLI",
  "LEMPI",
  "LEMPO",
  "LENKO",
  "LENTO",
  "LEPPÄ",
  "LEPRA",
  "LEPSU",
  "LESBO",
  "LESKI",
  "LESTI",
  "LESTY",
  "LESTÄ",
  "LETKA",
  "LETKU",
  "LETTI",
  "LETTO",
  "LETTU",
  "LEUKA",
  "LEUKU",
  "LEUTO",
  "LEVEÄ",
  "LIATA",
  "LIEJU",
  "LIEKA",
  "LIEKO",
  "LIEMI",
  "LIERI",
  "LIERO",
  "LIESI",
  "LIESU",
  "LIETE",
  "LIEVE",
  "LIEVÄ",
  "LIFTI",
  "LIHAS",
  "LIHOA",
  "LIIAN",
  "LIIGA",
  "LIIKA",
  "LIIKE",
  "LIILA",
  "LIIMA",
  "LIINA",
  "LIIRA",
  "LIITE",
  "LIITO",
  "LIITU",
  "LIIVI",
  "LIKIN",
  "LIKKA",
  "LIKSA",
  "LILJA",
  "LIMBO",
  "LIMSA",
  "LINJA",
  "LINKO",
  "LINNA",
  "LINNI",
  "LINTU",
  "LIOTA",
  "LIPAS",
  "LIPEÄ",
  "LIPOA",
  "LIPPA",
  "LIPPI",
  "LIPPO",
  "LIPPU",
  "LIPUA",
  "LIRIÄ",
  "LIRUA",
  "LISKO",
  "LISTA",
  "LISÄÄ",
  "LITKU",
  "LITRA",
  "LITSA",
  "LITSI",
  "LIUKU",
  "LIUOS",
  "LIUTA",
  "LOATA",
  "LOBBY",
  "LODEN",
  "LOHKO",
  "LOHTU",
  "LOIMI",
  "LOIMU",
  "LOIVA",
  "LOJUA",
  "LOKKI",
  "LOKSE",
  "LOMMO",
  "LONKA",
  "LOOSI",
  "LOOTA",
  "LOPEN",
  "LOPPU",
  "LORDI",
  "LOSKA",
  "LOSSI",
  "LOTJA",
  "LOTTA",
  "LOTTO",
  "LOUHE",
  "LUHTA",
  "LUHTI",
  "LUIHU",
  "LUIKU",
  "LUIRU",
  "LUISU",
  "LUJAA",
  "LUKEA",
  "LUKIO",
  "LUKKI",
  "LUKKO",
  "LUKSI",
  "LULLA",
  "LUMEN",
  "LUMME",
  "LUNKI",
  "LUNNI",
  "LUODA",
  "LUODE",
  "LUOJA",
  "LUOKO",
  "LUOLA",
  "LUOMA",
  "LUOMI",
  "LUOMU",
  "LUONA",
  "LUOTA",
  "LUOTI",
  "LUOTO",
  "LUOVA",
  "LUOVI",
  "LUPPI",
  "LUPPO",
  "LUSIA",
  "LUSTE",
  "LUSTO",
  "LUTKA",
  "LUULO",
  "LUUMU",
  "LUURI",
  "LUUTA",
  "LYHDE",
  "LYHKI",
  "LYHTY",
  "LYHYT",
  "LYIJY",
  "LYKKY",
  "LYMFA",
  "LYPSY",
  "LYSEO",
  "LYSTI",
  "LYYDI",
  "LYYRA",
  "LYÖDÄ",
  "LYÖJÄ",
  "LÄHDE",
  "LÄHES",
  "LÄHIN",
  "LÄHIÖ",
  "LÄHTÖ",
  "LÄIKE",
  "LÄKKI",
  "LÄKSY",
  "LÄLLY",
  "LÄMPÖ",
  "LÄNSI",
  "LÄPPÄ",
  "LÄPSE",
  "LÄRVI",
  "LÄSIÄ",
  "LÄSKI",
  "LÄSNÄ",
  "LÄSSY",
  "LÄTKÄ",
  "LÄTSÄ",
  "LÄTTI",
  "LÄTTY",
  "LÄÄKE",
  "LÄÄNI",
  "LÄÄTE",
  "LÄÄVÄ",
  "LÖLLÖ",
  "LÖSSI",
  "LÖTKÖ",
  "LÖYHÄ",
  "LÖYLY",
  "LÖYSÄ",
  "LÖYTÖ",
  "MAAGI",
  "MAALI",
  "MAAMO",
  "MAARU",
  "MAATA",
  "MAATE",
  "MACHO",
  "MAFIA",
  "MAGIA",
  "MAGMA",
  "MAGNA",
  "MAHIS",
  "MAHLA",
  "MAHTI",
  "MAIJA",
  "MAILA",
  "MAILI",
  "MAINE",
  "MAITI",
  "MAITO",
  "MAKEA",
  "MAKKI",
  "MAKRO",
  "MAKSA",
  "MAKSI",
  "MAKSU",
  "MAKUU",
  "MALJA",
  "MALKA",
  "MALLI",
  "MALMI",
  "MALTO",
  "MALVA",
  "MAMBA",
  "MAMBO",
  "MAMMA",
  "MANGO",
  "MANIA",
  "MANNA",
  "MANNE",
  "MANSI",
  "MANTO",
  "MANTU",
  "MAPPI",
  "MARJA",
  "MARSU",
  "MARTO",
  "MASKI",
  "MASSA",
  "MASSI",
  "MASSU",
  "MASTO",
  "MATAA",
  "MATKA",
  "MATSI",
  "MATTA",
  "MATTI",
  "MATTO",
  "MAURI",
  "MEDIA",
  "MEIKÄ",
  "MEKKO",
  "MELKO",
  "MELOA",
  "MELTO",
  "MENNÄ",
  "MENYY",
  "MERTA",
  "MESOA",
  "MESSI",
  "MESSU",
  "MESTA",
  "METKA",
  "METKU",
  "METRI",
  "METRO",
  "METSO",
  "METSÄ",
  "MIELI",
  "MIERO",
  "MIETE",
  "MIETO",
  "MIHIN",
  "MIILU",
  "MIINA",
  "MIKIN",
  "MIKKI",
  "MIKKO",
  "MIKRO",
  "MIKSI",
  "MILLI",
  "MIMMI",
  "MINIÄ",
  "MINNE",
  "MIRHA",
  "MIRRI",
  "MISSI",
  "MISSÄ",
  "MISTÄ",
  "MITEN",
  "MITRA",
  "MITTA",
  "MODUS",
  "MOIKE",
  "MOIRE",
  "MOITE",
  "MOKKA",
  "MOLLI",
  "MONES",
  "MONTA",
  "MOODI",
  "MOOLI",
  "MOPPI",
  "MOPSI",
  "MORON",
  "MOSEL",
  "MOSKA",
  "MOTTI",
  "MOTTO",
  "MUHEA",
  "MUHIA",
  "MUHVI",
  "MUIJA",
  "MUKAA",
  "MUKSU",
  "MULLI",
  "MULTA",
  "MUMMI",
  "MUMMO",
  "MUMMU",
  "MUNIA",
  "MUONA",
  "MUORI",
  "MUOTI",
  "MUOTO",
  "MUOVI",
  "MUREA",
  "MUREN",
  "MURHA",
  "MURHE",
  "MURJU",
  "MURRE",
  "MURSU",
  "MURTO",
  "MUSEO",
  "MUSSU",
  "MUSTA",
  "MUSTE",
  "MUTKA",
  "MUTSI",
  "MUTTA",
  "MUUAN",
  "MUULI",
  "MUURI",
  "MUUSA",
  "MUUSI",
  "MYHKY",
  "MYKIÖ",
  "MYKKÄ",
  "MYLLY",
  "MYRHA",
  "MYSKI",
  "MYSLI",
  "MYSSY",
  "MYTTY",
  "MYYDÄ",
  "MYYJÄ",
  "MYYRÄ",
  "MYYTY",
  "MYÖDÄ",
  "MYÖHÄ",
  "MYÖTÄ",
  "MÄHKÄ",
  "MÄIHÄ",
  "MÄIKE",
  "MÄLLI",
  "MÄLSÄ",
  "MÄMMI",
  "MÄNTY",
  "MÄNTÄ",
  "MÄRKÄ",
  "MÄSIS",
  "MÄSKI",
  "MÄTKY",
  "MÄTÄS",
  "MÄYRÄ",
  "MÄÄRE",
  "MÄÄRÄ",
  "MÖKKI",
  "MÖLLI",
  "MÖMMÖ",
  "MÖNJÄ",
  "MÖREÄ",
  "MÖRKÖ",
  "MÖSSÖ",
  "MÖTTI",
  "MÖYHY",
  "NAALI",
  "NAAMA",
  "NAARA",
  "NAAVA",
  "NAFTA",
  "NAFTI",
  "NAHAS",
  "NAHKA",
  "NAIDA",
  "NAKKI",
  "NAKSU",
  "NALLE",
  "NALLI",
  "NANNA",
  "NAPPA",
  "NAPPI",
  "NAPPO",
  "NAPSU",
  "NARRI",
  "NASSE",
  "NASSU",
  "NASTA",
  "NATSA",
  "NATSI",
  "NAUHA",
  "NAULA",
  "NAURU",
  "NAUTA",
  "NEITI",
  "NEITO",
  "NELIÖ",
  "NELJÄ",
  "NEPPI",
  "NESTE",
  "NETTO",
  "NEULA",
  "NEULE",
  "NEUVO",
  "NIDOS",
  "NIELU",
  "NIEMI",
  "NIHTI",
  "NIINI",
  "NIISI",
  "NIKSI",
  "NIMIÖ",
  "NIOBI",
  "NIPPA",
  "NIPPU",
  "NIRRI",
  "NIRSO",
  "NISKA",
  "NISSE",
  "NISTI",
  "NITOA",
  "NITRO",
  "NIUHO",
  "NIVEL",
  "NIVOA",
  "NOETA",
  "NOITA",
  "NOKKA",
  "NOLLA",
  "NOPEA",
  "NOPPA",
  "NOPSA",
  "NORJA",
  "NORMI",
  "NORRI",
  "NORSU",
  "NORUA",
  "NOSTE",
  "NOSTO",
  "NOTKO",
  "NOUSU",
  "NOUTO",
  "NUGAA",
  "NUHDE",
  "NUIJA",
  "NUIVA",
  "NUKKA",
  "NUKKE",
  "NUKKI",
  "NULJU",
  "NUMMI",
  "NUNNA",
  "NUOLI",
  "NUOLU",
  "NUORA",
  "NUORI",
  "NUPPI",
  "NUPPU",
  "NUREA",
  "NURIN",
  "NURJA",
  "NURMI",
  "NUTTU",
  "NUUKA",
  "NYKIÄ",
  "NYKYÄ",
  "NYLKY",
  "NYLON",
  "NYMFI",
  "NYNNY",
  "NYPPY",
  "NYREÄ",
  "NYSTY",
  "NYÖRI",
  "NÄHDÄ",
  "NÄKKI",
  "NÄKYÄ",
  "NÄLKÄ",
  "NÄNNI",
  "NÄPPI",
  "NÄPPY",
  "NÄPSÄ",
  "NÄRHI",
  "NÄSIÄ",
  "NÄTTI",
  "NÄYTE",
  "NÄÄTÄ",
  "NÖSSÖ",
  "NÖYRÄ",
  "OHARI",
  "OHEEN",
  "OHETA",
  "OHHOH",
  "OHIMO",
  "OHJAS",
  "OHJUS",
  "OHUUS",
  "OIETA",
  "OIJOI",
  "OIKEA",
  "OIKKU",
  "OIKOA",
  "OINAS",
  "OITIS",
  "OJOON",
  "OJUKE",
  "OKSIA",
  "OLAKE",
  "OLEVA",
  "OLIJA",
  "OMATA",
  "OMENA",
  "OMMEL",
  "OMPPU",
  "ONKIA",
  "ONTTO",
  "ONTUA",
  "OPPIA",
  "OPTIO",
  "ORAVA",
  "ORIGO",
  "ORKKU",
  "OSAKE",
  "OSATA",
  "OSTAA",
  "OSTOS",
  "OSUMA",
  "OSUUS",
  "OSUVA",
  "OTTAA",
  "OVELA",
  "PAALI",
  "PAALU",
  "PAANU",
  "PAASI",
  "PAAVI",
  "PAETA",
  "PAHKA",
  "PAHKI",
  "PAHNA",
  "PAHUS",
  "PAHVI",
  "PAINE",
  "PAINI",
  "PAINO",
  "PAISE",
  "PAITA",
  "PAKKA",
  "PAKKI",
  "PAKKO",
  "PAKSU",
  "PAKTI",
  "PALAA",
  "PALHO",
  "PALJE",
  "PALJO",
  "PALJU",
  "PALKO",
  "PALLE",
  "PALLI",
  "PALLO",
  "PALMU",
  "PALOA",
  "PALSA",
  "PALTE",
  "PALUU",
  "PALVI",
  "PAMPA",
  "PANDA",
  "PANNA",
  "PANNU",
  "PANOS",
  "PANTA",
  "PAPPA",
  "PAPPI",
  "PARAS",
  "PARKA",
  "PARKU",
  "PARRU",
  "PARSA",
  "PARSI",
  "PARTA",
  "PARTY",
  "PARVI",
  "PASHA",
  "PASKA",
  "PASMA",
  "PASSI",
  "PASTA",
  "PATEE",
  "PATIO",
  "PATJA",
  "PATTI",
  "PAUHU",
  "PAUKE",
  "PAULA",
  "PAUNA",
  "PEEAA",
  "PEESI",
  "PEFFA",
  "PEHKO",
  "PEHKU",
  "PEHMO",
  "PEHVA",
  "PEILI",
  "PEITE",
  "PEKKA",
  "PELKO",
  "PELLE",
  "PELTI",
  "PELTO",
  "PELUU",
  "PENIS",
  "PENNE",
  "PENNI",
  "PENNY",
  "PENSA",
  "PENTU",
  "PEONI",
  "PEPPU",
  "PERHE",
  "PERHO",
  "PERIN",
  "PERIÄ",
  "PERNA",
  "PERSE",
  "PERSO",
  "PERUA",
  "PERUS",
  "PERVO",
  "PESIN",
  "PESIS",
  "PESIÄ",
  "PESKI",
  "PESTI",
  "PESTO",
  "PESTÄ",
  "PESUE",
  "PESYE",
  "PETOS",
  "PETSI",
  "PETTU",
  "PEURA",
  "PIANO",
  "PIDIN",
  "PIDOT",
  "PIELI",
  "PIENA",
  "PIENI",
  "PIERU",
  "PIETI",
  "PIETÄ",
  "PIHIÄ",
  "PIHKA",
  "PIHTA",
  "PIHVI",
  "PIIKA",
  "PIILO",
  "PIILU",
  "PIIMÄ",
  "PIINA",
  "PIIRI",
  "PIIRU",
  "PIISI",
  "PIKAA",
  "PIKEE",
  "PIKKU",
  "PILKE",
  "PILLI",
  "PILLU",
  "PILVI",
  "PIMEÄ",
  "PIMIÖ",
  "PINJA",
  "PINKO",
  "PINNA",
  "PINNE",
  "PINNI",
  "PINTA",
  "PIONI",
  "PIRTA",
  "PIRTU",
  "PISIÄ",
  "PISKI",
  "PISSA",
  "PISSI",
  "PISTE",
  "PISTO",
  "PITKO",
  "PITKÄ",
  "PITSA",
  "PITSI",
  "PITÄÄ",
  "PIUHA",
  "PIZZA",
  "PLARI",
  "PLATY",
  "PLÄSI",
  "PLÖRÖ",
  "POHJA",
  "POHJE",
  "POIES",
  "POIJU",
  "POIKA",
  "POIMU",
  "POKKA",
  "POKSI",
  "POLIO",
  "POLKU",
  "POLLA",
  "POLLE",
  "POLTE",
  "POLVI",
  "POMMI",
  "POMSI",
  "PONDI",
  "PONSI",
  "POOLI",
  "POOLO",
  "POPPA",
  "PORHO",
  "PORNO",
  "POSKI",
  "POSSU",
  "POSTI",
  "POTEA",
  "POTKA",
  "POTKU",
  "POTRA",
  "POTTA",
  "POTTI",
  "POTTU",
  "POUTA",
  "PRIKI",
  "PROTO",
  "PSORI",
  "PTRUU",
  "PUDAS",
  "PUFFI",
  "PUHDE",
  "PUHKI",
  "PUHTI",
  "PUHUA",
  "PUHVI",
  "PUIDA",
  "PUIJA",
  "PUITE",
  "PUJOA",
  "PUJOS",
  "PUKEA",
  "PUKKI",
  "PULJA",
  "PULJU",
  "PULLA",
  "PULLO",
  "PULMA",
  "PULMU",
  "PUMMI",
  "PUNKA",
  "PUNOA",
  "PUNOS",
  "PUNTA",
  "PUOLA",
  "PUOLI",
  "PUOMI",
  "PUOSU",
  "PUOTI",
  "PUPPU",
  "PURJE",
  "PURJO",
  "PURKU",
  "PURRA",
  "PURSE",
  "PURSI",
  "PURSO",
  "PURSU",
  "PUSIA",
  "PUSKA",
  "PUSKU",
  "PUSSI",
  "PUSTA",
  "PUTKA",
  "PUTKI",
  "PUTTI",
  "PUTTO",
  "PUUHA",
  "PUUMA",
  "PUURO",
  "PUUTE",
  "PYGMI",
  "PYKIÄ",
  "PYLLY",
  "PYREE",
  "PYRKY",
  "PYSSY",
  "PYSTI",
  "PYSTY",
  "PYSTÖ",
  "PYSYÄ",
  "PYTON",
  "PYTTY",
  "PYYDE",
  "PYYHE",
  "PYÖRY",
  "PYÖRÄ",
  "PYÖRÖ",
  "PÄIVÄ",
  "PÄKIÄ",
  "PÄLVI",
  "PÄNNÄ",
  "PÄSSI",
  "PÄTEÄ",
  "PÄTKÄ",
  "PÄTSI",
  "PÄÄLI",
  "PÄÄRI",
  "PÄÄSY",
  "PÄÄTE",
  "PÄÄTY",
  "PÖHKÖ",
  "PÖHNÄ",
  "PÖKKÖ",
  "PÖKÄT",
  "PÖLHÖ",
  "PÖLJÄ",
  "PÖLLI",
  "PÖLLY",
  "PÖLLÖ",
  "PÖRRÖ",
  "PÖTKY",
  "PÖTKÖ",
  "PÖTSI",
  "PÖYTÄ",
  "RAAJA",
  "RAAKA",
  "RAAMI",
  "RAANA",
  "RAANI",
  "RAANU",
  "RAAPE",
  "RAASU",
  "RAATE",
  "RAATI",
  "RAATO",
  "RABBI",
  "RADIO",
  "RADON",
  "RAFLA",
  "RAGUU",
  "RAHJE",
  "RAHKA",
  "RAHNA",
  "RAHTI",
  "RAHTU",
  "RAIDE",
  "RAILO",
  "RAINA",
  "RAISU",
  "RAITA",
  "RAITO",
  "RAIVO",
  "RAKAS",
  "RAKKA",
  "RAKKI",
  "RAKKO",
  "RAKSA",
  "RAKSI",
  "RALLI",
  "RAMBO",
  "RAMPA",
  "RANGI",
  "RANKA",
  "RANKI",
  "RANKO",
  "RANNE",
  "RANTA",
  "RANTU",
  "RAPEA",
  "RAPPU",
  "RAPSE",
  "RAPSI",
  "RAPSU",
  "RASIA",
  "RASKO",
  "RASPI",
  "RASSI",
  "RASSU",
  "RASTA",
  "RASTI",
  "RASVA",
  "RATAS",
  "RATKI",
  "RATSU",
  "RATTI",
  "RATTO",
  "RAUHA",
  "RAUTA",
  "RAUTU",
  "RAVET",
  "RAVIT",
  "REHTI",
  "REIKI",
  "REIKÄ",
  "REILU",
  "REIMA",
  "REISI",
  "REIVI",
  "REKKA",
  "REKKI",
  "REKSI",
  "REMMI",
  "RENKI",
  "RENTO",
  "REPIÄ",
  "REPPU",
  "REPRO",
  "REPUT",
  "RESPA",
  "RESSU",
  "RETEÄ",
  "RETKI",
  "RETKU",
  "REUMA",
  "REUNA",
  "REVYY",
  "RIEHA",
  "RIEMU",
  "RIENA",
  "RIEPU",
  "RIESA",
  "RIEVÄ",
  "RIHLA",
  "RIHMA",
  "RIIHI",
  "RIIMI",
  "RIIMU",
  "RIISI",
  "RIITA",
  "RIITE",
  "RIIUU",
  "RIKAS",
  "RIKKA",
  "RIKKI",
  "RIKKO",
  "RIKOS",
  "RIKSA",
  "RIKSI",
  "RIMPI",
  "RIMSU",
  "RINKI",
  "RINNE",
  "RINTA",
  "RIPEÄ",
  "RIPPI",
  "RIPPU",
  "RIPSI",
  "RIPSU",
  "RISKI",
  "RISOA",
  "RISTI",
  "RITSA",
  "RITVA",
  "RIUKU",
  "RIUNA",
  "RODEO",
  "ROHJO",
  "ROHMU",
  "ROHTO",
  "ROIHU",
  "ROILO",
  "ROIMA",
  "ROINA",
  "ROISI",
  "ROKKA",
  "ROKKI",
  "ROKKO",
  "ROMBI",
  "ROMMI",
  "ROMPE",
  "RONDI",
  "RONDO",
  "ROOLI",
  "ROOSA",
  "ROPSE",
  "ROSEE",
  "ROSKA",
  "ROSTI",
  "ROSVO",
  "ROTKO",
  "ROTSI",
  "ROTTA",
  "ROUHE",
  "ROUTA",
  "ROUVA",
  "ROVIO",
  "RUGBY",
  "RUHJE",
  "RUKKA",
  "RUKKI",
  "RUKSI",
  "RULLA",
  "RUMBA",
  "RUMPU",
  "RUNDI",
  "RUNKO",
  "RUODE",
  "RUOHO",
  "RUOJA",
  "RUOKA",
  "RUOKO",
  "RUORI",
  "RUOTI",
  "RUOTO",
  "RUOTU",
  "RUPIA",
  "RUPLA",
  "RUSKA",
  "RUSKO",
  "RUSTO",
  "RUTKA",
  "RUTTO",
  "RUTTU",
  "RUUHI",
  "RUUMA",
  "RUUNA",
  "RUUSU",
  "RUUTI",
  "RUUTU",
  "RUUVI",
  "RYHMY",
  "RYHMÄ",
  "RYHTI",
  "RYIJY",
  "RYKIÄ",
  "RYNTÖ",
  "RYPEÄ",
  "RYPPY",
  "RYPSI",
  "RYPÄS",
  "RYSKE",
  "RYSSÄ",
  "RYSTY",
  "RYTKE",
  "RYTKY",
  "RYTMI",
  "RYVÄS",
  "RYYNI",
  "RYYSY",
  "RYYTI",
  "RYÖNÄ",
  "RÄHJÄ",
  "RÄHMÄ",
  "RÄIKE",
  "RÄKIÄ",
  "RÄKKI",
  "RÄMEÄ",
  "RÄNNI",
  "RÄNTÄ",
  "RÄPPI",
  "RÄPSE",
  "RÄSTI",
  "RÄTTI",
  "RÄÄSY",
  "RÄÄVI",
  "RÖLLI",
  "RÖMEÄ",
  "RÖNSY",
  "RÖSTI",
  "RÖTÖS",
  "RÖYHY",
  "RÖÖKI",
  "RÖÖRI",
  "SAADA",
  "SAAGA",
  "SAAGO",
  "SAAHI",
  "SAAJA",
  "SAALI",
  "SAAME",
  "SAARI",
  "SAATE",
  "SAATI",
  "SAAVI",
  "SABRA",
  "SADAS",
  "SADIN",
  "SAETA",
  "SAFKA",
  "SAHRA",
  "SAHTI",
  "SAHUU",
  "SAITA",
  "SAKEA",
  "SAKKA",
  "SAKKI",
  "SAKKO",
  "SAKSA",
  "SALAA",
  "SALDO",
  "SALKO",
  "SALMI",
  "SALON",
  "SALPA",
  "SALSA",
  "SALVA",
  "SAMBA",
  "SAMBO",
  "SAMEA",
  "SAMPI",
  "SAMPO",
  "SAMUM",
  "SANKA",
  "SANKO",
  "SANOA",
  "SANTA",
  "SANUE",
  "SAOTA",
  "SAPPI",
  "SARJA",
  "SARKA",
  "SARVI",
  "SATAA",
  "SATSI",
  "SAUDI",
  "SAUHU",
  "SAUMA",
  "SAUNA",
  "SAURO",
  "SAUVA",
  "SAVES",
  "SCIFI",
  "SEILI",
  "SEIMI",
  "SEINÄ",
  "SEIPI",
  "SEITA",
  "SEITI",
  "SEKKA",
  "SEKKI",
  "SEKSI",
  "SELFI",
  "SELIN",
  "SELJA",
  "SELKO",
  "SELKÄ",
  "SELLI",
  "SELLO",
  "SELLU",
  "SELUS",
  "SELVÄ",
  "SELYS",
  "SEOTA",
  "SEPPO",
  "SEPPÄ",
  "SERBI",
  "SERMI",
  "SERRI",
  "SERVO",
  "SETRI",
  "SETTI",
  "SEULA",
  "SEURA",
  "SEUTU",
  "SIDOS",
  "SIELU",
  "SIENI",
  "SIERA",
  "SIETO",
  "SIETÄ",
  "SIEVÄ",
  "SIGMA",
  "SIHTI",
  "SIIKA",
  "SIILI",
  "SIILO",
  "SIIMA",
  "SIINÄ",
  "SIIPI",
  "SIIRA",
  "SIITÄ",
  "SIIVO",
  "SIIVU",
  "SIKEÄ",
  "SIKHI",
  "SIKIÖ",
  "SIKLI",
  "SIKSI",
  "SILAT",
  "SILEÄ",
  "SILKO",
  "SILLA",
  "SILLI",
  "SILLÄ",
  "SILMU",
  "SILMÄ",
  "SILSA",
  "SILTA",
  "SILTI",
  "SINKO",
  "SINNE",
  "SINTO",
  "SINUT",
  "SIOUX",
  "SIPSI",
  "SIRRI",
  "SISAL",
  "SISAR",
  "SISIN",
  "SISKO",
  "SISSI",
  "SISUS",
  "SITAR",
  "SITEN",
  "SITKO",
  "SITOA",
  "SITRA",
  "SITSI",
  "SIVEÄ",
  "SKEET",
  "SKINI",
  "SKOOL",
  "SLOBO",
  "SNADI",
  "SNOBI",
  "SOETA",
  "SOFTA",
  "SOHIA",
  "SOHJO",
  "SOHVA",
  "SOIDA",
  "SOIJA",
  "SOIRO",
  "SOKEA",
  "SOKKA",
  "SOKKI",
  "SOKKO",
  "SOLKI",
  "SOLMU",
  "SOLUA",
  "SOMPA",
  "SONDI",
  "SONNI",
  "SONTA",
  "SOODA",
  "SOOLO",
  "SOOMA",
  "SOONI",
  "SOOPA",
  "SOOSI",
  "SOPIA",
  "SOPPA",
  "SOPPI",
  "SOREA",
  "SORJA",
  "SORMI",
  "SORRY",
  "SORSA",
  "SORTO",
  "SORVA",
  "SORVI",
  "SOSSU",
  "SOTIA",
  "SOTKA",
  "SOTKU",
  "SOUTU",
  "SOUVI",
  "SPORA",
  "SPRAY",
  "SPRII",
  "STADI",
  "STIDI",
  "STOUT",
  "SUETA",
  "SUHDE",
  "SUHTA",
  "SUJUA",
  "SUJUT",
  "SUKIA",
  "SUKKA",
  "SUKSI",
  "SULAA",
  "SULFA",
  "SULHO",
  "SULJE",
  "SULKA",
  "SULKU",
  "SUMEA",
  "SUMMA",
  "SUNNA",
  "SUNNI",
  "SUODA",
  "SUOJA",
  "SUOLA",
  "SUOLI",
  "SUOMI",
  "SUOMU",
  "SUONI",
  "SUOPA",
  "SUORA",
  "SUOVA",
  "SUPER",
  "SUPPA",
  "SUPPO",
  "SURKU",
  "SURMA",
  "SURRA",
  "SURVE",
  "SUSSU",
  "SUTIA",
  "SUTKI",
  "SUTTU",
  "SUUDE",
  "SUULA",
  "SUURA",
  "SUURE",
  "SUURI",
  "SUUTE",
  "SWING",
  "SYDÄN",
  "SYKLI",
  "SYKSY",
  "SYLKI",
  "SYLKY",
  "SYLTÄ",
  "SYLYS",
  "SYNTI",
  "SYNTY",
  "SYRJÄ",
  "SYSIÄ",
  "SYYHY",
  "SYYLÄ",
  "SYYNI",
  "SYYTE",
  "SYÖDÄ",
  "SYÖJÄ",
  "SYÖPÄ",
  "SÄHKE",
  "SÄHKÖ",
  "SÄHLY",
  "SÄILE",
  "SÄILÄ",
  "SÄILÖ",
  "SÄKKI",
  "SÄLLI",
  "SÄLPÄ",
  "SÄNKI",
  "SÄNKY",
  "SÄPPI",
  "SÄRKI",
  "SÄRKY",
  "SÄRMI",
  "SÄRMÄ",
  "SÄTKY",
  "SÄTKÄ",
  "SÄVEL",
  "SÄYNE",
  "SÄÄDE",
  "SÄÄLI",
  "SÄÄRI",
  "SÄÄTY",
  "SÄÄTÖ",
  "SÖSSÖ",
  "TAAIN",
  "TAAJA",
  "TAALA",
  "TAARA",
  "TAATA",
  "TAETA",
  "TAFTI",
  "TAHKO",
  "TAHMA",
  "TAHNA",
  "TAHRA",
  "TAHTI",
  "TAHTO",
  "TAIDE",
  "TAIGA",
  "TAIJI",
  "TAIKA",
  "TAIMI",
  "TAITA",
  "TAITE",
  "TAITO",
  "TAIVE",
  "TAIVO",
  "TAKAA",
  "TAKIA",
  "TAKKA",
  "TAKKI",
  "TAKKU",
  "TAKOA",
  "TAKSA",
  "TAKSI",
  "TAKUU",
  "TALAS",
  "TALJA",
  "TALLA",
  "TALLI",
  "TALVI",
  "TAMMA",
  "TAMMI",
  "TANGO",
  "TANHU",
  "TANKA",
  "TANKO",
  "TAPPI",
  "TAPPO",
  "TAPSI",
  "TARHA",
  "TARKE",
  "TARMO",
  "TAROT",
  "TARRA",
  "TARVE",
  "TASAN",
  "TASKU",
  "TASSI",
  "TASSU",
  "TATAR",
  "TATTI",
  "TAUKO",
  "TAULA",
  "TAULU",
  "TAUTI",
  "TAVIS",
  "TEDDY",
  "TEEMA",
  "TEERI",
  "TEESI",
  "TEHDÄ",
  "TEILI",
  "TEINI",
  "TEKNO",
  "TELJE",
  "TELJO",
  "TELKI",
  "TELOA",
  "TEMPO",
  "TENHO",
  "TERHO",
  "TERIÖ",
  "TERMI",
  "TERVA",
  "TERVE",
  "TERÄS",
  "TESLA",
  "TESMA",
  "TESTI",
  "TETRA",
  "TIEDE",
  "TIERA",
  "TIETO",
  "TIETÄ",
  "TIHEÄ",
  "TIHKU",
  "TIILI",
  "TIIMA",
  "TIIMI",
  "TIINE",
  "TIINU",
  "TIIRA",
  "TIKKA",
  "TIKKI",
  "TIKKU",
  "TIKLI",
  "TILDE",
  "TILHI",
  "TILKE",
  "TILLI",
  "TILSA",
  "TILUS",
  "TINKA",
  "TINKI",
  "TIPPA",
  "TIPPI",
  "TIRRI",
  "TISKI",
  "TISLE",
  "TISSI",
  "TIUHA",
  "TIUKU",
  "TOETA",
  "TOIMI",
  "TOIVE",
  "TOIVO",
  "TOKKA",
  "TOKKO",
  "TOLLO",
  "TONNE",
  "TONNI",
  "TONUS",
  "TOOGA",
  "TOOPE",
  "TOORA",
  "TOOSA",
  "TOPPA",
  "TOPPI",
  "TORKE",
  "TORNI",
  "TORSO",
  "TORUA",
  "TORUT",
  "TORVI",
  "TOSIN",
  "TOSIO",
  "TOSSU",
  "TOTTA",
  "TOUHU",
  "TOUKO",
  "TOUVI",
  "TRIAL",
  "TUHAT",
  "TUHKA",
  "TUHMA",
  "TUHRU",
  "TUHTI",
  "TUHTO",
  "TUIJA",
  "TUIJU",
  "TUIKE",
  "TUIKI",
  "TUIMA",
  "TUKEA",
  "TUKKA",
  "TUKKI",
  "TUKKO",
  "TUKKU",
  "TUKOS",
  "TULLA",
  "TULLI",
  "TULOS",
  "TULVA",
  "TUMMA",
  "TUNKU",
  "TUNNE",
  "TUNTI",
  "TUNTO",
  "TUNTU",
  "TUODA",
  "TUOHI",
  "TUOJA",
  "TUOLI",
  "TUOMI",
  "TUONI",
  "TUORE",
  "TUOTE",
  "TUPAS",
  "TUPEE",
  "TUPLA",
  "TUPPI",
  "TUPPO",
  "TUPSU",
  "TURBO",
  "TURHA",
  "TURKU",
  "TURMA",
  "TURPA",
  "TURRI",
  "TURSO",
  "TURTA",
  "TURVA",
  "TURVE",
  "TUSKA",
  "TUSSI",
  "TUSSU",
  "TUTIA",
  "TUTKA",
  "TUTOR",
  "TUTSI",
  "TUTTI",
  "TUTTU",
  "TUTUA",
  "TUUBA",
  "TUUBI",
  "TUULI",
  "TUUMA",
  "TUURA",
  "TUURI",
  "TWEED",
  "TWIST",
  "TYHJÄ",
  "TYHJÖ",
  "TYHMÄ",
  "TYKKI",
  "TYKKY",
  "TYKÖÄ",
  "TYLLI",
  "TYLSÄ",
  "TYNKÄ",
  "TYPPI",
  "TYPÄS",
  "TYRIÄ",
  "TYRMÄ",
  "TYRNI",
  "TYTTI",
  "TYTTÖ",
  "TYTÄR",
  "TYVEN",
  "TYYLI",
  "TYYNI",
  "TYYNY",
  "TÄHDE",
  "TÄHKÄ",
  "TÄHTI",
  "TÄHÄN",
  "TÄKKI",
  "TÄLLI",
  "TÄNNE",
  "TÄPLÄ",
  "TÄSSÄ",
  "TÄSTÄ",
  "TÄTEN",
  "TÄYSI",
  "TÄYTE",
  "TÖHKÄ",
  "TÖLLI",
  "TÖNIÄ",
  "TÖRKY",
  "TÖRMÄ",
  "TÖTSÄ",
  "TÖYRY",
  "UHATA",
  "UHKEA",
  "UHKUA",
  "UHOTA",
  "UIKKU",
  "UINTI",
  "UINUA",
  "UISKO",
  "UITTO",
  "UJOUS",
  "UKULI",
  "ULINA",
  "ULJAS",
  "ULKOA",
  "ULOIN",
  "ULOKE",
  "ULOTA",
  "ULTRA",
  "ULVOA",
  "UMBRA",
  "UMMET",
  "UMPIO",
  "UNSSI",
  "UPEUS",
  "UPOTA",
  "UPOTE",
  "UPSIS",
  "URHEA",
  "URINA",
  "USEIN",
  "USEUS",
  "USKOA",
  "UTARE",
  "UTELU",
  "UUDIN",
  "UUDIS",
  "UUMEN",
  "UUPUA",
  "UURAS",
  "UURNA",
  "UURRE",
  "UURTO",
  "UUSIA",
  "UUTTO",
  "UUTTU",
  "VAADE",
  "VAAKA",
  "VAALI",
  "VAARA",
  "VAARI",
  "VAASI",
  "VAATA",
  "VAATE",
  "VAHTI",
  "VAHVA",
  "VAIHE",
  "VAIMO",
  "VAINO",
  "VAINU",
  "VAISU",
  "VAITI",
  "VAIVA",
  "VAJAA",
  "VAKAA",
  "VAKIO",
  "VAKKA",
  "VAKSI",
  "VALAA",
  "VALAS",
  "VALHE",
  "VALIN",
  "VALIO",
  "VALJU",
  "VALLI",
  "VALMU",
  "VALOS",
  "VALTA",
  "VALUA",
  "VALVE",
  "VAMMA",
  "VANHA",
  "VANJA",
  "VANKI",
  "VANNA",
  "VANNE",
  "VANUA",
  "VAPAA",
  "VAPPU",
  "VARAS",
  "VARHO",
  "VARIS",
  "VARJO",
  "VARMA",
  "VAROA",
  "VARPU",
  "VARSA",
  "VARSI",
  "VARTE",
  "VARUS",
  "VARVI",
  "VASEN",
  "VASKI",
  "VASOA",
  "VASTA",
  "VASTE",
  "VATJA",
  "VATSA",
  "VATTI",
  "WATTI",
  "VATTU",
  "VAUNU",
  "VAUVA",
  "WEBER",
  "VEDIN",
  "VEDOS",
  "VEHJE",
  "VEHKA",
  "VEHNÄ",
  "VEISU",
  "VEIVI",
  "VEKKI",
  "VELHO",
  "VELKA",
  "VELLI",
  "VELMU",
  "VENHE",
  "VENHO",
  "VENYÄ",
  "VENÄT",
  "VEPPI",
  "VEPSÄ",
  "VERBI",
  "VERES",
  "VERHO",
  "VERKA",
  "VERSO",
  "VERTA",
  "VERTO",
  "VESKA",
  "VESKI",
  "VESOA",
  "VESSA",
  "WESSI",
  "VETÄÄ",
  "VICHY",
  "VIDEO",
  "VIEDÄ",
  "VIEHE",
  "VIEJÄ",
  "VIELÄ",
  "VIENO",
  "VIERI",
  "VIHJE",
  "VIHKI",
  "VIHKO",
  "VIHMA",
  "VIHNE",
  "VIHTA",
  "VIILA",
  "VIILI",
  "VIILU",
  "VIIMA",
  "VIIME",
  "VIINA",
  "VIINI",
  "VIIRA",
  "VIIRI",
  "VIIRU",
  "VIISI",
  "VIISU",
  "VIITA",
  "VIITE",
  "VIIVA",
  "VIIVE",
  "VIKLO",
  "VILJA",
  "VILKE",
  "VILLA",
  "VILLI",
  "VIMMA",
  "VINHA",
  "VINKA",
  "VINKU",
  "VIOLA",
  "VIPPA",
  "VIPPI",
  "VIREÄ",
  "VIRHE",
  "VIRIÖ",
  "VIRKA",
  "VIRKE",
  "VIRNA",
  "VIRNE",
  "VIRPI",
  "VIRSI",
  "VIRSU",
  "VIRTA",
  "VIRUA",
  "VIRUS",
  "VISIO",
  "VISKI",
  "VISSI",
  "VISSY",
  "VISTI",
  "VISVA",
  "VITJA",
  "VITKA",
  "VITOA",
  "VITSA",
  "VITSI",
  "VITTU",
  "VIULU",
  "VODKA",
  "VOHLA",
  "VOIDA",
  "VOIDE",
  "VOIMA",
  "VOIPA",
  "VOKKI",
  "VORMU",
  "VOTKA",
  "VOUTI",
  "VULVA",
  "VUODE",
  "VUOHI",
  "VUOKA",
  "VUOLU",
  "VUONA",
  "VUONO",
  "VUORI",
  "VUORO",
  "VUOSI",
  "VUOTA",
  "VUOTO",
  "VYÖRY",
  "VYÖTE",
  "VÄHIN",
  "VÄHÄN",
  "VÄITE",
  "VÄIVE",
  "VÄLJÄ",
  "VÄLKE",
  "VÄLYS",
  "VÄRVE",
  "VÄSKY",
  "VÄSYÄ",
  "VÄTYS",
  "VÄYLÄ",
  "VÄÄRÄ",
  "YHDES",
  "YHTIÖ",
  "YHTYE",
  "YHTYÄ",
  "YHÄTI",
  "YKSIN",
  "YKSIÖ",
  "YLEIS",
  "YLETÄ",
  "YLEVÄ",
  "YLITE",
  "YLPEÄ",
  "YLTYÄ",
  "YLTÄÄ",
  "YLVÄS",
  "YLÄVÄ",
  "YNINÄ",
  "YNSEÄ",
  "YRMEÄ",
  "YRTTI",
  "YSKIÄ",
  "YSKÖS",
  "YÖASU",
  "YÖKKÖ",
  "YÖPUU",
  "YÖPYÄ",
  "YÖTYÖ",
  "YÖTÖN",
  "YÖUNI",
  "ZOMBI",
  "ZOOMI",
  "ÄHINÄ",
  "ÄHKIÄ",
  "ÄHKYÄ",
  "ÄHKÄÄ",
  "ÄISKÄ",
  "ÄITYÄ",
  "ÄKEYS",
  "ÄKKIÄ",
  "ÄKÄMÄ",
  "ÄKÄTÄ",
  "ÄLINÄ",
  "ÄLKÄÄ",
  "ÄLYTÄ",
  "ÄMYRI",
  "ÄNKKÄ",
  "ÄPÄRÄ",
  "ÄREYS",
  "ÄRINÄ",
  "ÄRJYÄ",
  "ÄRTYÄ",
  "ÄSKEN",
  "ÄYRÄS",
  "ÄÄLIÖ",
  "ÄPÄRE",
  "ÄÄNES",
  "ÄÄNNE",
  "ÄÄNTÖ",
  "ÖINEN",
  "ÖISIN",
  "ÖLINÄ",
  "ÖRINÄ",
];

export default words;
