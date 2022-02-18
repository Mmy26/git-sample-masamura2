export class Car {
  constructor(private _name: string, private _color: number) {}

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get color(): number {
    return this._color;
  }

  public set color(color: number) {
    this._color = color;
  }
}
