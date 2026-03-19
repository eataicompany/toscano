// ═══════════════════════════════════════════════════════════════
// CONFIGURACIÓN CENTRALIZADA
// ═══════════════════════════════════════════════════════════════

const CONFIG = {
    negocio: "El Toscano",
    whatsapp: "573145476668",
    sedes: ["La Sombrilla", "Lomas de Granada", "Obando"],
    metodosPago: ["💳 Por nequi", "💵 En efectivo", "🔑 Por Bre-B"],
    horario: { abre: 17, cierra: 23 }
};

const MENU = {
    bebidas: [
        { id: "coctel_variado", nombre: "Tom Collins, Margarita, Piña Colada, Capitán Nirvana", precio: 15000, imagen: "cocteles.jpg", ingredientes: ["Ron", "Jugo de limón fresco", "Jarabe simple", "Agua de soda"], emoji: "🍹", categoria: "Bebidas" },
        { id: "michelada_tradicional", nombre: "Michelada Tradicional", precio: 6000, imagen: "michelada-tradicional.jpg", ingredientes: ["Cerveza", "Salsa Maggi", "Limón", "Especias"], emoji: "🍹", categoria: "Bebidas" },
        { id: "michelada_sin_alcohol", nombre: "Michelada Sin Alcohol", precio: 6000, imagen: "michelada-sin.jpg", ingredientes: ["Agua de soda", "Salsa Maggi", "Limón", "Especias"], emoji: "🍹", categoria: "Bebidas" },
        { id: "michelada_toscana", nombre: "Michelada Toscana", precio: 8000, imagen: "michelada-toscana.jpg", ingredientes: ["Cerveza", "Salsa especial Toscano", "Limón", "Toque de chamoy"], emoji: "🍹", categoria: "Bebidas" },
        { id: "michelada_alcohol", nombre: "Michelada Con Alcohol", precio: 10000, imagen: "michelada-alcohol.jpg", ingredientes: ["Cerveza premium", "Salsa Maggi", "Limón", "Ron blanco"], emoji: "🍹", categoria: "Bebidas" },
        { id: "jugo_agua_personal", nombre: "Jugo Natural en Agua (Personal)", precio: 4000, imagen: "jugo-agua.jpg", ingredientes: ["Guanábana / Mango / Mora / Maracuyá / Lulo"], emoji: "🍹", categoria: "Bebidas" },
        { id: "jugo_agua_jarra", nombre: "Jugo Natural en Agua (Jarra)", precio: 7000, imagen: "jarra-agua.jpg", ingredientes: ["Guanábana / Mango / Mora / Maracuyá / Lulo"], emoji: "🍹", categoria: "Bebidas" },
        { id: "jugo_leche_personal", nombre: "Jugo Natural en Leche (Personal)", precio: 5000, imagen: "jugo-leche.jpg", ingredientes: ["Guanábana / Mango / Mora / Maracuyá / Lulo", "Leche fresca"], emoji: "🍹", categoria: "Bebidas" },
        { id: "jugo_leche_jarra", nombre: "Jugo Natural en Leche (Jarra)", precio: 9000, imagen: "jarra-leche.jpg", ingredientes: ["Guanábana / Mango / Mora / Maracuyá / Lulo", "Leche fresca"], emoji: "🍹", categoria: "Bebidas" },
        { id: "limonada_natural", nombre: "Limonada Natural", precio: 10000, imagen: "limonada-natural.jpg", ingredientes: ["Limones frescos", "Agua", "Azúcar"], emoji: "🍹", categoria: "Bebidas" },
        { id: "limonada_coco", nombre: "Limonada Coco", precio: 10000, imagen: "limonada-coco.jpg", ingredientes: ["Limones frescos", "Leche de coco", "Azúcar"], emoji: "🍹", categoria: "Bebidas" },
        { id: "cerezada", nombre: "Cerezada", precio: 10000, imagen: "cerezada.jpg", ingredientes: ["Jugo de cereza", "Agua", "Hielo"], emoji: "🍹", categoria: "Bebidas" },
        { id: "malteada_pina_colada", nombre: "Malteada Piña Colada", precio: 10000, imagen: "malteada-pina.jpg", ingredientes: ["Piña", "Leche de coco", "Helado de vainilla"], emoji: "🍹", categoria: "Bebidas" },
        { id: "gaseosa_personal", nombre: "Gaseosa (Personal)", precio: 4000, imagen: "gaseosa-personal.jpg", ingredientes: ["Gaseosa fría"], emoji: "🍹", categoria: "Bebidas" },
        { id: "gaseosa_litro", nombre: "Gaseosa (Litro)", precio: 6000, imagen: "gaseosa-litro.jpg", ingredientes: ["Gaseosa fría"], emoji: "🍹", categoria: "Bebidas" },
        { id: "coca_cola_1_5l", nombre: "Coca-Cola 1.5L", precio: 8000, imagen: "cocacola-15.jpg", ingredientes: ["Coca-Cola"], emoji: "🍹", categoria: "Bebidas" },
        { id: "cerveza", nombre: "Cerveza", precio: 5000, imagen: "cerveza.jpg", ingredientes: ["Cerveza fría"], emoji: "🍹", categoria: "Bebidas" },
        { id: "hervido_maracuya", nombre: "Hervido Maracuyá", precio: 10000, imagen: "hervido-maracuya.jpg", ingredientes: ["Maracuyá", "Agua caliente", "Azúcar"], emoji: "🍹", categoria: "Bebidas" },
        { id: "hervido_lulo", nombre: "Hervido Lulo", precio: 10000, imagen: "hervido-lulo.jpg", ingredientes: ["Lulo", "Agua caliente", "Azúcar"], emoji: "🍹", categoria: "Bebidas" },
        { id: "hervido_mora", nombre: "Hervido Mora", precio: 10000, imagen: "hervido-mora.jpg", ingredientes: ["Mora", "Agua caliente", "Azúcar"], emoji: "🍹", categoria: "Bebidas" },
        { id: "cafe_negro", nombre: "Café Negro", precio: 2000, imagen: "cafe-negro.jpg", ingredientes: ["Café gourmet"], emoji: "🍹", categoria: "Bebidas" },
        { id: "cafe_leche", nombre: "Café en Leche", precio: 3000, imagen: "cafe-leche.jpg", ingredientes: ["Café gourmet", "Leche caliente"], emoji: "🍹", categoria: "Bebidas" }
    ],
    carnes: [
        { id: "carne_res", nombre: "Carne de Res (180g + Papa a la Francesa)", precio: 13000, imagen: "res-papa.jpg", ingredientes: ["Carne premium 180g", "Papa a la francesa", "Ensalada fresca"], emoji: "🍖", categoria: "Carnes" },
        { id: "carne_cerdo", nombre: "Carne de Cerdo (180g + Papa a la Francesa)", precio: 13000, imagen: "cerdo-papa.jpg", ingredientes: ["Cerdo premium 180g", "Papa a la francesa", "Ensalada fresca"], emoji: "🍖", categoria: "Carnes" },
        { id: "costilla_frita", nombre: "Costilla Frita (180g + Papa a la Francesa)", precio: 13000, imagen: "costilla-frita.jpg", ingredientes: ["Costilla frita crujiente", "Papa a la francesa", "Ensalada"], emoji: "🍖", categoria: "Carnes" },
        { id: "costilla_bbq", nombre: "Costilla BBQ (180g + Papa a la Francesa)", precio: 13000, imagen: "costilla-bbq.jpg", ingredientes: ["Costilla BBQ ahumada", "Papa a la francesa", "Salsa BBQ"], emoji: "🍖", categoria: "Carnes" },
        { id: "pechuga", nombre: "Pechuga (180g + Papa a la Francesa)", precio: 15000, imagen: "pechuga-papa.jpg", ingredientes: ["Pechuga de pollo 180g", "Papa a la francesa", "Ensalada"], emoji: "🍖", categoria: "Carnes" },
        { id: "churrasco", nombre: "Churrasco (180g + Papa a la Francesa)", precio: 16000, imagen: "churrasco.jpg", ingredientes: ["Churrasco de res", "Papa a la francesa", "Ensalada"], emoji: "🍖", categoria: "Carnes" },
        { id: "picada_2_personas", nombre: "Picada 2 Personas", precio: 30000, imagen: "picada-2.jpg", ingredientes: ["Carne", "Costilla", "Pollo", "Salchichas", "Papa"], emoji: "🍖", categoria: "Carnes" },
        { id: "picada_3_4_personas", nombre: "Picada 3-4 Personas", precio: 50000, imagen: "picada-4.jpg", ingredientes: ["Carne", "Costilla", "Pollo", "Salchichas", "Alitas", "Papa"], emoji: "🍖", categoria: "Carnes" },
        { id: "alitas_bbq_6", nombre: "Alitas BBQ (6 piezas)", precio: 15000, imagen: "alitas-bbq.jpg", ingredientes: ["Alitas de pollo", "Salsa BBQ ahumada"], emoji: "🍖", categoria: "Carnes" },
        { id: "alitas_miel_mostaza_6", nombre: "Alitas Miel-Mostaza (6 piezas)", precio: 15000, imagen: "alitas-miel.jpg", ingredientes: ["Alitas de pollo", "Salsa miel y mostaza"], emoji: "🍖", categoria: "Carnes" },
        { id: "alitas_teriyaki_6", nombre: "Alitas Teriyaki (6 piezas)", precio: 15000, imagen: "alitas-teriyaki.jpg", ingredientes: ["Alitas de pollo", "Salsa Teriyaki"], emoji: "🍖", categoria: "Carnes" },
        { id: "alitas_bbq_8", nombre: "Alitas BBQ (8 piezas)", precio: 20000, imagen: "alitas-bbq.jpg", ingredientes: ["Alitas de pollo", "Salsa BBQ ahumada"], emoji: "🍖", categoria: "Carnes" },
        { id: "alitas_miel_mostaza_8", nombre: "Alitas Miel-Mostaza (8 piezas)", precio: 20000, imagen: "alitas-miel.jpg", ingredientes: ["Alitas de pollo", "Salsa miel y mostaza"], emoji: "🍖", categoria: "Carnes" },
        { id: "alitas_teriyaki_8", nombre: "Alitas Teriyaki (8 piezas)", precio: 20000, imagen: "alitas-teriyaki.jpg", ingredientes: ["Alitas de pollo", "Salsa Teriyaki"], emoji: "🍖", categoria: "Carnes" },
        { id: "alitas_bbq_12", nombre: "Alitas BBQ (12 piezas)", precio: 27000, imagen: "alitas-bbq.jpg", ingredientes: ["Alitas de pollo", "Salsa BBQ ahumada"], emoji: "🍖", categoria: "Carnes" },
        { id: "alitas_miel_mostaza_12", nombre: "Alitas Miel-Mostaza (12 piezas)", precio: 27000, imagen: "alitas-miel.jpg", ingredientes: ["Alitas de pollo", "Salsa miel y mostaza"], emoji: "🍖", categoria: "Carnes" },
        { id: "alitas_teriyaki_12", nombre: "Alitas Teriyaki (12 piezas)", precio: 27000, imagen: "alitas-teriyaki.jpg", ingredientes: ["Alitas de pollo", "Salsa Teriyaki"], emoji: "🍖", categoria: "Carnes" },
        { id: "arroz", nombre: "Arroz", precio: 3000, imagen: "arroz.jpg", ingredientes: ["Arroz blanco cocido"], emoji: "🍖", categoria: "Carnes" },
        { id: "papa", nombre: "Papa a la Francesa", precio: 5000, imagen: "papa-francesa.jpg", ingredientes: ["Papa fresca frita"], emoji: "🍖", categoria: "Carnes" }
    ],
    salchipapas: [
        { id: "salchipapa_personal", nombre: "Salchipapa Personal", precio: 6000, imagen: "salchipapa-personal.jpg", ingredientes: ["Papa fritas", "Salchicha", "Queso fundido", "Salsas variadas"], emoji: "🍟", categoria: "Salchipapas" },
        { id: "salchipapa_mediana", nombre: "Salchipapa Mediana", precio: 18000, imagen: "salchipapa-mediana.jpg", ingredientes: ["Papa fritas", "Salchicha", "Queso fundido", "Salsas variadas"], emoji: "🍟", categoria: "Salchipapas" },
        { id: "salchipapa_grande", nombre: "Salchipapa Grande", precio: 25000, imagen: "salchipapa-grande.jpg", ingredientes: ["Papa fritas abundante", "Salchicha", "Queso fundido", "Salsas variadas"], emoji: "🍟", categoria: "Salchipapas" },
        { id: "salchipapa_familiar", nombre: "Salchipapa Familiar", precio: 30000, imagen: "salchipapa-familiar.jpg", ingredientes: ["Papa fritas abundante", "Salchichas", "Queso fundido", "Salsas variadas"], emoji: "🍟", categoria: "Salchipapas" },
        { id: "salchipapa_super", nombre: "Salchipapa Super", precio: 40000, imagen: "salchipapa-super.jpg", ingredientes: ["Papa fritas abundante", "Salchichas", "Queso fundido", "Salsas variadas"], emoji: "🍟", categoria: "Salchipapas" },
        { id: "la_toscana", nombre: "La Toscana (4 porciones)", precio: 50000, imagen: "la-toscana.jpg", ingredientes: ["Papa fritas", "Costilla BBQ", "Alitas BBQ", "Pollo", "Carne", "Chorizo", "Maicitos", "Tocineta"], emoji: "🍟", categoria: "Salchipapas" }
    ],
    desgranados_pizza: [
        { id: "desgranado", nombre: "Desgranado", precio: 12000, imagen: "desgranado.jpg", ingredientes: ["Papa", "Maíz desgranado", "Queso", "Salsas"], emoji: "🌽", categoria: "Desgranados y Pizza" },
        { id: "desgranado_criollo", nombre: "Desgranado Criollo", precio: 12000, imagen: "desgranado-criollo.jpg", ingredientes: ["Papa", "Maíz desgranado", "Queso fresco", "Chorizo"], emoji: "🌽", categoria: "Desgranados y Pizza" },
        { id: "pizza_personal", nombre: "Pizza Personal (Base Queso, Jamón, Salsa)", precio: 7000, imagen: "pizza-personal.jpg", ingredientes: ["Masa artesanal", "Salsa de tomate", "Queso mozzarella", "Jamón"], emoji: "🌽", categoria: "Desgranados y Pizza" },
        { id: "taco_2", nombre: "Tacos (2 piezas)", precio: 7000, imagen: "tacos-2.jpg", ingredientes: ["Tortillas", "Jamón", "Queso", "Pollo", "Maicitos", "Papitas", "Salsas"], emoji: "🌽", categoria: "Desgranados y Pizza" },
        { id: "taco_3", nombre: "Tacos (3 piezas)", precio: 10000, imagen: "tacos-3.jpg", ingredientes: ["Tortillas", "Jamón", "Queso", "Pollo", "Maicitos", "Papitas", "Salsas"], emoji: "🌽", categoria: "Desgranados y Pizza" },
        { id: "chorizo", nombre: "Chorizo", precio: 4000, imagen: "chorizo.jpg", ingredientes: ["Chorizo colombiano a la brasa"], emoji: "🌽", categoria: "Desgranados y Pizza" }
    ],
    sandwiches: [
        { id: "el_travieso", nombre: "El Travieso", precio: 10000, imagen: "sandwich-travieso.jpg", ingredientes: ["Pan integral", "Jamón", "Queso", "Tomate", "Mayonesa"], emoji: "🥪", categoria: "Sandwiches" },
        { id: "el_hawaiano", nombre: "El Hawaiano", precio: 12000, imagen: "sandwich-hawaiano.jpg", ingredientes: ["Pan tostado", "Jamón", "Piña", "Queso", "Salsa especial"], emoji: "🥪", categoria: "Sandwiches" },
        { id: "el_meloso", nombre: "El Meloso", precio: 14000, imagen: "sandwich-meloso.jpg", ingredientes: ["Pan dulce", "Jamón", "Queso", "Piña", "Salsa BBQ"], emoji: "🥪", categoria: "Sandwiches" },
        { id: "el_aventurero", nombre: "El Aventurero", precio: 14000, imagen: "sandwich-aventurero.jpg", ingredientes: ["Pan rústico", "Carne", "Cebolla caramelizada", "Queso", "Especias"], emoji: "🥪", categoria: "Sandwiches" },
        { id: "el_poderoso", nombre: "El Poderoso", precio: 14000, imagen: "sandwich-poderoso.jpg", ingredientes: ["Pan doble", "Carne", "Queso", "Huevo", "Tocino", "Salsas"], emoji: "🥪", categoria: "Sandwiches" },
        { id: "el_fantastico", nombre: "El Fantástico", precio: 14000, imagen: "sandwich-fantastico.jpg", ingredientes: ["Pan artesanal", "Pollo", "Queso", "Tomate", "Lechuga", "Mayonesa"], emoji: "🥪", categoria: "Sandwiches" },
        { id: "el_revoltoso", nombre: "El Revoltoso", precio: 16000, imagen: "sandwich-revoltoso.jpg", ingredientes: ["Pan triple", "Carne", "Pollo", "Jamón", "Queso", "Huevo"], emoji: "🥪", categoria: "Sandwiches" },
        { id: "el_gloton", nombre: "El Glotón", precio: 16000, imagen: "sandwich-gloton.jpg", ingredientes: ["Pan grande", "Carne", "Pollo", "Queso", "Salsa especial", "Tocino"], emoji: "🥪", categoria: "Sandwiches" },
        { id: "punta_cubana", nombre: "Punta Cubana", precio: 5000, imagen: "punta-cubana.jpg", ingredientes: ["Pan tostado", "Jamón", "Queso", "Especias cubanas"], emoji: "🥪", categoria: "Sandwiches" },
        { id: "punta_hawaiana", nombre: "Punta Hawaiana", precio: 5000, imagen: "punta-hawaiana.jpg", ingredientes: ["Pan tostado", "Jamón", "Piña", "Queso"], emoji: "🥪", categoria: "Sandwiches" },
        { id: "punta_pollo", nombre: "Punta Pollo", precio: 6000, imagen: "punta-pollo.jpg", ingredientes: ["Pan tostado", "Pollo deshilachado", "Queso", "Salsas"], emoji: "🥪", categoria: "Sandwiches" },
        { id: "punta_criolla", nombre: "Punta Criolla", precio: 6000, imagen: "punta-criolla.jpg", ingredientes: ["Pan tostado", "Carne", "Queso", "Salsas criollas"], emoji: "🥪", categoria: "Sandwiches" },
        { id: "super_punta", nombre: "Super Punta", precio: 7000, imagen: "super-punta.jpg", ingredientes: ["Pan grande tostado", "Carne", "Pollo", "Queso", "Huevo"], emoji: "🥪", categoria: "Sandwiches" }
    ],
    hamburguesas: [
        { id: "picara", nombre: "Hamburguesa Pícara", precio: 12000, imagen: "hamburguesa-picara.jpg", ingredientes: ["Pan artesanal", "Carne de res 150g", "Queso cheddar", "Jalapeños", "Salsas picantes"], emoji: "🍔", categoria: "Hamburguesas" },
        { id: "furiosa", nombre: "Hamburguesa Furiosa", precio: 12000, imagen: "hamburguesa-furiosa.jpg", ingredientes: ["Pan integral", "Carne de res 150g", "Queso", "Cebolla", "Salsa BBQ"], emoji: "🍔", categoria: "Hamburguesas" },
        { id: "americana", nombre: "Hamburguesa Americana", precio: 12000, imagen: "hamburguesa-americana.jpg", ingredientes: ["Pan brioche", "Carne 150g", "Queso american", "Lechuga", "Tomate"], emoji: "🍔", categoria: "Hamburguesas" },
        { id: "pecadora", nombre: "Hamburguesa Pecadora", precio: 14000, imagen: "hamburguesa-pecadora.jpg", ingredientes: ["Pan artesanal", "Carne 150g", "Queso", "Tocino", "Huevo", "Salsa especial"], emoji: "🍔", categoria: "Hamburguesas" },
        { id: "manosa", nombre: "Hamburguesa Mañosa", precio: 14000, imagen: "hamburguesa-manosa.jpg", ingredientes: ["Pan doble", "Carne 150g", "Queso múltiple", "Tomate", "Lechuga", "Cebolla"], emoji: "🍔", categoria: "Hamburguesas" },
        { id: "fitness", nombre: "Hamburguesa Fitness", precio: 15000, imagen: "hamburguesa-fitness.jpg", ingredientes: ["Pan integral", "Pechuga de pollo 150g", "Lechuga", "Tomate", "Aguacate"], emoji: "🍔", categoria: "Hamburguesas" },
        { id: "golosa", nombre: "Hamburguesa Golosa", precio: 17000, imagen: "hamburguesa-golosa.jpg", ingredientes: ["Pan de queso", "Carne 150g", "Queso triple", "Huevo", "Tocino", "Mayonesa especial"], emoji: "🍔", categoria: "Hamburguesas" }
    ],
    perros: [
        { id: "bull_dog", nombre: "Bull Dog", precio: 9000, imagen: "perro-bulldog.jpg", ingredientes: ["Pan artesanal", "Salchicha premium", "Queso fundido", "Salsas"], emoji: "🌭", categoria: "Perros Calientes" },
        { id: "doberman", nombre: "Doberman", precio: 9000, imagen: "perro-doberman.jpg", ingredientes: ["Pan integral", "Salchicha gourmet", "Queso", "Cebolla caramelizada"], emoji: "🌭", categoria: "Perros Calientes" },
        { id: "gran_danes", nombre: "Gran Danés", precio: 10000, imagen: "perro-grandanes.jpg", ingredientes: ["Pan grande artesanal", "Salchicha premium 150g", "Queso fundido", "Tocino", "Salsas"], emoji: "🌭", categoria: "Perros Calientes" },
        { id: "pits_bull", nombre: "Pits Bull", precio: 11000, imagen: "perro-pitbull.jpg", ingredientes: ["Pan artesanal", "Doble salchicha", "Queso", "Jalapeños", "Salsas picantes"], emoji: "🌭", categoria: "Perros Calientes" },
        { id: "la_perrita", nombre: "La Perrita", precio: 12000, imagen: "perro-perrita.jpg", ingredientes: ["Pan artesanal", "Salchicha premium", "Queso fundido", "Tocino", "Huevo", "Salsas especiales"], emoji: "🌭", categoria: "Perros Calientes" }
    ]
};

// ═══════════════════════════════════════════════════════════════
// ESTADO GLOBAL
// ═══════════════════════════════════════════════════════════════

let carrito = [];
let tipoEntrega = "domicilio"; // "domicilio" o "recoger"
let formularioDatos = {
    nombre: "",
    telefono: "",
    direccion: "",
    barrio: "",
    indicacion: "",
    sede: CONFIG.sedes[0],
    metodo_pago: CONFIG.metodosPago[0],
    observaciones: ""
};
let intentarEnviarCerrado = false;

// ═══════════════════════════════════════════════════════════════
// DOM ELEMENTS
// ═══════════════════════════════════════════════════════════════

const carritoBtn = document.getElementById("carritoBtn");
const carritoClose = document.getElementById("carritoClose");
const carritoDrawer = document.getElementById("carritoDrawer");
const overlay = document.getElementById("overlay");
const tabsContainer = document.getElementById("tabsContainer");
const productosGrid = document.getElementById("productosGrid");
const carritoContenido = document.getElementById("carritoContenido");
const carritoBadge = document.getElementById("carritoBadge");
const btnPedir = document.getElementById("btnPedir");
const statusHorario = document.getElementById("statusHorario");
const bannerCerrado = document.getElementById("bannerCerrado");
const modalCerrado = document.getElementById("modalCerrado");
const modalCancelar = document.getElementById("modalCancelar");
const modalConfirmar = document.getElementById("modalConfirmar");

// ═══════════════════════════════════════════════════════════════
// FUNCIONES AUXILIARES
// ═══════════════════════════════════════════════════════════════

function formatearPrecio(precio) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(precio);
}

function estaAbierto() {
    const ahora = new Date();
    const hora = ahora.getHours();

    return hora >= CONFIG.horario.abre && hora < CONFIG.horario.cierra;
}

function actualizarEstadoHorario() {
    const abierto = estaAbierto();

    const status = document.getElementById("statusHorario");
    const emoji = document.getElementById("statusEmoji");
    const texto = document.getElementById("statusTexto");

    if (!status || !emoji || !texto) return;

    if (abierto) {
        emoji.textContent = "🟢";
        texto.textContent = "Abierto ahora";
        status.classList.remove("cerrado");
        status.classList.add("abierto");
    } else {
        emoji.textContent = "⛔";
        texto.textContent = "Cerrado. Abrimos 5pm hasta 11pm";
        status.classList.remove("abierto");
        status.classList.add("cerrado");
    }

    bannerCerrado.classList.toggle("visible", !abierto);
}

function abrirCarrito() {
    gtag('event', 'abrir_carrito', {
        event_category: 'interaccion',
        event_label: 'Usuario abrió carrito'
    });
    carritoDrawer.classList.add("visible");
    overlay.style.display = "block";
}

function cerrarCarrito() {
    carritoDrawer.classList.remove("visible");
    overlay.style.display = "none";
}

// ═══════════════════════════════════════════════════════════════
// RENDERIZAR MENÚ
// ═══════════════════════════════════════════════════════════════

function renderizarMenu() {
    const categorias = [
        { id: "hamburguesas", nombre: "Hamburguesas", emoji: "🍔", items: MENU.hamburguesas },
        { id: "perros", nombre: "Perros Calientes", emoji: "🌭", items: MENU.perros },
        { id: "sandwiches", nombre: "Sandwiches", emoji: "🥪", items: MENU.sandwiches },
        { id: "salchipapas", nombre: "Salchipapas", emoji: "🍟", items: MENU.salchipapas },
        { id: "carnes", nombre: "Carnes", emoji: "🍖", items: MENU.carnes },
        { id: "desgranados_pizza", nombre: "Desgranados y Pizza", emoji: "🌽", items: MENU.desgranados_pizza },
        { id: "bebidas", nombre: "Bebidas", emoji: "🍹", items: MENU.bebidas }
    ];

    // Renderizar tabs
    tabsContainer.innerHTML = "";
    categorias.forEach((cat, idx) => {
        const tabBtn = document.createElement("button");
        tabBtn.className = `tab-btn ${idx === 0 ? "active" : ""}`;
        tabBtn.innerHTML = `${cat.emoji} ${cat.nombre}`;
        tabBtn.onclick = () => seleccionarCategoria(cat.id, categorias);
        tabsContainer.appendChild(tabBtn);
    });

    // Renderizar productos de la primera categoría
    seleccionarCategoria("hamburguesas", categorias);
}

function seleccionarCategoria(categoriaId, categorias) {
    const categoria = categorias.find(c => c.id === categoriaId);
    if (!categoria || !categoria.items) return;

    // Actualizar tabs activos
    document.querySelectorAll(".tab-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.innerHTML.includes(categoria.nombre));
    });

    // Renderizar productos en el contenedor correcto (productosGrid)
    productosGrid.innerHTML = "";
    
    // Ordenar de menor a mayor precio
    const itemsOrdenados = [...categoria.items].sort((a, b) => a.precio - b.precio);

    itemsOrdenados.forEach(producto => {
        const card = document.createElement("div");
        card.className = "producto-card";
        
        // Lógica de imagen con seguro toscano.jpg
        const rutaImagen = producto.imagen ? `images/${producto.imagen}` : "images/toscano.jpg";

        card.innerHTML = `
            <img class="producto-imagen" 
                 src="${rutaImagen}" 
                 alt="${producto.nombre}" 
                 onerror="this.src='images/toscano.jpg'">
            
            <div class="producto-contenido">
                <div class="producto-header">
                    <span class="producto-emoji">${producto.emoji}</span>
                    <span class="producto-nombre">${producto.nombre}</span>
                </div>
                <div class="producto-precio">${formatearPrecio(producto.precio)}</div>
                <div class="ingredientes-seccion">
                    <button class="btn-ingredientes" onclick="toggleIngredientes(this)">👁 Ver ingredientes</button>
                    <div class="ingredientes-lista">
                        <strong>Ingredientes:</strong><br>${producto.ingredientes.join(", ")}
                    </div>
                </div>
                <button class="btn-agregar" onclick="agregarAlCarrito('${producto.id}', '${producto.nombre}', ${producto.precio})">Pedir +</button>
            </div>
        `;
        productosGrid.appendChild(card);
    });

    // Scroll suave al cambiar de categoría
    productosGrid.scrollIntoView({ behavior: "smooth", block: "start" });
}

function toggleIngredientes(btn) {
    const lista = btn.nextElementSibling;
    lista.classList.toggle("visible");
    btn.textContent = lista.classList.contains("visible") ? "👁 Ocultar" : "👁 Ver ingredientes";
}

// ═══════════════════════════════════════════════════════════════
// CARRITO
// ═══════════════════════════════════════════════════════════════

function agregarAlCarrito(id, nombre, precio) {
    const existente = carrito.find(item => item.id === id);
      // EVENTO CORRECTO 👇
    gtag('event', 'add_to_cart', {
        event_category: 'ecommerce',
        event_label: nombre,
        value: precio
    });
    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({ id, nombre, precio, cantidad: 1 });
    }
    actualizarCarrito();

    // Feedback visual sin abrir el carrito
    carritoBadge.classList.remove('bounce');
    void carritoBadge.offsetWidth;
    carritoBadge.classList.add('bounce');
    setTimeout(() => carritoBadge.classList.remove('bounce'), 400);

    const btnClickeado = document.querySelector(`[onclick*="'${id}'"]`);
    if (btnClickeado) {
        const textoOriginal = btnClickeado.textContent;
        btnClickeado.textContent = '✓ Agregado';
        btnClickeado.style.background = '#27ae60';
        btnClickeado.disabled = true;
        setTimeout(() => {
            btnClickeado.textContent = textoOriginal;
            btnClickeado.style.background = '';
            btnClickeado.disabled = false;
        }, 1000);
    }
}

function actualizarCarrito() {
    carritoBadge.textContent = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    actualizarBadge()
    renderizarCarrito();
}

function renderizarCarrito() {
    carritoContenido.innerHTML = "";

    if (carrito.length === 0) {
        carritoContenido.innerHTML = `<div class="carrito-vacio">Tu carrito está vacío</div>`;
        // SEGURIDAD: Ocultamos el botón de todas las formas posibles si no hay nada
        btnPedir.classList.add("oculto");
        btnPedir.style.display = "none"; 
        return;
    }

    // Si hay productos, nos aseguramos de que el botón sea visible
    btnPedir.classList.remove("oculto");
    btnPedir.style.display = "block"; 

    let html = `<div class="carrito-items">`;

    carrito.forEach(item => {
        html += `
            <div class="carrito-item">
                <div class="carrito-item-nombre">${item.nombre}</div>
                <div class="carrito-item-precio">${formatearPrecio(item.precio)}</div>
                <div class="carrito-item-controles">
                    <button class="btn-cantidad" onclick="cambiarCantidad('${item.id}', -1)">−</button>
                    <div class="carrito-item-cantidad">${item.cantidad}x</div>
                    <button class="btn-cantidad" onclick="cambiarCantidad('${item.id}', 1)">+</button>
                    <button class="btn-eliminar" onclick="eliminarDelCarrito('${item.id}')" title="Eliminar producto"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    html += `<div class="carrito-separador"></div>`;

    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    html += `
        <div class="carrito-total">
            <div class="carrito-total-label">Total del pedido:</div>
            <div class="carrito-total-valor">${formatearPrecio(total)}</div>
        </div>
    `;

    html += `<div class="formulario-seccion">`;
    html += `<div class="formulario-titulo">Tipo de Entrega</div>`;
    html += `<div class="toggle-entrega">`;
    html += `<button class="toggle-btn ${tipoEntrega === 'domicilio' ? 'active' : ''}" onclick="cambiarTipoEntrega('domicilio')">🛵 Domicilio</button>`;
    html += `<button class="toggle-btn ${tipoEntrega === 'recoger' ? 'active' : ''}" onclick="cambiarTipoEntrega('recoger')">🏪 Recoger en punto</button>`;
    html += `</div>`;
    html += `</div>`;

    if (tipoEntrega === 'domicilio') {
        html += `<div class="banner-domicilio visible">⚠️Ten en cuenta: El valor del domicilio NO está incluido en el total. El costo del domicilio se cobra aparte.</div>`;
    }

    html += `<div class="form-group">`;
    html += `<label class="form-label">Nombre completo<span class="requerido">*</span></label>`;
    html += `<input type="text" class="form-input" id="formNombre" placeholder="Tu nombre" value="${formularioDatos.nombre}" oninput="actualizarFormulario('nombre', this.value);validarCampos()">`;
    html += `<span class="error-msg"></span>`; 
    html += `</div>`;

    html += `<div class="form-group">`;
    html += `<label class="form-label">Celular<span class="requerido">*</span></label>`;
    html += `<input type="tel" class="form-input" id="formTelefono" placeholder="3126660512" maxlength="10" inputmode="numeric" value="${formularioDatos.telefono}" oninput="filtrarTelefono(this)">`;
    html += `<span class="error-msg"></span>`; 
    html += `</div>`;

    if (tipoEntrega === 'domicilio') {
        html += `<div class="form-group">`;
        html += `<label class="form-label">Dirección<span class="requerido">*</span></label>`;
        html += `<input type="text" class="form-input" id="formDireccion" placeholder="Ej: Calle 5 # 8-45" value="${formularioDatos.direccion}" oninput="actualizarFormulario('direccion', this.value);validarCampos()">`;
        html += `<span class="error-msg"></span>`; 
        html += `</div>`;

        html += `<div class="form-group">`;
        html += `<label class="form-label">📌 Indicación especial de dirección <span style="font-weight:400;color:var(--color-gris-claro)">(opcional)</span></label>`;
        html += `<input type="text" class="form-input" id="formIndicacion" placeholder="Ej: casa amarilla, 2do piso, callejón..." value="${formularioDatos.indicacion}" onchange="actualizarFormulario('indicacion', this.value)">`;
        html += `</div>`;

        html += `<div class="form-group">`;
        html += `<label class="form-label">Barrio<span class="requerido">*</span></label>`;
        html += `<input type="text" class="form-input" id="formBarrio" placeholder="Tu barrio" value="${formularioDatos.barrio}" oninput="actualizarFormulario('barrio', this.value);validarCampos()">`;
        html += `<span class="error-msg"></span>`; 
        html += `</div>`;
    }

    html += `<div class="form-group">`;
    html += `<label class="form-label">Sede ${tipoEntrega === 'domicilio' ? 'del pedido' : 'donde recoge'}<span class="requerido">*</span></label>`;
    html += `<select class="form-select" id="formSede" onchange="actualizarFormulario('sede', this.value);validarCampos()">`;
    CONFIG.sedes.forEach(sede => {
        html += `<option value="${sede}" ${formularioDatos.sede === sede ? 'selected' : ''}>${sede}</option>`;
    });
    html += `</select>`;
    html += `</div>`;

    html += `<div class="form-group">`;
    html += `<label class="form-label">Método de pago<span class="requerido">*</span></label>`;
    html += `<select class="form-select" id="formMetodo" onchange="actualizarFormulario('metodo_pago', this.value);validarCampos()">`;
    CONFIG.metodosPago.forEach(metodo => {
        html += `<option value="${metodo}" ${formularioDatos.metodo_pago === metodo ? 'selected' : ''}>${metodo}</option>`;
    });
    html += `</select>`;
    html += `</div>`;

    html += `<div class="form-group">`;
    html += `<label class="form-label">📝 ¿Alguna solicitud especial? <span style="font-weight:400;color:var(--color-gris-claro)">(opcional)</span></label>`;
    html += `<textarea class="form-input" id="formObservaciones" placeholder="Ej: Todas las salsas, solo ajo, llamar cuando esté afuera" rows="2" style="resize:none" onchange="actualizarFormulario('observaciones', this.value)">${formularioDatos.observaciones}</textarea>`;
    html += `</div>`;

    carritoContenido.innerHTML = html;
    validarCampos();
}

function cambiarTipoEntrega(tipo) {
    tipoEntrega = tipo;
    renderizarCarrito();
    // validarCampos se llama al final de renderizarCarrito
}

function actualizarFormulario(campo, valor) {
    formularioDatos[campo] = valor;
}

function filtrarTelefono(input) {
    // Deja solo números
    let valor = input.value.replace(/\D/g, '');
    // Limita a 10 dígitos
    if (valor.length > 10) valor = valor.slice(0, 10);
    
    input.value = valor;
    // Actualizamos el objeto de datos
    formularioDatos.telefono = valor;
    
    // Ejecutamos la validación para que el error desaparezca apenas llegue a 10
    validarCampos();
}

function validarCampos() {
    const esRecoger = tipoEntrega === "recoger";
    
    // 1. Definimos las reglas
    const nombreOk = formularioDatos.nombre.trim().length > 2;
    const telefonoOk = formularioDatos.telefono.trim().length === 10;
    const direccionOk = esRecoger ? true : (formularioDatos.direccion.trim().length > 3);
    const barrioOk = esRecoger ? true : (formularioDatos.barrio.trim().length > 2);

    // 2. Función interna para mostrar/ocultar el error visualmente
    const actualizarVisual = (idInput, esValido, mensaje) => {
        const input = document.getElementById(idInput);
        if (!input) return;
        const contenedor = input.parentElement;
        const errorSpan = contenedor.querySelector('.error-msg');

        // Solo mostramos error si el usuario ya escribió algo o si intentó avanzar
        if (formularioDatos[idInput.replace('form', '').toLowerCase()] !== "" || !esValido) {
            if (!esValido) {
                input.classList.add('input-error');
                if (errorSpan) errorSpan.innerText = mensaje;
            } else {
                input.classList.remove('input-error');
                if (errorSpan) errorSpan.innerText = "";
            }
        }
    };

    // 3. Aplicamos la validación visual a cada campo
    actualizarVisual('formNombre', nombreOk, "Ingresa tu nombre completo");
    actualizarVisual('formTelefono', telefonoOk, "Ingresa los 10 dígitos de tu celular");
    
    if (!esRecoger) {
        actualizarVisual('formDireccion', direccionOk, "Ingresa una dirección válida");
        actualizarVisual('formBarrio', barrioOk, "Ingresa tu barrio");
    }

    // 4. Lógica del botón: Solo aparece si TODO está perfecto
    const todoValido = nombreOk && telefonoOk && direccionOk && barrioOk;
    
    if (todoValido) {
        btnPedir.classList.remove("oculto");
        btnPedir.style.display = "block"; // Aseguramos que se vea
    } else {
        btnPedir.classList.add("oculto");
        btnPedir.style.display = "none";
    }
}

function marcarError(id, mensaje) {
    const input = document.getElementById(id);

    input.classList.add("input-error");

    if (!input.nextElementSibling || !input.nextElementSibling.classList.contains("error-msg")) {
        const error = document.createElement("small");
        error.className = "error-msg";
        error.innerText = mensaje;
        input.parentNode.appendChild(error);
    }
}

function limpiarError(id) {
    const input = document.getElementById(id);

    input.classList.remove("input-error");

    if (input.nextElementSibling && input.nextElementSibling.classList.contains("error-msg")) {
        input.nextElementSibling.remove();
    }
}

function toggleBoton(valido) {
    if (valido) {
        btnPedir.disabled = false;
        btnPedir.classList.remove("deshabilitado");
    } else {
        btnPedir.disabled = true;
        btnPedir.classList.add("deshabilitado");
    }
}

function cambiarCantidad(id, cambio) {
    const item = carrito.find(i => i.id === id);
    if (item) {
        item.cantidad += cambio;
        if (item.cantidad <= 0) {
            eliminarDelCarrito(id);
        } else {
            actualizarCarrito();
        }
    }
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarrito();
}

// ═══════════════════════════════════════════════════════════════
// ENVIAR PEDIDO
// ═══════════════════════════════════════════════════════════════

function validarFormulario() {

    let errores = [];

    const nombre = formularioDatos.nombre?.trim() || "";
    const telefono = formularioDatos.telefono?.trim() || "";
    const sede = formularioDatos.sede?.trim() || "";
    const metodo_pago = formularioDatos.metodo_pago?.trim() || "";
    const direccion = formularioDatos.direccion?.trim() || "";
    const barrio = formularioDatos.barrio?.trim() || "";

    // VALIDACIONES BÁSICAS
    if (!nombre) {
        errores.push("El nombre es obligatorio");
    }

    if (!telefono) {
        errores.push("El número de teléfono es obligatorio");
    } else if (!/^\d{10}$/.test(telefono)) {
        errores.push("El número debe tener exactamente 10 dígitos");
    }

    if (!sede) {
        errores.push("Debes seleccionar una sede");
    }

    if (!metodo_pago) {
        errores.push("Debes seleccionar un método de pago");
    }

    // VALIDACIÓN SI ES DOMICILIO
    if (tipoEntrega === 'domicilio') {

        if (!direccion) {
            errores.push("La dirección es obligatoria");
        }

        if (!barrio) {
            errores.push("El barrio es obligatorio");
        }
    }

    // MOSTRAR ERRORES
    if (errores.length > 0) {
        alert("⚠️ Por favor corrige lo siguiente:\n\n- " + errores.join("\n- "));
        return false;
    }

    return true;
}

function enviarPedidoWhatsApp() {
    gtag('event', 'click_pedir', {
        event_category: 'pedido',
        event_label: 'Boton Pedir Toscano'
    });
    if (!validarFormulario()) return;

    if (!estaAbierto()) {
        intentarEnviarCerrado = true;
        cerrarCarrito();
        modalCerrado.classList.add("visible");
        return;
    }

    generarYEnviarMensaje();
}

// Agrega esta función que no existía
function actualizarBadge() {
    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    const badge = document.querySelector('.carrito-badge');
    if (badge) {
        badge.innerText = totalItems;
        // Si el carrito está vacío, ocultamos el círculo rojo
        badge.style.display = totalItems > 0 ? "flex" : "none";
    }
}

// ====== REEMPLAZAR ESTA FUNCIÓN COMPLETA EN SCRIPT.JS ======
function generarYEnviarMensaje() {
    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    const esDomicilio = tipoEntrega === "domicilio";
    
    let texto = `*🍔 Nuevo Pedido - ${CONFIG.negocio}*\n`;
    texto += `------------------------------\n`;
    
    carrito.forEach(item => {
        texto += `• ${item.cantidad}x ${item.nombre} ($${(item.precio * item.cantidad).toLocaleString()})\n`;
    });
    
    texto += `------------------------------\n`;
    
    if (esDomicilio) {
        texto += `*Total (sin domicilio):* $${total.toLocaleString()}\n`;
        texto += `_Valor del domicilio se cobra aparte_\n\n`;
    } else {
        texto += `*Total:* $${total.toLocaleString()}\n\n`;
    }
    
    texto += `*Datos del Cliente:*\n`;
    texto += `👤 Nombre: ${formularioDatos.nombre}\n`;
    texto += `📞 Teléfono: ${formularioDatos.telefono}\n`;
    
    if (esDomicilio) {
        texto += `📍 Dirección: ${formularioDatos.direccion}\n`;
        texto += `🏘️ Barrio: ${formularioDatos.barrio}\n`;
        if (formularioDatos.indicacion && formularioDatos.indicacion.trim().length > 0) {
            texto += `📝 Indicación de dirección: ${formularioDatos.indicacion}\n`;
        }
    } else {
        texto += `🏪 Recoge en sede: ${formularioDatos.sede}\n`;
    }

    if (formularioDatos.observaciones && formularioDatos.observaciones.trim().length > 0) {
        texto += `🍳 Solicitud Especial: ${formularioDatos.observaciones}\n`;
    }

    if (esDomicilio) {
        texto += `🏢 Sede pedido: ${formularioDatos.sede}\n`;
    }

    texto += `💳 Pago: ${formularioDatos.metodo_pago}\n`;
    
    if (esDomicilio) {
        texto += `🚚 Entrega: A Domicilio`;
    }

    const enlace = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`;
    window.open(enlace, '_blank');

    // ⚠️ REINICIO TOTAL (Aquí es donde se arregla tu error grave)
    carrito = [];
    formularioDatos = {
        nombre: "",
        telefono: "",
        direccion: "",
        barrio: "",
        indicacion: "",
        sede: CONFIG.sedes[0],
        metodo_pago: CONFIG.metodosPago[0],
        observaciones: ""
    };
    tipoEntrega = "domicilio";

    // LLAMADAS DE LIMPIEZA VISUAL
    actualizarBadge();   // Esto pondrá el círculo rojo en 0 y lo ocultará
    renderizarCarrito(); // Esto dibujará "Tu carrito está vacío" y ocultará el botón Pedir
    cerrarCarrito();     // Cierra el panel lateral
}

// ═══════════════════════════════════════════════════════════════
// EVENT LISTENERS
// ═══════════════════════════════════════════════════════════════

carritoBtn.addEventListener("click", abrirCarrito);
carritoClose.addEventListener("click", cerrarCarrito);
btnPedir.addEventListener("click", enviarPedidoWhatsApp);
modalCancelar.addEventListener("click", () => {
    intentarEnviarCerrado = false;
    modalCerrado.classList.remove("visible");
    abrirCarrito();
});
modalConfirmar.addEventListener("click", () => {
    modalCerrado.classList.remove("visible");
    generarYEnviarMensaje();
});

// ═══════════════════════════════════════════════════════════════
// INICIALIZACIÓN
// ═══════════════════════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {
    renderizarMenu();
    actualizarEstadoHorario();
    setInterval(actualizarEstadoHorario, 60000); // Actualizar cada minuto
});

function volverMenu(){

    cerrarCarrito();

    window.scrollTo({ top:0, behavior:"smooth" });

}