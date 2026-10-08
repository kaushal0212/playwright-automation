import { test, expect } from '@playwright/test';

test('Get /user return 200', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
  const expectedStatus = [200,201]
  expect(expectedStatus).toContain(response.status())

  const body = await response.json();
  console.log(body);
  expect (body.id).toBe(1)
});
test('Get /user return 400', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users/190090909');

if (!response.ok()) {
  console.log(`API failed with status: ${response.status()}`);
}

expect(response.status()).toBe(404);
 console.error(`Response: ${await response.text()}`);
});


test('Get /user return 401', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users/1', 
    {headers:{Authorization: ''}});

if (!response.ok()) {
  console.log(`API failed with status: ${response.status()}`);
}

expect(response.status()).toBe(200);
 console.error(`Response: ${await response.text()}`);
});

test('Inspect BBC API requests', async ({ page }) => {

  page.on('request', request => {
    console.log('REQUEST:', request.method(), request.url());
  });

  await page.goto('https://www.bbc.com/');

});

test.skip('rate limit triggers 429', async ({ request }) => {
const LIMIT = 101;
let lastRes;
for (let i = 0; i < LIMIT; i++) {
lastRes = await request.get('/search?q=test');
}
expect(lastRes!.status()).toBe(429);
expect(lastRes!.headers()['retry-after']).toBeDefined();
});