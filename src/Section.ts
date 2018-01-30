/*
 * Copyright (c) 2018.
 *
 * Quick and easy to generate a cli
 *
 * @project: the-bcflow/cc<https://github.com/the-bcflow/cc>
 * @author: blackcater<blackcater2015@gmail.com>
 */
import ISection from './ISection'

export default class Section implements ISection {
  private title: string
  private header: string
  private footer: string

  constructor(title: string) {
    this.title = title
  }

  public print(): string {
    return ''
  }
}
