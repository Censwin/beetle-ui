/*
 * @Author: Censwin
 * @Date: 2021-10-24 23:19:43
 * @LastEditTime: 2021-10-26 10:45:15
 * @Description: 
 * @FilePath: /whale-design/src/welcome.stories.tsx
 */
import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf("welcome", module).add('welcome', () => {
    return (
        <>
        <h1 align="center">Welcome 👋</h1>
        <hr />
        <h4>Install</h4>
        <code>npm i beetle-ui</code>
        <hr />
        <h4>Quick Start</h4>
        <div>
        <p><code>index.tsx</code> </p>
        <img width="600px" src="https://user-images.githubusercontent.com/49546849/138799929-746b1859-9051-4780-92cc-07daa964a869.png" alt="" />
        </div>
        <div>
            <p><code>App.tsx or other component</code></p>
        <img width="600px" src="https://user-images.githubusercontent.com/49546849/138800059-7d87e553-5b8a-406f-b80e-7b07cc96f4c9.png" alt="" />
        </div>
        
        </>
    )
}, {info: {disable: true}})
