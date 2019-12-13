#Calculadora de IP
=======================


#Descrição
=======================
 Pagina simples em html, com objetivo de fazer alguns calculos sobre ip, mostrando sobre a 
 tela os respectivos valores calculados, e dando a opção de fazer download dos valores 
 no formato JSON 
 
#Modo de uso
=======================
Carregue o arquivo index.html no seu browser favorito, logo apos sera necessario fazer o 
upload de um arquivo do tipo json, com a descrições escrita na pagina inicial.

#Estrutura
=======================
O arquivo esta estruturado:
  index.html ->Arquivo principal e de onde sera carregado.
  js/ -> |->/model -> Local onde fica classes .
         |->/controller -> Controla a arquivos e classes e regra de negocios. 
         |->/jquery -> Arquivo referente ao framework JQUERY : https://jquery.com/
         |-> Utils.js -> Arquivo com funções auxiliares.
  assets/ -> | -> Imagens e audio, etc...
  css/ -> | -> Customização da página.
  files/ -> | -> Arquivo exemplo.json e pdf da tarefa.
 
#NOTAS
=======================
  Devido o Jquery e bootstrap serem requisitados da internet, sem conexão com a internet 
  o alguns componentes do programa pode não funcionar corretamente.

#Escolhada Da linguagem 
=======================
  A linguagem programação javascript e linguagem de marcação foram escolhidas por serem 
    de fácil aprendizagem e sendo suportadas em quase todos os navegadores modernos.
  Foi tambem utilizados dois frameWorks muito populares hoje em dia, que são:
        --Bootstrap: Framework de estilização CSS, ajudando e muito o programador a fazer 
                     paginas bonitas e responsivas.
        --JQuery : Framework feito em javascript, principalmente utilizado em paginas web
                   para animações e realização de eventos dentro da pagina, como carregar
                   componentes da pagina, retirar ou colocar elementos etc....
#Tecnologia JSON:
======================= 
  O JSON, é um acrônimo de JavaScript Object Notation, é um formato compacto, de padrão 
  aberto independente,  de troca de dados simples e rápida (parsing) entre sistemas, 
  especificado por Douglas Crockford em 2000,  é um formato de troca de dados entre 
  sistemas independente de linguagem de programação, derivado do JavaScript, que 
  utiliza um estrutura muito parecida com a famosa chave e falor, porem ele é mais complexo
  suportando arrays e ate mesmo outros dicionarios dentro dele. E apareceu como uma 
  alternativa paralela e mais moderna para API's, do que o antigo XML.

#Endereço IP
=======================
  Um Endereço de Protocolo da Internet (Endereço IP), do inglês Internet Protocol address 
  (IP address), é um rótulo numérico atribuído a cada dispositivo (computador, impressora
  , smartphone etc.) conectado a uma rede de computadores que utiliza o   Protocolo de 
  Internet para comunicação.[1] Um endereço IP serve a duas funções principais: 
  identificação de interface de hospedeiro ou de rede e endereçamento de localização. 
    
 #Referencias
=======================
  Sites em que basiei e busquei referencias
  http://www.vlsm-calc.net/ipclasses.php
  https://pt.wikipedia.org/wiki/Endere%C3%A7o_IP
  https://www.json.org/json-pt.html
  https://api.jquery.com/
