import {test,expect} from '@playwright/experimental-ct-react';
import React from 'react';
import App from '../App';

test('verify login components', async({mount,page})=>{
const component = await mount(<App/>);
const username = await page.locator("[placeholder='Email or Phone number']");
await username.fill("test");
const password = await page.locator("[placeholder='Password']");
await password.fill("password");
await page.locator("[id='submit']").click();
});