import playwright from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function captureScreenshots() {
  const browser = await playwright.chromium.launch({
    headless: true
  });
  
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  
  const page = await context.newPage();
  
  const outputDir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  try {
    console.log('1. Navigating to home page...');
    await page.goto('http://localhost:5173/verb-daily/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ 
      path: path.join(outputDir, '01-home-page.png'),
      fullPage: true 
    });
    console.log('   ✓ Screenshot saved: 01-home-page.png');
    
    // Get page content for analysis
    const homeContent = await page.content();
    
    console.log('\n2. Looking for clickable words...');
    // Try to find and click on a word
    const wordElements = await page.locator('.word-item, .verb-card, [role="button"], a[href*="word"], a[href*="verb"]').all();
    console.log(`   Found ${wordElements.length} potential word elements`);
    
    if (wordElements.length > 0) {
      await wordElements[0].click();
      await page.waitForTimeout(2000);
      await page.screenshot({ 
        path: path.join(outputDir, '02-word-detail.png'),
        fullPage: true 
      });
      console.log('   ✓ Screenshot saved: 02-word-detail.png');
      
      // Go back to try finding specific words
      await page.goto('http://localhost:5173/verb-daily/', { waitUntil: 'networkidle' });
      await page.waitForTimeout(1000);
    }
    
    console.log('\n3. Trying to navigate to "epitomize"...');
    // Try searching or navigating to epitomize
    const searchInput = await page.locator('input[type="search"], input[placeholder*="search"], input[placeholder*="Search"]').first();
    if (await searchInput.count() > 0) {
      await searchInput.fill('epitomize');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Enter');
      await page.waitForTimeout(2000);
    } else {
      // Try direct URL navigation
      await page.goto('http://localhost:5173/verb-daily/word/epitomize', { waitUntil: 'networkidle' });
      await page.waitForTimeout(2000);
    }
    await page.screenshot({ 
      path: path.join(outputDir, '03-epitomize-detail.png'),
      fullPage: true 
    });
    console.log('   ✓ Screenshot saved: 03-epitomize-detail.png');
    
    console.log('\n4. Trying to navigate to "decree"...');
    // Try navigating to decree
    await page.goto('http://localhost:5173/verb-daily/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    
    const searchInput2 = await page.locator('input[type="search"], input[placeholder*="search"], input[placeholder*="Search"]').first();
    if (await searchInput2.count() > 0) {
      await searchInput2.fill('decree');
      await page.waitForTimeout(1000);
      await page.keyboard.press('Enter');
      await page.waitForTimeout(2000);
    } else {
      await page.goto('http://localhost:5173/verb-daily/word/decree', { waitUntil: 'networkidle' });
      await page.waitForTimeout(2000);
    }
    await page.screenshot({ 
      path: path.join(outputDir, '04-decree-detail.png'),
      fullPage: true 
    });
    console.log('   ✓ Screenshot saved: 04-decree-detail.png');
    
    console.log('\n5. Checking for navigation/settings pages...');
    // Go back to home
    await page.goto('http://localhost:5173/verb-daily/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    
    // Look for navigation links
    const navLinks = await page.locator('nav a, .nav-link, [role="navigation"] a').all();
    console.log(`   Found ${navLinks.length} navigation links`);
    
    if (navLinks.length > 1) {
      // Click on second nav link if exists
      await navLinks[1].click();
      await page.waitForTimeout(2000);
      await page.screenshot({ 
        path: path.join(outputDir, '05-navigation-page.png'),
        fullPage: true 
      });
      console.log('   ✓ Screenshot saved: 05-navigation-page.png');
    } else {
      // Try settings or about page
      const settingsBtn = await page.locator('button:has-text("Settings"), a:has-text("Settings"), button:has-text("About"), a:has-text("About")').first();
      if (await settingsBtn.count() > 0) {
        await settingsBtn.click();
        await page.waitForTimeout(2000);
        await page.screenshot({ 
          path: path.join(outputDir, '05-settings-page.png'),
          fullPage: true 
        });
        console.log('   ✓ Screenshot saved: 05-settings-page.png');
      } else {
        await page.screenshot({ 
          path: path.join(outputDir, '05-no-additional-pages.png'),
          fullPage: true 
        });
        console.log('   ✓ Screenshot saved: 05-no-additional-pages.png (no additional pages found)');
      }
    }
    
    console.log('\n✅ All screenshots captured successfully!');
    console.log(`📁 Screenshots saved to: ${outputDir}`);
    
  } catch (error) {
    console.error('Error capturing screenshots:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

captureScreenshots().catch(console.error);
