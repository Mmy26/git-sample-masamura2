export class Car {
  constructor(private _name: string, private _size: number) {}

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get size(): number {
    return this._size;
  }

  public set size(size: number) {
    this._size = size;
  }
}
