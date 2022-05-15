type cocoa = {
  <T>(a: T[]): void;
};

const test: cocoa = (a) => {
  console.log(a[0]);
};

test([1, '1']);

abstract class Class {
  constructor(
    private id: number,
    private count: number,
    public name: string,
    protected nickname: string
  ) {}
  getClassName() {
    return this.name;
  }
  getClassCount() {
    return this.count;
  }
  abstract getCount(id: number): number;
}

class FirstClass extends Class {
  getCount(id: number): number {
    console.log(this.nickname);
    return this.getClassCount();
  }
}

const firstclass = new FirstClass(1, 22, '1반', '게임개발과');

console.log(firstclass.getClassName());
console.log(firstclass.getCount(1));
console.log(firstclass.name);

type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word): void {
    if (this.words[word.term] == undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string): string {
    return this.words[term];
  }
  update(term: string, def: string): boolean {
    if (this.words[term] !== undefined) {
      this.words[term] = def;
      return true;
    }
    return false;
  }
  remove(term: string): boolean {
    if (this.words[term] !== undefined) {
      delete this.words[term];
      return true;
    }
    return false;
  }
}

class Word {
  constructor(public readonly term: string, public readonly def: string) {}
}

const kimchi = new Word('kimchi', '한국의 음식');

const dict = new Dict();

dict.add(kimchi);

console.log(dict.def('kimchi'));

type Job = 'IOT' | '인공지능' | '게임개발';

interface User {
  name: string;
  job: Job;
  nickname: string;
  fullName(): string;
}

interface Human {
  health: number;
}

class Player implements User, Human {
  constructor(
    public name: string,
    public nickname: string,
    public job: Job,
    public health: number
  ) {}
  fullName(): string {
    return `name: ${this.name}, nickname: ${this.nickname}`;
  }
}

interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  get(key: string): T {
    return this.storage[key];
  }
  remove(key: string) {
    delete this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}
