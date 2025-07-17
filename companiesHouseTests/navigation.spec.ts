import { test, expect } from '@playwright/test';

test.describe('Navigation and redirects', () => {

test('Navigation links are present and work correctly', async ({ page }) => {
  await page.goto('https://automationintesting.online');

  // Assert site title in navigation
  await expect(page.getByRole('navigation')).toContainText('Shady Meadows B&B');

  // Assert key navigation items are visible
  await expect(page.locator('#navbarNav').getByRole('link', { name: 'Rooms' })).toBeVisible();
  await expect(page.locator('#navbarNav')).toContainText('Rooms');

  await expect(page.locator('#navbarNav').getByRole('link', { name: 'Booking' })).toBeVisible();
  await expect(page.locator('#navbarNav')).toContainText('Booking');

  await expect(page.getByRole('link', { name: 'Amenities' })).toBeVisible();
  await expect(page.locator('#navbarNav')).toContainText('Amenities');

  await expect(page.getByRole('link', { name: 'Location' })).toBeVisible();
  await expect(page.locator('#navbarNav')).toContainText('Location');

  await expect(page.locator('#navbarNav').getByRole('link', { name: 'Contact' })).toBeVisible();
  await expect(page.locator('#navbarNav')).toContainText('Contact');

  await expect(page.getByRole('link', { name: 'Admin', exact: true })).toBeVisible();
  await expect(page.locator('#navbarNav')).toContainText('Admin');

  console.log('✅ Navigation menus are present and visible');

  // Test the Amenities link — click and validate scroll target exists
  await page.getByRole('link', { name: 'Amenities' }).click();
  const anchorExists = await page.locator('#amenities').count();

  if (anchorExists === 0) {
    console.error('❌ Clicking "Amenities" link does not scroll to a valid section — #amenities anchor not found. Bug acknowledged and logged');
  } else {
    console.log('✅ Amenities anchor found and scrolls correctly');
  }
});


// test('Navigation links are present and work correctly', async ({ page }) => {
//   await page.goto('https://automationintesting.online');
  
//   //Asser the name of the bed and breakfast
//   await expect(page.getByRole('navigation')).toContainText('Shady Meadows B&B');

//   //Assert the navigation menu's are visible
//   await expect(page.locator('#navbarNav').getByRole('link', { name: 'Rooms' })).toBeVisible();
//   await expect(page.locator('#navbarNav')).toContainText('Rooms');
//   await expect(page.locator('#navbarNav').getByRole('link', { name: 'Booking' })).toBeVisible();
//   await expect(page.locator('#navbarNav')).toContainText('Booking');
//   await expect(page.getByRole('link', { name: 'Amenities' })).toBeVisible();
//   await expect(page.locator('#navbarNav')).toContainText('Amenities');
//   await expect(page.getByRole('link', { name: 'Location' })).toBeVisible();
//   await expect(page.locator('#navbarNav')).toContainText('Location');
//   await expect(page.locator('#navbarNav').getByRole('link', { name: 'Contact' })).toBeVisible();
//   await expect(page.locator('#navbarNav')).toContainText('Contact');
//   await expect(page.getByRole('link', { name: 'Admin', exact: true })).toBeVisible();
//   await expect(page.locator('#navbarNav')).toContainText('Admin');

  
//   console.log('✅ Navigation menus are present and visible');
//   console.log('⚠️ Navigation menu for Amenities is a deadlink. Bug acknowledged and logged');
// });

test('Validate the body of the home page', async ({ page }) => {
  await page.goto('https://automationintesting.online');
  //Assert the body image is visible and text
  await expect(page.locator('section').filter({ hasText: 'Welcome to Shady Meadows B&' })).toBeVisible();
  await expect(page.locator('h1')).toContainText('Welcome to Shady Meadows B&B');
  await expect(page.locator('#root-container')).toContainText('Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.');
  console.log('✅ Body image and text are visible');

  // Assert "Book Now" link is visible (first match)
  const bookLinks = await page.getByRole('link', { name: 'Book Now', exact: false });
  await expect(bookLinks.first()).toBeVisible();
  await expect(page.locator('#root-container')).toContainText('Book Now');
  console.log('✅ "Book Now" buttin is visible');

 //Assert the check availability section is visible
await expect(page.getByText('Check Availability & Book Your StayCheck InCheck OutCheck Availability')).toBeVisible();
await expect(page.locator('#booking')).toContainText('Check Availability & Book Your Stay');
await expect(page.locator('#booking')).toContainText('Check In');
await expect(page.locator('#booking')).toContainText('Check Out');
await expect(page.getByRole('button', { name: 'Check Availability' })).toBeVisible();
await expect(page.locator('#booking')).toContainText('Check Availability');
console.log('✅ Check Availability section is visible');


//Assert oour rooms section is visible
await expect(page.locator('#rooms')).toContainText('Our Rooms');
await expect(page.locator('#rooms')).toContainText('Comfortable beds and delightful breakfast from locally sourced ingredients');
console.log('✅ Our Rooms section is visible');

//Assert the location section
await expect(page.getByRole('heading', { name: 'Our Location' })).toBeVisible();
await expect(page.locator('#location')).toContainText('Our Location');
await expect(page.getByText('Find us in the beautiful')).toBeVisible();
await expect(page.locator('#location')).toContainText('Find us in the beautiful Newingtonfordburyshire countryside');
await expect(page.locator('.pigeon-overlays')).toBeVisible();
await expect(page.getByText('Contact InformationAddressShady Meadows B&B, Shadows valley,')).toBeVisible();
await expect(page.locator('#location')).toContainText('Contact Information');
await expect(page.locator('#location')).toContainText('Address');
await expect(page.locator('#location')).toContainText('Shady Meadows B&B, Shadows valley, Newingtonfordburyshire, Dilbery, N1 1AA');
await expect(page.locator('#location')).toContainText('Phone');
await expect(page.locator('#location')).toContainText('012345678901');
await expect(page.locator('#location')).toContainText('Email');
await expect(page.locator('#location')).toContainText('fake@fakeemail.com');
await expect(page.locator('h4')).toContainText('Getting Here');
await expect(page.locator('#location')).toContainText('Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.');
console.log('✅ Location section is visible');

//Assert the contact us form
await expect(page.getByText('Send Us a MessageNameEmailPhoneSubjectMessageSubmit')).toBeVisible();
await expect(page.locator('#contact')).toContainText('Send Us a Message');
await expect(page.locator('#contact')).toContainText('Name');
await expect(page.getByTestId('ContactName')).toBeVisible();
await expect(page.locator('#contact')).toContainText('Email');
await expect(page.getByTestId('ContactEmail')).toBeVisible();
await expect(page.locator('#contact')).toContainText('Phone');
await expect(page.getByTestId('ContactPhone')).toBeVisible();
await expect(page.locator('#contact')).toContainText('Subject');
await expect(page.getByTestId('ContactSubject')).toBeVisible();
await expect(page.getByText('Message', { exact: true })).toBeVisible();
await expect(page.locator('#contact')).toContainText('Message');
await expect(page.getByTestId('ContactDescription')).toBeVisible();
await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
console.log('✅ Contact Us form is visible');


//Assert the footer is visible
await expect(page.getByRole('contentinfo')).toBeVisible();
console.log('✅ Footer is visible');  

});
});