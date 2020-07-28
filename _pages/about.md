---
layout: page
title: Sobre o Biz4Devs
permalink: sobre
comments: false
---

Olá, meu nome é Lucas Prim e sou o editor do Biz4Devs. Passei boa parte da minha vida sendo programador e mais de uma década sendo empreendedor.
Encontrei dificuldades das mais variadas tentando navegar pelo mar de *bullshit* que é o mundo dos negócios. Tive que aprender a lidar com conceitos abstratos, difíceis de entender, ambíguos e muitas vezes simplesmente inúteis. É isso que eu quero fazer diferente por aqui.

Aqui no B4D os artigos são escritos por desenvolvedores ou experts em tecnologia que tem experiência comprovada em gestão e empreendedorismo. O blog tem [Principios Editoriais](/principios) que buscam deixar a experiência do leitor - também desenvolvedor - mais fluida e familiar.

Estou em busca dos melhores autores para trazer conteúdo que ajude a comunidade de devs a entender o mundo dos negócios e a formar novos empreendedores e gestores excelentes.

Se você é um dev que tem experiência (T >= 3 anos) com gestão ou empreendedorismo e quiser ajudar, mande um e-mail para biz4devs no Gmail.

### Autores

<ul>
  {% for author in site.authors %}
    <li>
      <a href="{{ author.url }}">
        {{ author.name }}
      </a>
      <span>
        -
        <strong>{{ author.position}}</strong>
      </span>
      <span> - {{ author.short_description | strip_newlines }}</span>
    </li>
  {% endfor %}
</ul>

### Categorias

1. **docs** - Knowledge Base - Análises de conceitos de gestão e liderança trazidos em livros, artigos, etc.
2. **lib** - Ferramentas e Boas Práticas - Boas práticas de empreendedores e ferramentas que auxiliam na gestão de um
negócio.
3. **examples** - Histórias e de empreendedores e gestores - Histórias para inspirar e bons exemplos de o que fazer em
situações que todo empreendedor se depara.
4. **faq** - Perguntas - Aqui eu respondo perguntas que recebo de devs e empreendedores.
5. **dev/null** - Opiniões - Não sou isento de opiniões, pelo contrário, então nesse espaço eu vou dar as minhas. O nome
é sugestivo, `dev/null` porque fica a sua escolha concordar ou simplesmente ignorar.
6. **metadata** - Conceitos do biz4devs - Artigos que explicam conceitos essenciais do próprio blog.