import * as fs from 'fs';

function generateTupleOverloads(count: number) {
  const lines: string[] = [];

  let genericParameters: string[] = [];
  let parameters: string[] = [];
  let returnType: string[] = [];

  for (let overloadIndex = 1; overloadIndex <= count; overloadIndex++) {
    genericParameters.push(`P${ overloadIndex } extends BaseValueType`);
    parameters.push(`p${ overloadIndex }: P${ overloadIndex }`);
    returnType.push(`P${ overloadIndex }`);

    const line = `function tuple<${ genericParameters.join(', ') }>(${ parameters.join(', ') }): [${ returnType.join(', ') }]`;

    lines.unshift(line);
  }

  return lines.join('\n');
}

function run() {
  const template = fs.readFileSync('./template.ts', { encoding: 'utf8' });

  const MAX_PARAMETER_COUNT = 26;

  const overloads = generateTupleOverloads(MAX_PARAMETER_COUNT);

  const output = template.replace('// <overloads />', overloads);

  fs.writeFileSync('./index.ts', output, { encoding: 'utf8' });
}

run();
