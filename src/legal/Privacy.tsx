import { config } from './config';
import './styles.css';

export default function Privacy() {
  return (
    <div className="Container">
      <h1 className="H1">Política de Privacidade</h1>
      <p className="Paragraph">
        Sua privacidade é importante para nós. A política de {config.appName} é
        respeitar a sua privacidade e cumprir qualquer lei e regulação
        aplicáveis a qualquer informação pessoal que possamos coletar sobre
        você, inclusive em{' '}
        <a className="A" href={config.appOrigin}>
          {config.appOrigin}
        </a>
        , e outros sites que possuir e operar.
      </p>
      <p className="Paragraph">
        Esta política é eficaz a partir de 01 de janeiro de 2020 e foi
        atualizada pela última vez em 04 de janeiro de 2022.
      </p>
      <h2 className="H2">Informações que coletamos</h2>
      <p className="Paragraph">
        Informações que coletamos incluem as suas informações que você
        conscientemente e ativamente nos fornecer ao usar ou participar de
        qualquer um dos nossos serviços e promoções, e qualquer informação
        enviada automaticamente pelos seus dispositivos no decurso de acessar
        nossos produtos e serviços.
      </p>
      <h3 className="H3">Registrar dados.</h3>
      <p className="Paragraph">
        Quando você visita nosso site, nossos servidores podem registrar
        automaticamente dados fornecidos pelo navegador da Web, pode incluir o
        seu dispositivo Endereço do Protocolo da Internet (IP), seu tipo de
        navegador e versão, como páginas que você visita, a hora e os dados da
        sua visita, o tempo gasto em cada página, outros detalhes sobre sua
        visita e detalhes técnicos que ocorrem em conjunção com erros que você
        pode encontrar.
      </p>
      <p className="Paragraph">
        Esteja ciente de que, embora essas informações possam não ser
        pessoalmente identificáveis ​​por si mesmas, pode ser possível
        combiná-las com outros dados para identificar pessoalmente pessoas
        individuais.
      </p>
      <h3 className="H3">Informação pessoal</h3>
      <p className="Paragraph">
        Podemos solicitar informações pessoais que podem incluir um ou mais dos
        seguintes:
      </p>
      <ul className="Ul">
        <li className="Li">Nome</li>
        <li className="Li">Email</li>
        <li className="Li">Perfis de mídia social</li>
      </ul>
      <h3 className="H3">
        Razões legítimas para processar suas informações pessoais
      </h3>
      <p className="Paragraph">
        Nós apenas coletamos e usamos suas informações pessoais quando temos um
        motivo legítimo para fazê-lo. Nesse caso, apenas coletamos informações
        pessoais que sejam razoavelmente necessárias para fornecer nossos
        serviços a você.
      </p>
      <h3 className="H3">Coleta e uso de informações</h3>
      <p className="Paragraph">
        Podemos coletar informações pessoais suas quando você fizer qualquer uma
        das seguintes ações em nosso site:
      </p>
      <ul className="Ul">
        <li className="Li">
          Inscreva-se para receber nossas atualizações por e-mail ou canais de
          mídia socia
        </li>
        <li className="Li">
          Use um dispositivo móvel ou navegador da web para acessar nosso
          conteúdo
        </li>
        <li className="Li">
          Entre em contato conosco por e-mail, mídia social ou qualquer
          tecnologia semelhante
        </li>
        <li className="Li">Quando você nos menciona nas redes sociais</li>
      </ul>
      <p className="Paragraph">
        Podemos coletar, reter, usar e divulgar informações para as finalidades
        a seguir, e as informações pessoais não serão processadas de maneira
        incompatível com essas finalidades:
      </p>
      <ul className="Ul">
        <li className="Li">
          para permitir que você personalize sua experiência em nosso site
        </li>
        <li className="Li">para entrar em contato e se comunicar com você</li>
        <li className="Li">
          para análise, pesquisa de mercado e desenvolvimento de negócios,
          incluindo operar e melhorar nosso site, aplicativos associados e
          plataformas de mídia social associadas
        </li>
        <li className="Li">
          para publicidade e marketing, incluindo o envio de informações
          promocionais sobre nossos produtos e serviços e informações sobre
          terceiros que consideramos podem ser do seu interesse
        </li>
        <li className="Li">
          para permitir que você acesse e use nosso site, aplicativos associados
          e plataformas de mídia social associadas
        </li>
        <li className="Li">
          para manutenção de registros internos e fins administrativos
        </li>
      </ul>
      <p className="Paragraph">
        Esteja ciente de que podemos combinar as informações que coletamos sobre
        você com informações gerais ou dados de pesquisa que recebemos de outras
        fontes confiáveis.
      </p>
      <h3 className="H3">Segurança de suas informações pessoais</h3>
      <p className="Paragraph">
        Quando coletamos e processamos informações pessoais, e enquanto mantemos
        essas informações, iremos protegê-las dentro de meios comercialmente
        aceitáveis ​​para evitar perda e roubo, bem como acesso não autorizado,
        divulgação, cópia, uso ou modificação.
      </p>
      <p className="Paragraph">
        Embora façamos o possível para proteger as informações pessoais que você
        nos fornece, informamos que nenhum método de transmissão ou
        armazenamento eletrónico é 100% seguro e ninguém pode garantir a
        segurança absoluta dos dados. Cumpriremos as leis aplicáveis ​​a nós em
        relação a qualquer violação de dados.
      </p>
      <p className="Paragraph">
        Você é responsável por selecionar qualquer senha e sua força de
        segurança geral, garantindo a segurança de suas próprias informações
        dentro dos limites de nossos serviços.
      </p>
      <h3 className="H3">
        Por quanto tempo mantemos suas informações pessoais
      </h3>
      <p className="Paragraph">
        Nós mantemos suas informações pessoais apenas pelo tempo que for
        necessário. Este período de tempo pode depender do motivo pelo qual
        estamos usando suas informações, de acordo com esta política de
        privacidade. Se suas informações pessoais não forem mais necessárias,
        iremos excluí-las ou torná-las anónimas, removendo todos os detalhes que
        identificam você.
      </p>
      <p className="Paragraph">
        No entanto, se necessário, podemos reter suas informações pessoais para
        cumprirmos uma obrigação legal, contábil ou de relatório ou para fins de
        arquivamento de interesse público, fins científicos ou de pesquisa
        histórica ou estatísticos.
      </p>
      <h2 className="H2">Privacidade infantil</h2>
      <p className="Paragraph">
        Não visamos nenhum de nossos produtos ou serviços diretamente a crianças
        menores de 13 anos e não coletamos intencionalmente informações pessoais
        sobre crianças menores de 13 anos.
      </p>
      <h2 className="H2">Divulgação de informações pessoais a terceiros</h2>
      <p className="Paragraph">Podemos divulgar informações pessoais para:</p>
      <ul className="Ul">
        <li className="Li">
          uma controladora, subsidiária ou afiliada de nossa empresa
        </li>
        <li className="Li">
          provedores de serviços terceirizados com a finalidade de permitir que
          eles forneçam seus serviços, por exemplo, provedores de serviços de
          TI, armazenamento de dados, provedores de hospedagem e servidores,
          anunciantes ou plataformas analíticas
        </li>
        <li className="Li">
          nossos funcionários, contratados e / ou entidades relacionadas
        </li>
        <li className="Li">
          nossos agentes ou parceiros de negócios existentes ou potenciais
        </li>
        <li className="Li">
          patrocinadores ou promotores de qualquer competição, sorteio ou
          promoção que realizamos
        </li>
        <li className="Li">
          cortes, tribunais, autoridades regulatórias e policiais, conforme
          exigido por lei, em conexão com qualquer processo legal real ou
          futuro, ou a fim de estabelecer, exercer ou defender nossos direitos
          legais
        </li>
        <li className="Li">
          terceiros, incluindo agentes ou subcontratados, que nos auxiliam no
          fornecimento de informações, produtos, serviços ou marketing direto a
          terceiros para coletar e processar dados
        </li>
      </ul>
      <h2 className="H2">
        Transferências internacionais de informações pessoais
      </h2>
      <p className="Paragraph">
        As informações pessoais que coletamos são armazenadas e / ou processadas
        onde nós ou nossos parceiros, afiliados e fornecedores terceirizados
        mantemos instalações. Esteja ciente de que os locais para os quais
        armazenamos, processamos ou transferimos suas informações pessoais podem
        não ter as mesmas leis de proteção de dados do país em que você
        inicialmente forneceu as informações. Se transferirmos suas informações
        pessoais a terceiros em outros países: (i) faremos essas transferências
        de acordo com os requisitos da lei aplicável; e (ii) protegeremos as
        informações pessoais transferidas de acordo com esta política de
        privacidade.
      </p>
      <h2 className="H2">
        Seus direitos e controle de suas informações pessoais
      </h2>
      <p className="Paragraph">
        Você sempre retém o direito de reter informações pessoais de nós, com o
        entendimento de que sua experiência em nosso site pode ser afetada. Não
        iremos discriminá-lo por exercer nenhum dos seus direitos sobre as suas
        informações pessoais. Se você nos fornecer informações pessoais, entende
        que iremos coletar, manter, usar e divulgar de acordo com esta política
        de privacidade. Você tem o direito de solicitar detalhes de qualquer
        informação pessoal que tenhamos sobre você.
      </p>
      <p className="Paragraph">
        Se recebermos informações pessoais sobre você de terceiros, iremos
        protegê-las conforme estabelecido nesta política de privacidade. Se você
        for um terceiro que fornece informações pessoais sobre outra pessoa,
        você declara e garante que tem o consentimento dessa pessoa para nos
        fornecer as informações pessoais.
      </p>
      <p className="Paragraph">
        Se você já concordou em usarmos suas informações pessoais para fins de
        marketing direto, você pode mudar de ideia a qualquer momento.
        Forneceremos a você a capacidade de cancelar a assinatura de nosso banco
        de dados de e-mail ou cancelar as comunicações. Esteja ciente de que
        podemos precisar solicitar informações específicas de você para nos
        ajudar a confirmar sua identidade.
      </p>
      <p className="Paragraph">
        Se você acredita que qualquer informação que mantemos sobre você é
        imprecisa, desatualizada, incompleta, irrelevante ou enganosa, entre em
        contato conosco usando os detalhes fornecidos nesta política de
        privacidade. Tomaremos medidas razoáveis ​​para corrigir qualquer
        informação considerada imprecisa, incompleta, enganosa ou desatualizada.
      </p>
      <p className="Paragraph">
        Se você acredita que violamos uma lei de proteção de dados relevante e
        deseja fazer uma reclamação, entre em contato conosco usando os detalhes
        abaixo e forneça-nos todos os detalhes da suposta violação.
        Investigaremos prontamente sua reclamação e responderemos a você, por
        escrito, definindo o resultado de nossa investigação e as medidas que
        tomaremos para lidar com sua reclamação. Você também tem o direito de
        entrar em contato com um órgão regulador ou autoridade de proteção de
        dados em relação à sua reclamação.
      </p>
      <h2 className="H2">Uso de Cookies</h2>
      <p className="Paragraph">
        Usamos “cookies” para coletar informações sobre você e sua atividade em
        nosso site. Um cookie é um pequeno pedaço de dado que nosso site
        armazena em seu computador e acessa cada vez que você o visita, para que
        possamos entender como você usa nosso site. Isso nos ajuda a servir a
        você conteúdo com base nas preferências que você especificou.
      </p>
      <h2 className="H2">Limites da nossa política</h2>
      <p className="Paragraph">
        Nosso site pode conter as para sites externos que não são operados por
        nós. Esteja ciente de que não temos controle sobre o conteúdo e as
        políticas desses sites e não podemos aceitar responsabilidade ou
        obrigação por suas respectivas práticas de privacidade.
      </p>
      <h2 className="H2">Alterações nesta política</h2>
      <p className="Paragraph">
        A nosso critério, podemos alterar nossa política de privacidade para
        refletir atualizações em nossos processos de negócios, práticas
        aceitáveis ​​atuais ou alterações legislativas ou regulatórias. Se
        decidirmos alterar esta política de privacidade, publicaremos as
        alterações aqui, no mesmo a pelo qual você está acessando esta política
        de privacidade.
      </p>
      <p className="Paragraph">
        Se exigido por lei, obteremos sua permissão ou daremos a você a
        oportunidade de aceitar ou cancelar, conforme aplicável, quaisquer novos
        usos de suas informações pessoais.
      </p>
      <h2 className="H2">Entre em contato conosco</h2>
      <p className="Paragraph">
        Para qualquer dúvida ou preocupação em relação à sua privacidade, você
        pode nos contatar usando os seguintes detalhes:
      </p>
      <p className="Paragraph">
        Equipe de Suporte {config.appName} (
        <a className="A" href={`mailto:${config.email}`}>
          {config.email}
        </a>
        )
      </p>
    </div>
  );
}
