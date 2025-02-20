import {test, expect} from "@playwright/test";

test('API test - Get Request', async({request}) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.id).toBe(1);

})


test('API test - Post Request', async({request})=> {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts/', {
        data : {
            title: "My playwright test",
            body : "this is a test post",
            userId : 1
        }
    });
    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    expect(responseBody.title).toBe('My playwright test');
    expect(responseBody.body).toBe('this is a test post');
})