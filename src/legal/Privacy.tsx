import { config, controladora, operador } from './config';
import { Table } from './Table';
import './styles.css';

export default function Privacy() {
  return (
    <div className="Container">
      <h1 className="H1">Política de Privacidade</h1>

      <p className="Paragraph">
        Esta política explica como são tratados os dados pessoais, inclusive{' '}
        <strong>dados sensíveis de saúde</strong>, no aplicativo {config.appName}{' '}
        e nos serviços relacionados em{' '}
        <a className="A" href={config.appOrigin}>
          {config.appOrigin}
        </a>
        , conforme a Lei nº 13.709/2018 (LGPD).
      </p>

      <p className="Paragraph">
        “Home care” também é o nome do tipo de serviço. Aqui,{' '}
        <strong>{config.appName}</strong> se refere sempre à plataforma de
        software; o atendimento é prestado pela empresa contratante.
      </p>

      <p className="Paragraph">Última atualização: 2 de setembro de 2026</p>

      <h2 className="H2">1. Quem trata seus dados</h2>
      <p className="Paragraph">
        Quem decide o que se coleta, para quê e por quanto tempo é a empresa que
        presta o seu atendimento — a <strong>controladora</strong> (art. 5º,
        VI). A plataforma trata os dados por conta e sob instrução dela, como{' '}
        <strong>operador</strong> (art. 5º, VII), sem usá-los para finalidade
        própria, sem vendê-los e sem utilizá-los para publicidade.
      </p>

      <p className="Paragraph">
        <strong>Controladora</strong>
        <br />
        {controladora.razaoSocial} — CNPJ {controladora.cnpj}
        <br />
        {controladora.endereco}, {controladora.cidade}
        <br />
        Encarregada: <strong>{controladora.encarregado}</strong>
      </p>

      <p className="Paragraph">
        <strong>Operador</strong>
        <br />
        {operador.razaoSocial} — CNPJ {operador.cnpj}
        <br />
        {operador.endereco}, {operador.cidade}
      </p>

      <p className="Paragraph">
        Se o seu atendimento for prestado por outra empresa que use esta
        plataforma, a controladora é ela, identificada no contrato.
      </p>

      <h2 className="H2">2. A quem se aplica</h2>
      <p className="Paragraph">
        A pacientes, a seus responsáveis legais e aos profissionais e cuidadores
        que usam o aplicativo.
      </p>

      <h2 className="H2">3. Dados que tratamos</h2>

      <Table head={['Categoria', 'Dados']}>
        <tr>
          <td>Cadastrais</td>
          <td>Nome, CPF, data de nascimento, gênero, telefone, e-mail, endereço e CEP</td>
        </tr>
        <tr>
          <td><strong>Saúde</strong> — sensíveis</td>
          <td>
            Registros de evolução do atendimento: pressão arterial, frequência
            cardíaca, temperatura, frequência respiratória, saturação de
            oxigênio, glicemia, exames de urina, peso, aceitação alimentar,
            administração de soro, eliminações, intercorrências e observações do
            profissional
          </td>
        </tr>
        <tr>
          <td>Localização</td>
          <td>
            Coordenadas do dispositivo no momento do check-in, para confirmar a
            presença no endereço. Apenas com o aplicativo aberto — não há
            rastreamento em segundo plano
          </td>
        </tr>
        <tr>
          <td>Imagens e documentos</td>
          <td>Foto de perfil e arquivos que o usuário anexe</td>
        </tr>
        <tr>
          <td>Jornada</td>
          <td>Início, término, local e paciente atendido, para os profissionais</td>
        </tr>
        <tr>
          <td>Técnicos</td>
          <td>Identificador de notificação, dados do dispositivo e registros de acesso</td>
        </tr>
      </Table>

      <p className="Paragraph">
        O aplicativo <strong>não</strong> acessa câmera, microfone nem
        localização em segundo plano, não usa identificador de publicidade e não
        emprega cookies de rastreamento.
      </p>

      <h2 className="H2">4. Para que tratamos</h2>
      <p className="Paragraph">
        Para criar e manter a conta de acesso; registrar a evolução clínica do
        paciente; confirmar a presença do profissional no endereço do
        atendimento; controlar a jornada de trabalho; enviar avisos sobre
        atendimentos e tarefas; e garantir a segurança do serviço.
      </p>
      <p className="Paragraph">
        Os dados de saúde são tratados para a prestação e o acompanhamento do
        atendimento domiciliar, na forma do <strong>art. 11 da LGPD</strong>. As
        bases legais aplicáveis a cada finalidade são definidas pela
        controladora.
      </p>
      <p className="Paragraph">
        Quando o paciente estiver representado por familiar ou responsável
        legal, o cadastro e a verificação da representação são feitos pela
        controladora. Havendo criança ou adolescente, observa-se o art. 14 da
        LGPD.
      </p>

      <h2 className="H2">5. Com quem compartilhamos</h2>
      <p className="Paragraph">
        Não vendemos dados pessoais e não os usamos para publicidade. Têm acesso
        a controladora e os profissionais por ela designados, no limite do
        atendimento prestado.
      </p>
      <p className="Paragraph">
        Utilizamos fornecedores que tratam dados por nossa conta, sob obrigação
        contratual de confidencialidade e segurança: <strong>Amazon Web
        Services</strong> (hospedagem), <strong>OneSignal</strong>{' '}
        (notificações) e <strong>Google Maps</strong> (endereços e mapas). Também
        podemos fornecer dados para cumprir obrigação legal ou ordem de
        autoridade competente.
      </p>

      <h2 className="H2">6. Transferência internacional</h2>
      <p className="Paragraph">
        Os dados do serviço são armazenados e processados <strong>no
        Brasil</strong>. Há transferência internacional apenas para o Google
        Maps, que recebe endereços e coordenadas, e para o OneSignal, que recebe
        o identificador de notificação. Ambas se apoiam no art. 33, II da LGPD,
        com as cláusulas-padrão contratuais da Resolução CD/ANPD nº 19/2024.
      </p>

      <h2 className="H2">7. Por quanto tempo guardamos</h2>
      <Table head={['Categoria', 'Prazo']}>
        <tr>
          <td>Registros clínicos e cadastro do paciente a eles vinculado</td>
          <td><strong>20 anos</strong> do último registro, conforme a Resolução CFM nº 1.821/2007</td>
        </tr>
        <tr>
          <td>Jornada dos profissionais</td>
          <td>Prazos da legislação trabalhista e previdenciária</td>
        </tr>
      </Table>
      <p className="Paragraph">
        Encerrado o prazo, os dados são eliminados, salvo obrigação legal de
        guarda ou necessidade para exercício regular de direitos (art. 16).
      </p>

      <h2 className="H2">8. Seus direitos</h2>
      <p className="Paragraph">
        A LGPD garante a você, gratuitamente, os direitos do{' '}
        <strong>art. 18</strong>: confirmação da existência de tratamento;
        acesso aos dados; correção de dados incompletos, inexatos ou
        desatualizados; anonimização, bloqueio ou eliminação de dados
        desnecessários, excessivos ou tratados em desconformidade com a lei;
        portabilidade; eliminação dos dados tratados com base em consentimento;
        informação sobre com quem seus dados são compartilhados; informação
        sobre a possibilidade de não consentir e as consequências disso; e
        revogação do consentimento.
      </p>
      <p className="Paragraph">
        <strong>Dirija o pedido à controladora</strong>, que é quem responde ao
        titular. Você também pode escrever para{' '}
        <a className="A" href={`mailto:${config.email}`}>
          {config.email}
        </a>
        : encaminhamos sem demora e prestamos o apoio técnico necessário
        (art. 39). Podemos pedir informações que confirmem sua identidade, como
        proteção contra acesso indevido aos seus próprios dados.
      </p>
      <p className="Paragraph">
        <strong>Prazo de resposta: até 15 dias</strong> do recebimento
        (art. 19, II). Você também pode peticionar à Autoridade Nacional de
        Proteção de Dados (ANPD).
      </p>

      <h2 className="H2">9. Segurança</h2>
      <p className="Paragraph">
        Adotamos medidas técnicas e administrativas aptas a proteger os dados
        pessoais de acessos não autorizados e de situações acidentais ou
        ilícitas de destruição, perda, alteração, comunicação ou difusão
        (art. 46). O detalhamento dessas medidas não é divulgado publicamente:
        expô-lo facilitaria ataques, e o art. 9º, II da LGPD ressalva o segredo
        comercial ao exigir a informação sobre a forma do tratamento.
      </p>
      <p className="Paragraph">
        Ocorrendo incidente de segurança com risco relevante, comunicamos a
        controladora sem demora, para que ela faça as comunicações do art. 48 à
        ANPD e aos titulares afetados.
      </p>

      <h2 className="H2">10. Alterações</h2>
      <p className="Paragraph">
        Podemos atualizar esta política. A versão vigente é a publicada nesta
        página, e a data de atualização no topo é sempre revisada.
      </p>

      <h2 className="H2">11. Contato</h2>
      <p className="Paragraph">
        <a className="A" href={`mailto:${config.email}`}>
          {config.email}
        </a>
      </p>
    </div>
  );
}
