import { getApiData } from "api.js";

//esto es un mock. Jest coge el fetch de aquí, en vez de el real, para poder realizar el test
global.fetch = jest.fn(()=>
    Promise.resolve({
        json:()=>Promise.resolve('soy un texto'),
    }));

test('getApiData should return a text', async ()=>{
    const text = await getApiData();
    expect(text).toBe('soy un texto');
})