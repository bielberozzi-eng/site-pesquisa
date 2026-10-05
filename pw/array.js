const produtos = [
    {
        nome: "Notebook Dell",
        preco: 2500,
        categoria: "Notebook",
        imagem: "imagem2.jpg"
    },

    {
        nome: "Notebook Acer",
        preco: 3000,
        categoria: "Notebook",
        imagem: "imagem3.jpg"
    },

    {
        nome: "Notebook Samsung",
        preco: 3499,
        categoria: "Notebook",
        imagem: "imagem4.jpg"
    },

    {
        nome: "Mouse Logitech",
        preco: 149,
        categoria: "Mouse",
        imagem: "imagem5.jpg"
    },

    {
        nome: "Teclado HyperX",
        preco: 299,
        categoria: "Teclado",
        imagem: "hiper.jpg"
    },

    {
        nome: "Microfone Gamer",
        preco: 299,
        categoria: "Hardware",
        imagem: "imagem12.jpg"
    },

    {
        nome: "MacBook Pro",
        preco: 12999,
        categoria: "Notebook",
        imagem: "imagem11.jpg"
    },

    {
        nome: "Notebook Thinkercad 16E",
        preco: 5299,
        categoria: "Notebook",
        imagem: "imagem10.jpg"
    }
];

const catalogo = document.getElementById("catalogo");
const formulario = document.getElementById("form-pesquisa");
const pesquisa = document.getElementById("pesquisa");


// Função para mostrar os produtos
function mostrarProdutos(lista) {

    // Limpa o catálogo
    catalogo.innerHTML = "";

    lista.forEach(produto => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">

            <div class="card-conteudo">

                <h2>${produto.nome}</h2>

                <p class="categoria">
                    ${produto.categoria}
                </p>

                <p class="preco">
                    R$ ${produto.preco.toFixed(2)}
                </p>

                <button>Comprar</button>

            </div>
        `;

        catalogo.append(card);
    });
}


// Mostra todos os produtos quando a página abre
mostrarProdutos(produtos);


// Pesquisa
formulario.addEventListener("submit", function(event) {

    // Impede a página de recarregar
    event.preventDefault();

    // Pega o que foi digitado
    const texto = pesquisa.value.toLowerCase().trim();

    // Filtra os produtos
    const produtosFiltrados = produtos.filter(produto => {

        return (
            produto.nome.toLowerCase().includes(texto) ||
            produto.categoria.toLowerCase().includes(texto)
        );

    });

    // Mostra o resultado
    mostrarProdutos(produtosFiltrados);

});