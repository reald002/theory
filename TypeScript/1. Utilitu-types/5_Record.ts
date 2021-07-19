/** Record (динамически определить поле в объектном типе) */

/**
 * Поле payload определенно как объект
 * с индексной сигнатурой, что позволит
 * динамически записывать в него поля.
 */

interface IConfigurationIndexSignature {
  payload: {
    [key: string]: string;
  };
}

/**
 * Поле payload определенно как
 * Record<string, string> что аналогично
 * предыдущему варианту, но выглядит более
 * декларативно.
 */

interface IConfigurationWithRecord {
  payload: Record<string, string>;
}

let configA: IConfigurationIndexSignature = {
  payload: {
    a: `a`,
    b: `b`,
  },
}; // Ok
let configB: IConfigurationWithRecord = {
  payload: {
    a: `a`,
    b: `b`,
  },
}; // Ok

/**
 * Но в отличии от индексной сигнатуры типа Record<K, T> может ограничить диапазон ключей.
 */

/** Error */
// type WwwConfig = Partial<Record<'port' | 'domain', string>>;
//
// let wwwConfig: WwwConfig = {
//   port: '80',
//   // Ok -> поле domain теперь не обязательное
//   user: 'User',
// };


// я не понял если честно
