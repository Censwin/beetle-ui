/*
 * @Author: Censwin
 * @Date: 2021-10-24 23:19:43
 * @LastEditTime: 2021-10-26 00:22:38
 * @Description: 
 * @FilePath: /whale-design/src/welcome.stories.tsx
 */
import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf("welcome", module).add('welcome', () => {
    return (
        <>
        <h1>Welcome</h1>
        <h4>使用</h4>
        <code>npm i beetle-ui</code>
        </>
    )
}, {info: {disable: true}})
