import { makeAutoObservable } from 'mobx'

import { storeHero as hero, storeHero } from './Hero.store'

import { listStages } from '@stages'
import { ISprite, IStage } from '@types'

interface IPrompt {
  prompt?: string
  error?: string
  doneAction?: string
}

class Game {
  isStart: boolean
  settings: {
    stepChangeSizeCell: number
    sizeCell: number
    minSizeCell: number
    maxSizeCell: number
    isPlayGif: boolean
    timePlayGif: number
  }
  languages: any
  curStage: number
  displayLevelSelection: boolean
  isLoading: boolean
  isPlay: boolean
  promptModal: {
    // для уведомлений(модальных окон)
    prompt: string
    message: string
    doneAction: string
  }
  activeGif: string
  stages: Array<IStage>
  curMap: ISprite[][]
  coordsActiveSprite: { y: number; x: number } | null // координаты активного спрайта(на который кликнули), чтобы отобразить список доступных глаголов и запустить выбранный(если выбрали).
  listTasks: {
    task: string
    action: string
    x: number
    y: number
    isDone: boolean
  }[]
  displayTasksList: boolean // показать модальное окно
  lightTaskTarget: boolean // подсветить целевые задачи на карте
  message: string // сообщение к текущей карте(передаётся с объектом текущего уровня)
  listUsedVerbsByPlayer: Array<{ name: string; amount: number }>

  constructor() {
    this.isStart = false
    this.settings = {
      stepChangeSizeCell: 10,
      sizeCell: 40,
      minSizeCell: 40,
      maxSizeCell: 220,
      isPlayGif: true,
      timePlayGif: 5000
    }
    this.curStage = 0
    this.displayLevelSelection = false
    this.isPlay = false
    this.promptModal = {
      prompt: '',
      message: '',
      doneAction: ''
    }
    this.activeGif = ''
    this.isLoading = false
    this.stages = listStages
    this.curMap = Array(15).fill(Array(15))
    this.coordsActiveSprite = null
    this.listTasks = []
    this.displayTasksList = false
    this.lightTaskTarget = true
    this.message = ''
    this.listUsedVerbsByPlayer = []

    makeAutoObservable(this)
  }

  temp(...data: any) {}

  pushStart() {
    this.stages = listStages
    this.isStart = true
    this.isLoading = true
    this.loadStage()
    this.isLoading = false
  }

  restartGame() {
    this.isPlay = false
    this.isStart = false
    this.isLoading = false
    this.curMap = Array(15).fill(Array(15))
    this.curStage = 0
    this.coordsActiveSprite = null
    this.listTasks = []
    this.lightTaskTarget = true
    this.message = ''
  }

  endStage() {
    this.isPlay = false
    this.displayLevelSelection = true
  }

  getStage() {
    const stage = this.stages[this.curStage]
    const map = new Array().concat(
      stage.map.map((arr) => arr.map((item) => ({ ...item })))
    )
    const tasks = stage.getTasks()
    const message = stage.getMessage()
    const startPositionHero = { ...stage.startPositionHero }
    return { map, tasks, message, startPositionHero }
  }

  loadStage() {
    this.displayLevelSelection = false
    const { map, tasks, message, startPositionHero } = this.getStage()
    this.curMap = map
    this.listTasks = tasks
    this.message = message

    storeHero.resetHeroProps()
    storeHero.setCoords(startPositionHero.y, startPositionHero.x)
    storeHero.setRotation(startPositionHero.rotation)
    this.isPlay = true
  }

  restartStage() {
    this.isLoading = true
    this.loadStage()
    this.isLoading = false
  }

  chooseStage(bool: boolean) {
    if (bool) {
      const num =
        this.stages.length < this.curStage + 2
          ? this.curStage
          : this.curStage + 1
      this.curStage = num
    } else {
      this.curStage = this.curStage - 1 < 0 ? 0 : this.curStage - 1
    }
  }

  nextStage() {
    if (this.stages.length < this.curStage + 2) {
      this.isStart = false
      this.isPlay = false
      this.displayLevelSelection = false
      return
    }
    this.curStage++
    this.isLoading = true
    this.loadStage()
    this.isLoading = false
  }

  setIsLoading(bool: boolean) {
    this.isLoading = bool
  }

  setGif(url: string) {
    this.activeGif = url
  }

  zoomIn() {
    this.settings.sizeCell =
      this.settings.sizeCell >= this.settings.maxSizeCell
        ? this.settings.maxSizeCell
        : this.settings.sizeCell + this.settings.stepChangeSizeCell
  }

  zoomOut() {
    this.settings.sizeCell =
      this.settings.sizeCell <= this.settings.minSizeCell
        ? this.settings.minSizeCell
        : this.settings.sizeCell - this.settings.stepChangeSizeCell
  }

  addVerbToListStatistics(verb: string) {
    const idx = this.listUsedVerbsByPlayer.findIndex(
      (item) => item.name === verb
    )
    if (-1 === idx) {
      return this.listUsedVerbsByPlayer.push({ name: verb, amount: 1 })
    }

    this.listUsedVerbsByPlayer[idx].amount++
    this.listUsedVerbsByPlayer[idx] = { ...this.listUsedVerbsByPlayer[idx] }
  }

  setPromptModal(obj: IPrompt) {
    if (
      this.promptModal.prompt ||
      this.promptModal.message ||
      this.promptModal.doneAction
    ) {
      return
    }

    this.promptModal = { ...this.promptModal, ...obj }
  }

  clearPromptModal() {
    this.promptModal = { prompt: '', message: '', doneAction: '' }
  }

  displayTasks() {
    this.displayTasksList = !this.displayTasksList
  }

  lightTasks() {
    this.lightTaskTarget = !this.lightTaskTarget
  }

  checkCompleteTask({
    y,
    x,
    action
  }: {
    y: number
    x: number
    action: string
  }) {
    this.listTasks = this.listTasks.map((item) => {
      if (item.y === y && item.x === x && item.action === action) {
        item.isDone = true
        return { ...item }
      }
      return item
    })
  }

  displayGif() {
    this.settings.isPlayGif = !this.settings.isPlayGif
  }

  displayMessage() {
    this.promptModal.message = this.message
  }

  setCoordsActiveSprite(coords: { y: number; x: number }) {
    this.coordsActiveSprite = coords
  }

  resetCoordsActiveSprite() {
    this.coordsActiveSprite = null
  }

  updateSprite(y: number, x: number, obj: ISprite) {
    this.curMap[y][x] = obj
  }

  checkIfHeroIsNearby(obj: ISprite) {
    if (
      obj.x + 1 === hero.x ||
      obj.x - 1 === hero.x ||
      obj.y + 1 === hero.y ||
      obj.y - 1 === hero.y
    ) {
      return true
    }
    return false
  }

  checkFaceToFacePosition(obj: ISprite) {
    const heroRotation = hero.getActualRotation()

    if (obj.rotation === 0 && heroRotation === 180) {
      if (obj.x + 1 === hero.x) {
        return true
      }
    } else if (obj.rotation === 180 && heroRotation === 0) {
      if (obj.x - 1 === hero.x) {
        return true
      }
    } else if (obj.rotation === 90 && heroRotation === 270) {
      if (obj.y + 1 === hero.y) {
        return true
      }
    } else if (obj.rotation === 270 && heroRotation === 90) {
      if (obj.y - 1 === hero.y) {
        return true
      }
    }
    return false
  }

  checkBackToFacePosition(obj: ISprite) {
    const heroRotation = hero.getActualRotation()

    if (obj.rotation === 0 && heroRotation === obj.rotation) {
      if (obj.x - 1 === hero.x) {
        return true
      }
    } else if (obj.rotation === 180 && heroRotation === obj.rotation) {
      if (obj.x + 1 === hero.x) {
        return true
      }
    } else if (obj.rotation === 90 && heroRotation === obj.rotation) {
      if (obj.y - 1 === hero.y) {
        return true
      }
    } else if (obj.rotation === 270 && heroRotation === obj.rotation) {
      if (obj.y + 1 === hero.y) {
        return true
      }
    }
    return false
  }
}

export const storeGame = new Game()
