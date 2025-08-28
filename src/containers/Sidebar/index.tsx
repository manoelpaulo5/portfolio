import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

const Sidebar = () => (
    <aside>
        <SidebarContainer>
            <Avatar />
            <Titulo fontSize={20}>Manoel Paulo</Titulo>
            <Paragrafo tipo="secundario" fontSize={16}>
                manoelpaulo5
            </Paragrafo>
            <Descricao tipo="principal" fontSize={12}>
                Engenheiro front-end
            </Descricao>
            <BotaoTema>Trocar tema</BotaoTema>
        </SidebarContainer>
    </aside>
)

export default Sidebar
