import { config, controladora, operador } from './config';
import { Todo, TodoBlock } from './Todo';
import { Table } from './Table';
import './styles.css';

export default function Privacy() {
  return (
    <div className="Container">
      <h1 className="H1">Política de Privacidade</h1>

      <p className="Paragraph">
        Esta política explica como o {config.appName} trata dados pessoais,
        inclusive <strong>dados pessoais sensíveis de saúde</strong>, no
        aplicativo e nos serviços relacionados disponíveis em{' '}
        <a className="A" href={config.appOrigin}>
          {config.appOrigin}
        </a>
        . Ela segue a Lei nº 13.709/2018 (LGPD).
      </p>

      <p className="Paragraph">
        <strong>Uma definição, para evitar confusão.</strong> “Home care” também
        é o nome do tipo de serviço — atendimento domiciliar de saúde. Nestes
        documentos, <strong>{config.appName}</strong> se refere sempre à
        plataforma de software; o atendimento em si é prestado pela empresa
        contratante, identificada em 1.1.
      </p>

      <p className="Paragraph">
        Última atualização: <Todo>data da publicação definitiva</Todo>
      </p>

      <TodoBlock>
        <strong>Pendências antes de publicar.</strong> Este documento descreve
        corretamente o que o aplicativo faz e já reflete a divisão de papéis
        definida: a empresa de atendimento é controladora e o {config.appName} é
        operador. Restam decisões que dependem do jurídico — todos os marcadores
        destacados precisam ser resolvidos e removidos.
      </TodoBlock>

      <h2 className="H2">1. Quem trata seus dados e em que papel</h2>
      <p className="Paragraph">
        O {config.appName} é uma plataforma contratada por empresas de
        atendimento domiciliar. Quem decide quais dados serão coletados, para
        quê e por quanto tempo é <strong>a empresa que presta o seu
        atendimento</strong> — e não nós.
      </p>

      <Table head={['Papel', 'Quem é', 'O que decide']}>
        <tr>
          <td><strong>Controladora</strong><br />art. 5º, VI</td>
          <td>A empresa de atendimento domiciliar que presta o serviço ao paciente</td>
          <td>Quais dados coletar, com que finalidade, com que base legal e por quanto tempo guardar</td>
        </tr>
        <tr>
          <td><strong>Operador</strong><br />art. 5º, VII</td>
          <td>{config.appName}</td>
          <td>Nada por conta própria. Tratamos os dados exclusivamente por conta e sob instrução da controladora</td>
        </tr>
      </Table>

      <p className="Paragraph">
        Como operador, o {config.appName} <strong>não</strong> usa esses dados
        para finalidade própria, não os vende, não os utiliza para publicidade e
        não os compartilha fora das instruções recebidas e das obrigações
        legais.
      </p>

      <h3 className="H3">1.1 Controladora</h3>
      <p className="Paragraph">
        A empresa com quem você ou seu responsável contratou o atendimento
        domiciliar. Atualmente:
      </p>
      <p className="Paragraph">
        <strong>{controladora.razaoSocial}</strong>
        <br />
        CNPJ {controladora.cnpj}
        <br />
        {controladora.endereco}
        <br />
        {controladora.cidade}
      </p>
      <p className="Paragraph">
        Caso o seu atendimento seja prestado por outra empresa que utilize esta
        plataforma, a controladora dos seus dados é ela, e a identificação
        consta do contrato de prestação de serviço.
      </p>

      <h3 className="H3">1.2 Operador</h3>
      <p className="Paragraph">
        A plataforma {config.appName} é desenvolvida e operada por{' '}
        {operador.nome}:
      </p>
      <p className="Paragraph">
        <strong>{operador.razaoSocial}</strong>
        <br />
        CNPJ {operador.cnpj}
        <br />
        {operador.endereco}
        <br />
        {operador.cidade}
      </p>

      <h2 className="H2">2. Encarregado e canal de atendimento</h2>
      <p className="Paragraph">
        O <strong>Encarregado</strong> é a pessoa indicada para servir de canal
        de comunicação entre você, quem trata seus dados e a Autoridade Nacional
        de Proteção de Dados (art. 5º, VIII).
      </p>
      <p className="Paragraph">
        <strong>Para exercer seus direitos, procure a controladora.</strong> É
        ela quem responde ao titular. O Encarregado dela consta do contrato de
        prestação do atendimento e da política de privacidade dela.
      </p>
      <p className="Paragraph">
        Encarregado indicado pelo operador:{' '}
        <Todo>
          nome completo do Encarregado — e, se for pessoa jurídica, razão social
          mais o nome do responsável (art. 41, §1º e Res. CD/ANPD 18/2024)
        </Todo>
      </p>
      <p className="Paragraph">
        <strong>Canal de atendimento ao titular:</strong>{' '}
        <a className="A" href={`mailto:${config.email}`}>
          {config.email}
        </a>
        . Se o pedido couber à controladora, encaminhamos a ela sem demora e
        avisamos você.
      </p>

      <h2 className="H2">3. A quem esta política se aplica</h2>
      <ul className="Ul">
        <li className="Li">
          <strong>Pacientes</strong> que recebem atendimento domiciliar e cujos
          dados clínicos são registrados no aplicativo;
        </li>
        <li className="Li">
          <strong>Responsáveis legais</strong> que cadastram ou acompanham o
          atendimento de um paciente;
        </li>
        <li className="Li">
          <strong>Profissionais e cuidadores</strong> que usam o aplicativo para
          registrar atendimentos e jornada de trabalho.
        </li>
      </ul>

      <h2 className="H2">4. Dados que tratamos</h2>

      <h3 className="H3">4.1 Dados cadastrais</h3>
      <p className="Paragraph">
        Nome, CPF, data de nascimento, gênero, telefone, e-mail, endereço e CEP.
        Aplicam-se a pacientes e a profissionais.
      </p>

      <h3 className="H3">4.2 Dados de saúde — sensíveis</h3>
      <p className="Paragraph">
        Durante cada atendimento, o profissional registra a evolução do
        paciente. Estes dados são <strong>pessoais sensíveis</strong> (art. 5º,
        II) e recebem proteção reforçada:
      </p>

      <Table head={['Registro', 'O que é']}>
        <tr><td>PA</td><td>Pressão arterial</td></tr>
        <tr><td>BPM</td><td>Frequência cardíaca</td></tr>
        <tr><td>TC</td><td>Temperatura corporal</td></tr>
        <tr><td>FR</td><td>Frequência respiratória</td></tr>
        <tr><td>SAT</td><td>Saturação de oxigênio</td></tr>
        <tr><td>Glicemia</td><td>Glicemia capilar</td></tr>
        <tr><td>Cetonúria e glicosúria</td><td>Resultados de exame de urina</td></tr>
        <tr><td>Peso</td><td>Peso corporal</td></tr>
        <tr><td>Aceitação alimentar</td><td>Alimentação durante o atendimento</td></tr>
        <tr><td>Soro</td><td>Administração de soro</td></tr>
        <tr><td>Vômito, diurese, evacuação</td><td>Eliminações e intercorrências</td></tr>
        <tr><td>Observações</td><td>Anotações livres do profissional</td></tr>
      </Table>

      <h3 className="H3">4.3 Localização precisa</h3>
      <p className="Paragraph">
        Quando o profissional registra o check-in de um atendimento, o
        aplicativo captura as coordenadas do dispositivo para confirmar que ele
        está no endereço correto. A coleta ocorre{' '}
        <strong>apenas com o aplicativo aberto</strong> e apenas nesse momento —
        não há rastreamento em segundo plano.
      </p>

      <h3 className="H3">4.4 Imagens e documentos</h3>
      <p className="Paragraph">
        Foto de perfil escolhida na galeria do dispositivo e documentos que o
        usuário anexe. O aplicativo não acessa a câmera nem o microfone.
      </p>

      <h3 className="H3">4.5 Registro de jornada dos profissionais</h3>
      <p className="Paragraph">
        Horário de início e término de cada atendimento, local e paciente
        atendido. Estes dados dizem respeito à relação de trabalho do
        profissional.
      </p>

      <h3 className="H3">4.6 Dados técnicos</h3>
      <p className="Paragraph">
        Identificador de notificação push, modelo e sistema operacional do
        dispositivo, e registros de acesso ao serviço.
      </p>

      <h2 className="H2">5. Para que usamos e com que base legal</h2>
      <p className="Paragraph">
        A base legal de cada tratamento é <strong>definida pela
        controladora</strong>, não pelo {config.appName}. O quadro abaixo
        descreve as bases usuais para cada finalidade da plataforma; a
        controladora pode adotar enquadramento diverso, e prevalece o que ela
        informar a você.
      </p>

      <Table head={['Finalidade', 'Dados', 'Base legal usual']}>
        <tr>
          <td>Criar e manter a conta de acesso</td>
          <td>Cadastrais</td>
          <td>Execução de contrato (art. 7º, V)</td>
        </tr>
        <tr>
          <td>Registrar a evolução clínica do paciente</td>
          <td>Saúde</td>
          <td><Todo>art. 11 — ver 5.1</Todo></td>
        </tr>
        <tr>
          <td>Confirmar a presença no endereço do atendimento</td>
          <td>Localização</td>
          <td>Execução de contrato (art. 7º, V)</td>
        </tr>
        <tr>
          <td>Controlar a jornada do profissional</td>
          <td>Ponto</td>
          <td>Obrigação legal (art. 7º, II)</td>
        </tr>
        <tr>
          <td>Avisar sobre atendimentos e tarefas</td>
          <td>Token de push</td>
          <td>Execução de contrato (art. 7º, V)</td>
        </tr>
        <tr>
          <td>Segurança, auditoria e prevenção a fraude</td>
          <td>Técnicos</td>
          <td>Legítimo interesse (art. 7º, IX)</td>
        </tr>
      </Table>

      <h3 className="H3">5.1 Dados de saúde exigem base própria</h3>
      <TodoBlock>
        <strong>Escolher a base legal do art. 11 — decisão da controladora.</strong>{' '}
        Dados de saúde não podem ser tratados pelas bases do art. 7º. O art. 11
        admite duas rotas aplicáveis aqui:
        <ul className="Ul">
          <li className="Li">
            <strong>Inciso I</strong> — consentimento específico e destacado do
            titular ou de seu responsável legal, para finalidades determinadas.
            Não basta o aceite genérico dos Termos: precisa ser um ato separado,
            registrado e revogável;
          </li>
          <li className="Li">
            <strong>Inciso II, alínea “f”</strong> — tutela da saúde, em
            procedimento realizado por profissionais de saúde ou por serviços de
            saúde. Costuma ser o enquadramento mais adequado para atendimento
            domiciliar, mas depende de a operação se caracterizar como serviço
            de saúde.
          </li>
        </ul>
        A controladora atual está registrada sob o CNAE 8630503 — atividade
        médica ambulatorial —, o que é elemento a favor do enquadramento na
        alínea “f”. A confirmação cabe ao jurídico.
        <br />
        <br />
        A escolha é da controladora, mas tem consequência direta no produto: se
        for o inciso I, o aplicativo precisa coletar e registrar consentimento
        destacado antes do primeiro registro clínico, com possibilidade de
        revogação. O {config.appName} precisa oferecer esse mecanismo às
        controladoras que o adotarem.
      </TodoBlock>

      <h2 className="H2">6. Pacientes sob representação legal</h2>
      <p className="Paragraph">
        Parte dos pacientes é idosa ou está impossibilitada de manifestar
        vontade, e o cadastro é feito por familiar, responsável legal ou pela
        própria controladora. A regra de representação e a coleta do
        consentimento do responsável são definidas pela controladora;{' '}
        <Todo>
          mecanismo que a plataforma oferece para registrar essa representação
        </Todo>
        .
      </p>
      <p className="Paragraph">
        Quando houver criança ou adolescente, o tratamento observa o art. 14 da
        LGPD, que exige consentimento específico de ao menos um dos pais ou do
        responsável legal e o melhor interesse do titular.
      </p>

      <h2 className="H2">7. Quem tem acesso aos dados</h2>
      <p className="Paragraph">
        Não vendemos dados pessoais e não os usamos para publicidade. O acesso
        se limita ao necessário para prestar o serviço.
      </p>

      <h3 className="H3">7.1 Dentro do serviço contratado</h3>
      <p className="Paragraph">
        A <strong>controladora</strong> e os profissionais que ela designa
        acessam os dados dos pacientes sob seus cuidados. Isso não é
        compartilhamento com terceiro: são eles que prestam o atendimento e a
        quem os dados pertencem sob responsabilidade.
      </p>

      <h3 className="H3">7.2 Suboperadores que utilizamos</h3>
      <p className="Paragraph">
        Para operar a plataforma, contratamos fornecedores que tratam dados por
        nossa conta, sob obrigação contratual de confidencialidade e segurança:
      </p>

      <Table head={['Fornecedor', 'O que trata', 'Por quê']}>
        <tr>
          <td>Amazon Web Services</td>
          <td>Todos os dados armazenados</td>
          <td>Hospedagem e processamento</td>
        </tr>
        <tr>
          <td>OneSignal</td>
          <td>Identificador de notificação do dispositivo</td>
          <td>Entrega de notificações push</td>
        </tr>
        <tr>
          <td>Google Maps</td>
          <td>Endereço e coordenadas</td>
          <td>Exibir mapa e localizar o endereço</td>
        </tr>
        <tr>
          <td>Serviço de consulta de CEP</td>
          <td>CEP informado</td>
          <td>Preencher o endereço automaticamente</td>
        </tr>
      </Table>

      <h3 className="H3">7.3 Obrigação legal</h3>
      <p className="Paragraph">
        Podemos fornecer dados para cumprir obrigação legal ou atender ordem de
        autoridade competente. Sempre que a lei permitir, informamos a
        controladora antes.
      </p>

      <h2 className="H2">8. Transferência internacional</h2>
      <p className="Paragraph">
        Os dados do serviço são armazenados e processados em infraestrutura da
        Amazon Web Services na <strong>região de São Paulo (sa-east-1)</strong>,
        no Brasil.
      </p>
      <p className="Paragraph">
        Há, no entanto, transferência internacional em dois casos: o{' '}
        <strong>Google Maps</strong>, que recebe endereço e coordenadas, e o{' '}
        <strong>OneSignal</strong>, que recebe o identificador de notificação —
        ambos com processamento fora do Brasil. Essas transferências se apoiam
        em <Todo>base do art. 33 e garantias contratuais dos fornecedores</Todo>
        .
      </p>

      <h2 className="H2">9. Por quanto tempo guardamos</h2>
      <p className="Paragraph">
        O prazo é <strong>definido pela controladora</strong>, respeitados os
        mínimos legais. Encerrado o contrato com a controladora, o{' '}
        {config.appName} elimina ou devolve os dados conforme instrução dela,
        salvo quando a lei obrigar a guarda (art. 16).
      </p>
      <p className="Paragraph">
        Prazos aplicados pela plataforma:{' '}
        <Todo>
          prazo por categoria de dado e o que acontece ao fim do contrato
        </Todo>
      </p>
      <TodoBlock>
        <strong>Atenção ao prazo do prontuário.</strong> Registros de saúde têm
        prazo de guarda próprio: a Resolução CFM nº 1.821/2007 estabelece{' '}
        <strong>20 anos</strong> para o prontuário do paciente. Se o serviço se
        enquadrar como serviço de saúde, uma cláusula genérica de “excluímos
        quando não for mais necessário” entra em conflito com essa obrigação. O
        prazo dos dados de jornada dos profissionais segue a legislação
        trabalhista e é diferente.
      </TodoBlock>

      <h2 className="H2">10. Seus direitos</h2>
      <p className="Paragraph">
        A LGPD garante a você, a qualquer momento e gratuitamente (art. 18):
      </p>
      <ol className="Ol">
        <li className="Li">confirmação de que tratamos seus dados;</li>
        <li className="Li">acesso aos dados;</li>
        <li className="Li">correção de dados incompletos, inexatos ou desatualizados;</li>
        <li className="Li">
          anonimização, bloqueio ou eliminação de dados desnecessários,
          excessivos ou tratados em desconformidade com a lei;
        </li>
        <li className="Li">portabilidade a outro fornecedor;</li>
        <li className="Li">
          eliminação dos dados tratados com base em consentimento, salvo quando
          a lei exigir a guarda;
        </li>
        <li className="Li">informação sobre com quem compartilhamos seus dados;</li>
        <li className="Li">
          informação sobre a possibilidade de não consentir e as consequências
          disso;
        </li>
        <li className="Li">revogação do consentimento.</li>
      </ol>
      <p className="Paragraph">
        <strong>Dirija o pedido à controladora</strong> — a empresa que presta o
        seu atendimento. É ela quem responde ao titular e quem decide sobre os
        dados.
      </p>
      <p className="Paragraph">
        Se preferir, escreva para{' '}
        <a className="A" href={`mailto:${config.email}`}>
          {config.email}
        </a>
        : como operador, encaminhamos o pedido à controladora e prestamos a ela
        o apoio técnico necessário para atendê-lo (art. 39). Podemos pedir
        informações que confirmem sua identidade antes de dar seguimento — é uma
        proteção contra acesso indevido aos seus próprios dados.
      </p>
      <p className="Paragraph">
        <strong>Prazo de resposta: até 15 dias</strong>, contados do recebimento
        do pedido, conforme o art. 19, II da LGPD. Quando o pedido precisar ser
        encaminhado à controladora, encaminhamos sem demora e o prazo de
        resposta corre para ela.
      </p>
      <p className="Paragraph">
        Você também pode peticionar diretamente à Autoridade Nacional de
        Proteção de Dados (ANPD).
      </p>

      <h2 className="H2">11. Segurança</h2>
      <p className="Paragraph">
        Adotamos medidas técnicas e administrativas aptas a proteger os dados
        pessoais de acessos não autorizados e de situações acidentais ou
        ilícitas de destruição, perda, alteração, comunicação ou difusão
        (art. 46):
      </p>

      <Table head={['Medida', 'O que faz']}>
        <tr>
          <td>Transmissão criptografada</td>
          <td>Todo o tráfego entre o aplicativo e os servidores usa HTTPS com TLS</td>
        </tr>
        <tr>
          <td>Autenticação individual</td>
          <td>Cada pessoa acessa com credencial própria. As contas são criadas e revogadas pela controladora, não por autocadastro</td>
        </tr>
        <tr>
          <td>Controle de acesso por perfil</td>
          <td>O que cada usuário visualiza depende do perfil atribuído a ele</td>
        </tr>
        <tr>
          <td>Rastreabilidade dos registros</td>
          <td>Registros clínicos e de jornada ficam vinculados ao usuário que os criou, com data e hora</td>
        </tr>
        <tr>
          <td>Infraestrutura no Brasil</td>
          <td>Os dados do serviço são armazenados e processados na região de São Paulo da AWS</td>
        </tr>
        <tr>
          <td>Permissões mínimas no aplicativo</td>
          <td>O aplicativo não acessa câmera, microfone nem localização em segundo plano, e não usa identificador de publicidade</td>
        </tr>
        <tr>
          <td>Minimização no dispositivo</td>
          <td>Encerrar a sessão remove do aparelho os dados de autenticação</td>
        </tr>
      </Table>

      <p className="Paragraph">
        <Todo>
          medidas do lado do servidor — criptografia em repouso, política de
          backup, retenção de logs de acesso e gestão de chaves
        </Todo>
      </p>
      <p className="Paragraph">
        Nenhum sistema é totalmente imune. Caso ocorra incidente de segurança
        com risco relevante, o {config.appName} comunica <strong>a
        controladora</strong> sem demora, com as informações necessárias para
        que ela avalie o risco e faça a comunicação à ANPD e aos titulares
        afetados, conforme o art. 48. A responsabilidade do operador segue o
        art. 42.
      </p>

      <h2 className="H2">12. Permissões do aplicativo</h2>
      <Table head={['Permissão', 'Quando pedimos', 'Para quê']}>
        <tr>
          <td>Localização (apenas em uso)</td>
          <td>No check-in do atendimento</td>
          <td>Confirmar a presença no endereço</td>
        </tr>
        <tr>
          <td>Fotos</td>
          <td>Ao definir a imagem de perfil</td>
          <td>Selecionar a imagem na galeria</td>
        </tr>
        <tr>
          <td>Arquivos</td>
          <td>Ao anexar um documento</td>
          <td>Enviar o arquivo escolhido</td>
        </tr>
        <tr>
          <td>Notificações</td>
          <td>Na primeira execução</td>
          <td>Avisar sobre atendimentos e tarefas</td>
        </tr>
      </Table>
      <p className="Paragraph">
        O aplicativo <strong>não</strong> usa câmera, microfone, localização em
        segundo plano nem identificador de publicidade. Você pode revogar
        qualquer permissão nas configurações do sistema; algumas funções deixam
        de operar.
      </p>

      <h2 className="H2">13. Cookies e armazenamento no dispositivo</h2>
      <p className="Paragraph">
        O aplicativo não usa cookies de publicidade nem de rastreamento. Ele
        guarda no próprio dispositivo, no armazenamento local, apenas o token de
        sessão que mantém você autenticado e preferências de uso. Sair da conta
        remove esses dados.
      </p>

      <h2 className="H2">14. Alterações nesta política</h2>
      <p className="Paragraph">
        Podemos atualizar esta política. Mudanças passam a valer a partir da
        publicação nesta página, e a data de atualização no topo é sempre
        revisada. Alterações relevantes no tratamento de dados de saúde serão
        comunicadas pelos canais do aplicativo.
      </p>

      <h2 className="H2">15. Contato</h2>
      <p className="Paragraph">
        Dúvidas sobre esta política ou sobre o tratamento dos seus dados:{' '}
        <a className="A" href={`mailto:${config.email}`}>
          {config.email}
        </a>
        .
      </p>
    </div>
  );
}
