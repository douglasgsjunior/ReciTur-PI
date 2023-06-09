// Barra de navegação

// Objetos
const navItems = document.querySelectorAll(".navbar-button-class");
const pages = {
    page1: document.getElementById("page1"),
    page2: document.getElementById("page2"),
    page3: document.getElementById("page3"),
    page4: document.getElementById("page4"),
    page5: document.getElementById("page5"),
    page6: document.getElementById("page6")
};
// Esconde todas as páginas e mostra a página 1
Object.values(pages).forEach((page) => (page.style.display = "none"));
pages["page1"].style.display = "block";
// Define o evento de clique para cada botão da barra de navegação
navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
        // Remove a classe "active" de todos os botões da barra de navegação
        navItems.forEach((navItem) => navItem.classList.remove("active"));
        // Adiciona a classe "active" apenas ao botão clicado
        e.currentTarget.classList.add("active");
        // Esconde todas as páginas
        Object.values(pages).forEach((page) => (page.style.display = "none"));
        // Mostra a página correspondente ao botão clicado
        const pageToShow = e.currentTarget.dataset.page;
        pages[pageToShow].style.display = "block";
    });
});

function initMap() {
  const center = { lat: -8.0555435, lng: -34.8806205 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: center,
    streetViewControl: false,
    mapTypeControl: false,
    styles: [
      {
        featureType: "poi",
        stylers: [
          { visibility: "off" }
        ]
      }
    ],
    fullscreenControl: false,
    zoomControl: false
  });

  var input = document.getElementById('search');
  var autocomplete = new google.maps.places.Autocomplete(input);

  autocomplete.addListener('place_changed', function() {
    var place = autocomplete.getPlace();
    if (place.geometry) {
      // O usuário selecionou um lugar válido. Você pode obter informações adicionais sobre o lugar
      // usando os métodos do objeto Place. Por exemplo, place.geometry.location contém as coordenadas
      // do lugar.
    } else {
      // O usuário não selecionou um lugar válido.
    }
  });  

  // Defina as informações dos pontos
  const points = [
    {
      name: "Instituto Ricardo Brennand",
      info: "R. Mário Campelo, 700 - Várzea, Recife - PE, 50741-904",
      position: { lat: -8.0663237, lng: -34.9658326 },
      category: "Arte & Arquitetura"
    },
    {
      name: "Shopping RioMar Recife",
      info: "Av. República do Líbano, 251 - Pina, Recife - PE, 51110-160",
      position: { lat: -8.086054, lng: -34.8973235 },
      category: "Centros de Compras"
    },
    {
      name: "Rec'N'Play",
      info: "PE, 50030-230",
      position: { lat: -8.0571438, lng: -34.8712346 },
      category: "Eventos Culturais & Festivais"
    },
    {
      name: "Forte do Brum",
      info: "Praça da Comunidade Luso Brasileira, Recife - PE, 50030-270",
      position: { lat: -8.0530861, lng: -34.8713945 },
      category: "Fortes"
    },
    {
      name: "Marco Zero",
      info: "Praça Barão do Rio Branco, Recife - PE, 50020-360",
      position: { lat: -8.063167, lng: -34.8736584 },
      category: "História & Cultura"
    },
    {
      name: "Mercado de São José",
      info: "Praça Dom Vital - São José, Recife - PE, 50020-280",
      position: { lat: -8.0685349, lng: -34.8802349 },
      category: "Mercados & Feiras"
    },
    {
      name: "Parque Dona Lindu",
      info: "Av. Boa Viagem, s/n - Boa Viagem, Recife - PE, 51030-010",
      position: { lat: -8.1412392, lng: -34.9068031 },
      category: "Parques & Áreas Verdes"
    },
    {
      name: "Ponte Maurício de Nassau",
      info: "Pte. Maurício de Nassau, Recife - PE, 50030-230",
      position: { lat: -8.063964, lng: -34.8780951 },
      category: "Pontes & Canais"
    },
    {
      name: "Praia de Boa Viagem",
      info: "Boa Viagem, Recife - PE",
      position: { lat: -8.1308813, lng: -34.9186976 },
      category: "Praias"
    },
    {
      name: "Basílica e Convento de Nossa Senhora do Carmo",
      info: "Av. Dantas Barreto, 646 - Santo Antônio, Recife - PE, 50020-000",
      position: { lat: -8.065947, lng: -34.8823761 },
      category: "Turismo Religioso"
    },
  ];

  const carousel = [
    'Tudo', 
    'Arte & Arquitetura', 
    'Centros de Compras', 
    'Eventos Culturais & Festivais', 
    'Fortes', 
    'História & Cultura', 
    'Mercados & Feiras', 
    'Parques & Áreas Verdes', 
    'Pontes & Canais', 
    'Praias', 
    'Turismo Religioso'
  ];
  let currentCategoryIndex = 0;
  
  const cardText = document.querySelector('.card-text');
  const arrowNextButton = document.querySelector('.arrow-next');
  const arrowBackButton = document.querySelector('.arrow-back');
  
  arrowNextButton.addEventListener('click', () => {
  currentCategoryIndex++;
  if (currentCategoryIndex >= carousel.length) {
    currentCategoryIndex = 0;
  }
  cardText.textContent = carousel[currentCategoryIndex];

  if (carousel[currentCategoryIndex] === 'Tudo') {
    // exibir apenas os botões da classe page2-point que possuem a categoria "Cinema"
    const cinemaButtons = document.querySelectorAll('.page2-point');
    cinemaButtons.forEach(button => {
      if (button.getAttribute('category') === 'Arte & Arquitetura' || 
          button.getAttribute('category') === 'Centros de Compras' ||
          button.getAttribute('category') === 'Eventos Culturais & Festivais' ||
          button.getAttribute('category') === 'Fortes' ||
          button.getAttribute('category') === 'História & Cultura' ||
          button.getAttribute('category') === 'Mercados & Feiras' ||
          button.getAttribute('category') === 'Parques & Áreas Verdes' ||
          button.getAttribute('category') === 'Pontes & Canais' ||
          button.getAttribute('category') === 'Praias' ||
          button.getAttribute('category') === 'Turismo Religioso') {
        button.style.display = 'flex';
      } else {
        button.style.display = 'none';
      }
    });
  } else if (carousel[currentCategoryIndex] === 'Arte & Arquitetura') {
    // exibir apenas os botões da classe page2-point que possuem a categoria "Igreja"
    const igrejaButtons = document.querySelectorAll('.page2-point');
    igrejaButtons.forEach(button => {
      if (button.getAttribute('category') === 'Arte & Arquitetura') {
          button.style.display = 'flex';
      } else {
          button.style.display = 'none';
      }
    });
  
    // ocultar todos os botões que não correspondem à categoria "Igreja"
    const nonIgrejaButtons = document.querySelectorAll('.page2-point:not([category="Arte & Arquitetura"])');
    nonIgrejaButtons.forEach(button => {
      button.style.display = 'none';
    });
  } else if (carousel[currentCategoryIndex] === 'Centros de Compras') {
    // exibir apenas os botões da classe page2-point que possuem a categoria "Igreja"
    const igrejaButtons = document.querySelectorAll('.page2-point');
    igrejaButtons.forEach(button => {
      if (button.getAttribute('category') === 'Centros de Compras') {
          button.style.display = 'flex';
      } else {
          button.style.display = 'none';
      }
    });
  
    // ocultar todos os botões que não correspondem à categoria "Igreja"
    const nonIgrejaButtons = document.querySelectorAll('.page2-point:not([category="Centros de Compras"])');
    nonIgrejaButtons.forEach(button => {
      button.style.display = 'none';
    });
  } else if (carousel[currentCategoryIndex] === 'Eventos Culturais & Festivais') {
    // exibir apenas os botões da classe page2-point que possuem a categoria "Igreja"
    const igrejaButtons = document.querySelectorAll('.page2-point');
    igrejaButtons.forEach(button => {
      if (button.getAttribute('category') === 'Eventos Culturais & Festivais') {
          button.style.display = 'flex';
      } else {
          button.style.display = 'none';
      }
    });
  
    // ocultar todos os botões que não correspondem à categoria "Igreja"
    const nonIgrejaButtons = document.querySelectorAll('.page2-point:not([category="Eventos Culturais & Festivais"])');
    nonIgrejaButtons.forEach(button => {
      button.style.display = 'none';
    });
  } else if (carousel[currentCategoryIndex] === 'Fortes') {
    // exibir apenas os botões da classe page2-point que possuem a categoria "Igreja"
    const igrejaButtons = document.querySelectorAll('.page2-point');
    igrejaButtons.forEach(button => {
      if (button.getAttribute('category') === 'Fortes') {
          button.style.display = 'flex';
      } else {
          button.style.display = 'none';
      }
    });
  
    // ocultar todos os botões que não correspondem à categoria "Igreja"
    const nonIgrejaButtons = document.querySelectorAll('.page2-point:not([category="Fortes"])');
    nonIgrejaButtons.forEach(button => {
      button.style.display = 'none';
    });
  } else if (carousel[currentCategoryIndex] === 'História & Cultura') {
    // exibir apenas os botões da classe page2-point que possuem a categoria "Igreja"
    const igrejaButtons = document.querySelectorAll('.page2-point');
    igrejaButtons.forEach(button => {
      if (button.getAttribute('category') === 'História & Cultura') {
          button.style.display = 'flex';
      } else {
          button.style.display = 'none';
      }
    });
  
    // ocultar todos os botões que não correspondem à categoria "Igreja"
    const nonIgrejaButtons = document.querySelectorAll('.page2-point:not([category="História & Cultura"])');
    nonIgrejaButtons.forEach(button => {
      button.style.display = 'none';
    });
  } else if (carousel[currentCategoryIndex] === 'Mercados & Feiras') {
    // exibir apenas os botões da classe page2-point que possuem a categoria "Igreja"
    const igrejaButtons = document.querySelectorAll('.page2-point');
    igrejaButtons.forEach(button => {
      if (button.getAttribute('category') === 'Mercados & Feiras') {
          button.style.display = 'flex';
      } else {
          button.style.display = 'none';
      }
    });
  
    // ocultar todos os botões que não correspondem à categoria "Igreja"
    const nonIgrejaButtons = document.querySelectorAll('.page2-point:not([category="Mercados & Feiras"])');
    nonIgrejaButtons.forEach(button => {
      button.style.display = 'none';
    });
  } else if (carousel[currentCategoryIndex] === 'Parques & Áreas Verdes') {
    // exibir apenas os botões da classe page2-point que possuem a categoria "Igreja"
    const igrejaButtons = document.querySelectorAll('.page2-point');
    igrejaButtons.forEach(button => {
      if (button.getAttribute('category') === 'Parques & Áreas Verdes') {
          button.style.display = 'flex';
      } else {
          button.style.display = 'none';
      }
    });
  
    // ocultar todos os botões que não correspondem à categoria "Igreja"
    const nonIgrejaButtons = document.querySelectorAll('.page2-point:not([category="Parques & Áreas Verdes"])');
    nonIgrejaButtons.forEach(button => {
      button.style.display = 'none';
    });
  } else if (carousel[currentCategoryIndex] === 'Pontes & Canais') {
    // exibir apenas os botões da classe page2-point que possuem a categoria "Igreja"
    const igrejaButtons = document.querySelectorAll('.page2-point');
    igrejaButtons.forEach(button => {
      if (button.getAttribute('category') === 'Pontes & Canais') {
          button.style.display = 'flex';
      } else {
          button.style.display = 'none';
      }
    });
  
    // ocultar todos os botões que não correspondem à categoria "Igreja"
    const nonIgrejaButtons = document.querySelectorAll('.page2-point:not([category="Pontes & Canais"])');
    nonIgrejaButtons.forEach(button => {
      button.style.display = 'none';
    });
  } else if (carousel[currentCategoryIndex] === 'Praias') {
    // exibir apenas os botões da classe page2-point que possuem a categoria "Igreja"
    const igrejaButtons = document.querySelectorAll('.page2-point');
    igrejaButtons.forEach(button => {
      if (button.getAttribute('category') === 'Praias') {
          button.style.display = 'flex';
      } else {
          button.style.display = 'none';
      }
    });
  
    // ocultar todos os botões que não correspondem à categoria "Igreja"
    const nonIgrejaButtons = document.querySelectorAll('.page2-point:not([category="Praias"])');
    nonIgrejaButtons.forEach(button => {
      button.style.display = 'none';
    });
  } else if (carousel[currentCategoryIndex] === 'Turismo Religioso') {
    // exibir apenas os botões da classe page2-point que possuem a categoria "Igreja"
    const igrejaButtons = document.querySelectorAll('.page2-point');
    igrejaButtons.forEach(button => {
      if (button.getAttribute('category') === 'Turismo Religioso') {
          button.style.display = 'flex';
      } else {
          button.style.display = 'none';
      }
    });
  
    // ocultar todos os botões que não correspondem à categoria "Igreja"
    const nonIgrejaButtons = document.querySelectorAll('.page2-point:not([category="Turismo Religioso"])');
    nonIgrejaButtons.forEach(button => {
      button.style.display = 'none';
    });
  } else {
    // exibir todos os botões da classe page2-point
    const allButtons = document.querySelectorAll('.page2-point');
    allButtons.forEach(button => {
      button.style.display = 'flex';
    });
  }  
});

arrowBackButton.addEventListener('click', () => {
  currentCategoryIndex--;
  if (currentCategoryIndex < 0) {
    currentCategoryIndex = carousel.length - 1;
  }
  cardText.textContent = carousel[currentCategoryIndex];

  if (carousel[currentCategoryIndex] === 'Tudo') {
    // exibir apenas os botões da classe page2-point que possuem a categoria "Cinema"
    const cinemaButtons = document.querySelectorAll('.page2-point');
    cinemaButtons.forEach(button => {
      if (button.getAttribute('category') === 'Arte & Arquitetura' || 
          button.getAttribute('category') === 'Centros de Compras' ||
          button.getAttribute('category') === 'Eventos Culturais & Festivais' ||
          button.getAttribute('category') === 'Fortes' ||
          button.getAttribute('category') === 'História & Cultura' ||
          button.getAttribute('category') === 'Mercados & Feiras' ||
          button.getAttribute('category') === 'Parques & Áreas Verdes' ||
          button.getAttribute('category') === 'Pontes & Canais' ||
          button.getAttribute('category') === 'Praias' ||
          button.getAttribute('category') === 'Turismo Religioso') {
        button.style.display = 'flex';
      } else {
        button.style.display = 'none';
      }
    });
  } else if (carousel[currentCategoryIndex] === 'Arte & Arquitetura') {
    // exibir apenas os botões da classe page2-point que possuem a categoria "Igreja"
    const igrejaButtons = document.querySelectorAll('.page2-point');
    igrejaButtons.forEach(button => {
      if (button.getAttribute('category') === 'Arte & Arquitetura') {
          button.style.display = 'flex';
      } else {
          button.style.display = 'none';
      }
    });
  
    // ocultar todos os botões que não correspondem à categoria "Igreja"
    const nonIgrejaButtons = document.querySelectorAll('.page2-point:not([category="Arte & Arquitetura"])');
    nonIgrejaButtons.forEach(button => {
      button.style.display = 'none';
    });
  } else if (carousel[currentCategoryIndex] === 'Centros de Compras') {
    // exibir apenas os botões da classe page2-point que possuem a categoria "Igreja"
    const igrejaButtons = document.querySelectorAll('.page2-point');
    igrejaButtons.forEach(button => {
      if (button.getAttribute('category') === 'Centros de Compras') {
          button.style.display = 'flex';
      } else {
          button.style.display = 'none';
      }
    });
  
    // ocultar todos os botões que não correspondem à categoria "Igreja"
    const nonIgrejaButtons = document.querySelectorAll('.page2-point:not([category="Centros de Compras"])');
    nonIgrejaButtons.forEach(button => {
      button.style.display = 'none';
    });
  } else if (carousel[currentCategoryIndex] === 'Eventos Culturais & Festivais') {
    // exibir apenas os botões da classe page2-point que possuem a categoria "Igreja"
    const igrejaButtons = document.querySelectorAll('.page2-point');
    igrejaButtons.forEach(button => {
      if (button.getAttribute('category') === 'Eventos Culturais & Festivais') {
          button.style.display = 'flex';
      } else {
          button.style.display = 'none';
      }
    });
  
    // ocultar todos os botões que não correspondem à categoria "Igreja"
    const nonIgrejaButtons = document.querySelectorAll('.page2-point:not([category="Eventos Culturais & Festivais"])');
    nonIgrejaButtons.forEach(button => {
      button.style.display = 'none';
    });
  } else if (carousel[currentCategoryIndex] === 'Fortes') {
    // exibir apenas os botões da classe page2-point que possuem a categoria "Igreja"
    const igrejaButtons = document.querySelectorAll('.page2-point');
    igrejaButtons.forEach(button => {
      if (button.getAttribute('category') === 'Fortes') {
          button.style.display = 'flex';
      } else {
          button.style.display = 'none';
      }
    });
  
    // ocultar todos os botões que não correspondem à categoria "Igreja"
    const nonIgrejaButtons = document.querySelectorAll('.page2-point:not([category="Fortes"])');
    nonIgrejaButtons.forEach(button => {
      button.style.display = 'none';
    });
  } else if (carousel[currentCategoryIndex] === 'História & Cultura') {
    // exibir apenas os botões da classe page2-point que possuem a categoria "Igreja"
    const igrejaButtons = document.querySelectorAll('.page2-point');
    igrejaButtons.forEach(button => {
      if (button.getAttribute('category') === 'História & Cultura') {
          button.style.display = 'flex';
      } else {
          button.style.display = 'none';
      }
    });
  
    // ocultar todos os botões que não correspondem à categoria "Igreja"
    const nonIgrejaButtons = document.querySelectorAll('.page2-point:not([category="História & Cultura"])');
    nonIgrejaButtons.forEach(button => {
      button.style.display = 'none';
    });
  } else if (carousel[currentCategoryIndex] === 'Mercados & Feiras') {
    // exibir apenas os botões da classe page2-point que possuem a categoria "Igreja"
    const igrejaButtons = document.querySelectorAll('.page2-point');
    igrejaButtons.forEach(button => {
      if (button.getAttribute('category') === 'Mercados & Feiras') {
          button.style.display = 'flex';
      } else {
          button.style.display = 'none';
      }
    });
  
    // ocultar todos os botões que não correspondem à categoria "Igreja"
    const nonIgrejaButtons = document.querySelectorAll('.page2-point:not([category="Mercados & Feiras"])');
    nonIgrejaButtons.forEach(button => {
      button.style.display = 'none';
    });
  } else if (carousel[currentCategoryIndex] === 'Parques & Áreas Verdes') {
    // exibir apenas os botões da classe page2-point que possuem a categoria "Igreja"
    const igrejaButtons = document.querySelectorAll('.page2-point');
    igrejaButtons.forEach(button => {
      if (button.getAttribute('category') === 'Parques & Áreas Verdes') {
          button.style.display = 'flex';
      } else {
          button.style.display = 'none';
      }
    });
  
    // ocultar todos os botões que não correspondem à categoria "Igreja"
    const nonIgrejaButtons = document.querySelectorAll('.page2-point:not([category="Parques & Áreas Verdes"])');
    nonIgrejaButtons.forEach(button => {
      button.style.display = 'none';
    });
  } else if (carousel[currentCategoryIndex] === 'Pontes & Canais') {
    // exibir apenas os botões da classe page2-point que possuem a categoria "Igreja"
    const igrejaButtons = document.querySelectorAll('.page2-point');
    igrejaButtons.forEach(button => {
      if (button.getAttribute('category') === 'Pontes & Canais') {
          button.style.display = 'flex';
      } else {
          button.style.display = 'none';
      }
    });
  
    // ocultar todos os botões que não correspondem à categoria "Igreja"
    const nonIgrejaButtons = document.querySelectorAll('.page2-point:not([category="Pontes & Canais"])');
    nonIgrejaButtons.forEach(button => {
      button.style.display = 'none';
    });
  } else if (carousel[currentCategoryIndex] === 'Praias') {
    // exibir apenas os botões da classe page2-point que possuem a categoria "Igreja"
    const igrejaButtons = document.querySelectorAll('.page2-point');
    igrejaButtons.forEach(button => {
      if (button.getAttribute('category') === 'Praias') {
          button.style.display = 'flex';
      } else {
          button.style.display = 'none';
      }
    });
  
    // ocultar todos os botões que não correspondem à categoria "Igreja"
    const nonIgrejaButtons = document.querySelectorAll('.page2-point:not([category="Praias"])');
    nonIgrejaButtons.forEach(button => {
      button.style.display = 'none';
    });
  } else if (carousel[currentCategoryIndex] === 'Turismo Religioso') {
    // exibir apenas os botões da classe page2-point que possuem a categoria "Igreja"
    const igrejaButtons = document.querySelectorAll('.page2-point');
    igrejaButtons.forEach(button => {
      if (button.getAttribute('category') === 'Turismo Religioso') {
          button.style.display = 'flex';
      } else {
          button.style.display = 'none';
      }
    });
  
    // ocultar todos os botões que não correspondem à categoria "Igreja"
    const nonIgrejaButtons = document.querySelectorAll('.page2-point:not([category="Turismo Religioso"])');
    nonIgrejaButtons.forEach(button => {
      button.style.display = 'none';
    });
  } else {
    // exibir todos os botões da classe page2-point
    const allButtons = document.querySelectorAll('.page2-point');
    allButtons.forEach(button => {
      button.style.display = 'flex';
    });
  }
  
});

  // Itere sobre os pontos e adicione os marcadores ao mapa
  points.forEach((point) => {
    const newMarker = new google.maps.Marker({
      position: point.position,
      map: map,
      icon: {
        url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
      },
    });

    const bottomSection = document.getElementById("bottom-section");
    const infoPage = document.getElementById("page2");

    // Crie um novo botão para mostrar as informações do ponto
    const newButton = document.createElement("button");
    newButton.innerHTML = ` ${point.name} `;
    newButton.className = 'page2-point'
    newButton.setAttribute('category', point.category); // adicionando o atributo "category"
    newButton.id = point.name.replace(/\s+/g, '-').toLowerCase() + '-button'; // Adição do ID
    newButton.addEventListener("click", () => {
      // Verificar se o bottom-section está visível e, se sim, ocultá-lo
      if (bottomSection.style.display === "block") {
        bottomSection.style.display = "none";
      }
      // Verificar se a página atual é a "page2"
      if (pages["page2"].style.display === "block") {
        // Esconde a página 2
        pages["page2"].style.display = "none";
        // Mostra a página 1
        pages["page1"].style.display = "block";
        // Adiciona a classe "active" ao botão correspondente na barra de navegação
        document.getElementById("page1NavbarButton").classList.add("active");
        // Remove a classe "active" dos outros botões na barra de navegação
        document.querySelectorAll(".navbar-button-class:not(#page1NavbarButton)").forEach((button) => {
          button.classList.remove("active");
        });

        // Mostrar informações do ponto
        map.setCenter(point.position);
        map.setZoom(20); // Defina o nível de zoom adequado aqui

        // Exibir a bottom-section
        if (bottomSection.innerHTML.trim() === "") {
          const markerInfo = document.createElement("div");
          markerInfo.innerHTML = `
            <h2>${point.name}</h2>
            <p>${point.info}</p>
          `;

          bottomSection.innerHTML = "";
          bottomSection.appendChild(markerInfo);

          bottomSection.style.display = "block";
        } else {
          const markerInfo = document.createElement("div");
          markerInfo.innerHTML = `
            <h2>${point.name}</h2>
            <p>${point.info}</p>
          `;

          bottomSection.innerHTML = "";
          bottomSection.appendChild(markerInfo);

          bottomSection.style.display = "block";
        }
      }
    });
    
    infoPage.appendChild(newButton);

    newMarker.addListener("click", () => {
      if (bottomSection.innerHTML.trim() === "") {
        const markerInfo = document.createElement("div");
        markerInfo.innerHTML = `
          <h2>${point.name}</h2>
          <p>${point.info}</p>
        `;

        bottomSection.innerHTML = "";
        bottomSection.appendChild(markerInfo);

        bottomSection.style.display = "block";
      } else {
        bottomSection.innerHTML = "";

        bottomSection.style.display = "none";
      }
    });
  });

  let watcherId = null;

  if (navigator.geolocation) {
    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 5000
    };
    const userMarker = new google.maps.Marker({
      map: map,
      icon: {
        url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
      }
    });

    watcherId = navigator.geolocation.watchPosition(
      (position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        userMarker.setPosition(userLocation);
        map.setCenter(userLocation);
      },
      (error) => {
        console.log("Error getting location:", error);
      },
      options
    );

    const clearLocationButton = document.getElementById("clearLocationButton");

    clearLocationButton.addEventListener("click", () => {
      userMarker.setPosition(null);
      map.setCenter(center);
      navigator.geolocation.clearWatch(watcherId);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

window.onload = () => {
  initMap();
};