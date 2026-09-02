import { config } from './config';
import { Todo, TodoBlock } from './Todo';
import { routes } from '../routes';
import './styles.css';

export default function Terms() {
  return (
    <div className="Container">
      <h1 className="H1">Termos de Serviço</h1>

      <p className="Paragraph">
        Estes Termos regem o uso do aplicativo {config.appName} e dos serviços
        relacionados disponíveis em{' '}
        <a className="A" href={config.appOrigin}>
          {config.appOrigin}
        </a>
        . Ao usar o aplicativo, você concorda com estes Termos. Se não
        concordar, não o utilize.
      </p>

      <p className="Paragraph">
        Última atualização: <Todo>data da publicação definitiva</Todo>
      </p>

      <TodoBlock>
        <strong>Pendências antes de publicar.</strong> Os marcadores destacados
        dependem de definição jurídica e não podem sobreviver à publicação.
      </TodoBlock>

      <h2 className="H2">1. Quem presta o serviço</h2>
      <p className="Paragraph">
        <Todo>razão social, CNPJ e endereço completo</Todo>
      </p>

      <h2 className="H2">2. O que é o {config.appName}</h2>
      <p className="Paragraph">
        O {config.appName} é uma plataforma de gestão de atendimento domiciliar.
        Ele permite que empresas prestadoras registrem atendimentos, evolução
        clínica dos pacientes, tarefas e jornada de trabalho dos profissionais.
      </p>
      <p className="Paragraph">
        <strong>
          O {config.appName} é uma ferramenta de registro. Ele não presta
          serviço de saúde, não realiza diagnóstico, não prescreve tratamento e
          não substitui avaliação profissional.
        </strong>{' '}
        A responsabilidade clínica pelo atendimento e pelo conteúdo dos
        registros é do profissional de saúde e da empresa que o emprega.
      </p>

      <h2 className="H2">3. Quem pode usar</h2>
      <p className="Paragraph">
        O acesso é fornecido pela empresa contratante aos seus profissionais e,
        quando aplicável, a pacientes e responsáveis. Não há cadastro público: a
        conta é criada e revogada pela contratante.
      </p>
      <p className="Paragraph">
        O uso exige maioridade e capacidade civil, salvo quando o titular estiver
        representado na forma da lei.
      </p>

      <h2 className="H2">4. Conta e credenciais</h2>
      <ul className="Ul">
        <li className="Li">
          Sua conta é pessoal e intransferível. Não compartilhe credenciais;
        </li>
        <li className="Li">
          Você é responsável pelas ações realizadas com a sua conta;
        </li>
        <li className="Li">
          Comunique imediatamente qualquer uso não autorizado pelos canais
          abaixo;
        </li>
        <li className="Li">
          Registros clínicos e de ponto ficam vinculados ao seu usuário, com
          data e hora.
        </li>
      </ul>

      <h2 className="H2">5. Licença de uso</h2>
      <p className="Paragraph">
        Concedemos a você uma licença limitada, pessoal, revogável, não exclusiva
        e intransferível para instalar e usar o aplicativo nos seus dispositivos,
        exclusivamente para as finalidades previstas nestes Termos. A licença não
        transfere propriedade.
      </p>

      <h2 className="H2">6. Uso aceitável</h2>
      <p className="Paragraph">Ao usar o {config.appName}, você não deve:</p>
      <ol className="Ol">
        <li className="Li">
          registrar informação clínica falsa, imprecisa ou de paciente que não
          esteja sob seus cuidados;
        </li>
        <li className="Li">
          acessar, copiar ou divulgar dados de pacientes fora da finalidade do
          atendimento — dados de saúde são protegidos por sigilo profissional e
          pela LGPD;
        </li>
        <li className="Li">
          burlar o registro de localização ou de jornada;
        </li>
        <li className="Li">
          descompilar, fazer engenharia reversa ou tentar extrair o código-fonte
          do aplicativo;
        </li>
        <li className="Li">
          usar o serviço para fim ilícito, ou de modo que comprometa sua
          segurança, integridade ou disponibilidade;
        </li>
        <li className="Li">
          tentar acessar contas, dados ou áreas do sistema sem autorização.
        </li>
      </ol>

      <h2 className="H2">7. Registros clínicos</h2>
      <p className="Paragraph">
        Os registros inseridos no aplicativo integram a documentação do
        atendimento. Uma vez salvos, podem estar sujeitos a prazos legais de
        guarda e a restrições de alteração, para preservar a integridade do
        histórico. Correções são feitas por novo registro, mantendo-se o
        anterior e sua autoria.
      </p>

      <h2 className="H2">8. Propriedade intelectual</h2>
      <p className="Paragraph">
        O aplicativo, sua marca, interface, código e documentação pertencem ao{' '}
        {config.appName} ou a seus licenciadores, e são protegidos pela
        legislação de direitos autorais e propriedade industrial.
      </p>
      <p className="Paragraph">
        Os dados inseridos pela empresa contratante e por seus profissionais
        permanecem sob titularidade dela e dos respectivos titulares. Nós os
        tratamos conforme a{' '}
        <a className="A" href={routes.privacy}>
          Política de Privacidade
        </a>
        .
      </p>

      <h2 className="H2">9. Lojas de aplicativos</h2>
      <p className="Paragraph">
        O aplicativo é distribuído pela App Store e pelo Google Play. Ao
        instalá-lo, você também se sujeita aos termos dessas lojas. Elas não são
        parte destes Termos e não têm qualquer responsabilidade pelo aplicativo
        ou por seu conteúdo.
      </p>

      <h2 className="H2">10. Disponibilidade e suporte</h2>
      <p className="Paragraph">
        Empenhamo-nos em manter o serviço disponível, mas ele pode ser
        interrompido para manutenção, atualização ou por causas fora do nosso
        controle. Podemos alterar, suspender ou descontinuar funcionalidades,
        com aviso prévio sempre que a mudança for relevante.
      </p>
      <p className="Paragraph">
        Condições de disponibilidade e suporte contratadas pela empresa:{' '}
        <Todo>SLA, se houver contrato específico</Todo>
      </p>

      <h2 className="H2">11. Limitação de responsabilidade</h2>
      <p className="Paragraph">
        O aplicativo é fornecido no estado em que se encontra. Na máxima extensão
        permitida pela lei, não respondemos por lucros cessantes, perda de
        oportunidade, de receita ou de dados decorrentes do uso ou da
        impossibilidade de uso do serviço.
      </p>
      <p className="Paragraph">
        <strong>
          Nada nestes Termos afasta a responsabilidade clínica do profissional de
          saúde ou da empresa prestadora perante o paciente
        </strong>
        , nem limita direitos que a lei não permite limitar, incluindo os do
        Código de Defesa do Consumidor.
      </p>

      <h2 className="H2">12. Vigência e encerramento</h2>
      <p className="Paragraph">
        Estes Termos valem enquanto você usar o aplicativo. A empresa contratante
        pode revogar seu acesso a qualquer momento. Podemos suspender ou encerrar
        o acesso em caso de violação destes Termos, mediante aviso, salvo quando
        houver risco imediato à segurança ou aos dados.
      </p>
      <p className="Paragraph">
        Encerrado o acesso, a guarda e a eliminação dos dados seguem os prazos
        descritos na{' '}
        <a className="A" href={routes.privacy}>
          Política de Privacidade
        </a>
        .
      </p>

      <h2 className="H2">13. Alterações nestes Termos</h2>
      <p className="Paragraph">
        Podemos alterar estes Termos. A versão vigente é sempre a publicada nesta
        página, e a data de atualização no topo é revisada a cada mudança.
        Alterações relevantes serão comunicadas pelos canais do aplicativo. O uso
        após a mudança significa concordância.
      </p>

      <h2 className="H2">14. Lei aplicável e foro</h2>
      <p className="Paragraph">
        Estes Termos são regidos pelas leis brasileiras. Fica eleito o foro de{' '}
        <Todo>comarca do foro de eleição</Todo>, com renúncia a qualquer outro,
        ressalvada a competência legal do domicílio do consumidor.
      </p>

      <h2 className="H2">15. Contato</h2>
      <p className="Paragraph">
        <a className="A" href={`mailto:${config.email}`}>
          {config.email}
        </a>
      </p>
    </div>
  );
}
