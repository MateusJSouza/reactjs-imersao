/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({ question }) {
  function QuestionWidget() {
    return (
      <Widget>
        <Widget.Header>
          <h1>#MnranhaQuiz</h1>
        </Widget.Header>

        <Widget.Content>
          <form onSubmit={function (infosDoEvento) {
            infosDoEvento.preventDefault();

            router.push(`/quiz?name=${name}`);

            console.log('Fazendo uma submissão por meio do react');
            // Router manda para a próxima página
          }}
          >
            <Input
              name="nomeDoUsuario"
              onChange={(infosDoEvento) => {
                setName(infosDoEvento.target.value);
              }}
              placeholder="Diz aí seu nome"
              value={name}
            />
            <Button type="submit" disabled={name.length === 0}>
              {`Jogar ${name}`}
            </Button>
          </form>
        </Widget.Content>
        <Widget.Header>
          <h1>Quizes da Galera</h1>
        </Widget.Header>

        <Widget.Content>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </Widget.Content>

      </Widget>
    );
  }
}

export default function QuizPage() {
  console.log('Perguntas criadas: ', db.questions);
  const question = db.questions[0];

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />

        <QuestionWidget question={question} />
        <LoadingWidget />
      </QuizContainer>
    </QuizBackground>
  );
}
