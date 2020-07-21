# B4D - Guia do Autor

## Introdução

Obrigado por aceitar se tornar um autor do B4D. Sei que seu tempo é seu recurso mais valioso e a decisão de dedicá-lo a compartilhar seus conhecimentos com a comunidade fala muito sobre como você é uma pessoa honrada e comprometida com o bem maior. Vai ser um prazer imenso compartilhar esse espaço com você. 

### Você para o B4D

Conto que você faça seus melhores esforços para cumprir com os seguintes pontos:

#### 1. Defina uma cadência de postagem que seja adequada para você

Existe uma grande chance de ter um dia-a-dia corrido. Você é livre para definir quantos posts você quer fazer no blog a cada 1 ou 2 meses.

Pontos importantes:

1. Para continuar como autor ativo do B4D, faça ao menos uma postagem a cada 60 dias.
2. Uma vez que você defina sua cadência de postagens, escreva no arquivo `meta/autores.md` deste repositório e abra um *Pull Request*.
3. Fique a vontade para postar mais do que você tinha planejado e para modificar sua cadência de postagens quando quiser.
4. Se você quiser dar um tempo do B4D mas não quer deixar de ser um autor, sem problemas, é só conversar com o editor.

#### 2. Cumpra com os principios editoriais

Nosso objetivo é ajudar a comunidade de desenvolvedores a conhecerem mais sobre o mundo dos negócios. Para garantir que os conteúdos entreguem esse objetivo temos os nossos [Princípios Editoriais](../_pages/principios.md).

Se você não concorda com algum princípio, gostaria de adicionar um novo ou acha que algum princípio poderia estar melhor definido, fique a vontade para fazer um *Pull Request* no arquivo `_pages/principios.md` para começar uma discussão.

A decisão final sobre os princípios é do editor, que tem o compromisso de ouvir todos autores e aprimorar os princípios.

#### 3. Ajude na divulgação do B4D

O motivo pelo qual postamos no B4D e não no LinkedIn, Medium ou em nossos blogs pessoais é para criar um ambiente com propósito e público bem definidos. 
Isso aumenta nossa chance de gerar impacto positivo na comunidade. 
Como esse é um projeto sem financiamento e sem fins lucrativos, é preciso que cada um faça sua parte na divulgação do B4D.

Divulgue sempre seus posts e os posts de colegas que você achar legais nas redes sociais, em eventos e para a sua rede de relacionamentos.

#### 4. Conteúdo perene

O conteúdo que você escreve é seu. Conto com a sua boa vontade e colaboração para evitar links quebrados e conteúdos incompletos no blog. Considere que uma vez que você postar o conteúdo no B4D ele vai continuar lá para sempre.

#### 5. Golden Rule

Trate os outros como gostaria de ser tratado. Respeito, ética e neutralidade política são valores fundamentais do B4D. Conto com a sua colaboração.

### O B4D para você

Como autor do B4D você pode:

- Utilizar a marca do B4D em suas redes sociais, eventos, apresentações, etc.
- Fazer *Pull Requests* para melhorar o blog e/ou adicionar novas funcionalidades.
- Participar do planejamento, sugerir melhorias, e contribuir ativamente para o futuro do B4D.
- Divulgar seus projetos seus em seus posts (não concorrentes com o B4D).

Você pode pedir para sair do B4D a qualquer momento.

## Faça seu *setup* e o mantenha atualizado

Ao se tornar autor do B4D, você deve editar o arquivo `config.yml` deste repositório para adicionar suas informações. Isso vai fazer com que você passe a aparecer na página de autores e vai criar um *shortname* para você colocar no *front matter* dos seus posts.

## Como postar seu conteúdo

O blog usa o gerador de sites estáticos [Jekyll](https://jekyllrb.com/) que é auto-explicativo. Para rodar uma versão do site local é só executar o comando `jekyll s` depois de instalar o ruby e as gems conforme as instruções do site.

Os posts são escritos em markdown e convertidos em HTML pelo próprio Jekyll.

1. Clone o repositório: `git clone git@github.com:lucasprim/biz4devs.git`.
2. Crie uma nova *branch* a partir da **master**.
3. Crie um novo arquivo na pasta `_posts` seguindo o padrão dos outros posts, incluindo o *front matter*.
4. Escreva o post em *markdown*: 
  - A engine que usamos para transformar o *markdown* em HTML é a **kramdown**, que oferece algumas extensões ao *markdown* original.
  - Sempre que colocar links, use a sintaxe `[Texto Descritivo](URL){:target="\_blank"}` para que a página abra em outra aba do navegador.
  - Armazene as imagens do post em `assets/images/posts` com um nome descritivo para evitar conflitos. Evite usar imagens muito grandes.
  - Evite usar conteúdo externo que pode ficar fora do ar e comprometer o post.
5. Escolha uma imagem de capa para o post e armazene na pasta `assets/images/covers` com um nome descritivo:
  - Recomendo procurar imagens no [Unspash](https://unsplash.com/). 
  - Edite as imagens para um tamanho adequado. 
  - Não use imagens com copyright!
  - Sempre que usar imagens dê o devido crédito com um link para o material. Siga o padrão de créditos já implementadas em outros artigos, no *front matter*.
6. Classifique seu post em ao menos uma das categorias e preencha todos os dados do *front matter* do arquivo.
7. Faça um *commit* com uma mensagem descritiva em inglês.
8. Abra um *Pull Request* no GitHub e aguarde a aprovação do Editor.

## Ideias de conteúdo

O editor tem uma pauta comum de onde você pode tirar ideias sobre o que escrever.

O blog tem diversas categorias com finalidades distintas que podem ajudar a ter ideias:

1. **docs** - Knowledge Base - Análises de conceitos de gestão e liderança trazidos em livros, artigos, etc.
2. **lib** - Ferramentas e Boas Práticas - Boas práticas de empreendedores e ferramentas que auxiliam na gestão de um negócio.
3. **examples** - Histórias e de empreendedores e gestores - Histórias para inspirar e bons exemplos de o que fazer em situações que todo empreendedor se depara.
4. **faq** - Perguntas - Respondemos perguntas de devs e empreendedores.
5. **dev/null** - Opiniões -  O nome é sugestivo, `dev/null` porque fica a sua escolha concordar ou simplesmente ignorar.
6. **metadata** - Conceitos do biz4devs - Artigos que explicam conceitos essenciais do próprio blog.