import styles from './competence.module.css'

export default function CompetenceSection (){
    return (
        <div className={styles.allSkills}>
            <div className={styles.dashboard}>
                <div className={styles.langProg}>    
                    <h3>Langage de programmation</h3>
                    <div className={styles.circleContainer}>
                        <div className={styles.lang} id={styles.PowerShell}></div>
                            <p>PowerShell</p>
                        <div className={styles.lang}></div>
                            <p>Bash</p>
                        <div className={styles.lang}></div>
                        <p>Web</p>
                    </div>
                </div>
                <div> {/*className={styles.pieContainer}> */}
                    <h3>Compétence Système</h3>
                    <div className={styles.sys}><p>Windows</p></div>
                    <div className={styles.sys}><p>Windows Serveur</p></div>
                        <div className={styles.sysChild}><p>Active Directory</p></div>
                        <div className={styles.sysChild}><p>Gestion de fichiers</p></div>
                    <div className={styles.sys}><p>Linux</p></div>
                        <div className={styles.sysChild}><p></p></div>
                </div>
                <div> {/*className={styles.pieContainer}> */}
                    <h3>Compètence Réseau</h3>
                    <div className={styles.net}><p>Cisco</p></div>
                    <div className={styles.net}><p>Protocol</p></div>
                        <div className={styles.netChild}><p>DHCP</p></div>
                        <div className={styles.netChild}><p>DNS</p></div>
                        <div className={styles.netChild}><p>VLAN</p></div>
                    <div className={styles.net}><p>FireWall</p></div>

                </div>
            </div>
        </div>
        
    )
}