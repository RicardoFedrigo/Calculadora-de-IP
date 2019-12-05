Calculadora de IP
=======================


Descrição
===================
 Pagina simples em html, com objetivo de fazer alguns calculos sobre ip, mostrando sobre a 
 tela os respectivos valores calculados, e dando a opção de fazer download dos valores 
 no formato JSON 
 
Modo de uso
========================
Carregue o arquivo index.html no seu browser favorito, logo apos sera necessario fazer o 
upload de um arquivo do tipo json, com a descrições escrita na pagina inicial.

Estrutura
====================
O arquivo esta estruturado:` 
  index.html ->Arquivo principal e de onde sera carregado.
  js/ -> |->/model -> Local onde fica classes .
         |->/controller -> Controla a arquivos e classes e regra de negocios. 
         |->/jquery -> Arquivo referente ao framework JQUERY : https://jquery.com/
         |-> Utils.js -> Arquivo com funções auxiliares.
  assets/ -> | -> Imagens e audio, etc...
  css/ -> | -> Customização da página.
  files/ -> | -> Arquivo exemplo.json e pdf da tarefa.
  `
  NOTAS
  =================
  Devido o Jquery e bootstrap serem requisitados da internet, sem conexão com a internet 
  o programa não vai funcionar corretamente
