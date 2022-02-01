export const en = {
  titles: {
    game: 'Game in the actions',
    playerStat: `Player's statistic`,
    heroVerbs: `Hero's actions`,
    objectVerbs: `Object's actions`
  },
  commonPrompts: {
    prompt1: `Hero can't do this action!`,
    prompt2: 'Stand in front of object!',
    prompt3: 'Go to specify point or object!',
    prompt4: 'Turn to specify point or object!',
    prompt5: 'Sorry, I cannot walk there by myself. Lead me yourself.',
    prompt6: 'Turn to specify point!',
    prompt7: 'You cannot walk there. The way is blocked by'
  },
  buttons: {
    pressStart: 'push start',
    zoomIn: 'zoom in',
    zoomOut: 'zoom out',
    restartTheGame: 'restart the game',
    showHiddenTask: 'show/hidden targets of task',
    showHiddenGif: 'show/hidden gif'
  },
  stages: {
    stage1: {
      message: `
        Hi! This is greeting message, that will be available at every stage. The 
        game provide "actions" two kinds: hero interaction actions and object 
        interaction actions. There is a task's notebook on the table near. Upon 
        completion of the tasks you have to call the elevator and get it in, 
        that go to the next stage.
      `,
      tasks: {
        task1: 'Read the message',
        task2: 'Come to the elevator'
      }
    },
    stage2: {
      message: `
        In this stage train in controlling of the hero. You have to go to the 
        elevator through some doors. There are different objects that you may 
        interact with them. For example: doors, that you may open and close in 
        different directions, also they provide actions: "get in" or "get out".
      `,
      tasks: {
        task1: 'Read the message',
        task2: 'Open outward door',
        task3: 'Open inward door'
      }
    },
    stage3: {
      message: `
        You may git in in the room and get out you want, also you may close the 
        door after. Prompt: you can to see what direction need a door opened, 
        just zoom in on a map.
      `,
      tasks: {
        task1: 'Close the door after yourself.'
      }
    },
    stage4: {
      message: `
        Often hero do actions, that exist in our life. In this time hero is 
        tired and you need walk he to the bed. Often the hero performs actions 
        that exist in our lives. This time the hero is tired and you need get 
        he to the bed. Hint: the hero can take off his or her clothes on his or 
        her own before going to bed. But before taking a shower, you have to 
        undress the hero near the wardrobe.
      `,
      tasks: {
        task1: 'Take an',
        task2: 'Make the bed',
        task3: 'Take a shower',
        task4: 'Turn off a tap after you had a shower',
        task5: 'Brush teeth',
        task6: 'Turn off a water tap',
        task7: 'get dressed',
        task8: 'Close the door after you got out a house'
      }
    },
    stage5: {
      message: ``,
      tasks: {
        task1: '',
        task2: ''
      }
    }
  },
  sprites: {
    armChair: {
      prompts: {
        prompt1: 'Hero is sitting yet!',
        prompt2: 'You have to sit in a chair!'
      }
    },
    bed: {
      prompts: {
        prompt1: 'Hero is sleeping yet!',
        prompt2: 'You can continue to sleep after waking up!',
        prompt3: 'At the beginning get up!',
        prompt4: 'To wake up you need to lie in the bed and sleep!',
        prompt5: 'Before getting up you need wake up!'
      }
    },
    doorInward: {
      prompts: {
        prompt1: 'The door is already open!',
        prompt2: 'Pull the door!',
        prompt3: 'The door is closed, open it first.',
        prompt4: 'Push the door!',
        prompt5: 'The door is closed!'
      }
    },
    doorOutward: {
      prompts: {
        prompt1: 'The door is already open!',
        prompt2: 'Pull the door!',
        prompt3: 'The door is closed, open it first.',
        prompt4: 'Push the door!',
        prompt5: 'The door is closed!'
      }
    },
    elevator: {
      prompts: {
        prompt1: 'Call the elevator first!',
        prompt2: 'You can take the elevator after completing the tasks!',
        prompt3: 'The elevator is open!'
      }
    },
    shower: {
      prompts: {
        prompt1: 'Take off your clothes!',
        prompt2: 'You have already come in the shower!',
        prompt3: 'You are out off the shower!',
        prompt4: 'Come into the shower!',
        prompt5: 'The water is coming out!',
        prompt6: 'The tap is turned off!',
        prompt7: 'Turn on the tap!'
      }
    },
    sink: {
      prompts: {
        prompt1: 'The water is coming out!',
        prompt2: 'The tap is turned off!',
        prompt3: 'Turn on the tap!'
      }
    },
    tableFlower: {
      prompts: {
        prompt1: 'Fill the watering can the water!',
        prompt2: 'The watering can is filled with water!'
      }
    },
    wall: {
      prompts: {
        prompt1: 'Knock knock, is anyone there?',
        prompt2: 'kick, kick!'
      }
    },
    wardrobe: {
      prompts: {
        prompt1: 'The wardrobe is opened!',
        prompt2: 'The wardrobe is closed!',
        prompt3: 'Open the wardrobe first!',
        prompt4: 'The character is dressed!',
        prompt5: 'The character is undressed!'
      }
    }
  }
}
