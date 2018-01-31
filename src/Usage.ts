/*
 * Copyright (c) 2018.
 *
 * Quick and easy to generate a cli
 *
 * @project: the-bcflow/cc<https://github.com/the-bcflow/cc>
 * @author: blackcater<blackcater2015@gmail.com>
 */
import Section from './Section'

type UsageExample = string | { cmd: string; desc: string }
type UsageExamples = UsageExample[]

export default class Usage extends Section {
  private examples: UsageExamples = []

  constructor(examples: UsageExamples) {
    super()

    this.title = 'Usage'
  }

  public print(): string {
    return ''
  }
}

export { UsageExample, UsageExamples }
