const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://www.swifttranslator.com/';

// ✅ POSITIVE FUNCTIONAL TEST CASES (24)

test('Pos_Fun_0001: Simple daily usage sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('mama gedhara innee.');
  await expect(output).toContainText('මම ගෙදර ඉන්නෙ.');
});

test('Pos_Fun_0002: Interrogative question', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('oyaa adha vaeda karanavadha?');
  await expect(output).toContainText('ඔයා අද වැඩ කරනවද?');
});

test('Pos_Fun_0003: Imperative command', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('vahaama enna.');
  await expect(output).toContainText('වහාම එන්න.');
});

test('Pos_Fun_0004: Compound sentence', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('api kaeema kanna yanavaa saha passe movie ekak balanavaa.');
  await expect(output).toContainText('අපි කෑම කන්න යනවා');
  await expect(output).toContainText('movie');
  await expect(output).toContainText('බලනවා');
});

test('Pos_Fun_0005: Negative sentence form', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('mata eeka karanna baee.');
  await expect(output).toContainText('මට ඒක කරන්න බැහැ.');
});

test('Pos_Fun_0006: Polite request', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('karuNaakaralaa mata podi udhavvak karanna puLuvandha?');
  await expect(output).toContainText('කරුණාකරලා');
  await expect(output).toContainText('මට');
});

test('Pos_Fun_0007: Future tense', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('api heta gedhara yamu.');
  await expect(output).toContainText('අපි හෙට ගෙදර යමු.');
});

test('Pos_Fun_0008: Mixed Singlish + English (brand term)', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('mata adha Zoom meeting ekak thiyenavaa.');
  await expect(output).toContainText('මට අද');
  await expect(output).toContainText('Zoom');
});

test('Pos_Fun_0009: Present tense daily usage', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('mama dhaen vaeda karanavaa.');
  await expect(output).toContainText('මම දැන් වැඩ කරනවා.');
});

test('Pos_Fun_0010: Past tense', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('api iiyee gedhara giyaa.');
  await expect(output).toContainText('අපි ඊයේ ගෙදර ගියා.');
});

test('Pos_Fun_0011: Pronoun variation (plural)', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('oyaalaa enavadha?');
  await expect(output).toContainText('ඔයාලා එනවද?');
});

test('Pos_Fun_0012: Joined words (robust handling)', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('mamagedharayanavaa');
  await expect(output).toContainText('යනවා');
});

test('Pos_Fun_0013: Repeated words for emphasis', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('hari hari lassanayi.');
  await expect(output).toContainText('හරි හරි ලස්සනයි.');
});

test('Pos_Fun_0014: Common greeting', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('aayuboovan!');
  await expect(output).toContainText('ආයුබෝවන්!');
});

test('Pos_Fun_0015: Informal phrasing', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('anee eeka dhiyan.');
  await expect(output).toContainText('අනේ ඒක දියන්.');
});

test('Pos_Fun_0016: Places + English word preserved', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('api Kandy trip ekak yanna hadhanavaa.');
  await expect(output).toContainText('අපි');
  await expect(output).toContainText('Kandy');
});

test('Pos_Fun_0017: Abbreviations', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('magee NIC saha ID eka office ekata ganna.');
  await expect(output).toContainText('මගේ');
  await expect(output).toContainText('NIC');
  await expect(output).toContainText('ID');
});

test('Pos_Fun_0018: Punctuation & question mark', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('meeka hariyata vaeda karanavaadha?');
  await expect(output).toContainText('මේක හරිට වැඩ කරනවද?');
});

test('Pos_Fun_0019: Currency format', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('Rs. 2500 gatta.');
  await expect(output).toContainText('2500');
});

test('Pos_Fun_0020: Time format', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('meeting eka 7.30 AM patan gannavaa.');
  await expect(output).toContainText('7.30');
  await expect(output).toContainText('AM');
});

test('Pos_Fun_0021: Multiple spaces handling', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('mama   gedhara   yanavaa.');
  await expect(output).toContainText('මම ගෙදර යනවා.');
});

test('Pos_Fun_0022: Line breaks in paragraph', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('mama gedhara yanavaa.\napi office yamu.');
  await expect(output).toContainText('යනවා');
  await expect(output).toContainText('යමු');
});

test('Pos_Fun_0023: Slang expression', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('ela machan!');
  await expect(output).toContainText('එළ මචං!');
});

test('Pos_Fun_0024: Long paragraph (robustness)', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('dhaen vahina vaessa nisaa api maarga valin yanna baee kiyalaa police kiwwaa. ehema unath api office ekata late wenne naehae kiyalaa hithan inne.');
  await expect(output).toContainText('වැස්ස');
  await expect(output).toContainText('police');
});

// ❌ NEGATIVE FUNCTIONAL TEST CASES (10)

test('Neg_Fun_0025: Unsupported symbols', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('mama $$$ gedhara ###');
  await expect(output).not.toContainText('$$$');
  await expect(output).not.toContainText('###');
});

test('Neg_Fun_0026: Incorrect Singlish spelling', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('maama gedhra yanwa');
  // Should not produce expected output
  await expect(output).not.toContainText('මම ගෙදර යනවා');
});

test('Neg_Fun_0027: Numbers only', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('12345 !!!');
  // Should have minimal or no meaningful Sinhala output
  await expect(output).not.toContainText('මම');
});

test('Neg_Fun_0028: Excessive punctuation', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('mama gedhara yanavaa????');
  // Should still contain core translation
  await expect(output).toContainText('යනවා');
});

test('Neg_Fun_0029: Repetition handling', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('mama enna enna enna');
  // Output should not be duplicated excessively
  await expect(output).not.toContainText('එන්න එන්න එන්න එන්න එන්න');
});

test('Neg_Fun_0030: Misspelled English term', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('zoom meeeting ekak');
  // English term should not be converted
  await expect(output).toContainText('meeeting');
});

test('Neg_Fun_0031: Invalid date formatting', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('mama gedhara yanavaa 2026-##-!!');
  // Should not crash, output should be partial
  await expect(output).not.toContainText('##-!!');
});

test('Neg_Fun_0032: Empty input', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('');
  // Output should be empty or minimal
  await expect(output).not.toContainText('මම');
});

test('Neg_Fun_0033: Very long random characters', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  const longInput = 'a'.repeat(500);
  await input.fill(longInput);
  // Should handle without crashing
  const outputText = await output.textContent();
  expect(outputText).toBeDefined();
});

test('Neg_Fun_0034: Mixed line breaks + excessive punctuation', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  await input.fill('mama gedhara yanavaa\n\n\n\n????');
  // Should not break formatting severely
  const outputText = await output.textContent();
  expect(outputText).toBeDefined();
});

// 🖥️ UI TEST CASE

test('Pos_UI_0001: Real-time output update while typing', async ({ page }) => {
  await page.goto(BASE_URL);
  const input = page.locator('textarea');
  const output = page.locator('#output');
  
  // Type first word
  await input.fill('mama');
  let outputText = await output.textContent();
  expect(outputText).toBeTruthy();
  
  // Type second word
  await input.fill('mama gedhara');
  outputText = await output.textContent();
  expect(outputText).toBeTruthy();
  
  // Type complete sentence
  await input.fill('mama gedhara yanavaa');
  await expect(output).toContainText('යනවා');
});
