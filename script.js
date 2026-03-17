// ═══════════════════════════════════════════════════════════════
// CONFIGURACIÓN CENTRALIZADA
// ═══════════════════════════════════════════════════════════════

const CONFIG = {
    negocio: "El Toscano",
    whatsapp: "573217054190",
    sedes: ["Sede Principal"],
    metodosPago: ["💳 Nequi", "💵 Efectivo", "🔑 Bre-B"],
    horario: { abre: 11, cierra: 22 }
};

const MENU = {
    bebidas: [
        { id: "coctel_variado", nombre: "Tom Collins, Margarita, Piña Colada, Capitán Nirvana", precio: 15000, ingredientes: ["Ron", "Jugo de limón fresco", "Jarabe simple", "Agua de soda"], emoji: "🍹", categoria: "Bebidas" },
        { id: "michelada_tradicional", nombre: "Michelada Tradicional", precio: 6000, ingredientes: ["Cerveza", "Salsa Maggi", "Limón", "Especias"], emoji: "🍹", categoria: "Bebidas" },
        { id: "michelada_sin_alcohol", nombre: "Michelada Sin Alcohol", precio: 6000, ingredientes: ["Agua de soda", "Salsa Maggi", "Limón", "Especias"], emoji: "🍹", categoria: "Bebidas" },
        { id: "michelada_toscana", nombre: "Michelada Toscana", precio: 8000, ingredientes: ["Cerveza", "Salsa especial Toscano", "Limón", "Toque de chamoy"], emoji: "🍹", categoria: "Bebidas" },
        { id: "michelada_alcohol", nombre: "Michelada Con Alcohol", precio: 10000, ingredientes: ["Cerveza premium", "Salsa Maggi", "Limón", "Ron blanco"], emoji: "🍹", categoria: "Bebidas" },
        { id: "jugo_agua_personal", nombre: "Jugo Natural en Agua (Personal)", precio: 4000, ingredientes: ["Guanábana / Mango / Mora / Maracuyá / Lulo"], emoji: "🍹", categoria: "Bebidas" },
        { id: "jugo_agua_jarra", nombre: "Jugo Natural en Agua (Jarra)", precio: 7000, ingredientes: ["Guanábana / Mango / Mora / Maracuyá / Lulo"], emoji: "🍹", categoria: "Bebidas" },
        { id: "jugo_leche_personal", nombre: "Jugo Natural en Leche (Personal)", precio: 5000, ingredientes: ["Guanábana / Mango / Mora / Maracuyá / Lulo", "Leche fresca"], emoji: "🍹", categoria: "Bebidas" },
        { id: "jugo_leche_jarra", nombre: "Jugo Natural en Leche (Jarra)", precio: 9000, ingredientes: ["Guanábana / Mango / Mora / Maracuyá / Lulo", "Leche fresca"], emoji: "🍹", categoria: "Bebidas" },
        { id: "limonada_natural", nombre: "Limonada Natural", precio: 10000, ingredientes: ["Limones frescos", "Agua", "Azúcar"], emoji: "🍹", categoria: "Bebidas" },
        { id: "limonada_coco", nombre: "Limonada Coco", precio: 10000, ingredientes: ["Limones frescos", "Leche de coco", "Azúcar"], emoji: "🍹", categoria: "Bebidas" },
        { id: "cerezada", nombre: "Cerezada", precio: 10000, ingredientes: ["Jugo de cereza", "Agua", "Hielo"], emoji: "🍹", categoria: "Bebidas" },
        { id: "malteada_pina_colada", nombre: "Malteada Piña Colada", precio: 10000, ingredientes: ["Piña", "Leche de coco", "Helado de vainilla"], emoji: "🍹", categoria: "Bebidas" },
        { id: "gaseosa_personal", nombre: "Gaseosa (Personal)", precio: 4000, ingredientes: ["Gaseosa fría"], emoji: "🍹", categoria: "Bebidas" },
        { id: "gaseosa_litro", nombre: "Gaseosa (Litro)", precio: 6000, ingredientes: ["Gaseosa fría"], emoji: "🍹", categoria: "Bebidas" },
        { id: "coca_cola_1_5l", nombre: "Coca-Cola 1.5L", precio: 8000, ingredientes: ["Coca-Cola"], emoji: "🍹", categoria: "Bebidas" },
        { id: "cerveza", nombre: "Cerveza", precio: 5000, ingredientes: ["Cerveza fría"], emoji: "🍹", categoria: "Bebidas" },
        { id: "hervido_maracuya", nombre: "Hervido Maracuyá", precio: 10000, ingredientes: ["Maracuyá", "Agua caliente", "Azúcar"], emoji: "🍹", categoria: "Bebidas" },
        { id: "hervido_lulo", nombre: "Hervido Lulo", precio: 10000, ingredientes: ["Lulo", "Agua caliente", "Azúcar"], emoji: "🍹", categoria: "Bebidas" },
        { id: "hervido_mora", nombre: "Hervido Mora", precio: 10000, ingredientes: ["Mora", "Agua caliente", "Azúcar"], emoji: "🍹", categoria: "Bebidas" },
        { id: "cafe_negro", nombre: "Café Negro", precio: 2000, ingredientes: ["Café gourmet"], emoji: "🍹", categoria: "Bebidas" },
        { id: "cafe_leche", nombre: "Café en Leche", precio: 3000, ingredientes: ["Café gourmet", "Leche caliente"], emoji: "🍹", categoria: "Bebidas" }
    ],
    carnes: [
        { id: "carne_res", nombre: "Carne de Res (180g + Papa a la Francesa)", precio: 13000, ingredientes: ["Carne premium 180g", "Papa a la francesa", "Ensalada fresca"], emoji: "🍖", categoria: "Carnes" },
        { id: "carne_cerdo", nombre: "Carne de Cerdo (180g + Papa a la Francesa)", precio: 13000, ingredientes: ["Cerdo premium 180g", "Papa a la francesa", "Ensalada fresca"], emoji: "🍖", categoria: "Carnes" },
        { id: "costilla_frita", nombre: "Costilla Frita (180g + Papa a la Francesa)", precio: 13000, ingredientes: ["Costilla frita crujiente", "Papa a la francesa", "Ensalada"], emoji: "🍖", categoria: "Carnes" },
        { id: "costilla_bbq", nombre: "Costilla BBQ (180g + Papa a la Francesa)", precio: 13000, ingredientes: ["Costilla BBQ ahumada", "Papa a la francesa", "Salsa BBQ"], emoji: "🍖", categoria: "Carnes" },
        { id: "pechuga", nombre: "Pechuga (180g + Papa a la Francesa)", precio: 15000, ingredientes: ["Pechuga de pollo 180g", "Papa a la francesa", "Ensalada"], emoji: "🍖", categoria: "Carnes" },
        { id: "churrasco", nombre: "Churrasco (180g + Papa a la Francesa)", precio: 16000, ingredientes: ["Churrasco de res", "Papa a la francesa", "Ensalada"], emoji: "🍖", categoria: "Carnes" },
        { id: "picada_2_personas", nombre: "Picada 2 Personas", precio: 30000, ingredientes: ["Carne", "Costilla", "Pollo", "Salchichas", "Papa"], emoji: "🍖", categoria: "Carnes" },
        { id: "picada_3_4_personas", nombre: "Picada 3-4 Personas", precio: 50000, ingredientes: ["Carne", "Costilla", "Pollo", "Salchichas", "Alitas", "Papa"], emoji: "🍖", categoria: "Carnes" },
        { id: "alitas_bbq_6", nombre: "Alitas BBQ (6 piezas)", precio: 15000, ingredientes: ["Alitas de pollo", "Salsa BBQ ahumada"], emoji: "🍖", categoria: "Carnes" },
        { id: "alitas_miel_mostaza_6", nombre: "Alitas Miel-Mostaza (6 piezas)", precio: 15000, ingredientes: ["Alitas de pollo", "Salsa miel y mostaza"], emoji: "🍖", categoria: "Carnes" },
        { id: "alitas_teriyaki_6", nombre: "Alitas Teriyaki (6 piezas)", precio: 15000, ingredientes: ["Alitas de pollo", "Salsa Teriyaki"], emoji: "🍖", categoria: "Carnes" },
        { id: "alitas_bbq_8", nombre: "Alitas BBQ (8 piezas)", precio: 20000, ingredientes: ["Alitas de pollo", "Salsa BBQ ahumada"], emoji: "🍖", categoria: "Carnes" },
        { id: "alitas_miel_mostaza_8", nombre: "Alitas Miel-Mostaza (8 piezas)", precio: 20000, ingredientes: ["Alitas de pollo", "Salsa miel y mostaza"], emoji: "🍖", categoria: "Carnes" },
        { id: "alitas_teriyaki_8", nombre: "Alitas Teriyaki (8 piezas)", precio: 20000, ingredientes: ["Alitas de pollo", "Salsa Teriyaki"], emoji: "🍖", categoria: "Carnes" },
        { id: "alitas_bbq_12", nombre: "Alitas BBQ (12 piezas)", precio: 27000, ingredientes: ["Alitas de pollo", "Salsa BBQ ahumada"], emoji: "🍖", categoria: "Carnes" },
        { id: "alitas_miel_mostaza_12", nombre: "Alitas Miel-Mostaza (12 piezas)", precio: 27000, ingredientes: ["Alitas de pollo", "Salsa miel y mostaza"], emoji: "🍖", categoria: "Carnes" },
        { id: "alitas_teriyaki_12", nombre: "Alitas Teriyaki (12 piezas)", precio: 27000, ingredientes: ["Alitas de pollo", "Salsa Teriyaki"], emoji: "🍖", categoria: "Carnes" },
        { id: "arroz", nombre: "Arroz", precio: 3000, ingredientes: ["Arroz blanco cocido"], emoji: "🍖", categoria: "Carnes" },
        { id: "papa", nombre: "Papa a la Francesa", precio: 5000, ingredientes: ["Papa fresca frita"], emoji: "🍖", categoria: "Carnes" }
    ],
    salchipapas: [
        { id: "salchipapa_personal", nombre: "Salchipapa Personal", precio: 6000, ingredientes: ["Papa fritas", "Salchicha", "Queso fundido", "Salsas variadas"], emoji: "🍟", categoria: "Salchipapas" },
        { id: "salchipapa_mediana", nombre: "Salchipapa Mediana", precio: 18000, ingredientes: ["Papa fritas", "Salchicha", "Queso fundido", "Salsas variadas"], emoji: "🍟", categoria: "Salchipapas" },
        { id: "salchipapa_grande", nombre: "Salchipapa Grande", precio: 25000, ingredientes: ["Papa fritas abundante", "Salchicha", "Queso fundido", "Salsas variadas"], emoji: "🍟", categoria: "Salchipapas" },
        { id: "salchipapa_familiar", nombre: "Salchipapa Familiar", precio: 30000, ingredientes: ["Papa fritas abundante", "Salchichas", "Queso fundido", "Salsas variadas"], emoji: "🍟", categoria: "Salchipapas" },
        { id: "salchipapa_super", nombre: "Salchipapa Super", precio: 40000, ingredientes: ["Papa fritas abundante", "Salchichas", "Queso fundido", "Salsas variadas"], emoji: "🍟", categoria: "Salchipapas" },
        { id: "la_toscana", nombre: "La Toscana (4 porciones)", precio: 50000, ingredientes: ["Papa fritas", "Costilla BBQ", "Alitas BBQ", "Pollo", "Carne", "Chorizo", "Maicitos", "Tocineta"], emoji: "🍟", categoria: "Salchipapas" }
    ],
    desgranados_pizza: [
        { id: "desgranado", nombre: "Desgranado", precio: 12000, ingredientes: ["Papa", "Maíz desgranado", "Queso", "Salsas"], emoji: "🌽", categoria: "Desgranados y Pizza" },
        { id: "desgranado_criollo", nombre: "Desgranado Criollo", precio: 12000, ingredientes: ["Papa", "Maíz desgranado", "Queso fresco", "Chorizo"], emoji: "🌽", categoria: "Desgranados y Pizza" },
        { id: "pizza_personal", nombre: "Pizza Personal (Base Queso, Jamón, Salsa)", precio: 7000, ingredientes: ["Masa artesanal", "Salsa de tomate", "Queso mozzarella", "Jamón"], emoji: "🌽", categoria: "Desgranados y Pizza" },
        { id: "taco_2", nombre: "Tacos (2 piezas)", precio: 7000, ingredientes: ["Tortillas", "Jamón", "Queso", "Pollo", "Maicitos", "Papitas", "Salsas"], emoji: "🌽", categoria: "Desgranados y Pizza" },
        { id: "taco_3", nombre: "Tacos (3 piezas)", precio: 10000, ingredientes: ["Tortillas", "Jamón", "Queso", "Pollo", "Maicitos", "Papitas", "Salsas"], emoji: "🌽", categoria: "Desgranados y Pizza" },
        { id: "chorizo", nombre: "Chorizo", precio: 4000, ingredientes: ["Chorizo colombiano a la brasa"], emoji: "🌽", categoria: "Desgranados y Pizza" }
    ],
    sandwiches: [
        { id: "el_travieso", nombre: "El Travieso", precio: 10000, ingredientes: ["Pan integral", "Jamón", "Queso", "Tomate", "Mayonesa"], emoji: "🥪", categoria: "Sandwiches" },
        { id: "el_hawaiano", nombre: "El Hawaiano", precio: 12000, ingredientes: ["Pan tostado", "Jamón", "Piña", "Queso", "Salsa especial"], emoji: "🥪", categoria: "Sandwiches" },
        { id: "el_meloso", nombre: "El Meloso", precio: 14000, ingredientes: ["Pan dulce", "Jamón", "Queso", "Piña", "Salsa BBQ"], emoji: "🥪", categoria: "Sandwiches" },
        { id: "el_aventurero", nombre: "El Aventurero", precio: 14000, ingredientes: ["Pan rústico", "Carne", "Cebolla caramelizada", "Queso", "Especias"], emoji: "🥪", categoria: "Sandwiches" },
        { id: "el_poderoso", nombre: "El Poderoso", precio: 14000, ingredientes: ["Pan doble", "Carne", "Queso", "Huevo", "Tocino", "Salsas"], emoji: "🥪", categoria: "Sandwiches" },
        { id: "el_fantastico", nombre: "El Fantástico", precio: 14000, ingredientes: ["Pan artesanal", "Pollo", "Queso", "Tomate", "Lechuga", "Mayonesa"], emoji: "🥪", categoria: "Sandwiches" },
        { id: "el_revoltoso", nombre: "El Revoltoso", precio: 16000, ingredientes: ["Pan triple", "Carne", "Pollo", "Jamón", "Queso", "Huevo"], emoji: "🥪", categoria: "Sandwiches" },
        { id: "el_gloton", nombre: "El Glotón", precio: 16000, ingredientes: ["Pan grande", "Carne", "Pollo", "Queso", "Salsa especial", "Tocino"], emoji: "🥪", categoria: "Sandwiches" },
        { id: "punta_cubana", nombre: "Punta Cubana", precio: 5000, ingredientes: ["Pan tostado", "Jamón", "Queso", "Especias cubanas"], emoji: "🥪", categoria: "Sandwiches" },
        { id: "punta_hawaiana", nombre: "Punta Hawaiana", precio: 5000, ingredientes: ["Pan tostado", "Jamón", "Piña", "Queso"], emoji: "🥪", categoria: "Sandwiches" },
        { id: "punta_pollo", nombre: "Punta Pollo", precio: 6000, ingredientes: ["Pan tostado", "Pollo deshilachado", "Queso", "Salsas"], emoji: "🥪", categoria: "Sandwiches" },
        { id: "punta_criolla", nombre: "Punta Criolla", precio: 6000, ingredientes: ["Pan tostado", "Carne", "Queso", "Salsas criollas"], emoji: "🥪", categoria: "Sandwiches" },
        { id: "super_punta", nombre: "Super Punta", precio: 7000, ingredientes: ["Pan grande tostado", "Carne", "Pollo", "Queso", "Huevo"], emoji: "🥪", categoria: "Sandwiches" }
    ],
    hamburguesas: [
        { id: "picara", nombre: "Hamburguesa Pícara", precio: 12000, ingredientes: ["Pan artesanal", "Carne de res 150g", "Queso cheddar", "Jalapeños", "Salsas picantes"], emoji: "🍔", categoria: "Hamburguesas" },
        { id: "furiosa", nombre: "Hamburguesa Furiosa", precio: 12000, ingredientes: ["Pan integral", "Carne de res 150g", "Queso", "Cebolla", "Salsa BBQ"], emoji: "🍔", categoria: "Hamburguesas" },
        { id: "americana", nombre: "Hamburguesa Americana", precio: 12000, ingredientes: ["Pan brioche", "Carne 150g", "Queso american", "Lechuga", "Tomate"], emoji: "🍔", categoria: "Hamburguesas" },
        { id: "pecadora", nombre: "Hamburguesa Pecadora", precio: 14000, ingredientes: ["Pan artesanal", "Carne 150g", "Queso", "Tocino", "Huevo", "Salsa especial"], emoji: "🍔", categoria: "Hamburguesas" },
        { id: "manosa", nombre: "Hamburguesa Mañosa", precio: 14000, ingredientes: ["Pan doble", "Carne 150g", "Queso múltiple", "Tomate", "Lechuga", "Cebolla"], emoji: "🍔", categoria: "Hamburguesas" },
        { id: "fitness", nombre: "Hamburguesa Fitness", precio: 15000, ingredientes: ["Pan integral", "Pechuga de pollo 150g", "Lechuga", "Tomate", "Aguacate"], emoji: "🍔", categoria: "Hamburguesas" },
        { id: "golosa", nombre: "Hamburguesa Golosa", precio: 17000, ingredientes: ["Pan de queso", "Carne 150g", "Queso triple", "Huevo", "Tocino", "Mayonesa especial"], emoji: "🍔", categoria: "Hamburguesas" }
    ],
    perros: [
        { id: "bull_dog", nombre: "Bull Dog", precio: 9000, ingredientes: ["Pan artesanal", "Salchicha premium", "Queso fundido", "Salsas"], emoji: "🌭", categoria: "Perros Calientes" },
        { id: "doberman", nombre: "Doberman", precio: 9000, ingredientes: ["Pan integral", "Salchicha gourmet", "Queso", "Cebolla caramelizada"], emoji: "🌭", categoria: "Perros Calientes" },
        { id: "gran_danes", nombre: "Gran Danés", precio: 10000, ingredientes: ["Pan grande artesanal", "Salchicha premium 150g", "Queso fundido", "Tocino", "Salsas"], emoji: "🌭", categoria: "Perros Calientes" },
        { id: "pits_bull", nombre: "Pits Bull", precio: 11000, ingredientes: ["Pan artesanal", "Doble salchicha", "Queso", "Jalapeños", "Salsas picantes"], emoji: "🌭", categoria: "Perros Calientes" },
        { id: "la_perrita", nombre: "La Perrita", precio: 12000, ingredientes: ["Pan artesanal", "Salchicha premium", "Queso fundido", "Tocino", "Huevo", "Salsas especiales"], emoji: "🌭", categoria: "Perros Calientes" }
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
    observaciones: "",
    sede: CONFIG.sedes[0],
    metodo_pago: CONFIG.metodosPago[0]
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
    const emoji = abierto ? "🟢" : "⛔";
    const texto = abierto ? "Abierto para pedidos" : "Cerrado";
    document.getElementById("statusEmoji").textContent = emoji;
    document.getElementById("statusTexto").textContent = texto;
    bannerCerrado.classList.toggle("visible", !abierto);
    btnPedir.disabled = !abierto;
}

function abrirCarrito() {
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
    if (!categoria) return;

    // Actualizar tabs activos
    document.querySelectorAll(".tab-btn").forEach((btn, idx) => {
        btn.classList.toggle("active", btn.innerHTML.includes(categoria.nombre));
    });

    // Renderizar productos ordenados de menor a mayor precio
    productosGrid.innerHTML = "";
    const itemsOrdenados = [...categoria.items].sort((a, b) => a.precio - b.precio);
    itemsOrdenados.forEach(producto => {
        const card = document.createElement("div");
        card.className = "producto-card";
        card.innerHTML = `
            <img class="producto-imagen" src="https://placehold.co/300x200/1a1a1a/f39c12?text=${encodeURIComponent(producto.nombre)}" alt="${producto.nombre}">
            <!-- REEMPLAZAR: foto real de ${producto.nombre} -->
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

    // Scroll suave
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
    renderizarCarrito();
}

function renderizarCarrito() {
    carritoContenido.innerHTML = "";

    if (carrito.length === 0) {
        carritoContenido.innerHTML = `<div class="carrito-vacio">Tu carrito está vacío</div>`;
        btnPedir.classList.add("oculto");
        return;
    }

    btnPedir.classList.remove("oculto");

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
        html += `<div class="banner-domicilio visible">⚠️ El valor del domicilio NO está incluido en el total. El costo del domicilio se cobra aparte.</div>`;
    }

    html += `<div class="form-group">`;
    html += `<label class="form-label">Nombre completo<span class="requerido">*</span></label>`;
    html += `<input type="text" class="form-input" id="formNombre" placeholder="Tu nombre" value="${formularioDatos.nombre}" oninput="actualizarFormulario('nombre', this.value);validarCampos()">`;
    html += `</div>`;

    html += `<div class="form-group">`;
    html += `<label class="form-label">Teléfono<span class="requerido">*</span></label>`;
    html += `<input type="tel" class="form-input" id="formTelefono" placeholder="3001234567" maxlength="10" inputmode="numeric" value="${formularioDatos.telefono}" oninput="filtrarTelefono(this)">`;
    html += `</div>`;

    if (tipoEntrega === 'domicilio') {
        html += `<div class="form-group">`;
        html += `<label class="form-label">Dirección<span class="requerido">*</span></label>`;
        html += `<input type="text" class="form-input" id="formDireccion" placeholder="Ej: Calle 5 # 8-45" value="${formularioDatos.direccion}" oninput="actualizarFormulario('direccion', this.value);validarCampos()">`;
        html += `</div>`;

        html += `<div class="form-group">`;
        html += `<label class="form-label">Barrio<span class="requerido">*</span></label>`;
        html += `<input type="text" class="form-input" id="formBarrio" placeholder="Tu barrio" value="${formularioDatos.barrio}" oninput="actualizarFormulario('barrio', this.value);validarCampos()">`;
        html += `</div>`;

        html += `<div class="form-group">`;
        html += `<label class="form-label">📌 Indicación especial de dirección <span style="font-weight:400;color:var(--color-gris-claro)">(opcional)</span></label>`;
        html += `<input type="text" class="form-input" id="formIndicacion" placeholder="Ej: casa amarilla, 2do piso, callejón..." value="${formularioDatos.indicacion}" onchange="actualizarFormulario('indicacion', this.value)">`;
        html += `</div>`;
    }

    html += `<div class="form-group">`;
    html += `<label class="form-label">Sede ${tipoEntrega === 'domicilio' ? 'más cercana' : 'donde recoge'}<span class="requerido">*</span></label>`;
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
    html += `<textarea class="form-input" id="formObservaciones" placeholder="Ej: sin ají, salsa aparte, bien cocido..." rows="2" style="resize:none" onchange="actualizarFormulario('observaciones', this.value)">${formularioDatos.observaciones}</textarea>`;
    html += `</div>`;
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
    input.value = input.value.replace(/[^0-9]/g, '').slice(0, 10);
    actualizarFormulario('telefono', input.value);
    // Visual: verde si 10 dígitos, rojo si menos
    if (input.value.length > 0) {
        input.style.borderColor = input.value.length === 10 ? 'var(--color-verde)' : 'var(--color-rojo)';
    } else {
        input.style.borderColor = '';
    }
    validarCampos();
}

function validarCampos() {
    const btn = document.getElementById('btnPedir');
    if (!btn) return;

    const nombre = (formularioDatos.nombre || '').trim();
    const telefono = (formularioDatos.telefono || '').trim();
    const telOk = /^[0-9]{10}$/.test(telefono);
    const sede = (formularioDatos.sede || '').trim();
    const metodo = (formularioDatos.metodo_pago || '').trim();

    let ok = nombre !== '' && telOk && sede !== '' && metodo !== '';

    if (tipoEntrega === 'domicilio') {
        const dir = (formularioDatos.direccion || '').trim();
        const barrio = (formularioDatos.barrio || '').trim();
        ok = ok && dir !== '' && barrio !== '';
    }

    btn.disabled = !ok;
    btn.style.opacity = ok ? '1' : '0.5';
    btn.style.cursor = ok ? 'pointer' : 'not-allowed';
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
    const requeridos = ['nombre', 'telefono', 'sede', 'metodo_pago'];
    if (tipoEntrega === 'domicilio') {
        requeridos.push('direccion', 'barrio');
    }

    for (let campo of requeridos) {
        if (!formularioDatos[campo] || formularioDatos[campo].trim() === '') {
            alert(`Por favor completa el campo: ${campo}`);
            return false;
        }
    }
    return true;
}

function enviarPedidoWhatsApp() {
    if (!validarFormulario()) return;

    if (!estaAbierto()) {
        intentarEnviarCerrado = true;
        cerrarCarrito();
        modalCerrado.classList.add("visible");
        return;
    }

    generarYEnviarMensaje();
}

function generarYEnviarMensaje() {
    let mensaje = "🛵 *Nuevo pedido - El Toscano*\n";
    mensaje += `👤 Cliente: ${formularioDatos.nombre}\n`;
    mensaje += `📞 Teléfono: ${formularioDatos.telefono}\n`;
    mensaje += `🚀 Entrega: ${tipoEntrega === 'domicilio' ? 'Domicilio' : 'Recoger en punto'}\n`;

    if (tipoEntrega === 'domicilio') {
        mensaje += `📍 Dirección: ${formularioDatos.direccion}, Barrio ${formularioDatos.barrio}\n`;
        if (formularioDatos.indicacion && formularioDatos.indicacion.trim()) {
            mensaje += `📌 Indicación: ${formularioDatos.indicacion}\n`;
        }
        mensaje += `⚠️ Domicilio: valor cobrado aparte\n`;
    }

    mensaje += `🏪 Sede: ${formularioDatos.sede}\n`;
    mensaje += `💳 Pago: ${formularioDatos.metodo_pago}\n\n`;

    mensaje += `🧾 *Pedido:*\n`;
    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    carrito.forEach(item => {
        mensaje += `- ${item.cantidad}x ${item.nombre}: ${formatearPrecio(item.precio * item.cantidad)}\n`;
    });

    mensaje += `\n💰 *Total: ${formatearPrecio(total)}*`;

    if (formularioDatos.observaciones && formularioDatos.observaciones.trim()) {
        mensaje += `\n📝 *Observaciones:* ${formularioDatos.observaciones}`;
    }

    const enlace = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(mensaje)}`;
    window.open(enlace, '_blank');

    // Limpiar
    carrito = [];
    formularioDatos = {
        nombre: "",
        telefono: "",
        direccion: "",
        barrio: "",
        sede: CONFIG.sedes[0],
        metodo_pago: CONFIG.metodosPago[0]
    };
    tipoEntrega = "domicilio";
    actualizarCarrito();
    cerrarCarrito();
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