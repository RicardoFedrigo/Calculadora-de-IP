class Calculadora_IP {
  //JavaScript não tem classes privadas, o maximo que se pode fazer em relacao
  //a isto é esconder mas mesmo assim ele nao se torna privado
  //então por convencao usa-se __ para dizer que é privado
  constructor(ip, mascara) {
    this.__IP = [];
    this.__MASK = [];
    this.valid_ip();
    this.__IP = stringIpToArr(ip);
    this.__MASK = stringIpToArr(mascara);
  }

  //Conhecido como metodos "magicos"
  //eles realizam o mesmo que a funcao get e set,
  //porem quando chamados nao precisam ser uma chamada de funcao
  //so precisa chamar como se fosse uma variavel da funcao
  get ip() {
    return this.__IP;
  }
  get mask() {
    return this.__MASK;
  }

  //Verifica se a mascara esta dentro do range
  valida_mascara() {
    let init, fim;
    //Verifica se esta no range 2^32
    if (!into_range(this.mask, "0.0.0.0", "255.255.255.255")) {
      return false;
    }
    //arguments é uma palavra reservada do javascript
    //ela serve para verificar se usuario passou algum parametro para ela
    //Isso é util para tentar fazer uma sobrecarga de função.
    if (arguments.length) {
      init = arguments[0];
      fim = arguments[1];
      if (!into_range(this.mask, init, fim)) return false;
    }
    return true;
  }
  //Rang de ips validos
  range_host() {
    let broadcast = this.ip_broadcast();
    let rede = this.ip_rede();
    broadcast[broadcast.length - 1]--;
    rede[rede.length - 1]++;

    return `${rede} - ${broadcast}`;
  }
  //Verifica o 1 da mascara
  valid_mask() {
    let num = 0;
    for (let i = 0; i < this.mask.length; i++) {
      let aux = contador_mascara(intToBin(this.mask[i]));
      if (aux == "Invalido") return false;
      num = num + aux;
    }
    return num;
  }
  //Verifica se ip é valido na internet
  ip_privados() {
    if (into_range(this.ip, "10.0.0.0", "10.255.255.255")) return false;
    else if (into_range(this.ip, "127.0.0.0", "127.255.255.255")) return false;
    else if (into_range(this.ip, "172.16.0.0", "172.31.255.255")) return false;
    else if (into_range(this.ip, "192.168.0.0", "192.168.255.255"))
      return false;
    return true;
  }

  // Apresenta classe do ip
  ip_class() {
    if (into_range(this.ip, "0.0.0.0", "127.255.255")) return "A";
    else if (into_range(this.ip, "128.0.0.0", "191.255.255.255")) return "B";
    else if (into_range(this.ip, "192.0.0.0", "223.255.255.255")) return "C";
    else if (into_range(this.ip, "224.0.0.0", "239.255.255.255")) return "D";
    else if (into_range(this.ip, "240.0.0.0", "255.255.255.255")) return "E";
    throw new Error("Ip não é um valor valido");
  }
  // Verifica o ip da rede
  ip_rede() {
    let rede_ip = [];
    for (let i = 0; i < this.ip.length; i++) {
      rede_ip.push(portAND(this.ip[i], this.mask[i]));
    }
    rede_ip = rede_ip.map(e => binToInt(e));
    return rede_ip;
  }
  //"Classe" da mas cara de rede
  mask_class() {
    if (into_range(this.mask, "0.0.0.0", "255.0.0.0")) return "A";
    else if (into_range(this.mask, "255.0.0.0", "255.255.0.0")) return "B";
    else if (into_range(this.mask, "255.255.0.0", "255.255.255.0")) return "C";
    else if (into_range(this.mask, "255.255.255.0", "255.255.255.255"))
      return "D";
  }
  // Acha o ip de broadcast
  ip_broadcast() {
    let in_mask = this.mask.map(e => portNOT(intToBin(e)));
    let bin_ip = this.ip.map(e => intToBin(e));
    let ip_broad = [];
    for (let i = 0; i < bin_ip.length; i++) {
      ip_broad.push(semCriatividade(bin_ip[i], in_mask[i]));
    }
    ip_broad = ip_broad.map(e => binToInt(e));
    return ip_broad;
  }
  // Quantidade de host que rede pode ter
  qtd_host() {
    let min_host = "";
    let host_bin = "";
    stringIpToArr("255.255.255.255").map(
      e => (min_host = min_host + intToBin(e))
    );
    this.mask.map(e => (host_bin = host_bin + intToBin(e)));

    for (let i = host_bin.length; i < 32; i++) {
      host_bin = host_bin + "0";
    }
    let numero_host = binToInt(min_host) - binToInt(host_bin);
    if (numero_host < 0) {
      throw new Error("Valor da mascara nao permite o minimo de host");
    }
    return numero_host;
  }

  host_validos() {
    return this.qtd_host() - 2;
  }
  //Faixa de ip que se pode ter maquinas validas
  valid_hosts() {
    let controle = this.mask.map(e => portNOT(intToBin(e)));
    return controle;
  }

  valid_ip() {
    for (let i = 0; i < this.ip.length; i++) {
      if (this.ip[i] > 255 || this.ip[i] < 0) {
        throw new Error("O ip não é valido, fora do range valido");
      }
    }
  }
}
//Sites em que basiei e busquei referencias
//--http://www.vlsm-calc.net/ipclasses.php
