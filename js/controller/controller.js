//Variavel global para poder usar o objeto Calculadora_IP
let ip_json;

//Funcao para carregar arquivo
function loadFile() {
  var input, file, fr;

  if (typeof window.FileReader !== "function") {
    alert("The file API isn't supported on this browser yet.");
    return;
  }
  input = document.getElementById("fileinput");
  if (!input) {
    alert("hmm, Nao foi possivel achar o arquivo.");
  } else if (!input.files) {
    alert("Este browser parece não suportar as propriedades do arquivo.");
  } else if (!input.files[0]) {
    alert("Por favor selecione o arquivo antes de clicar no carregar");
  } else {
    file = input.files[0];
    fr = new FileReader();
    fr.onload = receivedText;
    fr.readAsText(file);
    fr.onloadend = onLoad;
  }

  function  receivedText(e) {
    var lines = e.target.result;
    var newArr = JSON.parse(lines);
    onLoad();
    ip_json = ip_calc(newArr);
    return ip_json;
  }
}
//Cria arquivo do tipo JSON para Download
function dowload_IP() {
  let data = criaJson()
  var blob = new Blob([JSON.stringify(data)], { type: "application/json" });
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(blob, "ipCalculado");
  } else {
    var elem = window.document.createElement("a");
    elem.href = window.URL.createObjectURL(blob);
    elem.download = "ipCalculado";
    document.body.appendChild(elem);
    elem.click();
  }
}
//Cria Json para ser colocado no arquivo
function criaJson() {
  objetoJson = {
    ip: ip_json.ip,
    ip_class: ip_json.ip_class(),
    mascara: ip_json.mask,
    mascara_class: ip_json.mask_class(),
    ip_valido: ip_json.valid_ip(),
    bits_mascara: ip_json.valid_mask(),
    ip_privado: ip_json.ip_privados(),
    rede: ip_json.ip_rede(),
    broadcast: ip_json.ip_broadcast(),
    rumero_host: ip_json.qtd_host(),
    range_host: ip_json.range_host()
  };
  return objetoJson;
}

//Aloca a classe para ser usada
function ip_calc(json_file) {
  var calc = new Calculadora_IP(json_file.ipAddr, json_file.netMask);
  return calc;
}

//Coloquei o html que carrega aqui pois,
// se fosse separar em demais pasta o projeto poderia
//ficar extenso, mas nada impede de fazer uma requisicao xhtml
function onLoad() {
  if (ip_json) {
    $("#btnLoad").click(function() {
      $("#apresentacao").hide(2000, function() {
        $(this).remove();
      });
    });
    $("#apresentacao").show(2000, function() {
      $(this).html(`
              <link href="./css/principal.css" rel="stylesheet">
              <div> 
                <div>
              <table class="table table-striped ">
                <thead class="thead-dark">
                  <tr class="table" >
                    <th scope="col" ></th>
                    <th scope="col"></th>
                    </tr>
                  </thead>
                  <tr>
                    <td>
                      <b>IP:<b>
                    </td>
                    <td>
                      ${ip_json.ip} / ${ip_json.valid_mask()} 
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>IP Classe:<b>
                    </td>
                    <td>
                      ${ip_json.ip_class()}
                    </td>
                  </tr>  
                  <tr>
                    <td>
                      <b>IP é valido: <b>
                    </td>
                    <td>
                      ${
                        ip_json.ip_privados()
                          ? "Válido"
                          : "Invalido na internet"
                      }
                    </td>
                   </tr>       
                   <tr>
                      <td>
                        <b>Mascara:<b>
                      </td>
                      <td>  
                        ${ip_json.mask}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Mascara "Classe":<b>
                      </td>
                      <td>  
                        ${ip_json.mask_class()}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Mascara é valida:<b>
                      </td>
                      <td>  
                        ${ip_json.valid_mask() ? "Valido" : "Invalido"}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>IP de rede:<b>
                      </td>
                      <td>  
                        ${ip_json.ip_rede()}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>IP de broadcast:<b>
                      </td>
                      <td>  
                        ${ip_json.ip_broadcast()}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Range de IP validos:<b>
                      </td>
                      <td>  
                      ${ip_json.range_host()}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Número de hosts na rede:<b>
                      </td>
                      <td>  
                        ${ip_json.qtd_host()}
                      </td>
                    </tr>
                  </table>
                  <button onclick="location.reload()" id="nova_pesquisa" type="button" class="btn btn-primary">Novo arquivo</button>
                  <button onclick="dowload_IP()" id="download" type="button" class="btn btn-info">Download JSON</button>
                </div>
              </div>`);
    });
  }
}
