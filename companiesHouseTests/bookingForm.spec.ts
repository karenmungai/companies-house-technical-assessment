import { test, expect } from '@playwright/test';

test.describe('Room Booking Form', () => {

test('Validate Booking menu redirects to booking section with scroll -  bug logged', async ({ page }) => {
  await page.goto('https://automationintesting.online');
  await page.locator('#navbarNav').getByRole('link', { name: 'Booking' }).click();

  // Load booking section and confirm primary elements are visible
  await expect(page.getByRole('button', { name: 'Check Availability' })).toBeVisible();
  await expect(page.locator('#booking')).toContainText('Check Availability');
  await expect(page.getByRole('heading', { name: 'Check Availability & Book Your Stay' })).toBeVisible();

  // Check if Rooms section is also visible, which is unintended
  const roomsSection = page.locator('#rooms');
  const isRoomsVisible = await roomsSection.isVisible();
  const roomsText = await roomsSection.innerText();

  if (isRoomsVisible && roomsText.includes('Our Rooms')) {
    console.error(
      '❌ Test Failed: Booking menu scrolls to booking section but also reveals "Our Rooms". This is a known issue and has been logged as a bug.'
    );
    expect(isRoomsVisible, 'Rooms section should not be visible when Booking is selected').toBeFalsy();
  } else {
    console.log('✅ Booking section scrolls correctly and rooms section is hidden.');
  }
});




test('Check Availability', async ({ page }) => {
await page.goto('https://automationintesting.online');
await page.locator('#navbarNav').getByRole('link', { name: 'Booking' }).click();
await expect(page.getByText('Check Availability & Book Your StayCheck InCheck OutCheck Availability')).toBeVisible();
await expect(page.getByRole('heading', { name: 'Check Availability & Book' })).toBeVisible();
await expect(page.locator('#booking')).toContainText('Check Availability & Book Your Stay');
await expect(page.getByText('Check In')).toBeVisible();
await page.getByText('Check In').click();
await expect(page.getByText('Check Out')).toBeVisible();
await page.getByText('Check Out').click();
await expect(page.locator('div').filter({ hasText: /^Check In$/ }).getByRole('textbox')).toBeVisible();
await expect(page.locator('div').filter({ hasText: /^Check Out$/ }).getByRole('textbox')).toBeVisible();
await expect(page.getByRole('button', { name: 'Check Availability' })).toBeVisible();
await page.locator('div').filter({ hasText: /^Check In$/ }).getByRole('textbox').click();
await expect(page.getByLabel('Choose Date').locator('div').filter({ hasText: 'July' }).first()).toBeVisible();
await page.getByRole('button', { name: 'Next Month' }).click();
await page.getByRole('option', { name: 'Choose Monday, 4 August' }).click();
await page.locator('div').filter({ hasText: /^Check Out$/ }).getByRole('textbox').click();
await expect(page.getByLabel('Choose Date').locator('div').filter({ hasText: 'July' }).first()).toBeVisible();
await page.getByRole('button', { name: 'Next Month' }).click();
await page.getByRole('option', { name: 'Choose Saturday, 9 August' }).click();
await page.getByRole('button', { name: 'Check Availability' }).click();

//Assert the rooms section is visible
await expect(page.locator('div').filter({ hasText: 'Our RoomsComfortable beds and' }).nth(3)).toBeVisible();
await expect(page.getByRole('heading', { name: 'Our Rooms' })).toBeVisible();
await page.getByRole('heading', { name: 'Our Rooms' }).click();

//assert the single room section is visible
await expect(page.getByRole('img', { name: 'Single Room' }).first()).toBeVisible();
await expect(page.getByRole('heading', { name: 'Single' })).toBeVisible();
await expect(page.locator('#rooms')).toContainText('Single');
await expect(page.getByText('Aenean porttitor mauris sit')).toBeVisible();
await expect(page.locator('#rooms')).toContainText('Aenean porttitor mauris sit amet lacinia molestie. In posuere accumsan aliquet. Maecenas sit amet nisl massa. Interdum et malesuada fames ac ante.');
await expect(page.getByText('TV').first()).toBeVisible();
await expect(page.getByText('WiFi').first()).toBeVisible();
await expect(page.getByText('Safe').first()).toBeVisible();
await expect(page.getByText('£100 per nightBook now')).toBeVisible();
await expect(page.locator('#rooms')).toContainText('£100 per night');
await expect(page.locator('div').filter({ hasText: /^£100 per nightBook now$/ }).getByRole('link')).toBeVisible();
await expect(page.locator('#rooms')).toContainText('Book now');
console.log('✅ Single room is visible.');

//Assert the double room section is visible
await expect(page.getByRole('img', { name: 'Single Room' }).nth(1)).toBeVisible();
await expect(page.getByRole('heading', { name: 'Double' })).toBeVisible();
await expect(page.locator('#rooms')).toContainText('Double');
await expect(page.locator('#rooms')).toContainText('Vestibulum sollicitudin, lectus ac mollis consequat, lorem orci ultrices tellus, eleifend euismod tortor dui egestas erat. Phasellus et ipsum nisl.');
await expect(page.locator('#rooms')).toContainText('TV');
await expect(page.locator('#rooms')).toContainText('Radio');
await expect(page.locator('#rooms')).toContainText('Safe');
await expect(page.getByText('£150 per nightBook now')).toBeVisible();
await expect(page.locator('#rooms')).toContainText('£150 per nightBook now');
await expect(page.locator('div').filter({ hasText: /^£150 per nightBook now$/ }).getByRole('link')).toBeVisible();
await expect(page.locator('#rooms')).toContainText('Book now');
console.log('✅ Double room is visible.');

//Assert the suite room section is visible

await expect(page.locator('#rooms div').filter({ hasText: 'SuiteEtiam metus metus,' }).nth(2)).toBeVisible();
await expect(page.getByRole('img', { name: 'Single Room' }).nth(2)).toBeVisible();
await expect(page.getByRole('heading', { name: 'Suite' })).toBeVisible();
await expect(page.locator('#rooms')).toContainText('Suite');
await expect(page.getByText('Etiam metus metus, fringilla')).toBeVisible();
await expect(page.locator('#rooms')).toContainText('Etiam metus metus, fringilla ac sagittis id, consequat vel neque. Nunc commodo quis nisl nec posuere. Etiam at accumsan ex.');
await expect(page.locator('div:nth-child(3) > .card > .card-body > div > .d-flex > span > .bi').first()).toBeVisible();
await expect(page.locator('#rooms')).toContainText('Radio');
await expect(page.locator('div:nth-child(3) > .card > .card-body > div > .d-flex > span:nth-child(2) > .bi')).toBeVisible();
await expect(page.locator('#rooms')).toContainText('WiFi');
await expect(page.locator('div:nth-child(3) > .card > .card-body > div > .d-flex > span:nth-child(3) > .bi')).toBeVisible();
await expect(page.locator('#rooms')).toContainText('Safe');
await expect(page.getByText('£225 per nightBook now')).toBeVisible();
await expect(page.locator('#rooms')).toContainText('£225 per night');
await expect(page.locator('div').filter({ hasText: /^£225 per nightBook now$/ }).getByRole('link')).toBeVisible();
await expect(page.locator('#rooms')).toContainText('Book now');
console.log('✅ Suite room is visible.');

});


test('Book single Room', async ({ page }) => {

  await page.goto('https://automationintesting.online');
  await page.locator('#navbarNav').getByRole('link', { name: 'Booking' }).click();
  await page.locator('div').filter({ hasText: /^£100 per nightBook now$/ }).getByRole('link').click();
  await expect(page.getByRole('heading', { name: 'Single Room' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Book This Room' })).toBeVisible();
  await expect(page.locator('h1')).toContainText('Single Room');
  await expect(page.locator('#root-container')).toContainText('Book This Room');
  await expect(page.getByRole('img', { name: 'Room Image' })).toBeVisible();
  await expect(page.locator('#root-container')).toContainText('£100');
  await expect(page.getByText('Book This Room£100per')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Reserve Now' })).toBeVisible();
  await page.getByRole('button', { name: 'Reserve Now' }).click();

  // Assert booking confirmation
  await expect(page.getByText('Book This Room£100per')).toBeVisible();
  await expect(page.locator('.fa').first()).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Firstname' })).toBeVisible();
  await expect(page.locator('div:nth-child(2) > #basic-addon1 > .fa')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Lastname' })).toBeVisible();
  await expect(page.locator('.fa.fa-envelope')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Email' })).toBeVisible();
  await expect(page.locator('#basic-addon1').nth(3)).toBeVisible();
  await expect(page.getByText('Price Summary£100 x 1 nights£')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Price Summary' })).toBeVisible();
  await expect(page.getByText('£100 x 1 nights')).toBeVisible();
  await expect(page.locator('form')).toContainText('£100');
  await expect(page.getByText('Cleaning fee')).toBeVisible();
  await expect(page.locator('form')).toContainText('Cleaning fee');
  await expect(page.getByText('£25')).toBeVisible();
  await expect(page.locator('form')).toContainText('£25');
  await expect(page.getByText('Service fee')).toBeVisible();
  await expect(page.locator('form')).toContainText('£15');
  await expect(page.getByText('Total')).toBeVisible();
  await expect(page.locator('form')).toContainText('Total');
  await expect(page.getByText('£140')).toBeVisible();
  await expect(page.locator('form')).toContainText('£140');

  await page.getByRole('textbox', { name: 'Firstname' }).fill('cherry');
  await page.getByRole('textbox', { name: 'Lastname' }).fill('Blossom');
  await page.getByRole('textbox', { name: 'Email' }).fill('evemoe2007@gmail.com');
  await page.getByRole('textbox', { name: 'Phone' }).fill('07449121212121');
  await page.getByRole('button', { name: 'Reserve Now' }).click();

  // Small buffer for page transition as the booking confirmation page has a crash which is intermittent
  await page.waitForTimeout(1000);

  const hasClientCrash = await page
    .getByRole('heading', { name: 'Application error: a client-' })
    .isVisible();

  if (hasClientCrash) {
    console.error('❌ Booking submission caused a client-side crash. This is a known issue.');
    expect(hasClientCrash).toBeFalsy();
  } else {
    try {
      await page.waitForSelector('text=Booking ConfirmedYour booking', { timeout: 5000 });
      console.log('✅ Booking confirmation appeared.');
    } catch {
      console.error('❌ Booking confirmation did not load — possibly due to partial crash.');
      expect(false).toBeTruthy();
    }

    await expect(page.locator('#root-container')).toContainText('Booking Confirmed');
    await expect(page.getByText('Your booking has been')).toBeVisible();
    await expect(
      page.locator('#root-container')
    ).toContainText('Your booking has been confirmed for the following dates:');

    // Assert return to home page
    await expect(page.getByRole('link', { name: 'Return home' })).toBeVisible();
    await expect(page.locator('#root-container')).toContainText('Return home');
    await page.getByRole('link', { name: 'Return home' }).click();
    await expect(
      page.locator('section').filter({ hasText: 'Welcome to Shady Meadows B&' })
    ).toBeVisible();
  }
});







  test('Submit Empty form', async ({ page }) => {
await page.goto('https://automationintesting.online');
    await page.locator('#navbarNav').getByRole('link', { name: 'Booking' }).click();
    await page.locator('div').filter({ hasText: /^£100 per nightBook now$/ }).getByRole('link').click();

    // Assert the booking form is visible
    await expect(page.getByRole('heading', { name: 'Single Room' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Single Room' })).toBeVisible();
    await expect(page.locator('h1')).toContainText('Single Room');
    await expect(page.getByRole('heading', { name: 'Book This Room' })).toBeVisible();
    await expect(page.locator('#root-container')).toContainText('Book This Room');
    await expect(page.getByRole('img', { name: 'Room Image' })).toBeVisible();
    await expect(page.locator('#root-container')).toContainText('£100');
    await expect(page.getByText('Book This Room£100per')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Reserve Now' })).toBeVisible();

    //Reserve the room
    await page.getByRole('button', { name: 'Reserve Now' }).click();
    await expect(page.getByText('Book This Room£100per')).toBeVisible();
    await expect(page.locator('.fa').first()).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Firstname' })).toBeVisible();
    await expect(page.locator('div:nth-child(2) > #basic-addon1 > .fa')).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Lastname' })).toBeVisible();
    await expect(page.locator('.fa.fa-envelope')).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Email' })).toBeVisible();
    await expect(page.locator('#basic-addon1').nth(3)).toBeVisible();
    await expect(page.getByText('Price Summary£100 x 1 nights£100Cleaning fee£25Service fee£15Total£140Reserve')).toBeVisible();
    await page.getByRole('textbox', { name: 'Phone' }).click();
    await expect(page.getByText('Price Summary£100 x 1 nights£')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Price Summary' })).toBeVisible();
    await expect(page.getByText('£100 x 1 nights')).toBeVisible();
    await expect(page.locator('form')).toContainText('£100');
    await expect(page.getByText('Cleaning fee')).toBeVisible();
    await expect(page.locator('form')).toContainText('Cleaning fee');
    await expect(page.getByText('£25')).toBeVisible();
    await expect(page.locator('form')).toContainText('£25');
    await expect(page.getByText('Service fee')).toBeVisible();
    await expect(page.locator('form')).toContainText('£15');
    await expect(page.getByText('Total')).toBeVisible();
    await expect(page.locator('form')).toContainText('Total');
    await expect(page.getByText('£140')).toBeVisible();
    await expect(page.locator('form')).toContainText('£140');



    // Submit the form without filling any fields
    await page.getByRole('button', { name: 'Reserve Now' }).click();

    // Specific, expected messages
  await expect(page.locator('form')).toContainText('Lastname should not be blank');
  await expect(page.locator('form')).toContainText('Firstname should not be blank');

  // Assert repeated/vague messages are not shown (or de-emphasized)
  await expect(page.getByText('must not be empty').first()).not.toBeVisible();
  await expect(page.getByText('size must be between 11 and')).not.toBeVisible();
  await expect(page.getByText('must not be empty').nth(1)).not.toBeVisible();
  await expect(page.getByText('size must be between 3 and 30')).not.toBeVisible();
  await expect(page.getByText('size must be between 3 and 18')).not.toBeVisible();

  console.log('❌ Validation errors are not displayed as expected.');
  
  });

});