import styles from "../styles/Work.module.css";


export default function Work() {
  return (
    <div className={styles.container}>
      <main className={styles.main} >
      <div className={styles.content}>
        <p>
            <h2>Técnico de suporte At DBnet(Provedora de internet)</h2>
            - Configurações de antenas em modo bridge, station e access point.<br/>
            - Criação e manipulação de Servidor FTP para backups diarios.<br/>
            - Configurações de roteadores em modo bridge, router e repeater, autenticação por PPPOE<br/>
            - Gerenciamento do provedor, clientes, adoção e exclusão de ONUs através do sistema ERP IXCSoft<br/>
            - Criação e manipulação de maquinas virtuais através do Citrix XenServer<br/>
            - Monitoramento e Gestão de rede com ( Dude, UNM2000 fiberhome )<br/>
            - Monitoramento de rede via Zabbix and Observium
            </p>
            
      </div>
      </main>
    </div>
  );
}