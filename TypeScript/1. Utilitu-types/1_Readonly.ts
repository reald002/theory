/** Readonly (сделать члены объекта только для чтения) */

interface IPerson {
  name: string,
  age: number
}

const person: Readonly<IPerson> = {
  name: 'Andrew',
  age: 21
};

/**
 * --- This is not gonna work ---
 *  person.name = 'John';
 *  person.age = 23;
 */
