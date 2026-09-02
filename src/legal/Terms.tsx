import { config, controladora, operador } from './config';
import { routes } from '../routes';
import './styles.css';

export default function Terms() {
  return (
    <div className="Container">
      <h1 className="H1">Termos de Serviço</h1>

      <p className="Paragraph">
        Estes Termos regem o uso do aplicativo {config.appName} e dos serviços
        relacionados em{' '}
        <a className="A" href={config.appOrigin}>
          {config.appOrigin}
        </a>
        . Ao usar o aplicativo, você concorda com eles. Se não concordar, não o
        utilize.
      </p>

      <p className="Paragraph">
        “Home care” também é o nome do tipo de serviço. Aqui,{' '}
        <strong>{config.appName}</strong> se refere sempre à plataforma de
        software.
      </p>

      <p className="Paragraph">Última atualização: 2 de setembro de 2026</p>

      <h2 className="H2">1. Quem presta o serviço</h2>
      <p className="Paragraph">
        A plataforma é desenvolvida e operada por {operador.razaoSocial}, CNPJ{' '}
        {operador.cnpj}, {operador.cidade}.
      </p>
      <p className="Paragraph">
        O <strong>atendimento domiciliar</strong> é prestado pela empresa
        contratante, responsável pelo serviço de saúde perante o paciente.
        Atualmente: {controladora.razaoSocial}, CNPJ {controladora.cnpj}.
      </p>

      <h2 className="H2">2. O que é o {config.appName}</h2>
      <p className="Paragraph">
        Uma plataforma de gestão de atendimento domiciliar: registro de
        atendimentos, evolução clínica, tarefas e jornada de trabalho.
      </p>
      <p className="Paragraph">
        <strong>
          É uma ferramenta de registro. Não presta serviço de saúde, não realiza
          diagnóstico, não prescreve tratamento e não substitui avaliação
          profissional.
        </strong>{' '}
        A responsabilidade clínica pelo atendimento e pelo conteúdo dos
        registros é do profissional de saúde e da empresa que o emprega.
      </p>

      <h2 className="H2">3. Quem pode usar</h2>
      <p className="Paragraph">
        O acesso é fornecido pela empresa contratante. Não há cadastro público:
        a conta é criada e revogada por ela.
      </p>
      <p className="Paragraph">
        Sua conta é pessoal e intransferível. Você responde pelas ações
        realizadas com ela, e os registros ficam vinculados ao seu usuário, com
        data e hora. Comunique imediatamente qualquer uso não autorizado.
      </p>

      <h2 className="H2">4. Licença de uso</h2>
      <p className="Paragraph">
        Concedemos licença limitada, pessoal, revogável, não exclusiva e
        intransferível para instalar e usar o aplicativo, apenas para as
        finalidades destes Termos. A licença não transfere propriedade.
      </p>

      <h2 className="H2">5. Uso aceitável</h2>
      <p className="Paragraph">Você não deve:</p>
      <ol className="Ol">
        <li className="Li">
          registrar informação clínica falsa ou de paciente que não esteja sob
          seus cuidados;
        </li>
        <li className="Li">
          acessar, copiar ou divulgar dados de pacientes fora da finalidade do
          atendimento — dados de saúde são protegidos por sigilo profissional e
          pela LGPD;
        </li>
        <li className="Li">burlar o registro de localização ou de jornada;</li>
        <li className="Li">
          descompilar ou fazer engenharia reversa do aplicativo;
        </li>
        <li className="Li">
          usar o serviço para fim ilícito ou que comprometa sua segurança,
          integridade ou disponibilidade;
        </li>
        <li className="Li">
          tentar acessar contas, dados ou áreas do sistema sem autorização.
        </li>
      </ol>
      <p className="Paragraph">
        Registros salvos podem estar sujeitos a prazos legais de guarda e a
        restrições de alteração. Correções são feitas por novo registro,
        mantendo-se o anterior e sua autoria.
      </p>

      <h2 className="H2">6. Propriedade intelectual</h2>
      <p className="Paragraph">
        O aplicativo, sua marca, interface e código pertencem ao operador ou a
        seus licenciadores. Os dados inseridos pela empresa contratante e por
        seus profissionais <strong>não nos pertencem</strong>: permanecem sob
        controle dela, na condição de controladora, e sob os direitos dos
        respectivos titulares, tratados conforme a{' '}
        <a className="A" href={routes.privacy}>
          Política de Privacidade
        </a>
        .
      </p>

      <h2 className="H2">7. Lojas de aplicativos</h2>
      <p className="Paragraph">
        O aplicativo é distribuído pela App Store e pelo Google Play, cujos
        termos também se aplicam. As lojas não são parte destes Termos e não
        respondem pelo aplicativo ou por seu conteúdo.
      </p>

      <h2 className="H2">8. Disponibilidade e responsabilidade</h2>
      <p className="Paragraph">
        O serviço pode ser interrompido para manutenção, atualização ou por
        causas fora do nosso controle, e funcionalidades podem ser alteradas ou
        descontinuadas. O aplicativo é fornecido no estado em que se encontra.
      </p>
      <p className="Paragraph">
        Na máxima extensão permitida pela lei, não respondemos por lucros
        cessantes, perda de oportunidade, de receita ou de dados decorrentes do
        uso ou da impossibilidade de uso do serviço.{' '}
        <strong>
          Nada nestes Termos afasta a responsabilidade clínica do profissional
          de saúde ou da empresa prestadora perante o paciente
        </strong>
        , nem limita direitos que a lei não permite limitar, incluindo os do
        Código de Defesa do Consumidor.
      </p>

      <h2 className="H2">9. Encerramento</h2>
      <p className="Paragraph">
        A empresa contratante pode revogar seu acesso a qualquer momento.
        Podemos suspender ou encerrar o acesso em caso de violação destes
        Termos, mediante aviso, salvo risco imediato à segurança ou aos dados. A
        guarda e a eliminação dos dados seguem os prazos da{' '}
        <a className="A" href={routes.privacy}>
          Política de Privacidade
        </a>
        .
      </p>

      <h2 className="H2">10. Alterações</h2>
      <p className="Paragraph">
        A versão vigente é a publicada nesta página, e a data no topo é revisada
        a cada mudança. O uso após a alteração significa concordância.
      </p>

      <h2 className="H2">11. Lei aplicável e foro</h2>
      <p className="Paragraph">
        Estes Termos são regidos pelas leis brasileiras. Fica eleito o foro da
        Comarca de Teresópolis/RJ, com renúncia a qualquer outro, ressalvada a
        competência legal do domicílio do consumidor.
      </p>

      <h2 className="H2">12. Contato</h2>
      <p className="Paragraph">
        <a className="A" href={`mailto:${config.email}`}>
          {config.email}
        </a>
      </p>
    </div>
  );
}
