import { makeAutoObservable } from 'mobx'
import { storeGame } from '@store/Game.store'
import { storeLanguage } from '@store/Language.store'
import { ISprite } from '@types'

class Hero {
  sprites: Array<string>
  coordsBusyHero: null | { y: number; x: number }
  indexSprite: number
  rotation: number
  x: number
  y: number
  actions: Array<string>
  additionalActions: Array<string>
  displayActions: boolean
  isNaked: boolean

  constructor() {
    this.sprites = ['hero.svg', 'hero-naked.svg']
    this.coordsBusyHero = null
    this.indexSprite = 0
    this.rotation = 180
    this.y = 1
    this.x = 1
    this.actions = [
      'turn left',
      'turn right',
      'turn back',
      'step left',
      'step right',
      'step forward',
      'step back'
    ]
    this.additionalActions = []
    this.displayActions = false
    this.isNaked = false

    makeAutoObservable(this)
  }

  /* ======================= technical methods ========================*/

  temp(...data: any) {}

  getActualRotation() {
    const preHeroRotation = this.rotation % 360
    const res = preHeroRotation < 0 ? -360 - preHeroRotation : preHeroRotation
    return Math.abs(res)
  }

  /* ======================= hero actions ========================*/

  resetHeroProps() {
    this.coordsBusyHero = null
    this.indexSprite = 0
    this.rotation = 180
    this.y = 1
    this.x = 1
    this.additionalActions = []
    this.displayActions = false
    this.isNaked = false
  }

  setCoordsBusyHero(coords: { y: number; x: number }) {
    this.coordsBusyHero = coords
  }

  resetCoordsBusyHero() {
    this.coordsBusyHero = null
  }

  setRotation(rotate: number) {
    this.rotation = rotate
  }

  setCoords(y: number, x: number) {
    this.y = y
    this.x = x
  }

  // одеться
  putOn() {
    this.isNaked = false
    this.indexSprite = 0
  }

  // раздеться
  takeOff() {
    this.isNaked = true
    this.indexSprite = 1
  }

  turnRight() {
    this.rotation = this.rotation + 90
  }

  turnLeft() {
    this.rotation = this.rotation - 90
  }

  turnBack() {
    this.turnLeft()
    this.turnLeft()
  }

  stepLeft() {
    const coords = this.preCheckBeforeStep('left')!
    if (this.checkFloor(coords)) {
      this.setCoords(coords.y, coords.x)
    }
  }

  stepRight() {
    const coords = this.preCheckBeforeStep('right')!
    if (this.checkFloor(coords)) {
      this.setCoords(coords.y, coords.x)
    }
  }

  stepForward() {
    const coords = this.preCheckBeforeStep('forward')!
    if (this.checkFloor(coords)) {
      this.setCoords(coords.y, coords.x)
    }
  }

  stepBack() {
    const coords = this.preCheckBeforeStep('back')!
    if (this.checkFloor(coords)) {
      this.setCoords(coords.y, coords.x)
    }
  }

  goTo(obj: ISprite) {
    if (this.checkFreeRoadByAxis(obj)) {
      this.setCoords(obj.y, obj.x)
      return true
    }
    return false
  }

  /* ======================= others actions ========================*/

  checkFacedToPoint(obj: ISprite) {
    const heroRotation = this.getActualRotation()

    const constantAxis = obj.x === this.x ? 'x' : obj.y === this.y ? 'y' : false
    const isX = constantAxis === 'y' ? true : false
    const isInCrease = this.x < obj.x || this.y < obj.y

    if (heroRotation === 0 && isX && isInCrease) {
      return true
    } else if (heroRotation === 180 && isX && !isInCrease) {
      return true
    } else if (heroRotation === 90 && !isX && isInCrease) {
      return true
    } else if (heroRotation === 270 && !isX && !isInCrease) {
      return true
    }
    return false
  }

  checkFreeRoadByAxis(obj: ISprite) {
    const constantAxis = obj.x === this.x ? 'x' : obj.y === this.y ? 'y' : false
    if (!constantAxis) {
      storeGame.promptModal.prompt =
        storeLanguage.activeLang.commonPrompts.prompt5
      return false
    }

    const moveByAxisX = constantAxis === 'y' ? true : false
    const axis = moveByAxisX ? 'x' : 'y'
    const isInCrease = this.x < obj.x || this.y < obj.y

    if (!this.checkFacedToPoint(obj)) {
      storeGame.promptModal.prompt =
        storeLanguage.activeLang.commonPrompts.prompt6
      return false
    }

    for (
      let i = this[axis];
      isInCrease ? i <= obj[axis] : i >= obj[axis];
      isInCrease ? i++ : i--
    ) {
      const bool = moveByAxisX
        ? this.checkFloor({ y: obj.y, x: i })
        : this.checkFloor({ y: i, x: obj.x })

      if (!bool) return false
    }

    return true
  }

  preCheckBeforeStep(direct: 'left' | 'right' | 'back' | 'forward') {
    const heroRotation = this.getActualRotation()

    if (heroRotation === 0) {
      if (direct === 'left') {
        return { x: this.x, y: this.y - 1 }
      } else if (direct === 'right') {
        return { x: this.x, y: this.y + 1 }
      } else if (direct === 'back') {
        return { x: this.x - 1, y: this.y }
      } else if (direct === 'forward') {
        return { x: this.x + 1, y: this.y }
      }
    } else if (heroRotation === 90) {
      if (direct === 'left') {
        return { x: this.x + 1, y: this.y }
      } else if (direct === 'right') {
        return { x: this.x - 1, y: this.y }
      } else if (direct === 'back') {
        return { x: this.x, y: this.y - 1 }
      } else if (direct === 'forward') {
        return { x: this.x, y: this.y + 1 }
      }
    } else if (heroRotation === 180) {
      if (direct === 'left') {
        return { x: this.x, y: this.y + 1 }
      } else if (direct === 'right') {
        return { x: this.x, y: this.y - 1 }
      } else if (direct === 'back') {
        return { x: this.x + 1, y: this.y }
      } else if (direct === 'forward') {
        return { x: this.x - 1, y: this.y }
      }
    } else if (heroRotation === 270) {
      if (direct === 'left') {
        return { x: this.x - 1, y: this.y }
      } else if (direct === 'right') {
        return { x: this.x + 1, y: this.y }
      } else if (direct === 'back') {
        return { x: this.x, y: this.y + 1 }
      } else if (direct === 'forward') {
        return { x: this.x, y: this.y - 1 }
      }
    }
  }

  moveFromFaceToBackPosition(obj: ISprite) {
    const heroRotation = this.getActualRotation()

    if (obj.rotation === 0 && heroRotation === 180) {
      this.x = obj.x - 1
    } else if (obj.rotation === 180 && heroRotation === 0) {
      this.x = obj.x + 1
    } else if (obj.rotation === 90 && heroRotation === 270) {
      this.y = obj.y - 1
    } else if (obj.rotation === 270 && heroRotation === 90) {
      this.y = obj.y + 1
    }
    return true
  }

  moveFromBackToFacePosition(obj: ISprite) {
    const heroRotation = this.getActualRotation()

    if (obj.rotation === 0 && heroRotation === obj.rotation) {
      this.x = obj.x + 1
    } else if (obj.rotation === 180 && heroRotation === obj.rotation) {
      this.x = obj.x - 1
    } else if (obj.rotation === 90 && heroRotation === obj.rotation) {
      this.y = obj.y + 1
    } else if (obj.rotation === 270 && heroRotation === obj.rotation) {
      this.y = obj.y - 1
    }
    return true
  }

  checkFloor({ y, x }: { y: number; x: number }) {
    if (storeGame.curMap[y][x].name !== 'floor') {
      storeGame.promptModal.prompt = `${storeLanguage.activeLang.commonPrompts.prompt7} ${storeGame.curMap[y][x].name}`
      return false
    }
    return true
  }

  setDisplay() {
    this.displayActions = !this.displayActions
  }
}

export const storeHero = new Hero()
