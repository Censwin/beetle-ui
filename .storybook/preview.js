/*
 * @Author: Censwin
 * @Date: 2021-10-16 16:58:00
 * @LastEditTime: 2021-10-25 16:23:41
 * @Description:
 * @FilePath: /beetle-design/.storybook/preview.js
 */
import '../src/styles/index.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
export const parameters = {
  controls: { expanded: true },
}
