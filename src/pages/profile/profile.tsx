import EventCard from "../../components/profile/eventBlock"
import SessionAccountInfo from "../../components/profile/sessionAccountInfo"
import StatusBlock from "../../components/profile/statusBlock"
import SubButton from "../../components/profile/subButton"
import TariffList from "../../components/profile/tariffList"
import AsideSettings from "../../components/shared/assets/svg/aside-settings"
import { LogoLogin } from "../../components/shared/assets/svg/logo-login"
import MouseIcon from "../../components/shared/assets/svg/mouse"
import ChooseGame from "../../components/shared/assets/svg/subbtns/choose-game"
import CloseSession from "../../components/shared/assets/svg/subbtns/close-session"
import DesktopIcon from "../../components/shared/assets/svg/subbtns/desktop"
import Problem from "../../components/shared/assets/svg/subbtns/problem"
import Session from "../../components/shared/assets/svg/subbtns/session"
import Support from "../../components/shared/assets/svg/support"
import { LgTag } from "../../components/shared/assets/svg/tag"
import Transactions from "../../components/shared/assets/svg/transactions"
import styles from "../../styles/pages/Profile.module.scss"

export function Profile() {
  return (
    <div className={styles.container}>
      <aside>
        <nav>
          <div><LogoLogin /></div>
          <div><Transactions /><span>История транзакций</span></div>
          <div><MouseIcon /><span>Забронировать</span></div>
          <div><AsideSettings /><span>Настройки</span></div>
          <div><Support /><span>Поддержка</span></div>
        </nav>
      </aside>
      <div className={styles.content}>
        <div className={styles.userInfo}>
          <div className={styles.user}>
            <div className={styles.avatar}></div> <span>Алексей Костылев Николаевич</span>
            <div className={styles.statusBlock}><StatusBlock /></div>
          </div>
          
          <div className={styles.sessionInfo}><SessionAccountInfo /></div>
          <div className={styles.tariffList}><TariffList /></div>
          <div className={styles.event}>
            <EventCard img={"/cyberpank.png"} />
            <EventCard img={"/cs2.png"}/>
          </div>
          <div className={styles.subBtnsGroup}>
        <SubButton text="ВЕРНУТЬСЯ НА РАБОЧИЙ СТОЛ" icon={<DesktopIcon />} color="#F7FBFF"/>
        <SubButton text="ВЫБРАТЬ ИГРУ" icon={<ChooseGame />} color="#F8F0FF"/>
        <SubButton text="СООБЩИТЬ О ПРОБЛЕМЕ" icon={<Problem />} color="#FFFEEE"/>
        <SubButton text="ПРОДЛИТЬ СЕССИЮ" icon={<Session />} color="#F0FFF9"/>
        <SubButton text="ЗАВЕРШИТЬ СЕССИЮ" icon={<CloseSession />} color="#FFEDED"/>
      </div>
        </div>
      </div>
      <div className={styles.rightBottomLogo}><LgTag /></div>
    </div>
  )
}
