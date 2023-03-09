import {test,expect} from '@playwright/experimental-ct-react';
import React from 'react';
import Apps from '..';

test('verify route components', async({mount,page})=>{
    await mount(<Apps/>);
    await page.locator("//a[text()='Blogs']").click();
    expect(page).toHaveURL(/.*blogs/);
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('Blogs is clicked');
        await dialog.accept();
    });
    expect(page.locator("//h1[text()='Blog Articles']")).toHaveText('Blog Articles');

});