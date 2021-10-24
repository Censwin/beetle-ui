/*
 * @Author: Censwin
 * @Date: 2021-10-24 23:19:43
 * @LastEditTime: 2021-10-24 23:23:03
 * @Description: 
 * @FilePath: /whale-design/src/welcome.stories.tsx
 */
import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf("welcome page", module).add('welcome', () => {
    return (
        <>
        <h1>Welcome</h1>
        <h4>使用</h4>
        <code>npm i beetle-ui</code>
        </>
    )
}, {info: {disable: true}})
