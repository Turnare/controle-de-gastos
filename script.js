

//array que guarda a categoria eo valor 
const matrizGastos = [
    
    ["Alimentacao", 0],
    ["Transporte", 0],
    ["Lazer", 0],
    ["Outros", 0],
    ["Total",0]
]   


//funcoes  utulitarias
    // funcao "anonima" utulizada para pegar N ids
const obterElemento = (id) => document.getElementById(id);
//funcao "anonima" que verifica se o numero e negativo
const valorNegativo = (valor) => valor < 0 ; 
    //funcao "anonima" que calcula os valores
const somarValor = (total, valor) => total + valor;
    //limpa os camposS
const limparCampos = () => obterElemento("valor").value="";

const formataMoeda = (valor) => valor.toFixed(2).replace(".", ",");

//obter informacoes do formulario
    //funcao "anonima" que pegado elemento
const obterValorInformado = () => parseFloat(obterElemento("valor").value);
    //obtem o valor de dentro do elemento selecionado na categoria pelo usuario
const obterCategoriaInformada = () => obterElemento("categoria").value;

//obtem a categoria  da matriz
    //obtem o nome da categoria dentro da array
const obtercategoria =(matriz, nomeCategoria) => matriz.find((item)=> item[0] === nomeCategoria);

//4.1 atualizar valores da matriz

const atualizarValorCategoria = (categoria, valor) => categoria[1] = somarValor(categoria[1], valor);  

const atualizarInterface = () =>
{
    matrizGastos.forEach(([nome,valor])=>{
        const elemento = obterElemento(nome);
        elemento.textContent = `${nome}: R$ ${formataMoeda(valor)}`
    })

} 


//funcao principal
function adicionarGasto()
{
    
    /*
        1. pegar o valor informado
        2. pegar a categoria informada
        3. impedir numeros negativos
        4. de acordo com a categoria atualiza o valor
        4.1 criar variaveis para controlar ou armazenar 
            os valores de cada uma das categorias 
        5. atualizar a interface 
        6. limpar campos
    */
    //1. pegar o valor informado
    const valorInformado = obterValorInformado();
    
    //2. pegar a categoria informada
    const CategoriaInformada = obterCategoriaInformada();
    
    //3. impedir numeros negativos
    if(valorNegativo(valorInformado))
    {
        alert("Valor invalido. o valor nao pode ser negativo");
        return;
    }
    
    const categoria = obtercategoria(matrizGastos, CategoriaInformada);
    
    const total = obtercategoria(matrizGastos, "Total");
    
    atualizarValorCategoria(categoria, valorInformado);
    
    atualizarValorCategoria(total, valorInformado);

    atualizarInterface();

    limparCampos();
        
}