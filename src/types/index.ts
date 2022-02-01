export interface ISprite {
  name: string
  title: string
  mapSprites: Map<string, string>
  curSprite: string // list imageURL current sprites
  display: string
  checkDirection: boolean // нужно быть направленным на объект, к которому применяешь действие
  isCloseAction: boolean // нужно стоять в упор к объекту, к которому применяешь действие
  checkInFrontOf: boolean // проверить стоит ли герой перед объектом
  rotation: 0 | 90 | 180 | 270 // by default, the left side faces north
  x: number
  y: number // нужно определить индекс по двум осям во время формирования карты
  [key: string]: any
}

export interface IPayload {
  targetAction: 'storeHero' | 'storeGame'
  args: Array<any>
  nameMethod: 'temp'
}

type IGetTasks = () => Array<{
  task: string
  action: string
  x: number
  y: number
  isDone: boolean
}>

type IGetMessage = () => string

export interface IStage {
  map: ISprite[][]
  getTasks: IGetTasks
  getMessage: IGetMessage
  startPositionHero: { y: number; x: number; rotation: number }
}

declare global {
  interface Array<T> {
    resetStageByIndex(o: number): void
  }
}
