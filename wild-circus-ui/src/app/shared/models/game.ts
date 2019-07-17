export class Game {
  constructor(
    public game_id: number,
    public console_id: number,
    public name: string,
    public image:string,
    public content: string,
    public rating: number,
  ) {
  }
}
