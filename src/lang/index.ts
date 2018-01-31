/*
 * Copyright (c) 2018.
 *
 * Quick and easy to generate a cli
 *
 * @project: the-bcflow/cc<https://github.com/the-bcflow/cc>
 * @author: blackcater<blackcater2015@gmail.com>
 */
import * as path from 'path'

type LANG = 'en-US' | 'zh-CN' | 'zh-TW'

export default (lang: LANG) => require(path.resolve(lang))
export { LANG }
