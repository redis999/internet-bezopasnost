const questions = [
  {
    topic: 'Социальная инженерия',
    question: '«Учитель» с неизвестного номера просит код из SMS для электронного дневника. Что делать?',
    options: [
      ['Назвать код после вопроса о школе.', false],
      ['Перезвонить по сохранённому номеру.', true],
      ['Переслать сообщение в общий чат.', false],
      ['Попросить назвать имя директора.', false]
    ],
    explanation: 'Код может подтверждать вход в аккаунт. Личность нужно проверять по независимому каналу.'
  },
  {
    topic: 'Шантаж',
    question: 'Неизвестный требует деньги и угрожает опубликовать личные фотографии. Какой шаг лучший?',
    options: [
      ['Перевести небольшую сумму для отсрочки.', false],
      ['Удалить переписку и закрыть аккаунт.', false],
      ['Сохранить доказательства и позвать взрослого.', true],
      ['Потребовать доказать наличие фотографий.', false]
    ],
    explanation: 'Оплата не прекращает шантаж. Сначала сохраните доказательства и подключите доверенного взрослого.'
  },
  {
    topic: 'Аккаунт',
    question: 'В списке входов мессенджера появилось неизвестное устройство. Что сделать первым?',
    options: [
      ['Спросить друзей, видят ли они изменения.', false],
      ['Завершить сеансы и сменить пароль.', true],
      ['Удалить приложение со своего телефона.', false],
      ['Подождать автоматической проверки сервиса.', false]
    ],
    explanation: 'Нужно быстро перекрыть посторонний доступ, а затем включить MFA и проверить данные восстановления.'
  },
  {
    topic: 'Фишинг',
    question: 'Сайт похож на известный сервис, но в адресе отличается одна буква. Как поступить?',
    options: [
      ['Открыть сервис через свою закладку.', true],
      ['Ввести только адрес электронной почты.', false],
      ['Проверить страницу выдуманным паролем.', false],
      ['Отправить ссылку знакомому для проверки.', false]
    ],
    explanation: 'Дизайн сайта легко скопировать. Официальный адрес нужно открывать самостоятельно.'
  },
  {
    topic: 'MFA',
    question: 'Приложение присылает много запросов на вход, хотя вы не входили. Что правильно?',
    options: [
      ['Одобрить последний запрос, чтобы прекратить уведомления.', false],
      ['Отклонить запросы и сменить пароль.', true],
      ['Удалить приложение-аутентификатор.', false],
      ['Не реагировать до следующего дня.', false]
    ],
    explanation: 'Это может быть атака MFA fatigue. Не подтверждайте вход и смените скомпрометированный пароль.'
  },
  {
    topic: 'Поддельный голос',
    question: 'Знакомый голос просит срочно перевести деньги на новую карту. Что сделать?',
    options: [
      ['Перевести небольшую сумму для проверки.', false],
      ['Попросить записать ещё одно сообщение.', false],
      ['Позвонить по сохранённому номеру.', true],
      ['Переслать голосовое в общий чат.', false]
    ],
    explanation: 'Голос можно подделать. Необычную просьбу подтверждают через другой привычный канал.'
  },
  {
    topic: 'QR-код',
    question: 'QR-код на школьном плакате открыл страницу входа в аккаунт. Что безопаснее?',
    options: [
      ['Открыть школьный сайт вручную.', true],
      ['Войти, если на странице есть логотип.', false],
      ['Ввести только логин без пароля.', false],
      ['Отправить код одноклассникам для проверки.', false]
    ],
    explanation: 'Наклейку с QR-кодом можно заменить. Важный сервис лучше открыть через известный адрес.'
  },
  {
    topic: 'Wi‑Fi',
    question: 'Сотрудник кафе не подтверждает сеть с названием заведения. Нужно открыть школьный аккаунт. Что выбрать?',
    options: [
      ['Подключиться к сети с самым сильным сигналом.', false],
      ['Использовать мобильный интернет.', true],
      ['Отключить предупреждения браузера.', false],
      ['Проверить обе сети по очереди.', false]
    ],
    explanation: 'Название сети легко подделать. Для важного входа используйте проверенное подключение.'
  },
  {
    topic: 'Несколько угроз',
    question: 'После установки игры появилось окно «Позвоните в поддержку», а почта сообщила о смене пароля. Что лучше?',
    options: [
      ['Позвонить по номеру из окна программы.', false],
      ['Продолжить игру и проверить почту позже.', false],
      ['Отключить сеть и сменить пароль с другого устройства.', true],
      ['Скачать первое найденное средство очистки.', false]
    ],
    explanation: 'Не давайте удалённый доступ. Отключите подозрительное устройство и защитите почту с безопасного устройства.'
  },
  {
    topic: 'Личные данные',
    question: 'Незнакомый блогер просит фотографию документа и запрещает рассказывать взрослым. Что выбрать?',
    options: [
      ['Закрыть часть цифр на фотографии.', false],
      ['Удалить фотографию после отправки.', false],
      ['Попросить друга отправить свои данные.', false],
      ['Не отправлять и рассказать взрослому.', true]
    ],
    explanation: 'Запрос документа и требование молчать — серьёзные признаки опасной ситуации.'
  },
  {
    topic: 'Аккаунт',
    question: 'Пришло письмо о смене резервной почты, которую вы не меняли. Как действовать?',
    options: [
      ['Ответить отправителю и попросить отмену.', false],
      ['Открыть сервис вручную и проверить настройки.', true],
      ['Нажать кнопку отмены внутри письма.', false],
      ['Переслать письмо в чат друзей.', false]
    ],
    explanation: 'Письмо тоже может быть фишинговым. Проверяйте аккаунт только через официальный сайт или приложение.'
  },
  {
    topic: 'Фишинг',
    question: 'От одноклассника пришёл файл «домашнее задание.exe». Он пишет, что файл нужно срочно открыть. Что делать?',
    options: [
      ['Открыть файл в режиме администратора.', false],
      ['Скачать, но не запускать до урока.', false],
      ['Уточнить просьбу другим способом.', true],
      ['Переименовать файл в документ.', false]
    ],
    explanation: 'Аккаунт одноклассника мог быть взломан. Исполняемый файл нельзя открывать без независимой проверки.'
  },
  {
    topic: 'Социальная инженерия',
    question: '«Администратор игры» обещает редкий предмет за пароль от аккаунта. Как ответить?',
    options: [
      ['Передать пароль и сразу изменить его.', false],
      ['Отказаться и отправить жалобу.', true],
      ['Назвать старый пароль для проверки.', false],
      ['Попросить сначала выдать половину награды.', false]
    ],
    explanation: 'Настоящему администратору пароль не нужен. Такое предложение следует отклонить и пожаловаться.'
  },
  {
    topic: 'Шантаж',
    question: 'Мошенник показывает поддельное изображение с вашим лицом и угрожает рассылкой. Что важно понимать?',
    options: [
      ['Нужно заплатить до первой публикации.', false],
      ['Следует удалить все свои фотографии.', false],
      ['Лучше публично спорить с мошенником.', false],
      ['Это шантаж: нужны доказательства и помощь.', true]
    ],
    explanation: 'Подделка не делает угрозу вашей виной. Сохраните сообщения и обратитесь к взрослому и платформе.'
  },
  {
    topic: 'Личные данные',
    question: 'На фотографии видны номер дома и ежедневное расписание. Что сделать перед публикацией?',
    options: [
      ['Удалить или закрыть эти детали.', true],
      ['Оставить, если аккаунт популярный.', false],
      ['Добавить точную геолокацию для друзей.', false],
      ['Опубликовать, а затем ограничить доступ.', false]
    ],
    explanation: 'Адрес и расписание раскрывают маршрут и привычки. Эти детали нужно скрывать до публикации.'
  },
  {
    topic: 'MFA',
    question: 'Где безопаснее хранить резервные коды двухфакторной аутентификации?',
    options: [
      ['В открытой заметке на телефоне.', false],
      ['В сообщении самому себе.', false],
      ['В защищённом хранилище отдельно от пароля.', true],
      ['На общей фотографии документов.', false]
    ],
    explanation: 'Резервные коды дают доступ к аккаунту. Их хранят отдельно от основного пароля в защищённом месте.'
  },
  {
    topic: 'Wi‑Fi',
    question: 'В публичной сети браузер предупреждает, что соединение с сайтом небезопасно. Что делать?',
    options: [
      ['Продолжить, если сайт выглядит знакомо.', false],
      ['Закрыть страницу и сменить сеть.', true],
      ['Отключить проверку сертификатов.', false],
      ['Ввести только логин без пароля.', false]
    ],
    explanation: 'Предупреждение может означать перехват или подмену соединения. Защиту браузера нельзя отключать.'
  },
  {
    topic: 'QR-код',
    question: 'QR-код на парковочном автомате ведёт на страницу оплаты с необычным адресом. Что лучше?',
    options: [
      ['Оплатить минимальную сумму для проверки.', false],
      ['Ввести данные виртуальной карты.', false],
      ['Использовать официальный способ оплаты.', true],
      ['Обновить страницу несколько раз.', false]
    ],
    explanation: 'QR-код мог быть наклеен злоумышленником. Платёж следует проводить через официальный сайт или приложение.'
  },
  {
    topic: 'Несколько угроз',
    question: 'Телефон потерян, на нём открыта почта и не установлен код блокировки. Какой первый приоритет?',
    options: [
      ['Написать на потерянный телефон сообщение.', false],
      ['Удалённо заблокировать устройство и защитить почту.', true],
      ['Опубликовать номер телефона в соцсети.', false],
      ['Ждать, пока устройство вернут.', false]
    ],
    explanation: 'Почта позволяет восстанавливать другие аккаунты. Нужно удалённо заблокировать устройство и сменить доступ.'
  },
  {
    topic: 'Аккаунт',
    question: 'Как лучше создать пароли для нескольких важных аккаунтов?',
    options: [
      ['Использовать один сложный пароль везде.', false],
      ['Добавлять к одному паролю название сайта.', false],
      ['Создать уникальные пароли в менеджере.', true],
      ['Записать короткие пароли в общий чат.', false]
    ],
    explanation: 'Уникальные пароли ограничивают последствия утечки, а менеджер помогает безопасно их хранить.'
  }
];

const attemptSize = 10;
const databaseConfig = window.SUPABASE_CONFIG;
const databaseHeaders = {
  apikey: databaseConfig.publishableKey,
  Authorization: `Bearer ${databaseConfig.publishableKey}`,
  'Content-Type': 'application/json'
};
let order = [];
let position = 0;
let answers = [];
let locked = false;

const shuffle = items => [...items].sort(() => Math.random() - 0.5);

function statsMarkup(attempts, average, topics) {
  return `<div class="stat"><strong>${attempts}</strong><span>прохождений</span></div><div class="stat"><strong>${attempts ? `${average}%` : '—'}</strong><span>средний результат</span></div><div class="stat stat-wide"><strong>${topics.length ? topics.join(', ') : 'Пока нет данных'}</strong><span>сложные темы по ошибкам</span></div>`;
}

async function renderStats() {
  const target = document.querySelector('#stats');
  target.innerHTML = statsMarkup('…', '…', []);
  try {
    const response = await fetch(`${databaseConfig.url}/rest/v1/rpc/get_quiz_stats`, {
      method: 'POST', headers: databaseHeaders, body: '{}'
    });
    if (!response.ok) throw new Error('Статистика недоступна');
    const data = await response.json();
    target.innerHTML = statsMarkup(data.attempts, data.averagePercent, data.difficultTopics || []);
  } catch {
    target.innerHTML = statsMarkup(0, 0, ['Не удалось загрузить статистику']);
  }
}

async function saveAttempt(score, topics) {
  try {
    const response = await fetch(`${databaseConfig.url}/rest/v1/quiz_attempts`, {
      method: 'POST',
      headers: { ...databaseHeaders, Prefer: 'return=minimal' },
      body: JSON.stringify({ score, mistake_topics: topics })
    });
    return response.ok;
  } catch {
    return false;
  }
}

function startQuiz() {
  order = shuffle(questions).slice(0, attemptSize).map(question => ({ ...question, options: shuffle(question.options) }));
  position = 0;
  answers = [];
  locked = false;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderQuestion() {
  const current = order[position];
  const root = document.querySelector('#quiz');
  root.innerHTML = `<div class="quiz-progress"><span>Вопрос ${position + 1} из ${attemptSize}</span><div class="progress"><i style="width:${position / attemptSize * 100}%"></i></div></div><p class="topic">Тема: ${current.topic}</p><h2>${current.question}</h2><div class="options">${current.options.map(([text], index) => `<button class="option" type="button" data-index="${index}"><b>${'АБВГ'[index]}</b>${text}</button>`).join('')}</div><div id="feedback" class="feedback" hidden></div>`;
  root.querySelectorAll('.option').forEach(button => button.addEventListener('click', () => chooseAnswer(Number(button.dataset.index))));
}

function chooseAnswer(index) {
  if (locked) return;
  locked = true;
  const current = order[position];
  const correct = current.options[index][1];
  answers.push({ topic: current.topic, correct });
  document.querySelectorAll('.option').forEach(button => {
    const optionIndex = Number(button.dataset.index);
    const isCorrect = current.options[optionIndex][1];
    button.disabled = true;
    if (isCorrect) button.classList.add('correct');
    if (optionIndex === index && !correct) button.classList.add('incorrect');
  });
  const feedback = document.querySelector('#feedback');
  feedback.hidden = false;
  feedback.className = `feedback ${correct ? 'success' : 'warning'}`;
  feedback.innerHTML = `<strong>${correct ? 'Верно.' : 'Неверно.'}</strong><p>${current.explanation}</p><button class="button" type="button" id="next">${position + 1 === attemptSize ? 'Показать результат' : 'Следующий вопрос'}</button>`;
  document.querySelector('#next').addEventListener('click', () => {
    position += 1;
    locked = false;
    position === attemptSize ? showResult() : renderQuestion();
  });
}

async function showResult() {
  const score = answers.filter(answer => answer.correct).length;
  const percent = Math.round(score / attemptSize * 100);
  const topics = [...new Set(answers.filter(answer => !answer.correct).map(answer => answer.topic))];
  const dialog = document.querySelector('#result-dialog');
  const content = document.querySelector('#result-content');
  document.querySelector('#quiz').innerHTML = '<p><strong>Тест завершён.</strong> Результат открыт в отдельном окне.</p><button class="text-link button-link" type="button" id="show-result">Показать результат снова</button>';
  content.innerHTML = `<div class="result-dialog-content"><p class="eyebrow">Тест завершён</p><h2 id="result-title">${score} из ${attemptSize} — ${percent}%</h2><p>${percent >= 80 ? 'Отличная подготовка.' : percent >= 50 ? 'Хорошая основа. Повтори сложные темы.' : 'Повтори теорию на главной странице и попробуй снова.'}</p><div class="result-topics"><strong>Темы для повторения:</strong><p>${topics.length ? topics.join(', ') : 'Нет — все ответы верные.'}</p></div><p id="save-status">Сохраняем результат в общей статистике…</p><div class="dialog-actions"><button class="button" type="button" id="restart">Пройти ещё раз</button><button class="button button-quiet" type="button" id="close-result">Закрыть</button></div></div>`;
  dialog.showModal();
  document.querySelector('#show-result').addEventListener('click', () => dialog.showModal());
  document.querySelector('#close-result').addEventListener('click', () => dialog.close());
  document.querySelector('#restart').addEventListener('click', () => { dialog.close(); startQuiz(); });
  const saved = await saveAttempt(score, topics);
  document.querySelector('#save-status').textContent = saved ? 'Результат добавлен в общую статистику.' : 'Не удалось сохранить результат. Проверьте подключение к интернету.';
  if (saved) await renderStats();
}

document.addEventListener('DOMContentLoaded', () => {
  renderStats();
  startQuiz();
});
