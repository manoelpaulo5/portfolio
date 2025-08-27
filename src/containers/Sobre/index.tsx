import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => (
    <section>
        <Titulo fontSize={16}>Sobre mim</Titulo>
        <Paragrafo tipo="principal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            reiciendis pariatur consequuntur porro et, perspiciatis officia eius
            illum laborum autem necessitatibus adipisci, iure ratione esse
            quidem, explicabo vitae dicta atque?
        </Paragrafo>
        <GithubSecao>
            <img src="https://github-readme-stats.vercel.app/api?username=manoelpaulo5&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=manoelpaulo5&layout=compact&langs_count=7&theme=dracula" />
        </GithubSecao>
    </section>
)

export default Sobre
