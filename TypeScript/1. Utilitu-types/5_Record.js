/** Record (динамически определить поле в объектном типе) */
var configA = {
    payload: {
        a: "a",
        b: "b"
    }
}; // Ok
var configB = {
    payload: {
        a: "a",
        b: "b"
    }
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
