import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao } from './styles'

const Projeto = () => (
    <Card>
        <Titulo>Projeto lista de tarefas</Titulo>
        <Paragrafo tipo="secundario">
            Lista de tarefas feitas com ReactJS
        </Paragrafo>
        <LinkBotao>visitar</LinkBotao>
    </Card>
)

export default Projeto
