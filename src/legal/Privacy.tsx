import { config } from './config';
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
        Última atualização: <Todo>data da publicação definitiva</Todo>
      </p>

      <TodoBlock>
        <strong>Pendências antes de publicar.</strong> Este documento descreve
        corretamente o que o aplicativo faz, mas depende de decisões que só o
        jurídico pode tomar. Todos os marcadores destacados precisam ser
        resolvidos e removidos. O mais importante é o primeiro: definir se o{' '}
        {config.appName} é controlador ou operador dos dados, porque isso muda
        quem responde ao titular.
      </TodoBlock>

      <h2 className="H2">1. Quem trata seus dados</h2>
      <p className="Paragraph">
        Controlador: <Todo>razão social, CNPJ e endereço completo</Todo>
      </p>
      <TodoBlock>
        <strong>Definir o papel de cada parte.</strong> O {config.appName} é uma
        plataforma usada por empresas de atendimento domiciliar, que contratam o
        serviço para registrar os atendimentos de seus próprios pacientes.
        Juridicamente isso costuma configurar a empresa contratante como{' '}
        <strong>controladora</strong> (ela decide quais dados coletar e para
        quê) e o {config.appName} como <strong>operador</strong> (art. 5º, VI e
        VII). Se for esse o caso, esta política precisa dizer isso com clareza e
        indicar a quem o titular deve se dirigir — e é recomendável um contrato
        de tratamento de dados entre as partes.
      </TodoBlock>

      <h2 className="H2">2. Encarregado pelo tratamento de dados (DPO)</h2>
      <p className="Paragraph">
        <Todo>
          nome do Encarregado e canal de contato — obrigatório pelo art. 41, §1º
        </Todo>
      </p>
      <p className="Paragraph">
        Enquanto o canal definitivo não for publicado, o contato é{' '}
        <a className="A" href={`mailto:${config.email}`}>
          {config.email}
        </a>
        .
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

      <Table head={['Finalidade', 'Dados', 'Base legal']}>
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
        <strong>Escolher a base legal do art. 11.</strong> Dados de saúde não
        podem ser tratados pelas bases do art. 7º. O art. 11 admite duas rotas
        aplicáveis aqui:
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
        A escolha determina se o aplicativo precisa ou não coletar consentimento
        destacado antes do primeiro registro clínico — ou seja, tem consequência
        direta no produto.
      </TodoBlock>

      <h2 className="H2">6. Pacientes sob representação legal</h2>
      <p className="Paragraph">
        Parte dos pacientes é idosa ou está impossibilitada de manifestar
        vontade, e o cadastro é feito por familiar, responsável legal ou pela
        empresa contratante. Nesses casos o tratamento observa{' '}
        <Todo>
          regra de representação adotada e forma de registro do consentimento do
          responsável
        </Todo>
        .
      </p>
      <p className="Paragraph">
        Quando houver criança ou adolescente, o tratamento observa o art. 14 da
        LGPD, que exige consentimento específico de ao menos um dos pais ou do
        responsável legal e o melhor interesse do titular.
      </p>

      <h2 className="H2">7. Com quem compartilhamos</h2>
      <p className="Paragraph">
        Não vendemos dados pessoais e não os usamos para publicidade. O
        compartilhamento se limita ao necessário para prestar o serviço:
      </p>

      <Table head={['Quem recebe', 'O que recebe', 'Por quê']}>
        <tr>
          <td>Profissionais e cuidadores designados</td>
          <td>Cadastro e histórico clínico do paciente atendido</td>
          <td>Prestar o atendimento</td>
        </tr>
        <tr>
          <td>Empresa contratante do atendimento</td>
          <td>Atendimentos, evolução e jornada</td>
          <td>Gestão do serviço que ela presta</td>
        </tr>
        <tr>
          <td>Amazon Web Services</td>
          <td>Todos os dados armazenados</td>
          <td>Hospedagem e processamento (operador)</td>
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

      <p className="Paragraph">
        Também podemos compartilhar dados para cumprir obrigação legal ou
        atender ordem de autoridade competente.
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
        <Todo>
          prazo de retenção por categoria de dado, e o que acontece ao fim do
          prazo
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
        Para exercer qualquer um deles, escreva para{' '}
        <a className="A" href={`mailto:${config.email}`}>
          {config.email}
        </a>
        . Responderemos em <Todo>prazo de resposta adotado</Todo>. Podemos pedir
        informações que confirmem sua identidade antes de atender ao pedido — é
        uma proteção contra acesso indevido aos seus próprios dados.
      </p>
      <p className="Paragraph">
        Você também pode peticionar diretamente à Autoridade Nacional de
        Proteção de Dados (ANPD).
      </p>

      <h2 className="H2">11. Segurança</h2>
      <p className="Paragraph">
        Adotamos medidas técnicas e administrativas para proteger seus dados,
        entre elas tráfego criptografado (HTTPS), autenticação individual,
        acesso restrito conforme o perfil do usuário e armazenamento em
        infraestrutura com controles de segurança.{' '}
        <Todo>demais medidas adotadas, conforme o art. 46</Todo>
      </p>
      <p className="Paragraph">
        Nenhum sistema é totalmente imune. Caso ocorra incidente de segurança
        com risco relevante aos titulares, comunicaremos a ANPD e os titulares
        afetados, conforme o art. 48.
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
