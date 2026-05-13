export class CreateAthleteDto {
  constructor(
    public name: string,
    public age: number,
    public weight: number,
    public category: string,
  ) {}
}
