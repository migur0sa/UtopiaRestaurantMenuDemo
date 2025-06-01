// MENU DATA - Edit this to change your menu content
export const menuData = {
  es: {
    name: "Español",
    flag: "🇪🇸",
    restaurant: {
      name: "TAO Downtown",
      logo: "restaurant-logo.png", // Same logo for both languages
      address: "123 Calle Gourmet, Distrito Culinario",
      phone: "(555) 123-DINE",
      hours: "Abierto Martes - Domingo, 5:00 PM - 11:00 PM",
      socialMedia: [
        {
          platform: "instagram",
          link: "https://instagram.com/luminousbistro",
          name: "Instagram",
        },
        {
          platform: "whatsapp",
          link: "https://wa.me/15551234463",
          name: "WhatsApp",
        },
      ],
    },
    sections: [
      {
        name: "Especiales",
        type: "special",
        items: [
          {
            name: "Menú Degustación del Chef",
            price: "$120",
            description:
              "Menú degustación de siete platos con ingredientes locales de temporada y maridaje de vinos",
            tags: ["Elección del Chef", "Maridaje de Vinos"],
            image: "chef-tasting.jpg",
          },
          {
            name: "Especial de Brunch de Fin de Semana",
            price: "$45",
            description:
              "Mimosas ilimitadas con clásicos de brunch elevados y música de jazz en vivo",
            tags: ["Solo Fines de Semana", "Ilimitado"],
            image: "mimosas.jpg",
          },
        ],
      },
      {
        name: "Entradas",
        type: "regular",
        items: [
          {
            name: "Arancini de Trufa",
            price: "$16",
            description:
              "Bolitas de risotto crujientes rellenas de hongos silvestres y aceite de trufa, servidas con alioli de ajo asado",
            tags: ["Vegetariano", "Popular"],
            image: "truffle-arancini.jpg",
          },
          {
            name: "Vieiras Selladas",
            price: "$22",
            description:
              "Vieiras U10 selladas en sartén con puré de coliflor, crujientes de panceta y microgreens",
            tags: ["Sin Gluten", "Elección del Chef"],
            image: "Seared-Scallops.jpg",
          },
        ],
      },
      {
        name: "Platos Fuertes",
        type: "regular",
        subsections: [
          {
            name: "Carnes",
            items: [
              {
                name: "Ribeye Wagyu",
                price: "$65",
                description:
                  "Ribeye wagyu de 12oz alimentado con pasto, con médula ósea asada, verduras de temporada y jus de vino tinto",
                tags: ["Premium", "Firma"],
                image: "wagyu.jpg",
              },
              {
                name: "Pechuga de Pato",
                price: "$42",
                description:
                  "Pechuga de pato crujiente con puré de calabaza, cerezas confitadas y salsa de oporto",
                tags: ["Especialidad", "Sin Gluten"],
                image: "duck.jpg",
              },
            ],
          },
          {
            name: "Mariscos",
            items: [
              {
                name: "Risotto de Langosta",
                price: "$38",
                description:
                  "Arroz arborio cremoso con cola de langosta fresca, azafrán, guisantes y ralladura de limón",
                tags: ["Mariscos", "Popular"],
                image: "Lobster-Risotto.jpg",
              },
              {
                name: "Lubina Chilena",
                price: "$36",
                description:
                  "Lubina chilena a la plancha con puré de coliflor, alcaparras crujientes y emulsión de limón",
                tags: ["Sostenible", "Sin Gluten"],
                image: "seabass.jpg",
              },
            ],
          },
        ],
      },
      {
        name: "Postres",
        type: "regular",
        items: [
          {
            name: "Soufflé de Chocolate",
            price: "$14",
            description:
              "Soufflé tibio de chocolate negro con helado de vainilla y coulis de frambuesa",
            tags: ["Hecho por Encargo", "Vegetariano"],
            image: "Chocolate.jpg",
          },
        ],
      },
    ],
  },
  en: {
    name: "English",
    flag: "🇺🇸",
    restaurant: {
      name: "TAO Downtown",
      logo: "restaurant-logo.png", // Put your logo filename here like "images/logo.png"
      address: "123 Gourmet Street, Culinary District",
      phone: "(555) 123-DINE",
      hours: "Open Tuesday - Sunday, 5:00 PM - 11:00 PM",
      socialMedia: [
        {
          platform: "instagram",
          link: "https://instagram.com/luminousbistro",
          name: "Instagram",
        },
        {
          platform: "whatsapp",
          link: "https://wa.me/15551234463",
          name: "WhatsApp",
        },
      ],
    },
    sections: [
      {
        name: "Specials",
        type: "special",
        items: [
          {
            name: "Chef's Tasting Menu",
            price: "$120",
            description:
              "Seven-course seasonal tasting menu featuring locally sourced ingredients and wine pairings",
            tags: ["Chef's Choice", "Wine Pairing"],
            image: "chef-tasting.jpg", // Put your image filename here like "images/chef-tasting.jpg"
          },
          {
            name: "Weekend Brunch Special",
            price: "$45",
            description:
              "Bottomless mimosas with elevated brunch classics and live jazz music",
            tags: ["Weekend Only", "Bottomless"],
            image: "mimosas.jpg", // You can still use emojis if you prefer
          },
        ],
      },
      {
        name: "Appetizers",
        type: "regular",
        items: [
          {
            name: "Truffle Arancini",
            price: "$16",
            description:
              "Crispy risotto balls filled with wild mushrooms and truffle oil, served with roasted garlic aioli",
            tags: ["Vegetarian", "Popular"],
            image: "truffle-arancini.jpg",
          },
          {
            name: "Seared Scallops",
            price: "$22",
            description:
              "Pan-seared U10 scallops with cauliflower purée, pancetta crisps, and microgreens",
            tags: ["Gluten-Free", "Chef's Choice"],
            image: "seared-scallops.jpg",
          },
        ],
      },
      {
        name: "Main Courses",
        type: "regular",
        subsections: [
          {
            name: "Meat",
            items: [
              {
                name: "Wagyu Ribeye",
                price: "$65",
                description:
                  "12oz grass-fed wagyu ribeye with roasted bone marrow, seasonal vegetables, and red wine jus",
                tags: ["Premium", "Signature"],
                image: "wagyu.jpg",
              },
              {
                name: "Duck Breast",
                price: "$42",
                description:
                  "Crispy skin duck breast with butternut squash purée, candied cherries, and port reduction",
                tags: ["Specialty", "Gluten-Free"],
                image: "duck.jpg",
              },
            ],
          },
          {
            name: "Seafood",
            items: [
              {
                name: "Lobster Risotto",
                price: "$38",
                description:
                  "Creamy arborio rice with fresh lobster tail, saffron, peas, and lemon zest",
                tags: ["Seafood", "Popular"],
                image: "lobster-risotto.jpg",
              },
              {
                name: "Chilean Sea Bass",
                price: "$36",
                description:
                  "Pan-seared Chilean sea bass with cauliflower purée, crispy capers, and lemon emulsion",
                tags: ["Sustainable", "Gluten-Free"],
                image: "seabass.jpg",
              },
            ],
          },
        ],
      },
      {
        name: "Desserts",
        type: "regular",
        items: [
          {
            name: "Chocolate Soufflé",
            price: "$14",
            description:
              "Warm dark chocolate soufflé with vanilla bean ice cream and raspberry coulis",
            tags: ["Made to Order", "Vegetarian"],
            image: "Chocolate.jpg",
          },
        ],
      },
    ],
  },
};
