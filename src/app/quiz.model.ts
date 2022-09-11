export interface Choice {
    value: string,
    isCorrect: boolean
}

export interface Question {
    label: string,
    choices: Choice[]
}

export interface Quiz {
    label: string,
    name: string,
    description: string,
    fileName: string
}

export interface Answers {
    values: Choice[]
}

