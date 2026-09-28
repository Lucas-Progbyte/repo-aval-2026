import assert from 'node:assert/strict';
import { describe, test } from 'node:test';
import { calcularMedia, obterSituacao } from '../src/media.js';

describe('calcularMedia', () => {
  test('retorna a própria nota quando há apenas uma', () => {
    assert.equal(calcularMedia([8]), 8);
  });

  test('calcula a média de várias notas', () => {
    assert.equal(calcularMedia([6, 8, 10]), 8);
  });

  test('aceita notas decimais', () => {
    assert.equal(calcularMedia([7.5, 8.5]), 8);
  });

  test('lança erro quando nenhuma nota é informada', () => {
    assert.throws(() => calcularMedia([]), /Informe ao menos uma nota/);
  });

  test('lança erro para nota negativa', () => {
    assert.throws(() => calcularMedia([-1]), /Nota inválida/);
  });

  test('lança erro para nota maior que 10', () => {
    assert.throws(() => calcularMedia([11]), /Nota inválida/);
  });

  test('lança erro para valor que não é número', () => {
    assert.throws(() => calcularMedia([NaN]), /Nota inválida/);
  });

  test('aceita nota mínima igual a 0', () => {
    assert.doesNotThrow(() => calcularMedia([0]));
  });

  test('aceita nota máxima igual a 10', () => {
    assert.doesNotThrow(() => calcularMedia([10]));
  });
});

describe('obterSituacao', () => {
  test('retorna "Aprovado" para média acima da média de aprovação', () => {
    assert.equal(obterSituacao(8.5), 'Aprovado');
  });

  test('retorna "Aprovado" para média igual a 7', () => {
    assert.equal(obterSituacao(7), 'Aprovado');
  });

  test('retorna "Recuperação" para média entre 5 e 7', () => {
    assert.equal(obterSituacao(6), 'Recuperação');
  });

  test('retorna "Recuperação" para média igual a 5', () => {
    assert.equal(obterSituacao(5), 'Recuperação');
  });

  test('retorna "Reprovado" para média abaixo de 5', () => {
    assert.equal(obterSituacao(4.9), 'Reprovado');
  });
});