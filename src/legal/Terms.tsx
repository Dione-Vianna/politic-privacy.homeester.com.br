import { config } from './config';
import './styles.css';

export default function Terms() {
  return (
    <div className="Container">
      <h1 className="H1">Termos de serviço</h1>
      <p className="Paragraph">
        Estes Termos de Serviço governam seu uso do site localizado em {''}
        <a className="A" href={config.appOrigin}>
          {config.appOrigin}
        </a>{' '}
        e quaisquer serviços relacionados fornecido por {config.appName}.
      </p>
      <p className="Paragraph">
        Acessando{' '}
        <a className="A" href={config.appOrigin}>
          {config.appOrigin}
        </a>
        , você concorda cumprir estes Termos de Serviço e cumprir todas as leis
        aplicáveis e regulamentos. Se você não concorda com estes Termos de
        Serviço, você esta proibido de usar ou acessar este site ou usando
        qualquer outro serviços prestados por {config.appName}.
      </p>
      <p className="Paragraph">
        Nós, {config.appName}, reservamos o direito de revisar e alterar
        qualquer um desses termos de serviço a nosso exclusivo critério. Ao
        fazer isso, vamos atualizar este página. Quaisquer alterações nestes
        Termos de Serviço entrarão em vigor imediatamente a partir da data de
        publicação.
      </p>
      <p className="Paragraph">
        Estes Termos de Serviço foram atualizados pela última vez em 01 de
        janeiro de 2022.
      </p>
      <h2 className="H2">Limitações de uso</h2>
      <p className="Paragraph">
        Ao usar este site, você garante em nome de si mesmo, seus usuários, e
        outras partes que você representa que você não vai:
      </p>
      <ol className="Ol">
        <li className="Li">
          modificar, copiar, preparar trabalhos derivados, descompilar ou fazer
          engenharia reversa de quaisquer materiais e software contidos neste
          site;
        </li>
        <li className="Li">
          Remova quaisquer direitos autorais ou outras notórias proprietárias de
          qualquer material e software neste site;
        </li>
        <li className="Li">
          transferir os materiais para outra pessoa ou "espelhar" os materiais
          em qualquer outro servidor;
        </li>
        <li className="Li">
          conscientemente ou negligentemente use este site ou qualquer um dos
          seus associados, serviços de uma forma que abuse ou interrompe nossas
          redes ou qualquer outro serviço que {config.appName} fornece;
        </li>
        <li className="Li">
          Use este site ou seus serviços associados para transmitir ou publicar
          qualquer material de assédio, indecente, obsceno, fraudulento ou
          ilícito;
        </li>
        <li className="Li">
          Use este site ou seus serviços associados em violação de quaisquer
          leis ou regulamentos aplicáveis;
        </li>
        <li className="Li">
          Use este site em conjunto com o envio de publicidade ou spam não
          autorizado;
        </li>
        <li className="Li">
          coletar dados do usuário sem o consentimento do usuário; ou
        </li>
        <li className="Li">
          Use este site ou seus serviços associados de tal maneira que possam
          infringir a privacidade, os direitos de propriedade intelectual ou
          outros direitos de terceiros.
        </li>
      </ol>
      <h2 className="H2">Propriedade intelectual</h2>
      <p className="Paragraph">
        A propriedade intelectual dos materiais contidos neste site são de
        propriedade ou licenciados para {config.appName} e são protegidos por
        direitos autorais e leis de marcas comerciais aplicáveis. Concedemos aos
        nossos usuários permissão para baixar uma cópia dos materiais para uso
        pessoal, não comercial e transitório.
      </p>
      <p className="Paragraph">
        Isso constitui a concessão de uma licença, não uma transferência de
        título. Esta licença será rescindida automaticamente se você violar
        qualquer uma dessas restrições ou os Termos de Serviço, e pode ser
        rescindida por {config.appName} a qualquer momento.
      </p>
      <h2 className="H2">Responsabilidade</h2>
      <p className="Paragraph">
        Nosso site e os materiais em nosso site são fornecidos "no estado em que
        se encontram". Na medida permitida por lei, {config.appName} não oferece
        garantias, expressas ou implícitas, e por meio deste se isenta e nega
        todas as outras garantias, incluindo, sem limitação, garantias
        implícitas ou condições de comercialização, adequação a uma finalidade
        específica ou não violação de propriedade intelectual, ou outra violação
        de direitos.
      </p>
      <p className="Paragraph">
        Em nenhum caso {config.appName} ou seus fornecedores serão responsáveis
        por qualquer perda consequente sofrida ou incorrida por você ou qualquer
        terceiro decorrente do uso ou incapacidade de usar este site ou os
        materiais neste site, mesmo se {config.appName} ou um representante
        autorizado tiver sido notificado , oralmente ou por escrito, da
        possibilidade de tais danos.
      </p>
      <p className="Paragraph">
        No campo deste acordo, "perda consequencial" inclui qualquer perda
        consequencial, perda indireta, perda real ou prevista de lucro, perda de
        benefício, perda de receita, perda de negócios, perda de boa vontade,
        perda de oportunidade, perda de economia, perda de reputação, perda de
        uso e / ou perda ou corrupção de dados, seja sob estatuto, contrato,
        equidade, ato ilícito (incluindo negligência), indemnização ou de outra
        forma.
      </p>
      <p className="Paragraph">
        Como algumas jurisdições não permitem limitações nas garantias
        implícitas ou limitações de responsabilidade por danos consequentes ou
        incidentais, essas limitações podem não se aplicar a você.
      </p>
      <h2 className="H2">Precisão dos materiais</h2>
      <p className="Paragraph">
        Os materiais que aparecem em nosso site não são abrangentes e são apenas
        para fins de informação geral. {config.appName} não garante ou faz
        qualquer representação quanto à precisão, resultados prováveis ​​ou
        confiabilidade do uso dos materiais neste site, ou de outra forma em
        relação a tais materiais ou em quaisquer recursos vinculados a este
        site.
      </p>
      <h2 className="H2">Links</h2>
      <p className="Paragraph">
        {config.appName} não revisou todos os sites vinculados ao seu site e não
        é responsável pelo conteúdo de qualquer um desses sites vinculados. A
        inclusão de qualquer a não implica endosso, aprovação ou controle por
        parte da {config.appName} do site. O uso de qualquer um desses sites
        vinculados é por sua própria conta e risco e recomendamos enfaticamente
        que você faça suas próprias investigações com relação à adequação desses
        sites.
      </p>
      <h2 className="H2">Direito de rescisão</h2>
      <p className="Paragraph">
        Podemos suspender ou rescindir seu direito de usar nosso site e
        rescindir estes Termos de Serviço imediatamente mediante notificação por
        escrito a você por qualquer violação destes Termos de Serviço.
      </p>
      <h2 className="H2">Separação</h2>
      <p className="Paragraph">
        Qualquer um destes Termos de Serviço que seja total ou parcialmente nulo
        ou inexequível é interrompido na medida em que é nulo ou inexequível. A
        validade do restante destes Termos de Serviço não é afetada.
      </p>
      <h2 className="H2">Lei Aplicável</h2>
      <p className="Paragraph">
        Estes Termos de Serviço são regidos e interpretados de acordo com as
        leis do Brasil. Você se submete irrevogavelmente à jurisdição exclusiva
        dos tribunais desse estado ou local.
      </p>
    </div>
  );
}
