export type Language = 'pt' | 'en' | 'es';

export interface Translations {
  // Nav
  navEarlyAccess: string;

  // Hero
  heroTag: string;
  heroTagline: string;
  heroBody: string;
  heroCta: string;
  heroStatOnDevice: string;
  heroStatAccounts: string;
  heroStatLanguages: string;

  // How it works
  howLabel: string;
  how1Title: string;
  how1Body: string;
  how2Title: string;
  how2Body: string;
  how3Title: string;
  how3Body: string;

  // Features
  featuresLabel: string;
  feat1Title: string;
  feat1Body: string;
  feat2Title: string;
  feat2Body: string;
  feat3Title: string;
  feat3Body: string;
  feat4Title: string;
  feat4Body: string;
  feat5Title: string;
  feat5Body: string;
  feat6Title: string;
  feat6Body: string;

  // Early access section
  eaLabel: string;
  eaHeadline1: string;
  eaHeadline2: string;
  eaBody: string;

  // Early access form
  eaPlaceholder: string;
  eaSubmit: string;
  eaSubmitting: string;
  eaSuccessTitle: string;
  eaSuccessBody: string;
  eaError: string;
  eaFinePrint: string;
}

const en: Translations = {
  navEarlyAccess: 'Early Access →',

  heroTag: 'Early Access · Free · No Account Needed',
  heroTagline: 'The checklist app that gets out of your way.',
  heroBody:
    'No accounts. No cloud sync. No subscriptions.\nYour lists live on your phone — private, fast, always available.',
  heroCta: '→ Get Early Access',
  heroStatOnDevice: 'On-device',
  heroStatAccounts: 'Required accounts',
  heroStatLanguages: 'Languages',

  howLabel: 'How it works',
  how1Title: 'Paste',
  how1Body:
    'Copy a block of text — one item per line. Your list builds itself in seconds. No typing required.',
  how2Title: 'Check',
  how2Body:
    'Tap items as you complete them. A progress bar and live counters keep you on track.',
  how3Title: 'Done',
  how3Body:
    'A satisfying animation and haptic feedback celebrate every finished list. Because it should feel good.',

  featuresLabel: 'Built different',
  feat1Title: 'Private by default',
  feat1Body:
    'Everything stays on your phone. No servers, no cloud, no tracking. Your data is yours alone.',
  feat2Title: 'Instant lists',
  feat2Body:
    'Paste any block of text and your list is ready. One item per line — blank lines ignored.',
  feat3Title: 'Smart progress',
  feat3Body:
    'Live counters, a progress bar, and an overview dashboard. Always know where you stand.',
  feat4Title: 'Three languages',
  feat4Body: 'Portuguese, English, and Spanish. Switch at any time from your profile.',
  feat5Title: 'Feels good to use',
  feat5Body:
    'Haptic feedback, smooth animations, and a clean UI that respects your attention.',
  feat6Title: 'No account needed',
  feat6Body: 'Open the app. Start a list. That\'s it. No sign-up, no login, no onboarding.',

  eaLabel: 'Early Access',
  eaHeadline1: 'Be among',
  eaHeadline2: 'the first.',
  eaBody:
    'checked is launching soon. Drop your email and we\'ll reach out personally when early access opens.',
  eaPlaceholder: 'your@email.com',
  eaSubmit: 'Join →',
  eaSubmitting: 'Sending...',
  eaSuccessTitle: 'You\'re on the list.',
  eaSuccessBody: 'We\'ll reach out when early access opens.',
  eaError: 'Something went wrong. Try again or email us directly.',
  eaFinePrint: 'No spam. No newsletters. One email when it\'s ready.',
};

const pt: Translations = {
  navEarlyAccess: 'Acesso Antecipado →',

  heroTag: 'Acesso Antecipado · Grátis · Sem Conta Necessária',
  heroTagline: 'O aplicativo de listas que não fica no seu caminho.',
  heroBody:
    'Sem contas. Sem nuvem. Sem assinaturas.\nSuas listas ficam no seu celular — privadas, rápidas e sempre disponíveis.',
  heroCta: '→ Quero Acesso Antecipado',
  heroStatOnDevice: 'No dispositivo',
  heroStatAccounts: 'Contas necessárias',
  heroStatLanguages: 'Idiomas',

  howLabel: 'Como funciona',
  how1Title: 'Cole',
  how1Body:
    'Copie um bloco de texto — um item por linha. Sua lista se monta sozinha em segundos. Sem digitar.',
  how2Title: 'Marque',
  how2Body:
    'Toque nos itens conforme conclui. Uma barra de progresso e contadores em tempo real te mantêm no caminho.',
  how3Title: 'Pronto',
  how3Body:
    'Uma animação satisfatória e feedback háptico celebram cada lista concluída. Porque deve ser gostoso.',

  featuresLabel: 'Feito diferente',
  feat1Title: 'Privado por padrão',
  feat1Body:
    'Tudo fica no seu celular. Sem servidores, sem nuvem, sem rastreamento. Seus dados são seus.',
  feat2Title: 'Listas instantâneas',
  feat2Body:
    'Cole qualquer bloco de texto e sua lista está pronta. Um item por linha — linhas em branco ignoradas.',
  feat3Title: 'Progresso inteligente',
  feat3Body:
    'Contadores em tempo real, barra de progresso e painel geral. Saiba sempre onde você está.',
  feat4Title: 'Três idiomas',
  feat4Body: 'Português, Inglês e Espanhol. Troque a qualquer momento no seu perfil.',
  feat5Title: 'Gostoso de usar',
  feat5Body:
    'Feedback háptico, animações suaves e uma interface limpa que respeita sua atenção.',
  feat6Title: 'Sem cadastro',
  feat6Body:
    'Abra o app. Crie uma lista. É isso. Sem cadastro, sem login, sem tutorial.',

  eaLabel: 'Acesso Antecipado',
  eaHeadline1: 'Seja um dos',
  eaHeadline2: 'primeiros.',
  eaBody:
    'checked está chegando em breve. Deixe seu email e entraremos em contato quando o acesso antecipado abrir.',
  eaPlaceholder: 'seu@email.com',
  eaSubmit: 'Entrar →',
  eaSubmitting: 'Enviando...',
  eaSuccessTitle: 'Você está na lista.',
  eaSuccessBody: 'Entraremos em contato quando o acesso antecipado abrir.',
  eaError: 'Algo deu errado. Tente novamente.',
  eaFinePrint: 'Sem spam. Sem newsletters. Um email quando estiver pronto.',
};

const es: Translations = {
  navEarlyAccess: 'Acceso Anticipado →',

  heroTag: 'Acceso Anticipado · Gratis · Sin Cuenta Necesaria',
  heroTagline: 'La app de listas que no se interpone.',
  heroBody:
    'Sin cuentas. Sin sincronización en la nube. Sin suscripciones.\nTus listas viven en tu teléfono — privadas, rápidas y siempre disponibles.',
  heroCta: '→ Obtener Acceso Anticipado',
  heroStatOnDevice: 'En el dispositivo',
  heroStatAccounts: 'Cuentas requeridas',
  heroStatLanguages: 'Idiomas',

  howLabel: 'Cómo funciona',
  how1Title: 'Pega',
  how1Body:
    'Copia un bloque de texto — un elemento por línea. Tu lista se construye sola en segundos. Sin escribir.',
  how2Title: 'Marca',
  how2Body:
    'Toca los elementos a medida que los completas. Una barra de progreso y contadores en vivo te mantienen al tanto.',
  how3Title: 'Listo',
  how3Body:
    'Una animación satisfactoria y retroalimentación háptica celebran cada lista completada. Porque debe sentirse bien.',

  featuresLabel: 'Hecho diferente',
  feat1Title: 'Privado por defecto',
  feat1Body:
    'Todo se queda en tu teléfono. Sin servidores, sin nube, sin rastreo. Tus datos son solo tuyos.',
  feat2Title: 'Listas instantáneas',
  feat2Body:
    'Pega cualquier bloque de texto y tu lista está lista. Un elemento por línea — líneas en blanco ignoradas.',
  feat3Title: 'Progreso inteligente',
  feat3Body:
    'Contadores en vivo, barra de progreso y panel general. Siempre sabes dónde estás.',
  feat4Title: 'Tres idiomas',
  feat4Body: 'Portugués, Inglés y Español. Cambia en cualquier momento desde tu perfil.',
  feat5Title: 'Placentero de usar',
  feat5Body:
    'Retroalimentación háptica, animaciones fluidas y una UI limpia que respeta tu atención.',
  feat6Title: 'Sin cuenta necesaria',
  feat6Body:
    'Abre la app. Crea una lista. Eso es todo. Sin registro, sin login, sin tutorial.',

  eaLabel: 'Acceso Anticipado',
  eaHeadline1: 'Sé uno de',
  eaHeadline2: 'los primeros.',
  eaBody:
    'checked llega pronto. Deja tu email y te contactaremos personalmente cuando el acceso anticipado abra.',
  eaPlaceholder: 'tu@email.com',
  eaSubmit: 'Unirse →',
  eaSubmitting: 'Enviando...',
  eaSuccessTitle: 'Estás en la lista.',
  eaSuccessBody: 'Te contactaremos cuando el acceso anticipado abra.',
  eaError: 'Algo salió mal. Inténtalo de nuevo.',
  eaFinePrint: 'Sin spam. Sin newsletters. Un email cuando esté listo.',
};

export const translations: Record<Language, Translations> = { en, pt, es };
