import { readFile, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const tokensPath = join(__dirname, '/src/cobalt/tokens/output/tokens.css'); // Update with the correct path to tokens.css

const modifyTokens = async () => {
  try {
    let data = await readFile(tokensPath, 'utf8');
    // console.log('Original tokens.css content:\n', data);

    // Ensure only the :root selector is replaced with @theme
    const modifiedData = data.replace(/^:root\s*{/m, '@theme {');
    // console.log('Modified tokens.css content:\n', modifiedData);

    await writeFile(tokensPath, modifiedData, 'utf8');
    console.log('Successfully modified tokens.css');
  } catch (error) {
    console.error('Error modifying tokens.css:', error);
  }
};

modifyTokens();
