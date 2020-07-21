# B4D - Guia do Autor

## Introdução

- Parágrafo de boas vindas
Obrigado por aceitar se tornar um autor do B4D. 

### Você para o B4D

Contamos que você faça seus melhores esforços para cumprir com os seguintes pontos:

#### 1. Defina uma cadência de postagem que seja adequada para você

Se você foi escolhido para ser um autor no B4D, existe uma grande chance de o seu sucesso acabar em um dia-a-dia corrido. Sendo assim, sinta-se livre para definir quantos posts você quer fazer a cada X meses e colocar no GitHub.

Alguns pontos importantes:

1. Para continuar como autor ativo do B4D, faça ao menos uma postagem a cada 60 dias.
2. Uma vez que você defina sua cadência de postagens, escreva no arquivo `meta/cadencia_de_postagem.md` do projeto no GitHub e abra um Pull Request.
3. Fique a vontade para postar mais do que você tinha planejado e para modificar sua cadência de postagens como quiser.
4. Se você quiser um tempo do B4D mas não quer deixar de ser um autor, sem problemas, converse com o editor a respeito :)

#### 2. Cumpra com os principios editoriais

Nosso objetivo é ajudar a comunidade de desenvolvedores a conhecerem mais sobre o mundo dos negócios. Foi para garantir que os conteúdos construídos consigam entregar esse objetivo é que criamos os nossos [Princípios Editoriais](../_pages/principios.md).

Se você não concorda com algum princípio, gostaria de adicionar um novo ou acha que algum princípio poderia estar melhor definido, fique a vontade para fazer um *Pull Request* no arquivo `_pages/principios.md` para começar uma discussão. A decisão final sobre os princípios é do editor, que tem o compromisso de ouvir todos autores e melhorar os princípios.

#### 3. Ajude na divulgação do B4D

O motivo pelo qual postamos no B4D e não no LinkedIn, Medium ou em nossos blogs pessoais é para criar um ambiente coeso que aumente nossas chances de ter um impacto positivo na comunidade de desenvolvedores. Como esse é um projeto sem financiamento e sem fins lucrativos, é preciso que cada um faça sua parte na divulgação do B4D.

Não deixe de divulgar seus posts - e os posts de colegas que você achar legais - nas suas redes sociais e comentar em eventos, mentorias, conversas com influenciadores, etc.

#### 4. Conteúdo perene

O conteúdo que você escreve é seu por direito, mas contamos com a sua boa vontade e colaboração para evitar links quebrados e conteúdos incompletos no blog. Pense que uma vez que você postar o conteúdo no B4D ele vai continuar no B4D pela eternidade.

#### 5. Golden Rule

Trate os outros como gostaria de ser tratado. Respeito, ética e imparcialidade são valores fundamentais do B4D. Contamos com você para cumprir com nossos valores.

### O b4d para você

Como autor do B4D você pode:

- Utilizar a marca do b4d em suas redes sociais, em eventos, apresentações, etc.
- Postar o conteúdo que você escreve aqui em outros lugares. Seria legal se você deixasse só aqui, mas fica a seu critério.
- Fazer *Pull Requests* para melhorar o blog e/ou adicionar novas funcionalidades.
- Participar do planejamento, sugerir melhorias, participar ativamente do futuro do b4d.
- Divulgar projetos seus em seus posts (de preferência não concorrentes com o B4D).

Você pode pedir para sair do B4D a qualquer momento, sem nenhum problema.

## Faça seu *setup* e o mantenha atualizado

Ao se tornar autor do B4D, você deve editar o arquivo `config.yml` deste repositório para adicionar suas informações. Isso vai fazer com que você passe a aparecer na página de autores e vai criar um *shortname* para você colocar no *frontmatter* dos seus posts.

## Como postar seu conteúdo

1. Baixar o código do blog.
2. Crie uma nova *branch* a partir da **master** para colocar seu post.
3. Criar um novo post seguindo o padrão dos outros posts, incluindo o *frontmatter* e a documentação do *Jekyll*.
4. Escrever o post em *markdown*: 
  - A engine que usamos é a **kramdown**, que oferece algumas extensões no `md` original.
  - Sempre que colocar links, use a sintaxe `[Texto Descritivo](URL){:target="\_blank"}` para que a página abra em outra aba do navegador.
  - Armazene as imagens do post em `assets/images/posts` com um nome descritivo para evitar conflitos. Evite usar imagens muito grandes.
  - Evite usar conteúdo externo porque ele pode ficar fora do ar e comprometer seu post.
5. Escolha uma imagem de capa para o post. 
  - Recomendo o [Unspash](https://unsplash.com/) porque as imagens de lá vem já sem copyright. 
  - Edite as imagens para um tamanho adequado. 
  - Não use imagens com copyright!
  - Sempre que usar imagens dê o devido crédito com um link para o material. Siga as boas práticas já implementadas em outros artigos.
6. Faça um *commit* com uma mensagem descritiva em inglês e envie para a **master** remota.
7. Abra um *Pull Request* no GitHub e aguarde a aprovação do Editor.

## Ideias de conteúdo

O editor tem sempre uma pauta comum de onde você pode tirar ideias sobre o que escrever.

O blog tem diversas categorias com finalidades distintas que ajudam a ter ideias:

1. **docs** - Knowledge Base - Análises de conceitos de gestão e liderança trazidos em livros, artigos, etc.
2. **lib** - Ferramentas e Boas Práticas - Boas práticas de empreendedores e ferramentas que auxiliam na gestão de um negócio.
3. **examples** - Histórias e de empreendedores e gestores - Histórias para inspirar e bons exemplos de o que fazer em situações que todo empreendedor se depara.
4. **faq** - Perguntas - Respondemos perguntas de devs e empreendedores.
5. **dev/null** - Opiniões -  O nome é sugestivo, `dev/null` porque fica a sua escolha concordar ou simplesmente ignorar.
6. **metadata** - Conceitos do biz4devs - Artigos que explicam conceitos essenciais do próprio blog.