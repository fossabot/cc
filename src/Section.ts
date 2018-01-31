/*
 * Copyright (c) 2018.
 *
 * Quick and easy to generate a cli
 *
 * @project: the-bcflow/cc<https://github.com/the-bcflow/cc>
 * @author: blackcater<blackcater2015@gmail.com>
 */
export default abstract class Section {
  protected title: string
  protected header: string
  protected content: string
  protected footer: string

  public abstract print(): string
}
