---
layout: post
title: O processador da empresa é feito de pessoas
date: 2020-06-13 11:24:00 -0300
author: prim
categories: metadata
permalink: desenvolvendo-apps-vs-desenvolvendo-empresas
featured: true
hidden: false
comments: true
description: Desenvolver apps e empresas tem muito em comum. Vamos explorar as diferenças essenciais que nascem do fato de não termos um processador, mas pessoas.
---

O dev que quer virar empreendedor ou gestor sofre. Para alguém acostumado a ler em linguagem formal (programação), o mundo da gestão traz todo um novo sentido para o que é um  mal definido. A energia desperdiçada é surreal se comparada  com qualquer documentação de software, por mais vagabunda que seja. Sempre que termino um livro de gestão com 400 páginas, tenho certeza de que poderia ter lido só 5 sem deixar nada a dever. Isso porque a linguagem humana é muito pior que a formal pra explicar qualquer coisa: no mundo de dev, `1 + 1 = 2` (na pior hipótese 10, para os escovadores de bits), no mundo de gestor, `1 + 1 = maionese` pode fazer sentido dependendo do contexto.

Se para ser um excelente dev você precisou estudar, entender e praticar, pode se preparar para ter a mesma disciplina se quiser ser um bom gestor.

> Um dev em apuros tem sempre uma saída: StackOverflow, Cmd+C, Cmd+V e bam! Profit.
>
> Já um gestor em apuros:
> 1. Não tem StackOverflow
> 2. Cmd+C, Cmd+V dão um baita trabalho
> 3. O conceito é não determinístico: o que roda bem na Empresa A pode nem rodar na Empresa B. É tipo precisar da `Win32API` no Linux

E aí, tem salvação? Acho que tem. Não tem como escapar das leituras arrastadas mas, se tudo der certo, as lições  aprendidas podem ser adaptadas para uma abstração mais simples, que ajude sem ser _verbosa_. Vamos em busca de uma jangada para navegar num pântano de _nonsense_.

## O dev e o gestor

Da mesma forma que você desenvolve um software para resolver um problema, uma empresa também resolve um problema. Só que no lugar das bem documentadas instruções x86, você vai ter que se virar com o bom e velho ABC. É essa diferença que torna o todo poderoso senhor das máquinas em reles mortal.

No lugar de processadores, pessoas. No lugar de dispositivos e processos, outras pessoas e ferramentas. No lugar de TCP/IP, na melhor das hipóteses, UDP mal documentado: Tem perda de pacote, não tem garantia de entrega e, para piorar, a interpretação do código não é determinística.

> Comunicação não determinística em seres humanos
> -------
> Se você escrever em uma linguagem com uma implementação matemática decente (não você, JavaScript), dando a instrução `2 + 40`, o resultado, independente da plataforma, do processador e da década em que você está, será `42`. Na pior das hipóteses, uma tela azul vai avisar que algo não ocorreu como o esperado.
> Se você falar a uma pessoa que `nosso objetivo é satisfazer o cliente`, o resultado do processamento dessa frase é totalmente diferente dependendo da pessoa, da hora do dia, do alinhamento de Vênus e Júpiter, e por aí vai. E não vai ter tela azul para te dizer que algo deu errado.
>
> Importante dizer que além de não determinística, o armazenamento de informações do cérebro humano não é _ACID-compliant_.
> Entre os motivos, a _durability_ e a _consistency_ costumam ser problemas: o que você falou para 10 pessoas pode gerar 10 versões diferentes armazenadas para o mesmo evento (lá se vai a _consistency_).
> Um mês depois eu aposto que, se você não repetiu, só 30% das pessoas vão lembrar o que você disse (_durability_ danada). Ao menos 5% vão ter corrompido os dados em outra instrução que, por azar do destino, ainda faz sentido quando interpretada.

Você como dev tem desafios comuns com os de um gestor, só que os _building blocks_ que você usa para programar tem características bem diferentes do que os que você vai usar como gestor. Assim como você tem que conhecer as características da linguagem e do sistema sobre os quais você vai construir seu software, você precisa conhecer as características e linguagens humanas que você vai usar para  construir o seu time.

Para ser um bom gestor, você vai ter que conhecer de pessoas e comunicação. Essas são as suas novas ferramentas. É esse domínio que 99% dos livros de gestão tentam ensinar e, em 99% dos casos, fracassam.

## Pessoas como parte de um time

Pessoas podem assumir diferentes papéis: clientes, funcionários, fornecedores, parceiros, concorrentes, etc. Um bom negócio consegue estabelecer canais de comunicação eficientes com todos esses diferentes papéis. Costumo dividir esses papéis entre externos (clientes, fornecedores, etc) e internos (funcionários e sócios). Vamos falar dos internos.

Para começar, pessoas conseguem fazer coisas fantásticas e inimagináveis. Elas são forças criativas poderosas e, se tiverem permissão, se sentirem a vontade e forem devidamente capacitadas, trazem melhorias constantes que você jamais poderia conceber. Cada uma é única e, por isso, consegue contribuir na construção de um time coerente e plural. Tirando o _Deep Thought_,  nunca conheci nenhum software assim.

O seu software precisa só de coisas básicas como energia elétrica, um bom link de rede, refrigeração adequada e a rotineira manutenção. Já as pessoas são muito, muito, muito  mais complexas.

Para ter o melhor das pessoas do seu time, é preciso cuidar de dois aspectos que parecem simples mas são só os primeiros nós de um grafo multidimensional: Motivação e Competência.

### Motivação

Motivação é o _internal state_ das pessoas. Sem ela, nada vai acontecer. Só que você não consegue motivar alguém diretamente, só criar as condições para que a pessoa possa estar motivada. É como se `motivar()` fosse um método privado de um objeto, e a única maneira de fazer o sistema chegar nesse método é através de uma interface única e mal documentada para cada instância.

Para nossa sorte, nós - seres humanos - somos motivados por elementos comuns. Em 1954 um cara chamado Abraham Maslow publicou uma abstração poderosa, que define a hierarquia de necessidades que levam a motivação humana, a famosa “Pirâmide de Maslow”. É um pacote de abstrações que serve como guia na arquitetura motivacional do seu time.

O pré-requisito para a performance do seu time é ter pessoas motivadas.

### Competência

Existe um acrônimo em Gestão de Pessoas chamado “CHA”, _conhecimentos, habilidades e atitudes_. O mundo da gestão é cheio desses acrônimos CHAtos pra caramba. Nesse caso, o conceito é excelente.

#### Habilidades

> A diferença entre conhecimento e habilidade
> ---------
> Eu conheço os conceitos de funcionamento de uma B-Tree num banco de dados. Eu nunca implementei uma B-Tree num banco de dados. Essa é a diferença entre ter conhecimento e habilidade.

Existem pelo menos dois tipos de habilidade que uma pessoa precisa ter para conseguir cumprir seu papel em um time: as pessoais e as funcionais.

Exemplos de habilidades pessoais são:
* Saber se organizar
* Cuidar da sua saúde
* Conseguir se comunicar efetivamente
* Saber trabalhar em equipe
* E por aí vai...

As habilidades pessoais influenciam diretamente nas funcionais. Arrisco dizer que algumas delas são pré-requisito para as funcionais, que são algo como:

* Consegue programar em Java
* Sabe levantar um banco na RDS
* Consegue fazer um _deploy_ com kubernetes

#### Conhecimento

O conhecimento alavanca as habilidades. Conhecer bem o seu banco de dados e suas capacidades melhora sua habilidade de fazer o _design_ da sua aplicação. O conhecimento vira habilidade com a prática.

Existe um modelo de aprendizagem chamado 70-20-10, que diz que 10% do aprendizado vem de cursos, livros, etc, 20% vem de aprendizado com outras pessoas e 70% através das experiências próprias. Na minha opinião, isso é só outra forma de dizer que o conhecimento vira habilidade com a prática.

#### Atitudes e Comportamento

Para falar de atitudes e comportamento, nada como falar do idiota.

Isso porque todo mundo já trabalhou com um idiota. O idiota é aquele que pode estar no topo da sua motivação, ter conhecimento e habilidades impecáveis e ainda assim ser um câncer para o time.

Ele pode ser auto-destrutivo, com atitudes e comportamento que vão prejudicar a ele e as pessoas que o amam, como também pode ser destrutivo para o time, praticando assédio, _bullying_, tendo atitudes beligerantes, mentindo, fazendo pirraça, etc.

Os dois casos de idiota são terríveis para a formação de um  time: o primeiro é alguém com quem não se pode contar, o segundo é alguém que destrói a capacidade do time de entregar.
Não importa se você tem um gênio virtuoso no seu time. Se ele não sabe trabalhar em equipe o resultado do trabalho do time vai ser pior com ele do que sem ele.

## Desenvolvendo software vs desenvolvendo uma empresa

É possível usar algumas noções de dev como gestor, só que no  lugar do processador, temos pessoas.

Pessoas possuem ao menos duas dimensões para pensarmos enquanto gestores: motivação e competências. Um modelo bacana para pensar em motivação é a Pirâmide de Maslow. Já as competências vão depender do “CHA”, conhecimentos, habilidades e atitudes da pessoa.

Se você é um dev e quer se tornar um gestor, vai ter que dominar esses _building blocks_ da mesma forma que domina a sua linguagem de programação.
