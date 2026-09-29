import { MEDIA_APROVACAO, MEDIA_DISTINCAO, MEDIA_RECUPERACAO, NOTA_MAXIMA, NOTA_MINIMA } from './config.js';


export function ehNotaValida(nota) {
  return typeof nota === 'number' && nota >= NOTA_MINIMA && nota <= NOTA_MAXIMA;
}

export function calcularMedia(notas) {
  if (!Array.isArray(notas) || notas.length === 0) {
    throw new Error('Informe ao menos uma nota.');
  }

  const soma = notas.reduce((acc, nota) => {
    if (!ehNotaValida(nota)) {
      throw new Error(`Nota inválida: ${nota}. Use valores entre ${NOTA_MINIMA} e ${NOTA_MAXIMA}.`);
    }
    return acc + nota;
  }, 0);

  return soma / notas.length;
}

export function obterSituacao(media) {
  if (media >= MEDIA_DISTINCAO) {
    return 'Aprovado com distinção';
  }

  if (media >= MEDIA_APROVACAO) {
    return 'Aprovado';
  }

  if (media >= MEDIA_RECUPERACAO) {
    return 'Recuperação';
  }

  return 'Reprovado';
}
