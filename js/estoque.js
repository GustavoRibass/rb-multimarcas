const carros = [
    {
        nome: "Lamborghini Aventador",
        preco: "R$ 3.500.000",
        img: "img/lamborghini.png",
        link: "aventador.html"
    },
    {
        nome: "BMW M8",
        preco: "R$ 1.100.000",
        img: "img/bmw_m8.png",
        link: "m8.html"
    },
    {
        nome: "BMW M5",
        preco: "R$ 620.000",
        img: "img/bmw_m5.png",
        link: "m5.html"
    },
    {
        nome: "Porsche 911 Turbo S",
        preco: "R$ 1.450.000",
        img: "img/porsche.png",
        link: "porsche.html"
    }
];

function carregarEstoque() {
    const area = document.getElementById("lista-carros");
    if (!area) return;

    area.innerHTML = "";

    carros.forEach(carro => {
        const card = `
        <div class="card">
            <img src="${carro.img}">
            <div class="card-title">${carro.nome}<br>
                <span style="color:#d4af37;font-weight:bold;">${carro.preco}</span>
            </div>
            <a class="btn" href="${carro.link}" target="_blank">Ver Detalhes</a>
        </div>
        `;
        area.innerHTML += card;
    });
}

window.onload = carregarEstoque;