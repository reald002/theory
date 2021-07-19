/** Required (сделать все необязательные члены обязательными) */

interface IConfig {
  domain: string;
  port: string;
}

const DEFAULT_CONFIG: IConfig = {
  domain: 'www.google.com',
  port: '90'
};

const createConfig = (config: Required<IConfig>): IConfig => {
  return {...DEFAULT_CONFIG, ...config}
};

/** Error */
// createConfig({
//   port: '90'
// });

/** Works */
createConfig({
  domain: 'www.google.com',
  port: '80'
});
