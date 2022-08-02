## Table of Contents

- [Task 1: Check tests for react generator #685](#task-1-check-tests-for-react-generator-685)

- [Task 2: Try to make "full-template" work #385](#task-2-try-to-make-full-template-work-385)

- [Task 3: React try different aliases #219](#task-3-react-try-different-aliases-219)

- [Task 4: React do we have a similar file in frontend-next folder? #214](#task-4-react-do-we-have-a-similar-file-in-frontend-next-folder-214)

- [Task 5: React tests 1 #201](#task-5-react-tests-1-201)

- [Task 6: React markdown let is try to pass complex content #194](#task-6-react-markdown-let-is-try-to-pass-complex-content-194)

- [Task 7: React small improvements #175](#task-7-react-small-improvements-175)


## Task 1: Check tests for react generator [#685](https://github.com/LLazyEmail/markdown-to-email/issues/685)

## Task 2: Try to make "full-template" work [#385](https://github.com/LLazyEmail/markdown-to-email/issues/385)

__atherdon:__

![1](https://user-images.githubusercontent.com/1469198/116010103-b8d68780-a625-11eb-8acc-67b9c96a7f37.png "1")

получается что мы начали работу над этими темплейтами, но она явно не очень была закончена.
предлагаю попробывать вывести какие то данные и посмотреть, как все работает в реакт ветке

сс @coder-do

__coder-do:__

да full template не работает, вот почему - файл https://github.com/atherdon/markdown-to-email/blob/react-components-stage-zero/templates/full/Body/BodyPrototype.js пустой и поэтому кроме ошибок ничего не выводилось - я для теста взял контент этого же файла из `first` страницы и фулл тоже запустился. Я просто не знаю что должно быть в фулл темплейте(контент имею ввиду) если заполнить этот файл все сработает норм

Плюс в full template нету компонента для футера!

## Task 3: [React] try different aliases [#219](https://github.com/LLazyEmail/markdown-to-email/issues/219)

```
"paths": {
      "@/components/*": ["components/*"]
    }
```

## Task 4: [React] do we have a similar file in frontend-next folder? [#214](https://github.com/LLazyEmail/markdown-to-email/issues/214)

__atherdon:__

https://github.com/atherdon/markdown-to-email/blob/react-components-stage-zero/frontend/render.jsx

__master-bogdan:__

no

__atherdon:__

@master-bogdan can we replicate it? i mean this code was able to generate a simple HTML file with our newsletter.
probably we need to connect our full template and check if it can work on nextjs version

## Task 5: React tests 1 [#201](https://github.com/LLazyEmail/markdown-to-email/issues/201)

папка /logoTop, и папка /logoBottom со своими файлами.

## Task 6: React markdown let is try to pass complex content [#194](https://github.com/LLazyEmail/markdown-to-email/issues/194)

and see if it will break anything or not.

here is one of the latest newsletters that I send. it has crazy content and can be a good case for us.
Feel free to save it someplace, and try to use it. But I'm ready that something will go wrong.

[Link](https://raw.githubusercontent.com/atherdon/newsletters/master/archive/Thematic/2020/%20December/completed/top1/The%20Top%2020%20Hacker%20Noon%20Stories%20Published%20In%202020%20245816151f16464e807267de7266cb8f.md)

[Preview version](https://github.com/atherdon/newsletters/blob/master/archive/Thematic/2020/%20December/completed/top1/The%20Top%2020%20Hacker%20Noon%20Stories%20Published%20In%202020%20245816151f16464e807267de7266cb8f.md)

more content: https://github.com/atherdon/markdown-to-email/blob/react-components-stage-zero/source/source2.md
&& https://github.com/atherdon/markdown-to-email/blob/react-components-stage-zero/source/source3.md

## Task 7: React small improvements [#175](https://github.com/LLazyEmail/markdown-to-email/issues/175)

__atherdon:__

1. мы можем делать изменения в структуре компонентов, если это упростит нашу работу
< в пункте 1 скорее если вы видите необходимость в улучшении - тогда можем потратить некоторое время

2. нужно ли нам почистить некоторые компоненты от кода, чтобы в следующей работе нам было проще?
< просто наши компоненты работают только для того, чтобы выводить конкретный HTML, для наших конкретных emails.
а если например мы решим переделать чтото - код сразу "посыпется". наши компоненты до сих пор являются просто react версией папки layouts которую придумали пару месяцев назад. просто пытаюсь думать наперед, особенно пока у нас есть свободное время сейчас.

3. можно добавить набор мелких, но важных "фишек": добавить дополнительные проверки, которые могут помочь при работе с newsletters.
< частично можно задумать о "защите от дурака" - например я забыл добавить логотип - скрипт мне об этом напомнит.
или я неправильно скопировал ссылку - она получается битая и это очень грубая ошибка. для деталей мне нужно просмотреть issues и мои заметки.

4. стоит ли нам добавить дополнительные компоненты, которые тоже могут нам помочь. или возможно нам нужно упростить какую то логику.
< сейчас моей проблемой является то, что я незнаю как быстро соединить код главной ветки и master. я пытаюсь пошагово генерировать список реакт компонентов, но далеко не продвинулся. куча компонентов, куча мелких деталей которые необходимо держать в голове и т.д. мы можем придумать набор из 5-7 компонентов, которые будут внутри себя просто хранить несколько мелких компонентов, это может быть даже просто статическая версия - и это поможет мне при тестировании.

5. можно добавить дополнительные модули, которые будут работать на обфускацией, size-counter, image resizer, etc.
< в рассылке есть очень много мелких нюансов, за которыми нужно следить, чтобы не испортить статистику просмотров и т.д. например письмо, контент которого например занимает больше чем x kb - может просто не отображаться в gmail.
поэтому каждое письмо приходится несколько раз проверять перед отправкой.
В каждом письме есть изображения: логотипы клиентов и мемы. но некоторые мемы весят по 2mb и это оч плохо для мобильного траффика.

6. использовать разные templates(я создал пустую папку в react-ветке, но лучше перенести ее) и подготовить наш код к тому, чтобы мы могли использовать разные темлейты(сейчас мы используем ugly template from Mailchimp)
< в идеальном мире - я бы дождался пока мы доделаем генератор и наша реакт ветка станет мастером. и только потом бы планировал использовать другой темплейт. но время идет а задача стоит. поэтому я подумал что может сделав параллельно отдельный темплейт, мы в такой способ отполируем много кода. заодно новый темплейт мне будет гораздо проще проверять, потому что он будет более чистый и заточен под наши нужды.

7. npm lint генерит ошибку у меня [frontend: run lint generate an error on my side #166](https://github.com/LLazyEmail/markdown-to-email/issues/166), [frontend: run dev generate some error #167](https://github.com/LLazyEmail/markdown-to-email/issues/167)

8. сложная вложенность components > head > ... мне не нравится(идея была хороша, но когда я начал прыгать по папкам - я понял что это не очень удобно)

9. можно пройтись по компонентам и вынести одинаковые аттрибуты в config (border 0, cell padding 0, cell spacing 0)

10. logoBottom и logoTop - могут быть объединены в один компонент?

11. move footer to the lvl of Head & Body

12. mist contains bad tests inside with the ES5 version.

__master-bogdan:__

1. Пока приходи в голову структура которая есть, и вынос файла настроек куда то, еще думаю над этим.
2. Тут у нас есть на это случай миграция на scss.modules которые дадут изолированные стили. Можно на глобальный уровень вынести повторяющийся код и в случае необходимости дописывать стили в scss modules
3. Тут можно добавить фишек, и валидации структуры письма, но тогда нужно дать мне схемы писем я подумаю как разработать валидацию, но тут можно делать еще проще, если будут стандартные шаблоны писем, достаточно будет сделать файлы конфигов и пропускать только props.
4. Да, можно вынести группы универсальных компонентов которые не будут изменятся, но мне нужно понимать какие. Это понимание прийдет когда будет несколько сверстанных писем, тогда можно подумать над оптимизацией структуры
5. Можно встроить модуль сжатия картинок
6. Да, это лучше сделать сейчас для оптимизации структуры
7. Исправил ошибки [frontend: run lint generate an error on my side #166](https://github.com/LLazyEmail/markdown-to-email/issues/166), [frontend: run dev generate some error #167](https://github.com/LLazyEmail/markdown-to-email/issues/167)
8. Сейчас есть идея в папке components хранить только компоненты, а сами Head, Body, Footer вынести на уровень templates
9. Да, можно при миграции на scss все вынести на глобальные стили, в данный момент, это будет как по мне пока лишние движения
Либо можно сделать компонент table и его импортировать, чтобы сохранялись инлайновые стили
10. Если они абсолютно одинаковы, да могу объединить, но пока я вижу разную ширину картинок
11. Вынес, но хочу его сделать независимым от Body
12. Что в этом пункте конкретней?

__atherdon:__

"_3. Тут можно добавить фишек, и валидации структуры письма, но тогда нужно дать мне схемы писем я подумаю как разработать валидацию, но тут можно делать еще проще, если будут стандартные шаблоны писем, достаточно будет сделать файлы конфигов и пропускать только props._" - Чаще всего я ошибался:
- страые bitly ссылки, при copy-paste. проверить это никак нельзя, но используя config/mdx variables может с этим помочь.
- у компонента топ были 2 разные bitly ссылки и это неправильно(кстати можем [удалить один аттрибут который у нас есть](https://github.com/LLazyEmail/markdown-to-email/blob/react-components-stage-zero/frontend-next/components/body/sponsor/Sponsor.js#L6))
- забывал про preview text
- забывал про title
- картинки(логотипы и мемы) должны хранится на gitlab сейчас. иногда забывал.
- т.к. ссылок много, ошибался я в них часто. Если мы сможем сделать так, чтобы при парсинге ссылки мы проверяли, битая ли она и делали warning заметный - будет гуд.

"_4. Да, можно вынести группы универсальных компонентов которые не будут изменятся, но мне нужно понимать какие. Это понимание прийдет когда будет несколько сверстанных писем, тогда можно подумать над оптимизацией структуры_" - если у нас есть универсальные блоки, может нам подлючить какую то из react libs частично и использовать их код. у нас то получается сейчас очень чисто, но придумывать заново мне не нравится, особенно когда есть чтото готовое.

"_5. Можно встроить модуль сжатия картинок_" - найти бы для этого какой то мобудь бабеля. было бы круто. потому что и логотипы клиентов и мемы часто не оптимизированны.

"_6. Да, это лучше сделать сейчас для оптимизации структуры_" - тогда делаем, мне это точно пригодится.

"_8. Сейчас есть идея в папке components хранить только компоненты, а сами Head, Body, Footer вынести на уровень templates_" - с main комонентом тоже нужно чтото делать.

"_9.Да, можно при миграции на scss все вынести на глобальные стили, в данный момент, это будет как по мне пока лишние движения_" - по стилям я не подскажу, но все время боюсь что инлайновая структура нарушится

"_10. Если они абсолютно одинаковы, да могу объединить, но пока я вижу разную ширину картинок_" - мне кажется разная ширина это просто баг, должно быть одинаковая.

"_11. Вынес, но хочу его сделать независимым от Body_" - согласен - делаем независимым

"_12. Что в этом пункте конкретней?
Это я или потом опишу или сам сделаю. так будет проще, нужно просто найти старый пулл и откатить его для 3х файлов._" - еще мы можем сделать plain text generation. это сейчас некритично, но потом будет важно.

__master-bogdan:__

"_8. Сейчас есть идея в папке components хранить только компоненты, а сами Head, Body, Footer вынести на уровень templates
с main компонентом тоже нужно что-то делать._" - пришла в голову идея такой структуры

- templates

-- < здесь папка темплейта >

--- <'head'> - формируем из некстовского head

--- <'body'> - формируем из components

--- <'footer'> - формируем из components

--- index.js - он заменяет Main

И на выходе готовый темплейт для импорта в pages
- сделать папку писем (по факту уже есть pages) в которую будет импорт темплейта и в этой папке на каждое письмо будет конфиг по пропсам, на которые можно прописать проверки

__atherdon:__

@master-bogdan надо пробывать и уже в момент работы смотреть - будут ли возникать проблемы или нет.
пока что мне нравится

__master-bogdan:__

@atherdon по тестам пока вижу несколько уровней

1. какой нибудь базовый на проверку пустоты текста
2. внедрение TypeScript (тут уже и типы пойдут)
3. на уровне jest тестов (я думаю тут можно на битые ссылки настроить проверку







