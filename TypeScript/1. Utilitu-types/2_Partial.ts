/** Partial (сделать все члены объекта необязательными) */

interface IConfig {
  domain: string;
  port: string;
}

const DEFAULT_CONFIG: IConfig = {
  domain: 'www.google.com',
  port: '80',
};

const createConfig = (config: Partial<IConfig>): IConfig => {
  return {...DEFAULT_CONFIG, ...config};
};

/**
 *    Мы можем использовать не все ключи интерфейса, а лишь некоторые:
 *    - Без Partial: { domain: '...', port: '...' }
 *    - С   Partial: { port: '...' } или { domain: '...' } или еще как-то
 */
const config: IConfig = createConfig({
  port: '180',
});
