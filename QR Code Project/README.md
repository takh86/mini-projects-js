# QR Code CLI — Generate a QR Code from a URL

## 📌 Features

A small Node.js CLI tool that:

- Prompts the user for a URL.
- Creates a PNG QR code file named `URL.png`.
- Saves the same URL into a plain text file `message.txt`.

## 🛠 Built With

- [**inquirer**](https://www.npmjs.com/package/inquirer) — interactive command-line prompts.
- [**qr-image**](https://www.npmjs.com/package/qr-image) — generate QR codes as streams.
- Node.js core **fs** module for writing files.

> ℹ️ **Note:** Your `package.json` lists `fs` as a dependency. Since `fs` is built into Node.js, you don’t need to install it separately. You can remove it from `dependencies` if you wish.

---

## 📂 Project Structure

```
QR Code Project/
├─ index.js # CLI script
├─ package.json # dependencies & scripts
└─ package-lock.json
```

---

### Requirements

- Node.js 18+ (recommended)
- npm (comes with Node.js)

---

### Installation and Running

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd qr-code-project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the CLI:

   ```bash
   node index.js
   ```

4. You will be prompted for a URL. After you enter it, the app will output:

   URL.png — the QR code for your URL

   message.txt — the same URL saved as plain text

---

### Example

    ? Please enter your URL: https://example.com
    ✔ Created URL.png
    ✔ Saved message.txt
