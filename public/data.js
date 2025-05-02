const data = [
  {
    categoria: "Looks",
  },
  {
    categoria: "Labiales",
    info: [
      {
        subcategoria: "Rojos",
        productos: [
          {},
          {
            nombre: 'Concentré Total',
            descripcion: '10 beneficios en 1',
            couleur: [
              { tonos: 'ROUGE CORAIL', hex: '#bd233e'},
            ]
          },
          {
            nombre: 'Dúo Amplifiant',
            descripcion: 'Mayor definición y volumen',
            couleur: [
              { tonos: 'ROUGE BOURGOGNE', hex: '#881e2c'},
            ]
          },
          {
            nombre: 'Dúo Hydra Matte',
            descripcion: 'Color intenso con hidratación',
            couleur: [
              { tonos: 'PURE RED', hex: '#b62540'},
              { tonos: 'ROUGE RUBI', hex: '#6e1817'},
            ]
          },
          {
            nombre: 'Infini Absolu',
            descripcion: 'Hidrata con ácido hialurónico',
            couleur: [
              { tonos: 'CHARMANT RED', hex: '#bb2b22'},
              { tonos: 'CHERRY FONDANT', hex: '#a4040c'},
              { tonos: 'HOT BRANDY', hex: '#5e0911'},
              { tonos: 'ICONIC RED', hex: '#c0070f'},
              { tonos: 'Passion Adore', hex: '#65111e'},
              { tonos: 'RED SAUVAGE', hex: '#ba0001'},
              { tonos: 'ROUGE EXCITANT', hex: '#c00321'},
              { tonos: 'Rouge Glorieux', hex: '#952017'},
              { tonos: 'ROUGE PETAL', hex: '#9e1e20'},
              { tonos: 'VIN ÉXUBERANTL', hex: '#a00024'},
            ]
          },
          {
            nombre: 'Infini Dorado Mate',
            descripcion: 'Hidrata con ácido hialurónico',
            couleur: [
              { tonos: 'MALVE', hex: '#812532'},
              { tonos: 'ROUGE', hex: '#A52639'},
              { tonos: 'ROUGE BONBON', hex: '#97122f'},
              { tonos: 'ROUGE PASSION', hex: '#BB0015'},
            ]
          },
          {
            nombre: 'Infini Dorado Metalizado',
            descripcion: 'Hidrata con ácido hialurónico',
            couleur: [
              { tonos: 'ROUGE PASSION', hex: '#bb0015'},
            ]
          },
          {
            nombre: 'Infini Hydraserum',
            descripcion: '240% más hidratación en labios',
            couleur: [
              { tonos: 'CHILLI ROUGE', hex: '#a9041c'},
              { tonos: 'VIN EXUBERANT', hex: '#b5092b'},
            ]
          },
          {
            nombre: 'Rouge L\'Intense Barra',
            descripcion: 'Mate y textura aterciopelada',
            couleur: [
              { tonos: 'ROUGE', hex: '#a51837'},
              { tonos: 'CERISE', hex: '#a8173b'},
              { tonos: 'PARIS ROUGE', hex: '#6e082d'},
              { tonos: 'PARISSIAN KISS', hex: '#8f031e'},
              { tonos: 'ROUGE', hex: '#8a0b17'},
              { tonos: 'Rouge Passion', hex: '#b5274d'},
              { tonos: 'ROUGE VIBRANT', hex: '#b91524'},
              { tonos: 'RUBI', hex: '#780d11'},
            ]
          },
          {},
        ]
      },
      {
        subcategoria: "Vinos",
        productos: [
          {},
          {
            nombre: "Dúo Amplifiant",
            descripcion: "Mayor definición y volumen",
            couleur: [
              { tonos: "VIN INTENSE", hex: "#8e3d49" },
              { tonos: "VIN ROUGE", hex: "#952132" },
            ],
          },
          {
            nombre: "Dúo Hydra Matte",
            descripcion: "Color intenso con hidratación",
            couleur: [
              { tonos: "VIN INTENSE", hex: "#6d0c2e" },
            ],
          },
          {
            nombre: "Infini Absolu",
            descripcion: "Hidrata con ácido hialurónico",
            couleur: [
              { tonos: "Burgundy Wine", hex: "#5c1229" },
              { tonos: "CARAMEL PECAN", hex: "#5c3434" },
              { tonos: "Mauve Nuit", hex: "#5c1e37" },
              { tonos: "VIN INTENSE", hex: "#541e1e" },
              { tonos: "VIN MORA", hex: "#8b336b" },
              { tonos: "WARM WINE", hex: "#701d4c" },
            ],
          },
          {
            nombre: "Infini Dorado Mate",
            descripcion: "Hidrata con ácido hialurónico",
            couleur: [
              { tonos: "CHERRY WINE", hex: "#72163F" },
              { tonos: "CINNAMON GLOW", hex: "#58041c" },
              { tonos: "RED WINE", hex: "#7E172C" },
              { tonos: "ROYAL GRAPE", hex: "#561728" },
              { tonos: "SWEET BURGUNDY", hex: "#681437" },
            ],
          },
          {
            nombre: "Infini Dorado Metalizado",
            descripcion: "Hidrata con ácido hialurónico",
            couleur: [
              { tonos: "Deep Wine", hex: "#651a3e" },
              { tonos: "Vin", hex: "#7e263f" },
            ],
          },
          {
            nombre: "Infini Hydraserum",
            descripcion: "240% más hidratación en labios",
            couleur: [
              { tonos: "GRAPE INTENSE", hex: "#5c1e3f" },
              { tonos: "VIN NOIR", hex: "#731237" },
            ],
          },
          {
            nombre: "Rouge L'Intense Barra",
            descripcion: "Mate y textura aterciopelada",
            couleur: [
              { tonos: "CHERRY INTENSE", hex: "#8f2759" },
              { tonos: "ROUGE MALBEC", hex: "#853435" },
              { tonos: "VIN INTENSE", hex: "#892e42" },
            ],
          },
          {
            nombre: "Rouge L'Intense Líquido",
            descripcion: "Mate y textura aterciopelada",
            couleur: [
              { tonos: "CHERRY BRANDY", hex: '#650937' },
              { tonos: "MERLOT NUDE", hex: '#440804' },
              { tonos: "VIN GLAMOUR", hex: '#bb3153' },
              { tonos: "VIN INTENSE", hex: '#702534' },
              { tonos: "Vin Violet", hex: '#842253' },
            ],
          },
          {},
        ],
      },
      {
        subcategoria: "Nude",
        productos: [
          {},
          {
            nombre: "Dúo Hydra Matte",
            descripcion: "Color intenso con hidratación",
            couleur: [
              { tonos: "DEEP APRICOT", hex: "#c26061" },
            ],
          },
          {
            nombre: "Infini Absolu",
            descripcion: "Hidrata con ácido hialurónico",
            couleur: [
              { tonos: "NUDE ROSE", hex: "#b16764" },
            ],
          },
          {
            nombre: "Infini Dorado Mate",
            descripcion: "Hidrata con ácido hialurónico",
            couleur: [
              { tonos: "NATURAL ROSE", hex: "#9c6257" },
              { tonos: "NUDE PEACH", hex: "#d37d6c" },
              { tonos: "PEACH ROSÉ", hex: "#C96A64" },
              { tonos: "SPICY ALMOND", hex: "#883c2c" },
            ],
          },
          {
            nombre: "Infini Hydraserum",
            descripcion: "240% más hidratación en labios",
            couleur: [
              { tonos: "PETIT ROSE", hex: "#ac4d53" },
            ],
          },
          {
            nombre: "Rouge L'Intense Barra",
            descripcion: "Mate y textura aterciopelada",
            couleur: [
              { tonos: "ABRICOT", hex: "#b46e63" },
              { tonos: "CRÉME", hex: "#d4999b" },
              { tonos: "NUDE", hex: "#af756b" },
            ],
          },
          {
            nombre: "Rouge L'Intense Líquido",
            descripcion: "Mate y textura aterciopelada",
            couleur: [
              { tonos: "APRICOT NUDE", hex: "#bd796c" },
              { tonos: "DEEP NUDE", hex: "#905757" },
              { tonos: "MOCCA FRANCE", hex: "#be8e88" },
              { tonos: "MOCCA NUDE", hex: "#9c6464" },
              { tonos: "NUDE", hex: "#ba6761" },
              { tonos: "NUDE CHARMÉ", hex: "#95555d" },
              { tonos: "ROSÉ NUDE", hex: "#b56367" },
              { tonos: "SWEET NUDE", hex: "#cc5d61" },
            ],
          },
          {
            nombre: "Ultra Balm",
            descripcion: "Hidrata, Restaura y Protege",
            couleur: [
              { tonos: "CERISE BRISE", hex: "#d75e67" },
              { tonos: "NUDE CARAMEL", hex: "#db856c" },
              { tonos: "NUDE TRANSLUCIDE", hex: "#f4ac96" },
            ],
          },
          {},
        ],
      },
      {
        subcategoria: "Rosas",
        productos: [
          {},
          {
            nombre: "Dúo Amplifiant",
            descripcion: "Mayor definición y volumen",
            couleur: [
              { tonos: "ROSE TERRACOTA", hex: "#913f3e" },
              { tonos: "ROSEWOOD", hex: "#c87a79" },
            ],
          },
          {
            nombre: "Dúo Hydra Matte",
            descripcion: "Color intenso con hidratación",
            couleur: [
              { tonos: "VELVET ROSE", hex: "#bb6b6c" },
            ],
          },
          {
            nombre: "Infini Absolu",
            descripcion: "Hidrata con ácido hialurónico",
            couleur: [
              { tonos: "Bonbon rosé", hex: "#9e4a59" },
              { tonos: "CARMINE", hex: "#9d4a46" },
              { tonos: "MALVE DELICE", hex: "#a95559" },
              { tonos: "MYSTIC ROSÉ", hex: "#8f4b50" },
              { tonos: "PINK DELIGHT", hex: "#a45c71" },
              { tonos: "Pink Noveau", hex: "#ce4482" },
              { tonos: "ROSE ELEGANCE", hex: "#cd5b5e" },
              { tonos: "ROSE GRANADA", hex: "#ae4756" },
              { tonos: "TULIP ROSE", hex: "#9d5f73" },
            ],
          },
          {
            nombre: "Infini Dorado Mate",
            descripcion: "Hidrata con ácido hialurónico",
            couleur: [
              { tonos: "BRAVE", hex: "#A43B4A" },
              { tonos: "PINK MACARROOON", hex: "#da4e7a" },
              { tonos: "PINK PEPPER", hex: "#802c3c" },
              { tonos: "PINK ROSE", hex: "#A52639" },
              { tonos: "ROSA BEIGE", hex: "#d0766e" },
            ],
          },
          {
            nombre: "Infini Dorado Metalizado",
            descripcion: "Hidrata con ácido hialurónico",
            couleur: [
              { tonos: "NUDE ROSE", hex: "#eab1a1" },
              { tonos: "ROSE GOLD", hex: "#d4857e" },
            ],
          },
          {
            nombre: "Infini Dorado Perlado",
            descripcion: "Hidrata con ácido hialurónico",
            couleur: [
              { tonos: "ASTER ROSE", hex: "#D58389" },
            ],
          },
          {
            nombre: "Infini Hydraserum",
            descripcion: "240% más hidratación en labios",
            couleur: [
              { tonos: "BELLE MAUVE", hex: "#ad556b" },
              { tonos: "ROSE CELEBRITE", hex: "#91343a" },
            ],
          },
          {
            nombre: "Rouge L'Intense Barra",
            descripcion: "Mate y textura aterciopelada",
            couleur: [
              { tonos: "BERRY ROSELLE", hex: "#af575f" },
              { tonos: "ROSE LATTE", hex: "#c26790" },
            ],
          },
          {
            nombre: "Rouge L'Intense Líquido",
            descripcion: "Mate y textura aterciopelada",
            couleur: [
              { tonos: "MAUVE ROSE", hex: "#9e3854" },
              { tonos: "MOCCHA", hex: "#8c5443" },
              { tonos: "ROMANTIQUE", hex: "#bc5c80" },
              { tonos: "Rosé Canelle", hex: "#b5577c" },
              { tonos: "ROSÉ CHARME", hex: "#b8737f" },
              { tonos: "ROSE DESIR", hex: "#e56e83" },
              { tonos: "ROSELLE", hex: "#aa2f48" },
            ],
          },
          {
            nombre: "Ultra Balm",
            descripcion: "Hidrata, Restaura y Protege",
            couleur: [
              { tonos: "CORAL PETALE", hex: "#f54d5e" },
              { tonos: "ROSE COTTON", hex: "#ff9db6" },
              { tonos: "ROSE PARADISE", hex: "#ff76a0" },
            ],
          },
          {},
        ],
      },
      {
        subcategoria: "Marrones",
        productos: [
          {},
          {
            nombre: "Dúo Amplifiant",
            descripcion: "Mayor definición y volumen",
            couleur: [
              { tonos: "CARAMEL MOCHA", hex: "#935844" },
            ],
          },
          {
            nombre: "Dúo Hydra Matte",
            descripcion: "Color intenso con hidratación",
            couleur: [
              { tonos: "AUTUMN CARAMEL", hex: "#904d3a" },
            ],
          },
          {
            nombre: "Infini Absolu",
            descripcion: "Hidrata con ácido hialurónico",
            couleur: [
              { tonos: "Cocoa bitter", hex: "#592319" },
              { tonos: "COCOA MOUSSE", hex: "#6e4647" },
              { tonos: "DARK CINNAMON", hex: "#8a3027" },
            ],
          },
          {
            nombre: "Infini Dorado Mate",
            descripcion: "Hidrata con ácido hialurónico",
            couleur: [
              { tonos: "AMANDIER", hex: "#924c4c" },
              { tonos: "DEEP MOCCA", hex: "#48211A" },
            ],
          },
          {
            nombre: "Infini Dorado Metalizado",
            descripcion: "Hidrata con ácido hialurónico",
            couleur: [
              { tonos: "BRONZE", hex: "#bd775e" },
              { tonos: "COBRE", hex: "#d7876b" },
              { tonos: "TERRA ACAJOU", hex: "#b76b6b" },
            ],
          },
          {
            nombre: "Infini Hydraserum",
            descripcion: "240% más hidratación en labios",
            couleur: [
              { tonos: "NUDE BRUNE", hex: "#9b413b" },
            ],
          },
          {
            nombre: "Rouge L'Intense Barra",
            descripcion: "Mate y textura aterciopelada",
            couleur: [
              { tonos: "CHOCOLAT", hex: "#703e33" },
              { tonos: "DARK CARAMEL", hex: "#985651" },
              { tonos: "MOCCA", hex: "#6e3b2c" },
            ],
          },
          {
            nombre: "Rouge L'Intense Líquido",
            descripcion: "Mate y textura aterciopelada",
            couleur: [
              { tonos: "BORDELAIS", hex: "#7b3434" },
              { tonos: "CARAMEL MOUSSE", hex: "#9d1b3b" },
              { tonos: "MORROCO TERRE", hex: "#8c3b2c" },
            ],
          },
          {},
        ],
      },
      {
        subcategoria: "Morados",
        productos: [
          {},
          {
            nombre: "Dúo Amplifiant",
            descripcion: "Mayor definición y volumen",
            couleur: [
              { tonos: "BERRY VIOLET", hex: "#a76171" },
              { tonos: "VIOLET MALVE", hex: "#895465" },
            ],
          },
          {
            nombre: "Dúo Hydra Matte",
            descripcion: "Color intenso con hidratación",
            couleur: [
              { tonos: "VIOLET SUPREME", hex: "#84047d" },
            ],
          },
          {
            nombre: "Infini Absolu",
            descripcion: "Hidrata con ácido hialurónico",
            couleur: [
              { tonos: "BERRY VIBRANT", hex: "#783e5c" },
              { tonos: "DEEP BERRY", hex: "#481f2f" },
              { tonos: "VIOLET CASSIS", hex: "#6e0258" },
              { tonos: "VIOLET SUPRÊME", hex: "#a61b82" },
              { tonos: "Vivid Violet", hex: "#783c62" },
            ],
          },
          {
            nombre: "Infini Dorado Mate",
            descripcion: "Hidrata con ácido hialurónico",
            couleur: [
              { tonos: "VIOLET", hex: "#7D185E" },
            ],
          },
          {
            nombre: "Infini Dorado Metalizado",
            descripcion: "Hidrata con ácido hialurónico",
            couleur: [
              { tonos: "FRAMBOISE", hex: "#7E1B56" },
              { tonos: "VIOLET GOLD", hex: "#773A65" },
            ],
          },
          {
            nombre: "Rouge L'Intense Barra",
            descripcion: "Mate y textura aterciopelada",
            couleur: [
              { tonos: "MORA", hex: "#732f49" },
            ],
          },
          {
            nombre: "Rouge L'Intense Líquido",
            descripcion: "Mate y textura aterciopelada",
            couleur: [
              { tonos: "MALVA ALLURE", hex: "#95568b" },
              { tonos: "SOFT MALVA", hex: "#8c545c" },
              { tonos: "VIE EN ROSÉ", hex: "#a4407e" },
            ],
          },
          {},
        ],
      },
      {
        subcategoria: "Fucsias",
        productos: [
          {},
          {
            nombre: "Concentré Total Labios",
            descripcion: "10 beneficios en 1",
            couleur: [
              { tonos: "FUCSIA RADIANT", hex: "#d40073" },
            ],
          },
          {
            nombre: "Dúo Amplifiant",
            descripcion: "Mayor definición y volumen",
            couleur: [
              { tonos: "FUCSIA VIOLET", hex: "#a74a72" },
              { tonos: "RASPBERRY", hex: "#b95e63" },
            ],
          },
          {
            nombre: "Dúo Hydra Matte",
            descripcion: "Color intenso con hidratación",
            couleur: [
              { tonos: "BERRY RICHE", hex: "#932b71" },
              { tonos: "DEEP FUCSIA", hex: "#9f0664" },
            ],
          },
          {
            nombre: "Infini Absolu",
            descripcion: "Hidrata con ácido hialurónico",
            couleur: [
              { tonos: "FRAISE RADIANT", hex: "#e50052" },
              { tonos: "FUCSIA FLAMINGO", hex: "#b73271" },
              { tonos: "FUCSIA VIF", hex: "#fb06ab" },
              { tonos: "Profond framboise", hex: "#cc045d" },
              { tonos: "VERY FUCSIA", hex: "#bf2b7f" },
            ],
          },
          {
            nombre: "Infini Dorado Mate",
            descripcion: "Hidrata con ácido hialurónico",
            couleur: [
              { tonos: "FRAISE JELLY", hex: "#920f3b" },
              { tonos: "FUXIA INTENSE", hex: "#A11F7F" },
              { tonos: "FUXIA PASSION", hex: "#CF355B" },
            ],
          },
          {
            nombre: "Infini Dorado Perlado",
            descripcion: "Hidrata con ácido hialurónico",
            couleur: [
              { tonos: "FUCSIA", hex: "#b11574" },
            ],
          },
          {
            nombre: "Infini Hydraserum",
            descripcion: "240% más hidratación en labios",
            couleur: [
              { tonos: "FUCSIA EUPHORIC", hex: "#bf3378" },
            ],
          },
          {
            nombre: "Rouge L'Intense Barra",
            descripcion: "Mate y textura aterciopelada",
            couleur: [
              { tonos: "ROUGE FRAMBOISE", hex: "#d13471" },
            ],
          },
          {
            nombre: "Rouge L'Intense Líquido",
            descripcion: "Mate y textura aterciopelada",
            couleur: [
              { tonos: "CRANBERRY", hex: "#90144b" },
              { tonos: "FRAMBOISE", hex: "#cd294e" },
              { tonos: "FUCSIA EUPHORIA", hex: "#d60666" },
              { tonos: "FUCSIA VIBRANT", hex: "#c4347c" },
              { tonos: "Pétale Desire", hex: "#b04048" },
              { tonos: "VIN AMANT", hex: "#8a233a" },
            ],
          },
          {},
        ],
      },
      {
        subcategoria: "Corales",
        productos: [
          {},
          {
            nombre: "Dúo Hydra Matte",
            descripcion: "Color intenso con hidratación",
            couleur: [
              { tonos: "CORAL PEACH", hex: "#d37669" },
            ],
          },
          {
            nombre: "Infini Absolu",
            descripcion: "Hidrata con ácido hialurónico",
            couleur: [
              { tonos: "Citrique éclat", hex: "#b3372f" },
              { tonos: "CORAL VIVANT", hex: "#dc6864" },
            ],
          },
          {
            nombre: "Rouge L'Intense Líquido",
            descripcion: "Mate y textura aterciopelada",
            couleur: [
              { tonos: "CORAL CHARME", hex: "#bc5b54" },
            ],
          },
          {},
        ],
      }
    ]
  },
  {
    categoria: "Máscaras",
    info: [
      {
        subcategoria: "Volumen",
        productos: [
          {},
          {
            nombre: "Hypervolume",
            descripcion: "Más volumen, más largo",
            couleur: [
              { tonos: "NOIR", hex: "#101010" },
            ],
          },
          {
            nombre: "Opulence",
            descripcion: "Volumen inmediato",
            couleur: [
              { tonos: "NOIR", hex: "#101010" },
            ],
          },
          {},
        ],
      },
      {
        subcategoria: "Alargamiento",
        productos: [
          {},
          {
            nombre: "Megacils Extend",
            descripcion: "Largo al instante",
            couleur: [
              { tonos: "NOIR", hex: "#101010" },
            ],
          },
          {
            nombre: "Multi-Extense",
            descripcion: "Efecto largo extremo",
            couleur: [
              { tonos: "NOIR", hex: "#101010" },
            ],
          },
          {},
        ],
      },
      {
        subcategoria: "Definición",
        productos: [
          {},
          {
            nombre: "Mascara Definition",
            descripcion: "Efecto multiplicador",
            couleur: [
              { tonos: "NOIR", hex: "#000000" },
            ],
          },
          {},
        ],
      }
    ]
  },
  {
    categoria: "Bases",
    info: [
      {
        subcategoria: "Natural",
        productos: [
          {},
          {
            nombre: "Base Nude Skin",
            descripcion: "Hidratación inmediata con vitaminas",
            couleur: [
              { tonos: "ALMENDRA 230N", hex: "#bc8f6b" },
              { tonos: "AVELLANA 270C", hex: "#b68a6a" },
              { tonos: "BEIGE 220C", hex: "#d3b18d" },
              { tonos: "CACAO 350N", hex: "#a17557" },
              { tonos: "CAPUCCINO 310C", hex: "#b5896c" },
              { tonos: "CARAMEL 210F", hex: "#c29372" },
              { tonos: "CHOCOLATE 460F", hex: "#543726" },
              { tonos: "CREME 110C", hex: "#d7b7a0" },
              { tonos: "LATTE 180F", hex: "#c29d85" },
              { tonos: "MOKA 420C", hex: "#7a543c" },
              { tonos: "MOKACCHINO 390N", hex: "#946f54" },
            ],
          },
          {
            nombre: "Concentré Total Sérum",
            descripcion: "5 beneficios en 1",
            couleur: [
              { tonos: "ALMENDRA", hex: "#c5906b" },
              { tonos: "AVELLANA", hex: "#c99570" },
              { tonos: "BEIGE", hex: "#c69576" },
              { tonos: "CACAO", hex: "#C68A5D" },
              { tonos: "CAPUCCINO", hex: "#CA9069" },
              { tonos: "CARAMEL", hex: "#E9B392" },
              { tonos: "CHAMPAGNE", hex: "#dbab8b" },
              { tonos: "CHOCOLAT", hex: "#80543B" },
              { tonos: "CREME", hex: "#EDB999" },
              { tonos: "LATTE", hex: "#c7937f" },
              { tonos: "MOKA", hex: "#A36944" },
              { tonos: "MOKACCINO", hex: "#BB8059" },
            ],
          },
          {
            nombre: "Corrector Facial En Lapiz",
            descripcion: "Cubre bolsas y ojeras",
            couleur: [
              { tonos: "CLAIRE 1-2-3", hex: "#f9c5a0" },
              { tonos: "CLAIRE 4", hex: "#f5b98e" },
              { tonos: "MEDIUM 5-6", hex: "#d0a688" },
              { tonos: "MEDIUM 7", hex: "#be8861" },
              { tonos: "OBSCURE 8-9", hex: "#ac7139" },
            ],
          },
          {},
        ],
      },
      {
        subcategoria: "Mate",
        productos: [
          {},
          {
            nombre: "Aclaradora De Manchas Clarité",
            descripcion: "Minimiza y aclara de manchas",
            couleur: [
              { tonos: "110C", hex: "#f8bc8c" },
              { tonos: "170N", hex: "#dda677" },
              { tonos: "180F", hex: "#d8a27e" },
              { tonos: "210F", hex: "#d2986a" },
              { tonos: "220C", hex: "#ca9765" },
              { tonos: "230N", hex: "#b8855e" },
              { tonos: "270C", hex: "#bf8652" },
              { tonos: "310C", hex: "#c78852" },
              { tonos: "350N", hex: "#b77e4d" },
              { tonos: "390-N", hex: "#b4835a" },
              { tonos: "420-C", hex: "#916244" },
              { tonos: "460-F", hex: "#7d523f" },
            ],
          },
          {
            nombre: "Base de Maquillaje Antiedad",
            descripcion: "Cubre signos de la edad",
            couleur: [
              { tonos: "Claire 1", hex: "#e5af6f" },
              { tonos: "Claire 2", hex: "#f1a86e" },
              { tonos: "Claire 3", hex: "#e19d51" },
              { tonos: "Claire 4", hex: "#df9f6d" },
              { tonos: "Medium 5", hex: "#d9aa78" },
              { tonos: "Medium 6", hex: "#c59360" },
              { tonos: "Medium 7", hex: "#b07956" },
              { tonos: "Obscure 8", hex: "#9f6d33" },
              { tonos: "Obscure 9", hex: "#834e24" },
            ],
          },
          {
            nombre: "Hydra Absolute",
            descripcion: "Hidratación hasta por 24 horas",
            couleur: [
              { tonos: "CLAIRE 1", hex: "#c09a62" },
              { tonos: "CLAIRE 2", hex: "#cda376" },
              { tonos: "CLAIRE 3", hex: "#ce9e61" },
              { tonos: "CLAIRE 4", hex: "#cb986f" },
              { tonos: "MEDIUM 5", hex: "#c09c6c" },
              { tonos: "MEDIUM 6", hex: "#ad8151" },
              { tonos: "MEDIUM 7", hex: "#a27856" },
              { tonos: "OBSCURE 8", hex: "#9b7348" },
              { tonos: "OBSCURE 9", hex: "#5c371e" },
            ],
          },
          {
            nombre: "Matte Pro Défense",
            descripcion: "5 beneficios en 1",
            couleur: [
              { tonos: "ALMENDRA", hex: "#D69D73" },
              { tonos: "AVELLANA", hex: "#AD7552" },
              { tonos: "BEIGE", hex: "#D69F76" },
              { tonos: "CACAO", hex: "#B07650" },
              { tonos: "CAPUCCINO", hex: "#BA7B5C" },
              { tonos: "CARAMEL", hex: "#D69F76" },
              { tonos: "CHAMPAGNE", hex: "#DDA98A" },
              { tonos: "CHOCOLAT", hex: "#6A4127" },
              { tonos: "CREME", hex: "#DEAD8D" },
              { tonos: "LATTE", hex: "#CB9781" },
              { tonos: "MOKA", hex: "#8C5536" },
              { tonos: "MOKACCINO", hex: "#B47758" },
            ],
          },
          {
            nombre: "Mousse Matiffiant",
            descripcion: "Textura mousse y acabado mate",
            couleur: [
              { tonos: "CLAIRE 1", hex: "#ebb785" },
              { tonos: "CLAIRE 2", hex: "#eaa87f" },
              { tonos: "CLAIRE 3", hex: "#e6ae82" },
              { tonos: "CLAIRE 4", hex: "#f0b27e" },
              { tonos: "MEDIUM 5", hex: "#e1b98f" },
              { tonos: "MEDIUM 6", hex: "#e3aa72" },
              { tonos: "MEDIUM 7", hex: "#bc8865" },
              { tonos: "OBSCURE 8", hex: "#a17654" },
              { tonos: "OBSCURE 9", hex: "#73441e" },
            ],
          },
          {
            nombre: "Rejuvenecedora",
            descripcion: "Cubre signos de la edad",
            couleur: [
              { tonos: "CLAIRE 1", hex: "#e5af6f" },
              { tonos: "CLAIRE 2", hex: "#f1a86e" },
              { tonos: "CLAIRE 3", hex: "#e19d51" },
              { tonos: "CLAIRE 4", hex: "#df9f6d" },
              { tonos: "MEDIUM 5", hex: "#d9aa78" },
              { tonos: "MEDIUM 6", hex: "#c59360" },
              { tonos: "MEDIUM 7", hex: "#b07956" },
              { tonos: "OBSCURE 8", hex: "#9f6d33" },
              { tonos: "OBSCURE 9", hex: "#834e24" },
            ],
          },
          {},
        ],
      }
    ]
  },
  {
    categoria: "Polvos",
    info: [
      {
        subcategoria: "Natural",
        productos: [
          {},
          {
            nombre: "Contour Parfait",
            descripcion: "Perfila y difumina",
            couleur: [
              { tonos: "COCOA PALETTE", hex: "" },
            ],
          },
          {
            nombre: "Polvos Sueltos Extra Finos",
            descripcion: "Emparejan, protegen y sellan",
            couleur: [
              { tonos: "PORCELAINE", hex: "#c4927c" },
              { tonos: "SANTE", hex: "#e3ab86" },
              { tonos: "TRASLUCIDE", hex: "#f1c4a4" },
            ],
          },
          {
            nombre: "Translucent",
            descripcion: "Deja respirar tu piel",
            couleur: [
              { tonos: "TRANSLÚCIDO", hex: "#ffdcc4" },
            ],
          },
          {},
        ],
      },
      {
        subcategoria: "Mate",
        productos: [
          {},
          {
            nombre: "Compactos Doble Uso Ed. De Lujo",
            descripcion: "Cubre imperfecciones, matifica",
            couleur: [
              { tonos: "CLAIRE 1-2-3", hex: "#f5c4a1" },
              { tonos: "CLAIRE 4", hex: "#fcc09c" },
              { tonos: "MEDIUM 5", hex: "#f1b38d" },
              { tonos: "MEDIUM 6", hex: "#f1ae81" },
              { tonos: "MEDIUM 7", hex: "#e7a985" },
              { tonos: "OBSCURE 8-9", hex: "#f5a36c" },
            ],
          },
          {
            nombre: "Control De Brillo FM",
            descripcion: "Eliminan el exceso de brillo",
            couleur: [
              { tonos: "CLAIRE 1-2-3", hex: "#f2c8a1" },
              { tonos: "CLAIRE 4", hex: "#f9c39e" },
              { tonos: "MEDIUM 5", hex: "#f1b185" },
              { tonos: "MEDIUM 6", hex: "#f0a874" },
              { tonos: "MEDIUM 7", hex: "#e2ae86" },
              { tonos: "OBSCURE 8-9", hex: "#e0a06f" },
            ],
          },
          {
            nombre: "Polvos Compactos Fps 15",
            descripcion: "Hasta 24 hora sin retoques",
            couleur: [
              { tonos: "CLAIRE 1-2-3", hex: "#fac8a1" },
              { tonos: "CLAIRE 4", hex: "#ffc19e" },
              { tonos: "MEDIUM 5", hex: "#eab186" },
              { tonos: "MEDIUM 6", hex: "#e9a36e" },
              { tonos: "MEDIUM 7", hex: "#ecaf8c" },
              { tonos: "OBSCURE 8-9", hex: "#dda37a" },
            ],
          },
          {
            nombre: "Polvos Concentré",
            descripcion: "Triple poder antiedad",
            couleur: [
              { tonos: "CLAIRE 1-2-3", hex: "#f3c9a0" },
              { tonos: "CLAIRE 4", hex: "#f6c69c" },
              { tonos: "MEDIUM 5", hex: "#e1ac83" },
              { tonos: "MEDIUM 6", hex: "#e3a979" },
              { tonos: "MEDIUM 7", hex: "#d8a985" },
              { tonos: "OBSCURE 8-9", hex: "#cd996d" },
            ],
          },
          {},
        ],
      },
    ]
  },
  {
    categoria: "Delineadores",
    info: [
      {
        subcategoria: "Lápiz",
        productos: [
          {},
          {
            nombre: "Brow Styler Delineador de Cejas",
            descripcion: "Máxima precisión para rellenar",
            couleur: [
              { tonos: "CASTAÑO", hex: "#583c24" },
              { tonos: "CHOCOLATE", hex: "#5a4436" },
              { tonos: "CHOCOLATE OSCURO", hex: "#443433" },
              { tonos: "EXPRESSO", hex: "#372e2f" },
            ],
          },
          {
            nombre: "Color Intense",
            descripcion: "Color intenso y textura suave",
            couleur: [
              { tonos: "BRUN", hex: "#2f110e" },
              { tonos: "NOIR", hex: "#1b1b1b" },
            ],
          },
          {},
        ],
      },
      {
        subcategoria: "Líquido",
        productos: [
          {},
          {
            nombre: "Liner D'Impact",
            descripcion: "Máxima intensidad y duración",
            couleur: [
              { tonos: "NOIR", hex: "#040404" },
            ],
          },
          {
            nombre: "Liner Illimité",
            descripcion: "Color intenso y larga duración",
            couleur: [
              { tonos: "BLEU", hex: "#313a65" },
              { tonos: "BRUN", hex: "#6c4434" },
              { tonos: "BURGUNDY", hex: "#772345" },
              { tonos: "GOLDEN", hex: "#d9a34c" },
              { tonos: "METALLIC", hex: "#c1c1c9" },
              { tonos: "NOIR", hex: "#1e1e1e" },
            ],
          },
          {},
        ],
      },
    ]
  },
  {
    categoria: "Rubores",
    info: [
      {
        subcategoria: "-",
        productos: [
          {},
          {
            nombre: "Blush Delicat",
            descripcion: "Acabado natural, Alta adherencia",
            couleur: [
              { tonos: "ABRICOT DORE", hex: "#ec8566" },
              { tonos: "BRONZE", hex: "#cb8c72" },
              { tonos: "DOLCE SAND", hex: "#e28e6c" },
              { tonos: "EDEN", hex: "#ed958c" },
              { tonos: "PURE ROSE", hex: "#d47588" },
              { tonos: "ROSE THÉ", hex: "#ef997d" },
            ],
          },
          {},
        ],
      },
    ],
  }
]

export default data;